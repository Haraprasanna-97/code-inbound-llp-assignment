import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RootController } from './root.controller';

@Module({
  imports: [BookModule, UserModule, AuthModule],
  controllers: [RootController],
  providers: [],
})

export class RootModule {
  constructor() {
    console.log("App works fine");
  }
}
