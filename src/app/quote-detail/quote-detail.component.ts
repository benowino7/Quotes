import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
// import { link } from 'fs';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  likeQuo = () => {
    document.getElementById('display').addEventListener('click', () => { like(1); });
    document.getElementById('dislike').addEventListener('click', () => { like(0); });
    function like(lk) {
      var likes, dlikes;


      likes = parseInt(document.getElementById('lk').innerText);
      dlikes = parseInt(document.getElementById('dlk').innerText);
      if (lk == 0) { dlikes ++; }
      else { likes ++; }
      if (likes <= 0) { likes = 0; } if (dlikes <= 0) { dlikes = 0; }
      document.getElementById('lk').innerText = likes;
      document.getElementById('dlk').innerText = dlikes;
    }
  }
  


  ngOnInit() {
  }

}
