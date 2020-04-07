import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TendenciasPage } from './tendencias.page';

describe('TendenciasPage', () => {
  let component: TendenciasPage;
  let fixture: ComponentFixture<TendenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendenciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TendenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
