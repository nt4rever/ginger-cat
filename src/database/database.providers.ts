import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const defaultConnection = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get('DB_HOST'),
  port: config.get('DB_PORT'),
  username: config.get('DB_USERNAME'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_DATABASE'),
  autoLoadEntities: config.get('TYPEORM_AUTOLOAD') == 'true',
  synchronize: config.get('TYPEORM_SYNCHRONIZE') == 'true',
  logging: config.get('TYPEORM_LOGGING') == 'true',
});

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [],
    useFactory: defaultConnection,
    inject: [ConfigService],
  }),
];
