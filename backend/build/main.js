"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const process_1 = require("process");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, "../public_html"));
    console.log(process_1.env.PORT);
    await app.listen(parseInt(process_1.env.PORT));
}
bootstrap();
//# sourceMappingURL=main.js.map