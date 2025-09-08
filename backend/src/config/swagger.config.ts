import { registerAs } from "@nestjs/config";

export default registerAs("swagger", () => ({
    title: "Bokman",
    description: "The Bokman API Description:",
    version: "1.0",
    basePath: "api"
}))