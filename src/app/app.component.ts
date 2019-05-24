import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eCommerceApplication';
  constructor(private router:Router){}
  ngOnInit() {
    // logic to find the broswer and device
    this.router.navigate(['/home']);
  }
}
