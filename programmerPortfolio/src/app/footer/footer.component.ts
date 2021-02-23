import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() { }
  whatsAppNum: Number;
  call: Number;
  emailId: any = '';
  linkedIn: any = '';
  instagram: any = '';
  facebook: any = '';
  github: any = '';
  formDetails: any;
  showCall: boolean = true;
  ngOnInit() {
    this.formDetails = JSON.parse(localStorage.getItem("formDetails"));
    if (this.formDetails != undefined && this.formDetails != null && this.formDetails != '') {
      console.log("inside footer")
      this.whatsAppNum = this.formDetails.whatsappNumber;
      this.emailId = this.formDetails.emailId;
      this.linkedIn = this.formDetails.linkedIn;
      this.instagram = this.formDetails.instagram;
      this.facebook = this.formDetails.facebook;
      this.github = this.formDetails.github;
      if (this.formDetails.callNumber != undefined && this.formDetails.callNumber != null && this.formDetails.callNumber != "") {
        this.showCall = true;
        this.call = this.formDetails.callNumber;
      } else {
        this.showCall = false;
      }
    } else {
      this.showCall = true;
      this.call = 7507014155;
      this.whatsAppNum = 8668553488;
      this.emailId = "more.ajay6995@gmail.com";
      this.linkedIn = "https://www.linkedin.com/in/ajay-more-457a82131/";
      this.instagram = "https://www.instagram.com/__ajaymore__/";
      this.facebook = "https://www.facebook.com/ajay.more.39/";
      this.github = "https://github.com/AJAYMORE06";

    }
  }
}