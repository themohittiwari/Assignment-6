import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(private empService: BaseService, private router: Router) {}

  dataSource = this.empService.empData;
  selectIndex = 0;
  ngOnInit() {
    this.empService.dataSource.subscribe((data) => {
      this.dataSource = [...data];
      this.selectIndex = 2;
    });
  }

  delete(id: number) {
    this.empService.removeEmpData(id);
    this.dataSource = [...this.empService.empData];
  }

  onTabChange(event: any) {
    this.selectIndex = event.index;
  }

  editDetails(id: number) {
    this.router.navigate(['/employee', id], {
      queryParams: { allowEditing: true },
    });
  }

  displayedColumns: string[] = ['name', 'designation', 'id'];
}
