const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
   let theaterIXX = await promiseTheaterIXX()
   let theaterVGC = await promiseTheaterVGC()
   let dataFilms = [...theaterIXX, ...theaterVGC]

   return new Promise ((resolve, reject) => {
      if (dataFilms.length) {
         let countEmotions = 0

         for (films of dataFilms) {
            if (films.hasil === emosi) {
               countEmotions += 1
            }
         }

         resolve(countEmotions)
      } else {
         reject("Data kosong")
      }
   })
};

module.exports = {
  promiseOutput,
};
