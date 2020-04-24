import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modal/modal.component';
import { Galery } from '../model/event';

export interface DialogDataEvent {
  id: number;
  youtube:string;
  galeries:Galery[];
  description:string;
  titre:string;
}

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.css']
})
export class ModalEventComponent implements OnInit {
  isPhoto:boolean = true;
  constructor(public dialogRef: MatDialogRef<ModalEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataEvent) { }

  ngOnInit(): void {
    this.data.galeries = [];
  }
  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  changeVideo() {
    this.data.galeries = [];
   this.isPhoto= true;
  }

  changePhoto() {
    this.data.youtube = null;
    this.isPhoto= false;
  }

  addPhoto() {
    this.data.galeries.push(new Galery());
  }

  removePhoto(index:number) {
    this.data.galeries.splice(index,1);
  }

  onSelection(galery: Galery) {
    galery.medium = galery.big;
    galery.small = galery.big;
    console.log('this.data.galeries', this.data.galeries);
  }

  closeEvent() {
    this.data = null;
    this.dialogRef.close(this.data);
  }
}
