import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(){}

  ngOnInit(): void { 
    this.futureDateDisable();
  }
  maxDate : any ;
  futureDateDisable(){
    var date:any = new Date();
    var todayDate:any = date.getDate();
    var month:any = date.getMonth() + 1;
    var year:any = date.getFullYear();
    if(todayDate <10){
      todayDate = '0' + todayDate;
    }
    if(month < 10){
      month = '0' + month;
    }
    this.maxDate = year + '-'+month+'-'+todayDate;
  }
  
  registerForm = new FormGroup({
    firstname : new FormControl(""),
    lastname : new FormControl(""),
    dateofbirth : new FormControl(""),
    addressline1 : new FormControl(""),
    addressline2 : new FormControl(""),
    city : new FormControl(""),
    state : new FormControl(""),
    zip : new FormControl ,
  })
  registersubmitted(){
    console.log(this.registerForm)
  }

}
