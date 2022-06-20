import { KafkaAPI } from '@magyar-bankholding-zrt/data-model-typescript-client';
import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from "@nestjs/config";

import { subscriptions } from '../../handlers/events/subscriptions';

@Injectable()
export class FoundationKafkaService implements OnModuleInit, OnApplicationShutdown {
  constructor(private configService: ConfigService) {}
  private readonly kafka = new KafkaAPI(this.configService.get('kafka'), subscriptions);

  async onModuleInit() {
    await this.kafka.start();
  }

  async onApplicationShutdown() {
    await this.kafka.stop();
  }

  public getKafka(): KafkaAPI {
    return this.kafka;
  }
}
