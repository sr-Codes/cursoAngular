import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective implements OnInit {

  color = '#FFFFFF';

  @Input() appDestacar: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'fontSize', '50px');
    renderer.setStyle(el.nativeElement, 'color', 'blue');
    el.nativeElement.style.border = '2px solid blue';
    el.nativeElement.style.textAlign = 'center';
  }

  ngOnInit() {
    const color = this.appDestacar;
    this.el.nativeElement.style.backgroundColor = 'rgba(0,0,220,0.1)';
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
    this.renderer.setStyle(this.el.nativeElement, 'color', `${color}`);
  }

}
