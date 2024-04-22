import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Users } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService : UserService) {
        super()
    }

    async validate(username : string, password : string) : Promise<Object> {//Promise<Users> {
        let user : Users = await this.userService.findby(username)
        if (user && user.password === password) {
            return {username, password}
            // return user
        }
        else{
            throw new UnauthorizedException()
        }        
    }
}