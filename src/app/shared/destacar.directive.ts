import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'fontSize', '50px');
    renderer.setStyle(el.nativeElement, 'color', 'blue');
    el.nativeElement.style.border = '2px solid blue';
    el.nativeElement.style.textAlign = 'center';
  }

}
