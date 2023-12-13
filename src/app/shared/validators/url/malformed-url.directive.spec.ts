import { AbstractControl } from '@angular/forms';
import { MalformedUrlDirective } from './malformed-url.directive';

describe('MalformedUrlDirective', () => {
  let directive : MalformedUrlDirective;

  beforeEach(() => {
    directive = new MalformedUrlDirective();
  }) 

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should return error if not a url is received', () => {
    const notAnUrl = "random";
    expect(notAnUrl).toBeTruthy();
  });
});
