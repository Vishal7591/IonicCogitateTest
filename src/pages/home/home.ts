import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ProductserviceProvider } from "../../providers/productservice/productservice";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  products: any[] = [];
  productsWithStatus: any[] = [];
  productData: any;
  productDataWithStatus: any;
  order: any;
  description: any;
  constructor(
    public navCtrl: NavController,
    public productservice: ProductserviceProvider
  ) {
    this.productservice.GetMerchantOrders().then(data => {
      this.productData = data;
      this.order = this.productData.order;
      for (let i = 0; i < this.productData.products.length; i++) {
        this.products.push({
          name: this.productData.products[i].name,
          photo: this.productData.products[i].photo,
          size: this.productData.products[i].size
        });
      }
    });
    this.productservice.GetMerchantOrdersWithStatus().then(data => {
      this.productDataWithStatus = data;
      this.description = this.productDataWithStatus.description;
      for (let i = 0; i < this.productDataWithStatus.products.length; i++) {
        this.productsWithStatus.push({
          name: this.productDataWithStatus.products[i].name,
          photo: this.productDataWithStatus.products[i].photo,
          size: this.productDataWithStatus.products[i].size,
          charges: this.productDataWithStatus.products[i].charges,
          status: this.productDataWithStatus.products[i].status
        });
      }
    });
  }
}
