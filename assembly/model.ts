@nearBindgen
export class Quote {
  quote: string;
  writer: string;

  constructor(quote: string, writer: string) {
    this.quote = quote;
    this.writer = writer;
  }
}
