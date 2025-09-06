import { ConfigService } from "@nestjs/config";
import { BaseLogger } from "src/common/abstract/logger.abstract";
import { AppLogger } from "./logger.dev";
import { ProdLogger } from "./logger.prod";

export const LoggerProvider = {
    inject: [ConfigService],
    provide: BaseLogger,
    useFactory: (configService: ConfigService): BaseLogger => {
      const stage = configService.get<string>("app.stage");
      return stage === "development"
        ? new AppLogger(configService)
        : new ProdLogger(configService);
    },
};