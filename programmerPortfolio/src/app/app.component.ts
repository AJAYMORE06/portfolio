import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programmerPortfolio';
  
  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['']);
  }
}
