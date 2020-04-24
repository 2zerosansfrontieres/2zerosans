import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nous',
  templateUrl: './nous.component.html',
  styleUrls: ['./nous.component.css']
})
export class NousComponent implements OnInit {
  @Output() isBackGroundImageEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isBackGroundImageEvent.emit(false);
  }

}
