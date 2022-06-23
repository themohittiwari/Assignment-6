import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private empService: BaseService) {}

  public empData = {
    name: '',
    designation: '',
  };

  ngOnInit() {}

  getEmpDets(name: string, designation: string, e: any) {
    e.preventDefault();

    this.empService.addEmpData(name, designation);

    this.empData.name = '';
    this.empData.designation = '';
  }
}
