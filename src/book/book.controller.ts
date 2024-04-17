import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request} from "@nestjs/common";
import { bookService } from "./book.service";
import { book } from "./data/book.dto";
import { bookPipe } from "./custom pipes/book.pipe";
import { BookGuard } from "./book.guard";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";

@Controller("Book")
export class BookController{
    constructor(private readonly bookService : bookService, private readonly authService : AuthService) {}

    // create
    @Post("/add")
    @UseGuards(new BookGuard())
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
    @UseGuards(new BookGuard())
    updateBook(@Body(new bookPipe()) book : book) : String {
        return this.bookService.updatebook(book)
    }

    // delete
    @Delete('/delete/:id')
    findOne(@Param('id') bookId: string): string {
        return this.bookService.deletebook(bookId)
    }

    @Post("/login")
    @UseGuards(AuthGuard("local"))
    login(@Request() req) : object {
        let token = this.authService.generateToken(req.user)
        return {
            message : "Login successful",
            userToken : token
        }
    }
}