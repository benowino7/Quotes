import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-acount.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteLikePipe } from './quote-like.pipe';
import { BestQuoteDirective } from './best-quote.directive';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailComponent,
    QuoteComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuoteFormComponent,
    QuoteLikePipe,
    BestQuoteDirective,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
