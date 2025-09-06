import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
