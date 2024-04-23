import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RootController } from './root.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BookModule, UserModule, AuthModule, ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : ["environments/.dbSettings.env"]
  }), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      host: configService.get('DB_Host'),
      port: +configService.get<number>('DB_Port'),
      username: configService.get('DB_Superuser'),
      password: configService.get('DB_Password'),
      database: configService.get('DB_Database'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: configService.get<boolean>('DB_Sync'),
    }),
    inject: [ConfigService],
  })],
  controllers: [RootController],
  providers: [],
})

export class RootModule { }
