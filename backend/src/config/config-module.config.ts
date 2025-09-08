import { ConfigModuleOptions } from "@nestjs/config";
import { join } from "path";
import { envValidationSchema } from "./env.config";
import databaseConfig from "./database.config";
import applicationConfig from "./application.config";
import loggerDevConfig from "./logger.dev.config";
import loggerProdConfig from "./logger.prod.config";
import swaggerConfig from "./swagger.config";

export const configModuleOptions: ConfigModuleOptions<Record<string, any>> | undefined = {
    isGlobal: true,
    envFilePath: join(__dirname, "../../.env.dev"),
    validationSchema: envValidationSchema,
    cache: true,
    load: [
        databaseConfig,
        applicationConfig,
        loggerDevConfig,
        loggerProdConfig,
        swaggerConfig
    ]
}