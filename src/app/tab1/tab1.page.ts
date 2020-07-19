import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookPage } from '../book/book';

declare var ePub: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  books: {}[];

  constructor(public navCtrl: NavController) {

    this.books = [];

    let book1 = new Book();
    book1.label = "Moby Dick (unpacked)";
    book1.file = "assets/books/moby-dick/";
    this.books.push(book1);

  }

  show(book) {
    console.log('show', book);
     
    let book2 = ePub(book.file);
    book2.renderTo("book"); // TODO We should work with ready somehow here I think
    
    // this.navCtrl.navigateForward('bookPage/book');
  }

}

export class Book {
  label: string;
  file: string;
}