import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { EventsService } from '../events.service';
import { CreateEvent , Event} from '../model/event';
import {MediaObserver} from '@angular/flex-layout';
import { ModalEventComponent } from '../modal-event/modal-event.component';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  listEvents:Event[] = [];
  evenement: Event = null;
  height:string;
  width: string;
  dialogRef: MatDialogRef<ModalEventComponent>;

  constructor(public cookiesService: CookiesService, private eventsService: EventsService,
    public mediaObserver: MediaObserver, public dialog: MatDialog) {
      this.mediaObserver.media$.subscribe(media =>{
        if (media.mqAlias === 'lg') {
          this.height = '400';
          this.width = '600';
  
        }
        if (media.mqAlias === 'md') {
          this.height = '250';
          this.width = '400';
        }
        if (media.mqAlias === 'sm') {
          this.height = '250';
          this.width = '300';
        }
        if (media.mqAlias === 'xs') {
          this.height = '150';
          this.width = '150';
        }
      } ); 
    }

  ngOnInit(): void {
    this.eventsService.listEvent().subscribe(events => this.listEvents = events);
  }

  ajouter(){
    this.evenement = new Event();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = false;
    dialogConfig.data = {
      id: this.evenement.id,
      youtube:this.evenement.youtube,
      galeries:this.evenement.galeries,
      description:this.evenement.description,
      titre:this.evenement.titre
  };
    dialogConfig.width = this.width;
    dialogConfig.height = this.height ;
    this.dialogRef = this.dialog.open(ModalEventComponent, dialogConfig);
    
    this.dialogRef.afterClosed().subscribe(result => {
      this.evenement = result;
      if (result) {
        this.createEvent();
      }
    });
  }

  createEvent(){
    this.listEvents = this.listEvents.reverse();
    this.listEvents.push(this.evenement);
    this.listEvents = this.listEvents.reverse();
    this.eventsService.createEvent(this.evenement);
  }

  deleteEvent(){
    let index = this.listEvents.findIndex(ev => this.evenement.id === ev.id);
    this.listEvents = this.listEvents.slice(index,1);
    this.eventsService.deleteEvent(this.evenement.id.toString());
    
  }

}
