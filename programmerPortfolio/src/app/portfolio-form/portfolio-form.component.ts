import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})

export class PortfolioFormComponent implements OnInit {
  public model = {
    editorData: ""
  };
  registerForm: FormGroup;
  experienceTotal: any;
  projectOne: any = false;
  projectTwo: any = false;
  projectThree: any = false;
  count: any = 0;
  name: any = '';
  lastName: any = '';
  age: any = '';
  shortGoal: any = '';
  longGoal: any = '';
  indoor: any = '';
  outdoor: any = '';
  technical: any = '';
  soft: any = '';
  highestQualification: any = '';
  stream: any = '';
  university: any = '';
  profile: any = '';
  currentEmployer: any = '';
  designation: any = '';
  organisation: any = '';
  fromDate: any = '';
  toDate: any = '';
  description: any = '';
  roles: any = '';
  organisationOne: any = '';
  fromDateOne: any = '';
  toDateOne: any = '';
  descriptionOne: any = '';
  rolesOne: any = '';
  organisationTwo: any = '';
  fromDateTwo: any = '';
  toDateTwo: any = '';
  descriptionTwo: any = '';
  rolesTwo: any = '';
  organisationThree: any = '';
  fromDateThree: any = '';
  toDateThree: any = '';
  descriptionThree: any = '';
  rolesThree: any = '';
  email: any = '';
  whatsApp: any = '';
  call: any = '';
  linkedIn: any = '';
  instagram: any = '';
  facebook: any = '';
  github: any = '';
  formDetails: any;
  constructor(private fb: FormBuilder, public router: Router,private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formDetails = JSON.parse(localStorage.getItem("formDetails"));
    if (this.formDetails != undefined && this.formDetails != null && this.formDetails != "") {
      this.experienceTotal = this.formDetails.totalExperience;
      this.name = this.formDetails.firstName;
      this.lastName = this.formDetails.lastName;
      this.age = this.formDetails.age;
      this.shortGoal = this.formDetails.shortGoal;
      this.longGoal = this.formDetails.longGoal;
      this.indoor = this.formDetails.indoor;
      this.outdoor = this.formDetails.outdoor;
      this.technical = this.formDetails.technicalSkills;
      this.soft = this.formDetails.softSkills;
      this.highestQualification = this.formDetails.qualification;
      this.stream = this.formDetails.stream;
      this.university = this.formDetails.university;
      this.profile = this.formDetails.workProfile;
      this.currentEmployer = this.formDetails.currentEmployer;
      this.designation = this.formDetails.designation;
      this.organisation = this.formDetails.organisation;
      this.fromDate = this.formDetails.durationFrom;
      this.toDate = this.formDetails.durationTo;
      this.description = this.formDetails.projectDescription;
      this.roles = this.formDetails.responsibility;
      this.email = this.formDetails.emailId;
      this.whatsApp = this.formDetails.whatsappNumber;
      this.call = this.formDetails.callNumber;
      this.linkedIn = this.formDetails.linkedIn;
      this.instagram = this.formDetails.instagram;
      this.facebook = this.formDetails.facebook;
      this.github = this.formDetails.github;
      this.organisationOne = this.formDetails.organisationOne;
      this.organisationTwo = this.formDetails.organisationTwo;
      this.organisationThree = this.formDetails.organisationThree;


      this.model.editorData = this.formDetails.editor;
      if (this.organisationOne != null && this.organisationOne != undefined && this.organisationOne != "") {
        this.projectOne = true;
        this.fromDateOne = this.formDetails.durationFromOne;
        this.toDateOne = this.formDetails.durationToOne;
        this.descriptionOne = this.formDetails.projectDescriptionOne;
        this.rolesOne = this.formDetails.responsibilityOne;
      } else {
        this.projectOne = false;
      }
      if (this.organisationTwo != undefined && this.organisationTwo != null && this.organisationTwo != "") {
        this.projectTwo = true;
        this.fromDateTwo = this.formDetails.durationFromTwo;
        this.toDateTwo = this.formDetails.durationToTwo;
        this.descriptionTwo = this.formDetails.projectDescriptionTwo;
        this.rolesTwo = this.formDetails.responsibilityTwo;
      }
      else {
        this.projectTwo = false;
      }
      if (this.organisationThree != undefined && this.organisationThree != null && this.organisationThree != "") {
        this.projectThree = true;
        this.fromDateThree = this.formDetails.durationFromThree;
        this.toDateThree = this.formDetails.durationToThree;
        this.descriptionThree = this.formDetails.projectDescriptionThree;
        this.rolesThree = this.formDetails.responsibilityThree;
      } else {
        this.projectThree = false;
      }
    }
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      shortGoal: ['', Validators.required],
      longGoal: ['', Validators.required],
      editor: ['',Validators.required],
      indoor: ['', Validators.required],
      outdoor: ['', Validators.required],
      technicalSkills: ['', Validators.required],
      softSkills: ['', Validators.required],
      qualification: ['', Validators.required],
      stream: ['', Validators.required],
      university: ['', Validators.required],
      workProfile: [''],
      totalExperience: ['', Validators.required],
      currentEmployer: [''],
      designation: [''],
      emailId:['',Validators.email],
      whatsappNumber: ['', Validators.required],
      callNumber: ['', Validators.required],
      linkedIn: ['', Validators.required],
      instagram: ['', Validators.required],
      facebook: ['', Validators.required],
      github: ['', Validators.required],
      organisation: [''],
      durationFrom: [''],
      durationTo: [''],
      projectDescription: [''],
      responsibility: [''],
      organisationOne: [''],
      durationFromOne: [''],
      durationToOne: [''],
      projectDescriptionOne: [''],
      responsibilityOne: [''],

      organisationTwo: [''],
      durationFromTwo: [''],
      durationToTwo: [''],
      projectDescriptionTwo: [''],
      responsibilityTwo: [''],

      organisationThree: [''],
      durationFromThree: [''],
      durationToThree: [''],
      projectDescriptionThree: [''],
      responsibilityThree: ['']
    })
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
}

  addProject() {
    console.log(this.count)
    this.count = this.count + 1;
    if (this.count == 1) {
      this.projectOne = true;
    } else if (this.count == 2) {
      this.projectTwo = true;
    }
    else if (this.count == 3) {
      this.projectThree = true;
    }
  }

  removeProjectOne() {
    this.organisationOne = '';
    this.fromDateOne = '';
    this.toDateOne = '';
    this.descriptionOne = '';
    this.rolesOne = '';
    this.projectOne = false;
    if (this.projectTwo == false && this.projectThree == false) {
      this.count = 0;
    }
  }

  removeProjectTwo() {
    this.organisationTwo = '';
    this.fromDateTwo = '';
    this.toDateTwo = '';
    this.descriptionTwo = '';
    this.rolesTwo = '';
    this.projectTwo = false;
    if (this.projectOne == false && this.projectThree == false) {
      this.count = 0;
    }
  }

  removeProjectThree() {
    this.organisationThree = '';
    this.fromDateThree = '';
    this.toDateThree = '';
    this.descriptionThree = '';
    this.rolesThree = '';
    this.projectThree = false;
    if (this.projectTwo == false && this.projectOne == false) {
      this.count = 0;
    }
  }

  submit(event) {
    console.log(event)
    console.log(this.model.editorData)
    if (this.registerForm.valid) {
      localStorage.setItem("formDetails", JSON.stringify(event));
      alert("Your Form is successfully submitted, Please click 'OK' to continue");
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
  }
  reset() {
    localStorage.removeItem('formDetails');
    alert("Your Form is successfully reset, Please click 'OK' to continue");
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });;
  }
}