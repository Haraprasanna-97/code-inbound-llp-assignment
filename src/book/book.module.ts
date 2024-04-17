import { Module } from "@nestjs/common";
import { bookService } from "./book.service";
import { BookController } from "./book.controller";
import { AuthService } from "src/auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [AuthModule],
    controllers: [BookController],
    providers: [bookService, AuthService,JwtService],
})
export class BookModule {}