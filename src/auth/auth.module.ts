import { Module } from '@nestjs/common';
import { NatsModule } from '../nats/nats.module';

import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [NatsModule],
})
export class AuthModule {}
