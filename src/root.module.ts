import { Module } from '@nestjs/common';
import { CRUDController } from './app.controller';

@Module({
  imports: [],
  controllers: [CRUDController],
  providers: [],
})

export class RootModule {
  constructor() {
    console.log("App works fine");
  }
}
