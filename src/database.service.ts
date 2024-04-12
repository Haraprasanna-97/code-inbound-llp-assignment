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

    // Dynamic route to get details of a speciic record 
    // readOne(@Param('id') id: string): string {
    //     return `This action returns the dedails of record #${id}`;
    // }
}