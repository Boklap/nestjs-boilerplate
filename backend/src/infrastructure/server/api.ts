import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { ServerConfig } from "src/config/server.config";

export async function startServer() {
    const app = await NestFactory.create(AppModule, ServerConfig);
    const configService: ConfigService = app.get(ConfigService);
    const port = configService.get<number>('app.port')!;
    const globalPrefix = configService.get<string>('app.globalPrefix')!;

    app.setGlobalPrefix(globalPrefix);
    await app.listen(port);

    console.log(`🚀 Server running on ${port}`);
}