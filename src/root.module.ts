import { Module } from '@nestjs/common';
import { CRUDController } from './app.controller';
import { DatabaseService } from './database.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [CRUDController],
  providers: [DatabaseService],
})

export class RootModule {
  constructor() {
    console.log("App works fine");
  }
}
