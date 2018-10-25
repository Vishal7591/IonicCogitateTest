import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Http, HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ProductserviceProvider } from "../providers/productservice/productservice";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductserviceProvider
  ]
})
export class AppModule {}
