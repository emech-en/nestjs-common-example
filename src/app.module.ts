import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendEmailModule } from './send-email/send-email.module';
import { EmailModule, MailgunService } from '@emech/nestjs-common/email';
import { authModule, configurationModule, typeOrmModule } from './bootstrap';
import { RequestTransactionModule } from '@emech/nestjs-common/request-transaction';

@Module({
  imports: [
    typeOrmModule,
    RequestTransactionModule,
    configurationModule,
    EmailModule.forRoot(MailgunService),
    SendEmailModule,
    authModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [typeOrmModule, authModule],
})
export class AppModule {}
