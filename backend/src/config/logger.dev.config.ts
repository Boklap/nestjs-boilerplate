import { LogLevel } from "@nestjs/common"
import { registerAs } from "@nestjs/config"

const logLevels: LogLevel[] = [
    'debug', 
    'error', 
    'fatal', 
    'log', 
    'verbose'
]

export default registerAs('logger.dev', () => ({
    logLevels: logLevels,
    prefix: "DEV",
    timestamp: true,
    color: true
}))