import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { bookService } from "./book.service";
import { book } from "./data/book.dto";
import { bookPipe } from "./custom pipes/book.pipe";

@Controller("Book")
export class BookController{
    constructor(private bookService : bookService) {}
    // create
    @Post("/add")
    addbook(@Body(new bookPipe()) book : book) : String {
        return this.bookService.addbook(book)
    }

    // read
    @Get("/findAll")
    getAllBooks() : book[]{
        return this.bookService.findAllbooks()
    }

    // update
    @Put("/update")
    updateBook(@Body() book : book) : String {
        return this.bookService.updatebook(book)
    }

    // delete
    @Delete('/delete/:id')
    findOne(@Param('id') bookId: string): string {
        return this.bookService.deletebook(bookId)
    }
}