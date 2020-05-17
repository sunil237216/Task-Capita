import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AddTaskComponent ]
    })
    .compileComponents();

     // create component and test fixture
     fixture = TestBed.createComponent(AddTaskComponent);

     // get test component from the fixture
     component = fixture.componentInstance;
     component.ngOnInit(); 
  }));

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });


  it('submitting a form ', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['id'].setValue(11);
    component.form.controls['priority'].setValue("High");
    component.form.controls['status'].setValue("pending");
    component.form.controls['description'].setValue("meeting");
    expect(component.form.valid).toBeTruthy();

  });


});


