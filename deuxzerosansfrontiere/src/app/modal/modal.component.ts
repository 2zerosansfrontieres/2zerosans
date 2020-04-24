import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { CookiesService } from '../cookies.service';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cookiesService: CookiesService) {}

  onNoClick(): void {
    if (this.data.email.trim() === 'info2zeros3f@gmail.com'
     && this.data.password.trim() === '2&zeroS2020!') {
      this.cookiesService.setCookie('email',this.data.email.trim());
      this.cookiesService.setCookie('password',this.data.password.trim());
      this.cookiesService.activeAdministrateur();
    }
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.cookiesService.deActiveAdministrateur();
  }

  ngOnInit(): void {
  }

}
