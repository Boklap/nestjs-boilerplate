import { ConsoleLoggerOptions, Injectable, LogLevel } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BaseLogger } from "src/common/abstract/logger.abstract";

@Injectable()
export class AppLogger extends BaseLogger {
    constructor(configService: ConfigService) {
        const loggerOptions: ConsoleLoggerOptions = {
            logLevels: configService.get<LogLevel[]>('logger.dev.logLevels'),
            prefix: configService.get<string>('logger.dev.prefix'),
            timestamp: configService.get<boolean>('logger.dev.timestamp'),
            colors: configService.get<boolean>('logger.dev.colors')
        }

        super(AppLogger.name, loggerOptions);
    }
}