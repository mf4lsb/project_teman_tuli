import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemanDengarPage } from './teman-dengar.page';

describe('TemanDengarPage', () => {
  let component: TemanDengarPage;
  let fixture: ComponentFixture<TemanDengarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemanDengarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemanDengarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
