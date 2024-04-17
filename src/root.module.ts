import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BookModule, UserModule],
  controllers: [],
  providers: [],
})

export class RootModule {
  constructor() {
    console.log("App works fine");
  }
}
