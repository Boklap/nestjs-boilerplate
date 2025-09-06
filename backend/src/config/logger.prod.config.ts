import pino, { Level, LoggerOptions, redactOptions } from "pino";
import { registerAs } from "@nestjs/config"

const logLevel: Level = "info";
const timestamp: pino.TimeFn = pino.stdTimeFunctions.isoTime;
const redact: redactOptions = {
    paths: ['req.headers.authorization', 'password', 'token'],
};
const formatters: LoggerOptions['formatters'] = {
    level(label: string, number: number) {
        return { level: label };
    }
};

export default registerAs('logger.prod', () => ({
    logLevel: logLevel,
    timestamp: timestamp,
    redact: redact,
    formatters: formatters,
}))