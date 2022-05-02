import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookListComponent } from './book-list/book-list.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CountAppComponent } from './count-app/count-app.component';
import { CountdisplayComponent } from './countdisplay/countdisplay.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { TabComponent } from './tab/tab.component';
import { PriceDiscountPipe } from './price-discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    BookComponent,
    BookCatlogComponent,
    BookListComponent,
    BoxaComponent,
    CountAppComponent,
    CountdisplayComponent,
    CustomerFormComponent,
    HitButtonComponent,
    MenuComponent,
    NewsComponent,
    TabComponent,
    PriceDiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
