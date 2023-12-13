class Movies {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    // ตรวจสอบว่ามีรายละเอียดที่จำเป็นหายไปหรือไม่
    if (!title || !director || !year || !genre) {
      return undefined;
    }

    // ตรวจสอบว่ามีหนังที่ซ้ำกัน (case-insensitive) หรือไม่ ตรงตามเงื่อนไขตัวแรก
    const duplicateMovie = this.movies.find(
      (movie) =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
    );

    if (duplicateMovie) {
      return undefined; // พบหนังที่ซ้ำกัน
    }

    // สร้างอ็อบเจ็กต์หนังใหม่และเพิ่มลงในอาร์เรย์
    const newMovie = {
      title,
      director,
      year,
      genre,
    };

    this.movies.push(newMovie);
    return newMovie;
  }

  updateMovie(title, updatedDetails) {
    // ค้นหาดัชนีของหนังที่มีชื่อที่กำหนด (ตัวพิมพ์เล็กหรือใหญ่ก็ได้) คืนค่าเป็นความยาว
    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    // ถ้าหากหนังไม่พบ จะคืนค่า undefined
    if (movieIndex === -1) {
      return undefined;
    }

    // ทำการอัพเดตรายละเอียดของหนังด้วย updatedDetails ที่กำหนด
    this.movies[movieIndex] = {
      ...this.movies[movieIndex], // คงค่ารายละเอียดที่มีอยู่ คัดลอกค่าทั้งหมดของ this.movies[movieIndex] ทั้งหมด เป็นการสร้างอ็อบเจ็กต์ใหม่ที่มีค่าเหมือนกับ this.movies[movieIndex]
      ...updatedDetails, // อัพเดตด้วยรายละเอียดใหม่ คัดลอกค่าทั้งหมดของ updatedDetails ทั้งหมด เป็นการสร้างอ็อบเจ็กต์ใหม่ที่มีค่าเหมือนกับ updatedDetails
    };

    // คืนค่ารายละเอียดของหนังหลังจากทำการอัพเดต
    return this.movies[movieIndex];
  }
  deleteMovieByTitle(title) {
    // ค้นหาดัชนีของหนังที่มีชื่อที่กำหนด (ตัวพิมพ์เล็กหรือใหญ่ก็ได้) คืนค่าเป็นความยาว
    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    // ถ้าหากหนังไม่พบ จะคืนค่า undefined
    if (movieIndex === -1) {
      return undefined;
    }

    // ทำการลบหนังจากอาร์เรย์
    const deletedMovie = this.movies.splice(movieIndex, 1)[0];

    // คืนค่ารายละเอียดของหนังที่ถูกลบ
    return deletedMovie;
  }
}




module.exports = Movies































// //your student id, firstname, and lastname here
// //65130500104 Natthanan Jirajaruwat
// class Movies {
  
//   constructor(){
//     this.movies = []
//   }
//   getAllMovies(){
//     return this.movies
//   }
  
  // addMovie(title, director, year, genre){
  //   if (title === null || title === undefined || director === null || director === undefined || year === null || year === undefined || genre === null || genre === undefined) {
  //     return undefined
  //   }
    
  //   this.movies.push({"title": title,"director": director,
  //                     "year": year, "genre": genre})
  //   return this.movies
  // }

//   updateMovie(title, updatedDetails){
//     if (this.movies.title !== title) {
//       return undefined
//     }
//     const indexup = this.movies.indexOf(title);
//     this.movies.filter((movietitle) => movietitle.title.toLowerCase() === title.toLowerCase())
    
//   }
  
//   deleteMovieByTitle(title){
//     const index = this.movies.indexOf(title);
//     if (title.toLowerCase() === this.movies.title.toLowerCase()) {
//       return this.bookMarks.splice(index, 1)
//     }
    
    
//   }
// }

// module.exports = Movies
