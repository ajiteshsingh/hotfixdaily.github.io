import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceChinaAppComponent } from './replace-china-app.component';

describe('ReplaceChinaAppComponent', () => {
  let component: ReplaceChinaAppComponent;
  let fixture: ComponentFixture<ReplaceChinaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceChinaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceChinaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
