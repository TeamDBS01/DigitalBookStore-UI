import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtitleComponent } from './searchtitle.component';

describe('SearchtitleComponent', () => {
  let component: SearchtitleComponent;
  let fixture: ComponentFixture<SearchtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtitleComponent]
    });
    fixture = TestBed.createComponent(SearchtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
