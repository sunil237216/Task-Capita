import { Component } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  filteredStatus = '';
  tasks = [];

  constructor(private service: DataStorageService, private dialog: MatDialog) {

  }

  ngOnInit() {

    this.service.taskChanged.subscribe((data => {

      if (data) {
        this.service.fetchTasks().subscribe((data => {
      
          this.tasks = Object.keys(data).map(function (key) {
            return [key, data[key]];
          });

        }))

      }

    }))
  }


  openDialog(task, op) {
   console.log(task);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = task;
    this.dialog.open(AddTaskComponent, dialogConfig);
  }

  deleteTask(payload) {
    if(payload){
    this.service.deleteTasks(payload).subscribe((data => {
      this.service.taskChanged.next(true);
    }))
  }

  }

}
