import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggerProvider } from "./logger.provider";

@Module({
    imports: [ConfigModule],
    providers: [LoggerProvider],
    exports: [LoggerProvider]
})

export class LoggerModule {}