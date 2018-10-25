import { Http, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { ApiConfig } from "../../config";
import "rxjs/add/operator/map";
/*
  Generated class for the ProductserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductserviceProvider {
  constructor(public http: Http) {
    console.log("Hello ProductserviceProvider Provider");
  }

  public GetMerchantOrdersWithStatus() {
    return new Promise(resolve => {
      this.http
        .get(ApiConfig.ApiBaseUrl + "Products")
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }

  public GetMerchantOrders() {
    return new Promise(resolve => {
      this.http
        .get(ApiConfig.ApiBaseUrl + "Orders")
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }
}
