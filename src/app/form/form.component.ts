import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private empService: BaseService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  public empData = {
    name: '',
    designation: '',
  };

  public editing: boolean = false;
  public id = '';
  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
      (params) => (this.editing = params['allowEditing'])
    );
    let id = this.activeRoute.snapshot.params['id'];
    this.id = id;
    let foundElement = this.empService.empData.find((e) => e.id == id);
    if (foundElement) {
      this.empData.name = foundElement.name;
      this.empData.designation = foundElement.designation;
    }
  }

  backHandler() {
    this.router.navigate(['/']);
  }

  getEmpDets(name: string, designation: string, e: any) {
    e.preventDefault();

    if (this.editing) {
      this.empService.editEmpData(name, designation, Number(this.id));
      this.editing = false;
      this.id = '';
    } else {
      this.empService.addEmpData(name, designation);
    }
    this.empData.name = '';
    this.empData.designation = '';
  }
}
