import { Component, OnInit } from '@angular/core';
import { Stock } from "app/stock/stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock:Stock;
  constructor() { }

  ngOnInit() {
    this.stock =  new Stock(2, "第2个股票", 1.19, 5, "这是第12ng个测试", ['it'])
  }

}
