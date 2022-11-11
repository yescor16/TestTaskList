import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskList';
  constructor(private http:HttpClient){}
    getAll():Observable<any>{
      return this.http.get<any>('https://yescor16.github.io/TestTaskList');
    }
  
}
