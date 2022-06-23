import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService implements OnInit {
  empData = [
    { id: 0, name: 'John Doe', designation: 'Developer' },
    { id: 1, name: 'Annie Doe', designation: 'Designer' },
    { id: 2, name: 'Frank Doe', designation: 'QA engineer' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  dataSource = new EventEmitter();

  addEmpData(name: string, designation: string) {
    this.empData.push({
      id: this.empData.length,
      name,
      designation,
    });
    this.dataSource.next(this.empData);
  }
}
