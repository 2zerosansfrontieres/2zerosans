import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateEvent, Event } from './model/event';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private db: AngularFirestore) {}

  listEvent(): Observable<Event[]> {
    return this.db.collection("events").get().pipe(
      map(events => {
        let eventsResult = [];
        events.docs.forEach(doc => {
          let event = new Event();
          event.id = doc.id;
          event.youtube = doc.data().youtube;
          event.galeries = null;
          event.titre = doc.data().titre;
          event.description = doc.data().description;
          eventsResult.push(event);
        });
        return eventsResult as Event[];
      }));
  }

  createEvent(createEvent: Event): void {
    this.db.collection("events").add(createEvent).then(data =>{
      console.log('data', data.id);
    });
  }

  deleteEvent(id: string): void {
    this.db.collection("events").doc(id).delete().then(() =>{
      console.log('delete success');
    });;
  }


}
