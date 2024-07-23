import permittedCharacters from "./utils/permitted-characters.js";

async function handle(): Promise<string> {
    let characters: string[] = [];
    let password: string = "";

    const passwordLength: number = parseInt(process.env.PASSWORD_LENGTH || '8', 10);
    characters = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;
