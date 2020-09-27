import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthDummy = false;
  constructor(
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    // TODO: have auth in place
    return this.isAuthDummy;
  }

  public authenticate(homePath): void {
    this.isAuthDummy = true;
    this.router.navigate([homePath]);
  }
}
