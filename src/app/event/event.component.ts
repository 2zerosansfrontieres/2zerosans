import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  @Input() link: string;
  @Input() galleryImages: NgxGalleryImage[];
  @Input() height: string;
  @Input() width: string;

  constructor() { }

  ngOnInit(): void {
  }

}
