import { IsInt, IsString } from "class-validator"

export class book {
    id : String
    
    @IsString()
    title : String
    
    @IsString()
    author : String

    @IsInt()
    published: number
}