import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;
  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, "第一个股票", 1.99, 3.5, "这是第一个测试", ['it']),
      new Stock(2, "第2个股票", 1.19, 5, "这是第12ng个测试", ['it'])
      
    ];
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}