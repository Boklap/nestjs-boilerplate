import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/config-module.config';
import { DatabaseModule } from './infrastructure/database/db.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    DatabaseModule,
    LoggerModule,
    HealthModule,
  ],
})

export class AppModule {}
