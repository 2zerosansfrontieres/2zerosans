 export class Event {
     id: string;
     youtube:string;
     galeries:Galery[];
     description:string;
     titre:string;
 }

 export class Galery {
    id: string;
    small: string;
    medium:string;
    big:string;
}

export class CreateEvent {
    event: Event;
    events:Event[];
    constructor(event: Event, events:Event[]) {
        this.event = event;
        this.events = events;
    }
}