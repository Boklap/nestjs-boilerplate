
import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    port: process.env.APP_PORT,
    stage: process.env.STAGE,
    globalPrefix: process.env.GLOBAL_PREFIX
}));