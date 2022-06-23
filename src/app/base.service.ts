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

  removeEmpData(id: number) {
    let index = this.empData.findIndex((e) => e.id === id);
    this.empData.splice(index, 1);
    console.log(this.empData);
  }

  addEmpData(name: string, designation: string) {
    this.empData.push({
      id: this.empData.length,
      name,
      designation,
    });
    this.dataSource.next(this.empData);
  }

  editEmpData(name: string, designation: string, id: number) {
    let updatedData = {
      name,
      designation,
      id: Number(id),
    };
    let index = this.empData.findIndex((e) => e.id == id);
    this.empData[index] = updatedData;
    this.dataSource.next(this.empData);
    this.router.navigate(['/']);
  }
}
