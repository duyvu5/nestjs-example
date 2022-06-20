import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {config} from "./config/config";
import {ConfigModule} from "@nestjs/config";
import {FoundationKafkaModule} from "./services/foundationkafka/foundationkafka.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true
    }),
    FoundationKafkaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
