import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemanTuliPage } from './teman-tuli.page';

describe('TemanTuliPage', () => {
  let component: TemanTuliPage;
  let fixture: ComponentFixture<TemanTuliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemanTuliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemanTuliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
