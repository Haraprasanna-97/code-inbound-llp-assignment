import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express"

@Injectable()
export class BookGuard implements CanActivate {

    public key : string = "BADGDASESAEDWEE#$a$a#$a";
    canActivate(context: ExecutionContext): boolean {  
        let ctx = context.switchToHttp()
        let req = ctx.getRequest<Request>()        
        if (req.header("key") == undefined) return false
        return (req.header("key") === this.key)
    }
}