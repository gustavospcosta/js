
<h1 align="center"> Javascript MySQL </h1>
<div dir="auto" align="center">
  <br>
  <a target="_blank" rel="noopener noreferrer nofollow" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"><img align="center" alt="Gustavo-VSCode" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" style="max-width: 100%;"></a>
  <a target="_blank" rel="noopener noreferrer nofollow" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"><img align="center" alt="Gustavo-MySQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
</br>
</div>

## Topics
* [Project Description](#project-description) :us:
* [Descrição do Projeto](#descrição-do-projeto) :brazil:

## Project Description
<p align="justify">
This project is designed to interact with a MySQL database for the purpose of managing a contacts system. The underlying database, 'wppInt', consists of a table named 'reply_history', which is designed to store contact information and related reply data. The main functionalities of this project are: creating a connection pool to the MySQL server, inserting reply data into the database, retrieving all contacts from the database, and fetching a single contact based on user number and user name.
</p>

## Code Description
<p align="justify">
The code consists of four asynchronous functions, each serving a distinct role. The `createPool` function establishes a connection pool with the MySQL server using specified configurations. The `insertReplyData` function takes a JSON array as input and inserts each item as a row in the 'reply_history' table. The `getAllContacts` function fetches all contacts from the 'reply_history' table, and groups them by 'user_full_number'. The `getSingleContact` function retrieves a specific contact based on the provided user number and user name. Throughout these functions, various console logs are used for debugging and tracking purposes.
</p>

## Getting Started
<p align="justify"> 
Before starting, ensure that you have Node.js and MySQL server installed on your local machine. This project uses the 'mysql2' package for interacting with the MySQL server, which needs to be installed via NPM (Node Package Manager). Also, ensure that the MySQL server is running and the 'wppInt' database along with the 'reply_history' table is set up correctly. The configuration in the 'createPool' function, such as host, port, user, password, and database name, should be updated to match your own MySQL server setup.
</p>

## Executing Program
<p align="justify"> 
To execute the program, you need to call these asynchronous functions with their required parameters from your main program or command-line tool. Note that, for the `insertReplyData` function, you should provide a JSON array containing the reply data, and for the `getSingleContact` function, you should provide the user number and user name of the contact that you wish to fetch. To run your main program, use the command 'node <your_main_program.js>' in the terminal. Make sure you're in the correct directory where your main program file resides.
</p>

## Author
<p align="justify"> Gustavo de Souza Pessanha da Costa. 
</p>

## License
<p align="justify"> This project is licensed under the MIT license. 
</p>

:small_orange_diamond: :small_orange_diamond: :small_orange_diamond:

## Descrição do Projeto
<p align="justify">
Este projeto foi projetado para interagir com um banco de dados MySQL com o objetivo de gerenciar um sistema de contatos. O banco de dados subjacente, 'wppInt', consiste em uma tabela chamada 'reply_history', que foi projetada para armazenar informações de contato e dados de resposta relacionados. As principais funcionalidades deste projeto são: criar um pool de conexões com o servidor MySQL, inserir dados de resposta no banco de dados, recuperar todos os contatos do banco de dados e buscar um único contato com base no número e nome do usuário.
</p>

## Descrição do código
<p align="justify">
O código é composto por quatro funções assíncronas, cada uma com um papel distinto. A função `createPool` estabelece um pool de conexões com o servidor MySQL usando configurações especificadas. A função `insertReplyData` recebe um array JSON como entrada e insere cada item como uma linha na tabela 'reply_history'. A função `getAllContacts` busca todos os contatos da tabela 'reply_history' e os agrupa por 'user_full_number'. A função `getSingleContact` recupera um contato específico com base no número do usuário e no nome do usuário fornecidos. Em todas essas funções, vários logs do console são usados para fins de depuração e rastreamento.
</p>

## Iniciando
<p align="justify"> 
Antes de começar, certifique-se de que você tem o Node.js e o servidor MySQL instalados em sua máquina local. Este projeto usa o pacote 'mysql2' para interagir com o servidor MySQL, que precisa ser instalado via NPM (Node Package Manager). Além disso, certifique-se de que o servidor MySQL está rodando e que o banco de dados 'wppInt', juntamente com a tabela 'reply_history', está configurado corretamente. A configuração na função 'createPool', como host, porta, usuário, senha e nome do banco de dados, deve ser atualizada para corresponder à sua própria configuração do servidor MySQL.
</p>

## Executando o programa
<p align="justify"> 
Para executar o programa, você precisa chamar essas funções assíncronas com seus parâmetros necessários de seu programa principal ou ferramenta de linha de comando. Observe que, para a função `insertReplyData`, você deve fornecer um array JSON contendo os dados de resposta e, para a função `getSingleContact`, você deve fornecer o número do usuário e o nome do usuário do contato que deseja buscar. Para executar o seu programa principal, use o comando 'node <your_main_program.js>' no terminal. Certifique-se de que você está no diretório correto onde reside o arquivo do seu programa principal.
</p>
## Autor
<p align="justify"> Gustavo de Souza Pessanha da Costa.
</p>

## Licença
<p align="justify"> Este projeto é licenciado sob a licença MIT.
</p>
