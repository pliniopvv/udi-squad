import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logoff() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
