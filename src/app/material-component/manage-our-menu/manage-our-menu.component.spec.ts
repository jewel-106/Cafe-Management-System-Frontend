import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOurMenuComponent } from './manage-our-menu.component';

describe('ManageOurMenuComponent', () => {
  let component: ManageOurMenuComponent;
  let fixture: ComponentFixture<ManageOurMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOurMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOurMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
