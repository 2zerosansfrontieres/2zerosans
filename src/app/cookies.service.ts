import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  public isAdministrateur:boolean;
  constructor(private cookieService: CookieService) { 
    if (this.cookieService.get('email') && this.cookieService.get('email') !== '') {
        this.isAdministrateur = true;
    } else {
        this.isAdministrateur = false;
    }
  }

  setCookie(name:string, value:string) {
    this.cookieService.set(name,value);
  }

  getCookie(name:string) : string {
    return this.cookieService.get(name);
  }

  activeAdministrateur() : void {
    this.isAdministrateur = true;
  }

  deActiveAdministrateur() : void {
    this.cookieService.deleteAll();
    this.isAdministrateur = false;
  }

}
