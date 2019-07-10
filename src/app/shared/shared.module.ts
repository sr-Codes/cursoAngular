import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { ForbiddenEmailValidatorDirective } from './forbidden-email-validator.directive';
import { NumberOnlyDirective } from './number-only.directive';

@NgModule({
  declarations: [
    DestacarDirective,
    ForbiddenEmailValidatorDirective,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DestacarDirective,
    ForbiddenEmailValidatorDirective,
    NumberOnlyDirective
  ]
})
export class SharedModule { }
