import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateEvent, Event } from './model/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  listEvent(): Observable<Event[]> {
    return this.http.get<Event[]>('/api/events');
  }

  createAndDeleteEvent(createEvent: CreateEvent): Observable<Event[]> {
    return this.http.post<Event[]>('/api/event/createAndDelete', createEvent);
  }


}
