import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenerosComponent } from './list-generos.component';

describe('ListGenerosComponent', () => {
  let component: ListGenerosComponent;
  let fixture: ComponentFixture<ListGenerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGenerosComponent]
    });
    fixture = TestBed.createComponent(ListGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
