import { Controller, Get, Inject, Query } from '@nestjs/common';
import { EmailService } from '@emech/nestjs-common/email';

@Controller()
export class SendEmailController {
  constructor(
    @Inject(EmailService) private readonly emailService: EmailService,
  ) {}

  @Get('/api/send-email')
  async getEmail(
    @Query('subject') subject: string,
    @Query('to') to: string,
  ): Promise<string> {
    await this.emailService.send({
      to,
      html: 'This email is send from my app.',
      subject,
    });
    return 'OK';
  }
}
