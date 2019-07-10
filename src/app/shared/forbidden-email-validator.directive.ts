import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

const FORBIDDEN_NAME_VALIDATOR: any = {
  provide: NG_VALIDATORS, useExisting:
// tslint:disable-next-line: no-use-before-declare
  forwardRef(() => ForbiddenEmailValidatorDirective),
  multi: true
};

@Directive({
  selector: '[appForbiddenEmailValidator]',
  providers: [ FORBIDDEN_NAME_VALIDATOR ]
})
export class ForbiddenEmailValidatorDirective {

  @Input('appForbiddenEmailValidator') forbiddenEmailValidator: string;

  ForbiddenEmails: Array<string> = ['a@a.com', 'b@b.com'];

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any | null} {
    if (control.value != null || typeof control.value === 'string' && control.value.length !== 0) {
      return this.notInForbiddenList(control.value) ? null : { appForbiddenEmailValidator : true };
    } else {
      return null;
    }
  }

  private notInForbiddenList(name: string): boolean {
    return this.ForbiddenEmails.indexOf(name.toLowerCase().trim()) === -1;
  }
}
