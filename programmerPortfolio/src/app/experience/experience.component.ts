import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  durationProject: any;
  organisation: any = '';
  projectDesc: any = '';
  roles: any = [];
  durationProjectOne: any;
  organisationOne: any = '';
  projectDescOne: any = '';
  rolesOne: any = [];
  durationProjectTwo: any;
  organisationTwo: any = '';
  projectDescTwo: any = '';
  rolesTwo: any = [];
  durationProjectThree: any;
  organisationThree: any = '';
  projectDescThree: any = '';
  rolesThree: any = [];
  organisationAj: any;
  projectDescAj: any;
  boxAboutAj: boolean = true;
  formDetails: any;
  boxProjectsOne: boolean = false;
  boxProjectsTwo: boolean = false;
  boxProjectsThree: boolean = false;
  boxProject: boolean = false;

  constructor() { }
  ngOnInit(): void {
    this.formDetails = JSON.parse(localStorage.getItem("formDetails"));
    if (this.formDetails != undefined && this.formDetails != null && this.formDetails != '') {
      console.log("inside experinece", this.formDetails.organisation)
      if (this.formDetails.organisation != null && this.formDetails.organisation != undefined && this.formDetails.organisation != "") {
        this.boxAboutAj = false;
        this.boxProject = true;
        this.durationProject = "( " + this.formDetails.durationFrom + " - " + this.formDetails.durationTo + ")";
        this.organisation = this.formDetails.organisation;
        this.projectDesc = this.formDetails.projectDescription;
        this.roles = this.formDetails.responsibility;
      }
      if (this.formDetails.organisationOne != null && this.formDetails.organisationOne != undefined && this.formDetails.organisationOne != "") {
        this.boxAboutAj = false;
        this.boxProjectsOne = true;
        this.durationProjectOne = "( " + this.formDetails.durationFromOne + " - " + this.formDetails.durationToOne + ")";
        this.organisationOne = this.formDetails.organisationOne;
        this.projectDescOne = this.formDetails.projectDescriptionOne;
        this.rolesOne = this.formDetails.responsibilityOne;
      }
      if (this.formDetails.organisationTwo != null && this.formDetails.organisationTwo != undefined && this.formDetails.organisationTwo != "") {
        this.boxAboutAj = false;
        this.boxProjectsTwo = true;
        this.durationProjectTwo = "( " + this.formDetails.durationFromTwo + " - " + this.formDetails.durationToOne + ")";
        this.organisationTwo = this.formDetails.organisationTwo;
        this.projectDescTwo = this.formDetails.projectDescriptionTwo;
        this.rolesTwo = this.formDetails.responsibilityTwo;
      }
      if (this.formDetails.organisationThree != null && this.formDetails.organisationThree != undefined && this.formDetails.organisationThree != "") {
        this.boxAboutAj = false;
        this.boxProjectsThree = true;
        this.durationProjectThree = "( " + this.formDetails.durationFromThree + " - " + this.formDetails.durationToThree + ")";
        this.organisationThree = this.formDetails.organisationThree;
        this.projectDescThree = this.formDetails.projectDescriptionThree;
        this.rolesThree = this.formDetails.responsibilityThree;
      }
      if ((this.formDetails.totalExperience == 0)) {
        this.boxAboutAj = false;
        this.boxProject = false;
        this.boxProjectsOne = false;
        this.boxProjectsTwo = false;
        this.boxProjectsThree = false;
      } else {
        this.boxProject = true;
      }
    } else {
      this.boxAboutAj = true;
      this.boxProject = true;
      this.durationProject = "(May 2019-Present)";
      this.organisation = "Infosys Ltd (2.1 Years)";
      this.projectDesc = "Infosys Cyber Security Platform (ICSP) provides and integrated, unified view of your security posture, leveraging predictive analytics. The platform is modular and allows organisations to select and subscribe to the security levels and categories that best fits their needs.It automates the service provided through the Infosys Global Security Operations Centre. This ranges from basic services (security monitoring, incident management, threat management and reporting) to advanced customized services that include protection against malware, user and entity behaviour analytics (UEBA), incident response, and security automation."
      this.roles = ["Understanding client requirement and Develop new user-facing features ensuring the technical feasibility of UI/UX designs with Angular 5 and Javascript concepts.", "Optimize application for maximum speed and scalability and assuring that all user input is validated before submitting to back-end.", "Work in multidisciplinary team with other professionals such as back-end developers and web designers.", "Ensuring the code by completing end to end and integration testing."]
      this.projectDescAj = "Infy Tours and Travels..!, Developed a working application for Tours and Travels, where user can book Hotel, Flight and Events happening at their Holiday Destination. The user can view the feasible package and add them to the cart. Used concepts of HTML5, CSS, Bootstrap, Angular 5, Restful Web services, Session and Local Storage and MySql Db."
      this.organisationAj = "Infosys Training Project"
    }

  }
}