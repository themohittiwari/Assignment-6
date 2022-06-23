import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(private empService: BaseService) {}

  dataSource = this.empService.empData;
  selectIndex = 0;
  ngOnInit() {
    this.empService.dataSource.subscribe((data) => {
      this.dataSource = [...data];
      this.selectIndex = 2;
    });
  }

  onTabChange(event: any) {
    this.selectIndex = event.index;
  }

  displayedColumns: string[] = ['id', 'name', 'designation'];
}
