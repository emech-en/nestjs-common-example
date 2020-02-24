import { AuthenticationModule } from '@emech/nestjs-common/authentication';

export const authModule = AuthenticationModule.forRoot({
  otp: {
    email: true,
    sms: true,
  },
  password: {
    register: true,
  },
  xing: {
    consumerKey: process.env.XING_CONSUMER_KEY || '651a8ac43a9fd51acd5e',
    signatureSalt:
      process.env.XING_SIGNATURE_SALT ||
      'e6181b09d643fb9cc6e7fdd2358569865e971183',
  },
});
