import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsesorPage } from './asesor.page';

describe('AsesorPage', () => {
  let component: AsesorPage;
  let fixture: ComponentFixture<AsesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
