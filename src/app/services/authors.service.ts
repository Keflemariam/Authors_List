import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors(){
    return ["Author1", "Author2","Author3"];
  }
  getAuthor(){
    return {
      name: "Anderson Cooper",
      rating: 4.9753,
      Reveiwers: 28907,
      Earning: 23000,
      releaseDate: new Date(2022,4,2)
    }
  }
}
