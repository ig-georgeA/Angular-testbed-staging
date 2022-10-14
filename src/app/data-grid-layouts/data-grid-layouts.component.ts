import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-data-grid-layouts',
  templateUrl: './data-grid-layouts.component.html',
  styleUrls: ['./data-grid-layouts.component.scss']
})
export class DataGridLayoutsComponent implements OnInit {
  public northwindEmployees: any = null;
  public columnVisible = false;
  public columnVisible1 = false;
  public columnVisible2 = false;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
