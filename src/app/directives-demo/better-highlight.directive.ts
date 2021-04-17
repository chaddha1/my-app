import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  // @HostBinding('style.color') textColor: string = 'Grey';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'mistyrose'
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'mistyrose'
    // );
    this.backgroundColor = this.highlightColor;
    // this.textColor = 'tomato';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
    // this.textColor = 'grey';
  }
}
