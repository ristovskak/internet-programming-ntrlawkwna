import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoComponentsComponent } from './movie-info-components.component';

describe('MovieInfoComponentsComponent', () => {
  let component: MovieInfoComponentsComponent;
  let fixture: ComponentFixture<MovieInfoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieInfoComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInfoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
