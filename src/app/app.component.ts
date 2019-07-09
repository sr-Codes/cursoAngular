import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso';

  private urlapi = 'https://api.exchangeratesapi.io/latest';
  public currentEuroRates: any = null;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCurrentEuroRates();
  }
  getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.urlapi}?symbols=${currencies}`;

    this.httpClient.get(url).subscribe(
      apiData => (
        this.currentEuroRates = apiData
      ),
      HttpError => (
        console.log(HttpError)
      )
    );
  }
}
