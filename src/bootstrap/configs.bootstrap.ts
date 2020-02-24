import { config } from 'dotenv';
import { ConfigurationModuleBuilder } from '@emech/nestjs-common/configuration';
import { MailgunConfig } from '@emech/nestjs-common/email';

config();

const cmBuilder = new ConfigurationModuleBuilder();

cmBuilder.addConfig(MailgunConfig, {
  apiKey: process.env.MAILGUN_API_KEY,
  defaults: { fromDomain: process.env.MAILGUN_DEFAULT_FROM },
  domain: process.env.MAILGUN_DOMAIN,
});

export const configurationModule = cmBuilder.build();
