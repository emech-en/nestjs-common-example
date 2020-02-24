import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AccessTokenEntity,
  OtpAbstractEntity,
  OtpEmailEntity,
  OtpSmsEntity,
  UserBaseEntity,
} from '@emech/nestjs-common/authentication';

export const typeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'mysecretpassword',
  database: process.env.POSTGRES_DB || 'emech_test',
  entities: [
    UserBaseEntity,
    AccessTokenEntity,
    OtpSmsEntity,
    OtpEmailEntity,
    OtpAbstractEntity,
  ],
  synchronize: true,
});
