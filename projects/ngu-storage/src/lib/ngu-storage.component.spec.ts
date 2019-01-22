import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguStorageComponent } from './ngu-storage.component';

describe('NguStorageComponent', () => {
  let component: NguStorageComponent;
  let fixture: ComponentFixture<NguStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
