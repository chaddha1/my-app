import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServerAndBlueprintComponent } from './create-server-and-blueprint.component';

describe('CreateServerAndBlueprintComponent', () => {
  let component: CreateServerAndBlueprintComponent;
  let fixture: ComponentFixture<CreateServerAndBlueprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServerAndBlueprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServerAndBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
