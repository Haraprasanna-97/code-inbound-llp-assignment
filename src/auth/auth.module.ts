import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/user/user.module";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [PassportModule, UserModule, JwtModule.register({
        secret : jwtConstants.secret,
        signOptions : {
            expiresIn : jwtConstants.token_expiry_time
        }
    })],
    controllers: [],
    providers: [LocalStrategy, JwtStrategy, AuthService],
    exports : [AuthService]
})
export class AuthModule {}
