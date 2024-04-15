import { Injectable } from "@nestjs/common";
import { book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class bookService {
    public books: book[] = []

    // add book
    addbook(book: book): string {
        book.id = uuidv4()
        this.books.push(book);
        return "Book added successfully";
    }

    // update book
    updatebook(book: book): string {
        let index = this.books.findIndex((currentBook) => {
            return currentBook.id == book.id
        })
        this.books[index] = book
        return "Book updated successfully";
    }

    // delete book
    deletebook(bookid: string): string {
        this.books = this.books.filter((book) => {
            return book.id != bookid
        });

        return "Book deleted successfully";
    }

    // find all books
    findAllbooks(): book[] {
        return this.books
    }
}
