import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFetcherComponent } from './news-fetcher.component';

describe('NewsFetcherComponent', () => {
  let component: NewsFetcherComponent;
  let fixture: ComponentFixture<NewsFetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsFetcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
