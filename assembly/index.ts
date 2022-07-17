import { Context, PersistentVector } from 'near-sdk-as';

import { Quote } from './model';

@nearBindgen
export class Contract {
  public quotes: PersistentVector<Quote> = new PersistentVector<Quote>('q');

  @mutateState()
  addQuote(quote: string): Quote {
    let writer: string = Context.sender;

    let q = new Quote(quote, writer);

    this.quotes.push(q);
    return q;
  }

  fetchQuotes(): Array<Quote> {
    let Qs = new Array<Quote>(this.quotes.length);
    // loop over the vector and copy the elements to the array
    for (let i = 0; i < this.quotes.length; i++) {
      Qs[i] = this.quotes[i];
    }
    return Qs;
  }
}
