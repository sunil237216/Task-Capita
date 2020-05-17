import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  taskChanged = new BehaviorSubject<boolean>(true);
  
  constructor(
    private http: HttpClient,
  ) { }

  addTasks(requestBody) {
    return this.http.post("https://tasksmanager-302f5.firebaseio.com/Task.json", requestBody);

  }

  fetchTasks() {
    return this.http
      .get(
        'https://tasksmanager-302f5.firebaseio.com/Task.json'
      )
  }
  updateTasks(taskName,requestPayload) {
    return this.http
      .put(
        'https://tasksmanager-302f5.firebaseio.com/Task/'+ taskName +'.json', JSON.stringify(requestPayload))

  }


  deleteTasks(request) {
    return this.http.delete('https://tasksmanager-302f5.firebaseio.com/Task/' + request + '.json')

  }
}
