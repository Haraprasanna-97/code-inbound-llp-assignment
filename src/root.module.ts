import { Module } from '@nestjs/common';
import { CRUDController } from './app.controller';
import { DatabaseService } from './database.service';

@Module({
  imports: [],
  controllers: [CRUDController],
  providers: [DatabaseService],
})

export class RootModule {
  constructor() {
    console.log("App works fine");
  }
}
