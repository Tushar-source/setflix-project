import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowMovieComponent } from './row-movie.component';

describe('RowMovieComponent', () => {
  let component: RowMovieComponent;
  let fixture: ComponentFixture<RowMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
