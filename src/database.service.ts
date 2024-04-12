import { Injectable } from "@nestjs/common"

@Injectable()
export class DatabaseService{
    create(): string {
        return "This will create a record"
    }

    // read
    read(): string {
        return "This will get all records"
    }

    // update
    update(): string {
        return "This will update a record"
    }

    // delete
    delete(): string {
        return "This will delete a record"
    }

    readOne(id: string): string {
        return `This will show the dedails of record #${id}`;
    }
}