import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataStorageService } from '../shared/data-storage.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  form: FormGroup;
  id: number;
  description: string;
  status: string;
  priority: string;
  task = {};
  //description:string;

  constructor(
    private fb: FormBuilder,
    private service: DataStorageService,
    private dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.task = data;

    console.log(this.task);
    if (this.task) {
      this.id = data[1].id;
      this.description = data[1].description;
      this.status = data[1].status;
      this.priority = data[1].priority;

    }

  }

  ngOnInit() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],

    });

    if (this.task != 'new') {
      this.form.controls['id'].setValue(this.id);
      this.form.controls['description'].setValue(this.description);
      this.form.controls['status'].setValue(this.status);
      this.form.controls['priority'].setValue(this.priority);
      this.form.controls['id'].disable();
    }
  }

  save() {
  
    if (this.form.invalid) {
      return;
    }
    else {
      if (this.task == 'new') {
        this.service.addTasks(this.form.value).subscribe((data => {

          console.log('data added successfully');
          this.service.taskChanged.next(true);
        }), error => {

          console.log("error while adding");
        });

        this.dialogRef.close(this.form.value);
      }
      else {
        console.log(this.form.value);
            const request= this.form.value;
            request.id = this.id;
        this.service.updateTasks(this.task[0],request).subscribe((data => {
          this.service.taskChanged.next(true);
        }), error => {

          console.log('Error while updating the task');
        })
        this.dialogRef.close(this.form.value);

      }
    }
  }

  close() {
    this.dialogRef.close();
  }
}
