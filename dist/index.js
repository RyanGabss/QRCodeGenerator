import prompt from "prompt";
import * as dotenv from "dotenv";
import promptSchemaMain from "./prompts-schema/schema-main.js";
import createQRCODE from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
async function main() {
    dotenv.config();
    prompt.start();
    prompt.get(promptSchemaMain, async function (err, choose) {
        if (err)
            console.log(err);
        if (choose.select == 1)
            await createQRCODE();
        if (choose.select == 2)
            await createPassword();
    });
}
main();
