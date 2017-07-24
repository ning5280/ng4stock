import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

    private stocks:Stock[] = [
      new Stock(1, "第一个股票", 1.99, 3.5, "这是第一个测试", ['it']),
      new Stock(2, "第2个股票", 1.19, 5, "这是第12ng个测试", ['it'])
      
    ];

    getStocks():Stock[] {
      return this.stocks;
    }

    getStock(id: number): Stock {
      return this.stocks.find(stock => stock.id == id);
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