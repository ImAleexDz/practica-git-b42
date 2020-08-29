"use strict";

var request = require('request');

var _require = require('./Banda'),
    Banda = _require.Banda;

var obtenBanda = function obtenBanda(banda) {
  var URL = "https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(banda);
  request(URL, function (error, response, body) {
    if (error) {
      console.log('Ocurrió un error');
    } else {
      console.log('No hay error');
      console.log(response.statusCode); //Parse JSON

      var res = JSON.parse(body);

      if (res.artists !== null) {
        // console.log(res.artists[0].strArtist);
        // console.log(res.artists[0].strWebsite);
        // console.log(res.artists[0].strBiographyES);
        //Destructurar el objeto
        var _res$artists$ = res.artists[0],
            strArtist = _res$artists$.strArtist,
            strWebsite = _res$artists$.strWebsite,
            intFormedYear = _res$artists$.intFormedYear,
            strGenre = _res$artists$.strGenre;
        var nuevaBanda = new Banda(strArtist, strWebsite, intFormedYear, strGenre); //Con lo anterior nos ahorramos el siguiente código
        //const nuevaBanda = new Banda(res.artists[0].strArtist, res.artists[0].strWebsite, res.artists[0].intFormedYear, res.artists[0].strGenre);

        console.log(nuevaBanda);
      } else {
        console.log("No se encontr\xF3 ".concat(banda, " o est\xE1 mal escrito"));
      }
    }
  });
};

obtenBanda('Metallica');
obtenBanda('Luis Miguel');
obtenBanda('Red');
obtenBanda('Linkin Park');