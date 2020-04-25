import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryOptions, NgxGalleryImage } from '@kolkov/ngx-gallery';

@Component({
  selector: 'galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  @Input() galleryImages: NgxGalleryImage[];
  @Input() height: string;
  @Input() width: string;

  ngOnInit(): void {
      this.galleryOptions = [
          {
              width: this.width,
              height: this.height,
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide,
              imageAutoPlay: true, 
              imageAutoPlayPauseOnHover: true, 
              previewAutoPlay: true, 
              previewAutoPlayPauseOnHover: true
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];
      console.log('this.galleryImages', this.galleryImages);
      
  }

}
