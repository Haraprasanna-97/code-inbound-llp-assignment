import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DatabaseService } from "./database.service";

@Controller("CRUD")
export class CRUDController {

    constructor(private DBService : DatabaseService) {}

    // create
    @Post("/create")
    create(): string {
        return this.DBService.create()
    }

    // read
    @Get("/read")
    read(): string {
        return this.DBService.read()
    }

    // update
    @Put("/update")
    update(): string {
        return this.DBService.update()
    }

    // delete
    @Delete("/delete")
    delete(): string {
        return this.DBService.delete()
    }
    
    @Get('/read/:id')
    readOne(@Param('id') id: string): string {
        return this.DBService.readOne(id);
    }
}