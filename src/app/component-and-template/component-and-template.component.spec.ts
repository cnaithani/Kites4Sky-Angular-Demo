import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAndTemplateComponent } from './component-and-template.component';

describe('ComponentAndTemplateComponent', () => {
  let component: ComponentAndTemplateComponent;
  let fixture: ComponentFixture<ComponentAndTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAndTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAndTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
