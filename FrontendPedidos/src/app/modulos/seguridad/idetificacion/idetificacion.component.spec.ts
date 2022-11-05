import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdetificacionComponent } from './idetificacion.component';

describe('IdetificacionComponent', () => {
  let component: IdetificacionComponent;
  let fixture: ComponentFixture<IdetificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdetificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdetificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
