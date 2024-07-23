# Gerador de QR Code e Senhas

Este projeto é uma ferramenta de terminal para gerar QR codes e senhas aleatórias. Utiliza o `chalk` para colorir a saída do terminal e `qrcode-terminal` para gerar QR codes.

## Funcionalidades

- **Gerador de QR Code**: Gera um QR code a partir de um link fornecido.
- **Gerador de Senhas**: Gera senhas aleatórias com base em configurações especificadas (comprimento, inclusão de letras maiúsculas, minúsculas, números e caracteres especiais).

## Requisitos

- Node.js (>= 14.x)

## Instalação

Clone o repositório e instale as dependências:

git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
npm install


## Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis para configurar o gerador de senhas:

UPPERCASE_LETTERS=false
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=8


## Uso

### Gerar QR Code

1. Execute o seguinte comando para iniciar o gerador de QR code:

npm run start


2. Siga as instruções no prompt:
   - Escolha a ferramenta (1 para QR CODE).
   - Digite o link para gerar o QR code.
   - Escolha o tipo de QR code (1 para NORMAL).

### Gerar Senha

1. Execute o seguinte comando para iniciar o gerador de senhas:

npm run start


2. Siga as instruções no prompt:
   - Escolha a ferramenta (2 para PASSWORD).
   - A senha será gerada com base nas configurações no arquivo `.env`.

## Scripts do npm

- **`build`**: Compila o código TypeScript para JavaScript.


- **`start`**: Executa o código JavaScript gerado.


- **`build-and-start`**: Compila o código e executa a aplicação.


## Dependências

- [`chalk`](https://www.npmjs.com/package/chalk): Biblioteca para colorir a saída do terminal.
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal): Biblioteca para gerar QR codes no terminal.

## Contribuição

Se você deseja contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações.
3. Faça commit das suas alterações.
4. Envie um pull request para o branch principal.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver dúvidas ou sugestões, entre em contato através do email: ryan.gmnascimento@gmail.com.
