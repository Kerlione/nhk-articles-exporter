import { ForbiddenUrlDirective } from './forbidden-url.directive';

describe('ForbiddenUrlDirective', () => {
  it('should create an instance', () => {
    const directive = new ForbiddenUrlDirective();
    expect(directive).toBeTruthy();
  });

  it('should forbid if url does not match specified', () => {
    const directive = new ForbiddenUrlDirective();
    const invalidValue = "http://google.com";
    
  })
});
