import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelperHomePage } from './helper-home.page';

describe('HelperHomePage', () => {
  let component: HelperHomePage;
  let fixture: ComponentFixture<HelperHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelperHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
