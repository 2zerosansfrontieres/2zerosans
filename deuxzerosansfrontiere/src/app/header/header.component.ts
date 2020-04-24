import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { CookieService } from 'ngx-cookie-service';
import { CookiesService } from '../cookies.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string;
  password: string;
  dialogRef: MatDialogRef<ModalComponent>;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(): void {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = false;
    dialogConfig.data = {email: this.email, animal: this.password};
    dialogConfig.height = '300px';
    dialogConfig.width = '400px';
    this.dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    
    this.dialogRef.afterClosed().subscribe(result => {});
  }


}
