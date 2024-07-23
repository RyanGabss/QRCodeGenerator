import qr from "qrcode-terminal"
import chalk from "chalk";

async function handle(err:any, result:any){
    if(err){
        console.log("error on aplication")
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, function(qrCode: any){
        console.log(chalk.green("QR Code gerado com sucesso:\n"))
        console.log(qrCode)
    })
}

export default handle