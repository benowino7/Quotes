import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, `"It has become appallingly obvious that our technology has exceeded our humanity."
    __ Albert Einstein,The great`, `The tension that A.I creates in peoples mind.
    The amount of work tech through machines does is insane`,new Date(2020,9,14)),
    new Quote(2,`"A lot of companies have chosen to downsize, and maybe that was the right thing for them. We chose a different path. Our belief was that if we kept putting great products in front of customers, they would continue to open their wallets."
    __Steve Jobs, Apple`,`A good product will always sell as the badones  attempts all means to sell`,new Date(2020,6,9)),
    new Quote(3,`"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."
    __Albert Einstein, The greate`,`Try to imagine, plan will be automatic, knowledge will follow and a legacy you will leave`,new Date(2020,1,12)),
    new Quote(4,`"We have to stop optimizing for programmers and start optimizing for users."
    __ Jeff Atwood`,`More customer, more productivity and the builders will come seeking to fill their pockets`,new Date(2020,11,18)),
    new Quote(5,`"Never trust a computer you can’t throw out a window."
    Steve Wozniak`,`loyalty,fame and press can be bought but trust.`,new Date(2020,2,14)),
    new Quote(6,`"The world won't care about your self-esteem. The world will expect you to accomplish something BEFORE you feel good about yourself."
    __Bill Gates`,`Respect is not offered,dont care about your name care of what you produce and all will remember your name`,new Date(2020,3,14)),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

  toggleDescription = (index) => {
    this.quotes[index].showDescription = !this.quotes[index].showDescription
    // console.log(this.quotes[index].showDescription)
  }
  
}

