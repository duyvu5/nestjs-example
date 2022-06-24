import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/config';
import { ConfigModule } from '@nestjs/config';
import { PostgresqlModule } from './services/postgresql/postgresql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    PostgresqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
