import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: any = '';
  name: any = '';
  intro: any = '';
  formDetails: any;
  introduction: any;
  showDownload: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.formDetails = JSON.parse(localStorage.getItem("formDetails"));
    // console.log(this.formDetails)
    if (this.formDetails != undefined && this.formDetails != null && this.formDetails != '') {
      if (this.formDetails.firstName != null && this.formDetails.firstName != undefined && this.formDetails.firstName != "") {
        // console.log("inside home")
        this.showDownload=false;
        this.name = this.formDetails.firstName + " " + this.formDetails.lastName;
        this.title = this.formDetails.workProfile;
        this.introduction = this.formDetails.editor;
      } else {
        this.showDownload=true;
        this.title = "Frontend-Developer";
        this.name = "Ajay More";
        this.introduction = "Hello there! My name is Ajay and I'm a web developer by profession,but also a gamer and footballer.I enjoy creating things that focus on usefulness and elegance."
      }
    } else {
      this.showDownload=true;
      this.title = "Frontend-Developer";
      this.name = "Ajay More";
      this.introduction = "Hello there! My name is Ajay and I'm a web developer by profession,but also a gamer and footballer.I enjoy creating things that focus on usefulness and elegance."
    }
  }

  download() {
    alert("Downloading please wait..");
  }
}
