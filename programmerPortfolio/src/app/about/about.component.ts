import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }
  firstName: any = '';
  lastName: any = '';
  age: Number;
  qualification: any = '';
  stream: any = '';
  university: any = '';
  totalExperience: any='';
  currentEmployer: any = '';
  moreExperience: boolean = false;
  totalExperienceBool: boolean = true;
  designation: any = '';
  outdoorHobbie: any = [];
  indoorHobbie: any = [];
  shortTermGoal: any = '';
  longTermGoal: any = '';
  technicalSkills: any = '';
  softSkills: any = '';
  formDetails: any;
  ngOnInit(): void {
    this.formDetails = JSON.parse(localStorage.getItem("formDetails"));
    if (this.formDetails != undefined && this.formDetails != null && this.formDetails != '') {
      console.log("inside about")
      if (this.formDetails.firstName != undefined && this.formDetails.firstName != null && this.formDetails.firstName != '') {
        this.firstName = "'" + this.formDetails.firstName + "'";
        this.lastName = "'" + this.formDetails.lastName + "'";
        this.age = this.formDetails.age;
        this.qualification = "'" + this.formDetails.qualification + "'"
        this.stream = "'" + this.formDetails.stream + "'";
        this.university = "'" + this.formDetails.university + "'";
        this.totalExperience = this.formDetails.totalExperience;
        if (this.totalExperience > 0 && this.totalExperience <= 1) {
          this.totalExperienceBool = true;
          this.moreExperience = true;
        } else if (this.totalExperience > 1) {
          this.totalExperienceBool = true;
          this.moreExperience = false;
        } else {
          this.totalExperienceBool = false;
        }
        this.currentEmployer = "'" + this.formDetails.currentEmployer + "'";
        this.designation = "'" + this.formDetails.designation + "'";
        this.outdoorHobbie = "'" + this.formDetails.outdoor + "'";
        this.indoorHobbie = "'" + this.formDetails.indoor + "'";
        this.shortTermGoal = this.formDetails.shortGoal
        this.longTermGoal = this.formDetails.longGoal
        let tech = this.formDetails.technicalSkills.split(',')
        tech.forEach(element => {
          this.technicalSkills = this.technicalSkills + "'" + element + "', "
          console.log(this.technicalSkills)
        });
        let soft = this.formDetails.softSkills.split(',')
        soft.forEach(element => {
          this.softSkills = this.softSkills + "'" + element + "', "
          console.log(this.softSkills)
        });
      }
      else {
        this.totalExperienceBool = true;
        this.moreExperience=false;
        this.firstName = "'Ajay'";
        this.lastName = "'More'";
        this.age = 25;
        this.qualification = "'B.E'"
        this.stream = "'Mechanical'";
        this.university = "'MIT Aurangabad'";
        this.totalExperience = 2;
        this.currentEmployer = "'Infosys Ltd'";
        this.designation = "'Systems Engineer'";
        this.outdoorHobbie = "'Football','Trekking'";
        this.indoorHobbie = "'Video Games'";
        this.shortTermGoal = " My short term goal is to get placed in good and reputed company. I want to explore, increase my skills and want to grow my career."
        this.longTermGoal = "My long term goal is to take on bigger, more challenging targets so I can assess my abilities. I plan on shaping myself during this initial time so that I'm prepared to deliver on bigger targets later."
        this.technicalSkills = "'Angular5', 'Angular6', 'Javascript', 'HTML5', 'CSS3', 'Bootstrap4', 'Typescript', 'C++'";
        this.softSkills = "'Communicator', 'Innovative', 'Intutive', 'Collaborative', 'Thinker'";
      }
    } else {
      this.totalExperienceBool = true;
      this.moreExperience=false;
      this.firstName = "'Ajay'";
      this.lastName = "'More'";
      this.age = 25;
      this.qualification = "'B.E'"
      this.stream = "'Mechanical'";
      this.university = "'MIT Aurangabad'";
      this.totalExperience = 2;
      this.currentEmployer = "'Infosys Ltd'";
      this.designation = "'Systems Engineer'";
      this.outdoorHobbie = "'Football','Trekking'";
      this.indoorHobbie = "'Video Games'";
      this.shortTermGoal = " My short term goal is to get placed in good and reputed company. I want to explore, increase my skills and want to grow my career."
      this.longTermGoal = "My long term goal is to take on bigger, more challenging targets so I can assess my abilities. I plan on shaping myself during this initial time so that I'm prepared to deliver on bigger targets later."
      this.technicalSkills = "'Angular5', 'Angular6', 'Javascript', 'HTML5', 'CSS3', 'Bootstrap4', 'Typescript', 'C++'";
      this.softSkills = "'Communicator', 'Innovative', 'Intutive', 'Collaborative', 'Thinker'";
    }
  }
}
