import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { environment } from '../../../../environments/environment';

export function forbiddenUrlValidator(partOfHref: URL): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && URL.canParse(control.value)) {
      const parsedUrl = new URL(control.value);
      return parsedUrl.href.includes(partOfHref.href) &&
        parsedUrl.pathname.endsWith('.html')
        ? null
        : { forbiddenUrl: { value: control.value } };
    } else {
      return { forbiddenUrl: { value: control.value } };
    }
  };
}

@Directive({
  selector: '[appForbiddenUrl]',
  standalone: true,
})
export class ForbiddenUrlDirective implements Validators {
  @Input('appForbiddenUrl') forbiddenUrl = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return forbiddenUrlValidator(
      new URL(
        this.forbiddenUrl && URL.canParse(this.forbiddenUrl)
          ? this.forbiddenUrl
          : environment.newsUrlBaseHref
      )
    )(control);
  }
}
