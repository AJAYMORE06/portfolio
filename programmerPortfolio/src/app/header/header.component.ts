import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formDetails: any;
  resetBtn: boolean = false;
  makeBtn: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.formDetails = JSON.parse(localStorage.getItem("formDetails"));
    if (this.formDetails != null && this.formDetails != undefined && this.formDetails != "") {
      if (this.formDetails.firstName != null && this.formDetails.firstName != undefined && this.formDetails.firstName != "") {
        console.log("inside header")
        this.resetBtn = true;
        this.makeBtn = false;
      } else {
        this.resetBtn = false;
        this.makeBtn = true;
      }
    }
    var btnContainer = document.getElementById("linksActive");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("nav-link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

}
