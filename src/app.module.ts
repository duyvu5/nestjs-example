import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {config} from "./config/config";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
    load: [config],
    isGlobal: true
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
