import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { book } from "../data/book.dto";
import { validate } from "class-validator";

export class bookPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) : Promise<any> {
        // class transformer obj convert class
        let bookClass = plainToInstance(book,value)
        // class validation
        let errors = await validate(bookClass)
        if (errors.length > 0) {
            let errormsgs = [] 
            errors.forEach(error => {
                errormsgs.push(error.constraints);
            });
            throw new BadRequestException(`validation failed\n${JSON.stringify(errormsgs)}`)
        }
        return value
    }

}