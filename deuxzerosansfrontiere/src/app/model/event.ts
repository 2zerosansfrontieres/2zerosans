 export class Event {
     id: number;
     youtube:string;
     galeries:Galery[];
     description:string;
     titre:string;
 }

 export class Galery {
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