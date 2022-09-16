const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
   let theaterIXX = await promiseTheaterIXX()
   let theaterVGC = await promiseTheaterVGC()

   return new Promise ((resolve, reject) => {
      if (theaterIXX && theaterVGC) {
         let countEmotions = 0

         for (films of theaterIXX) {
            if (films.hasil === emosi) {
               countEmotions += 1
            }
         }
         for (films of theaterVGC) {
            if (films.hasil === emosi) {
               countEmotions += 1
            }
         }

         resolve(countEmotions)
      } else {
         reject("Data kosong atau terjadi error")
      }
   })
};

module.exports = {
  promiseOutput,
};
