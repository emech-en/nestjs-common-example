import { Module } from '@nestjs/common';
import { SendEmailController } from './send-email.controller';

@Module({
  controllers: [SendEmailController],
})
export class SendEmailModule {}
