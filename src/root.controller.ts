import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";

@Controller("auth")
export class RootController{
    constructor(private readonly authService : AuthService) {}
    // login endpoint
    @Post("/login")
    @UseGuards(AuthGuard("local"))
    logiin(@Request() req) : object {
        let token = this.authService.generateToken(req.user)
        return {
            message : "Login successful",
            "user Token" : token
        }
    }
}