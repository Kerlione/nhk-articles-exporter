import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function invalidUrlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValidUrl = URL.canParse(control.value);
    return isValidUrl ? null : { malformedUrl: { value: control.value } };
  };
}

@Directive({
  selector: '[appMalformedUrl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MalformedUrlDirective,
      multi: false,
    },
  ],
})
export class MalformedUrlDirective {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return invalidUrlValidator()(control);
  }
}
