import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

enum OPTIONS {POSITIVE = 'positive', NEGATIVE = 'negative'}

@Directive({
// tslint:disable-next-line: directive-selector
 selector: '[OnlyNumber]'
})
export class NumberOnlyDirective implements OnInit {
    // Allow decimal numbers and negative values
    private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);

    // Allow key codes for special events.
    private specialKeys: Array<string> = [ 'Backspace', 'Delete', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Control'];

    @Input() OnlyNumber: string; // 'positive:2' mean positive width 2 decimales

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        let signal = '';
        let decimales = '*';

        const options = this.OnlyNumber.split(':');
        if ((options.length > 0) && (options[0] === OPTIONS.NEGATIVE)) {
          signal = '\\-?';
        } else {
          signal = '';
        }

        if ( options.length >= 2 && options[1].trim() !== '') {
            if (options[1].trim() === '0') {
              this.regex = new RegExp('^[0-9]+$');
            } else {
                decimales = '{0,' + options[1].trim() + '}';
                this.regex = new RegExp('^' + signal + '[0-9]+(\\.[0-9]' + decimales + '){0,1}$', 'g');
            }
        }
    }

    @HostListener('keydown', [ '$event' ]) onKeyDown(event: KeyboardEvent) {
        // Allow Backspace, Delete, Tab, ArrowLeft, ArrowRight, Control, End, and Home keys
        if (event.ctrlKey  || this.specialKeys.indexOf(event.key) !== -1) {
          return;
        }
        this.validateAndAcceptNumber(event.key);
    }

    @HostListener('paste', [ '$event' ]) blockPaste(event: ClipboardEvent) {
        const data = event.clipboardData.getData('Text');
        const dataNew  = data.replace(/,/g, '');
        this.validateAndAcceptNumber(dataNew, data);
    }

    validateAndAcceptNumber(data: string, dataOld?: string ) {
      const cursor_position_start = this.el.nativeElement.selectionStart; // cursor position start
      const cursor_position_end = this.el.nativeElement.selectionEnd; // cursor position end
      const current: string = this.el.nativeElement.value; // event.clipboardData.setData("Text",data);

      const next: string = current.substr(0, cursor_position_start).concat(data).concat(current.substr(cursor_position_end));
      if (next && !String(next).match(this.regex)) {
          event.preventDefault();
      } else {
          if (dataOld && data !== dataOld) {
              event.preventDefault();
              event.stopPropagation();
              this.el.nativeElement.value = next;
              this.el.nativeElement.dispatchEvent(new Event('input'));
          }
      }
    }
}
