import { AuthorsService } from './../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
 // template:
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
  title="Authors";
  Authors_;
  constructor(service: AuthorsService){
      this.Authors_=service.getAuthors();
  }
  

}
