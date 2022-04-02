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
  Author1;
  isSelected=false;
  email="email@example.com";
  isActive=true;
  constructor(service: AuthorsService){
      this.Authors_=service.getAuthors();   
      this.Author1=service.getAuthor();   
  }
  onClick(){
    this.isSelected=!this.isSelected;
  }
  onKeyUp(){
    console.log(this.email);
  }
  onSave($event:any){
    $event.stopPropagation();
    console.log("Button was clicked" , $event );
  }
  

}
