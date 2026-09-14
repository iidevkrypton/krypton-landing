/* Copistería — soporte de TIFF.
   Ningún navegador salvo Safari sabe pintar un .tif, así que un <img> con uno
   dentro sale roto y sin decir por qué. Aquí se descodifica con UTIF y se pasa
   a PNG, que sí entiende todo el mundo: sirve para el visor y para imprimir.

   Los escáneres de copistería sacan TIFF multipágina a menudo (un lote entero
   en un solo archivo), y descodificarlo todo de golpe bloqueaba el hilo
   principal decenas de segundos: el navegador ni llegaba a pintar el visor y
   parecía que la aplicación se había colgado. Ahora se abre el archivo —leer
   los IFD es barato, solo da el número de páginas— y cada página se
   descodifica cuando de verdad se va a mirar.

   UTIF cubre sin comprimir, G3, G4, LZW, JPEG y PackBits; Deflate lo resuelve
   pako, que va cargado antes en el HTML porque UTIF lo captura al iniciarse. */
(function () {

  /* El tipo MIME no es de fiar: Windows manda .tif como image/tiff, como
     application/octet-stream o vacío según de dónde salga el archivo. */
  function esTiff(tipo, nombre) {
    if (/^image\/tiff?$/i.test(tipo || '')) return true;
    return /\.tiff?$/i.test(nombre || '');
  }

  function disponible() {
    return typeof window.UTIF !== 'undefined' && typeof window.UTIF.decode === 'function';
  }

  /* Deja respirar al navegador. Descodificar es síncrono y largo; sin ceder el
     hilo antes, el estado de «descodificando…» nunca se llega a pintar. */
  function respira() {
    return new Promise((listo) => {
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => setTimeout(listo, 0));
      else setTimeout(listo, 0);
    });
  }

  function aBlob(lienzo) {
    return new Promise((listo, falla) => {
      /* toBlob en vez de toDataURL: una página A4 a 300 ppp en base64 son
         decenas de MB de cadena que hay que construir y retener entera. */
      lienzo.toBlob((b) => (b ? listo(b) : falla(new Error('el navegador no pudo convertir la página'))), 'image/png');
    });
  }

  window.CopiTiff = {
    esTiff,
    disponible,

    /* Abre el archivo y devuelve un lector con el número de páginas y un
       método pagina(n) que descodifica solo la que se pida. Las ya
       descodificadas se guardan; libera() suelta las URL al cerrar el visor. */
    async abrir(blob) {
      if (!disponible()) throw new Error('el descodificador de TIFF no se ha cargado');
      const buffer = await blob.arrayBuffer();
      let ifds;
      try {
        ifds = window.UTIF.decode(buffer);
      } catch (e) {
        throw new Error('el archivo no parece un TIFF válido');
      }
      if (!ifds || !ifds.length) throw new Error('el TIFF no tiene ninguna página');

      const hechas = new Map();

      return {
        total: ifds.length,

        async pagina(n) {
          if (hechas.has(n)) return hechas.get(n);
          if (n < 0 || n >= ifds.length) throw new Error('esa página no existe');

          await respira();
          const ifd = ifds[n];
          window.UTIF.decodeImage(buffer, ifd);
          const rgba = window.UTIF.toRGBA8(ifd);
          if (!ifd.width || !ifd.height) throw new Error('la página no declara tamaño');

          const lienzo = document.createElement('canvas');
          lienzo.width = ifd.width;
          lienzo.height = ifd.height;
          const ctx = lienzo.getContext('2d');
          const img = ctx.createImageData(ifd.width, ifd.height);
          img.data.set(rgba);
          ctx.putImageData(img, 0, 0);

          const png = await aBlob(lienzo);
          // El canvas ya no hace falta: a 300 ppp son ~35 MB por página.
          lienzo.width = lienzo.height = 0;

          const res = { url: URL.createObjectURL(png), blob: png, ancho: ifd.width, alto: ifd.height };
          hechas.set(n, res);
          return res;
        },

        libera() {
          hechas.forEach((p) => URL.revokeObjectURL(p.url));
          hechas.clear();
        },
      };
    },
  };
})();
