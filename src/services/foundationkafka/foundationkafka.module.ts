import { Module } from '@nestjs/common';

import { FoundationKafkaService } from './foundationkafka.service';

@Module({
  providers: [FoundationKafkaService],
  exports: [FoundationKafkaService],
})
export class FoundationKafkaModule {}
