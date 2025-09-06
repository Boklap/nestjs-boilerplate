import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BaseLogger } from "src/common/abstract/logger.abstract";
import pino, { Level, Logger, LoggerOptions, redactOptions } from 'pino';

@Injectable()
export class ProdLogger extends BaseLogger {
    private readonly logger: Logger;

    constructor(configService: ConfigService) {
        super(ProdLogger.name);

        const pinoOptions: LoggerOptions = {
            level: configService.get<Level>('logger.prod.logLevel'),
            timestamp: configService.get<pino.TimeFn>('logger.prod.timestamp'),
            redact: configService.get<redactOptions>('logger.prod.redact'),
            formatters: configService.get<LoggerOptions['formatters']>('logger.prod.formatters')            
        }

        this.logger = pino(pinoOptions, pino.destination(1));
    }

    log(message: any, ...optionalParams: any[]) {
        this.logger.info({ params: optionalParams }, message);
    }

    error(message: any, ...optionalParams: any[]) {
        this.logger.error({ params: optionalParams }, message);
    }

    warn(message: any, ...optionalParams: any[]) {
        this.logger.warn({ params: optionalParams }, message);
    }

    debug(message: any, ...optionalParams: any[]) {
        this.logger.debug({ params: optionalParams }, message);
    }

    verbose(message: any, ...optionalParams: any[]) {
        this.logger.trace({ params: optionalParams }, message);
    }

    fatal(message: any, ...optionalParams: any[]) {
        this.logger.fatal({ params: optionalParams }, message);
    }
}