import { Directive, HostListener, ElementRef, Renderer2, Input, OnChanges,
  SimpleChanges } from '@angular/core';

@Directive({
  selector: '[linkColor]'
})
export class LinkColorDirective implements OnChanges {

color: string = '#FFFFFF';
@Input() linkName: string;
@Input() activeLinkName: string;

constructor(private el: ElementRef, private renderer:Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

    @HostListener('mouseenter', [ '$event'])
    mouseenter() {
      this.color = this.color === '#FFFFFF' ? 'hotpink' : '#FFFFFF';
      this.el.nativeElement.style.color = this.color;
    }

    @HostListener('mouseout', [ '$event'])
    mouseout() {
      this.color = this.color === '#FFFFFF' ? 'hotpink' : '#FFFFFF';
      this.el.nativeElement.style.color = this.color;
    }

    @HostListener('click', [ '$event'])
    click() {
      this.el.nativeElement.style.color = 'hotpink';
    }

}
