import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetarPage } from './metar.page';

describe('MetarPage', () => {
  let component: MetarPage;
  let fixture: ComponentFixture<MetarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MetarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
