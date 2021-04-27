## Problema

Você precisa criar um cadastro de projetos com a data de início e data final para a entrega, esse projeto pode ter 1 ou N atividades que também precisam ser cadastradas com as datas de início e data de fim. Após ter feito todos os cadastros precisamos saber quantos % dos projetos já temos finalizados e também se o projeto terá atrasos ou não. Para saber a % de andamento do projeto deve ser considerado o número de atividades finalizadas e quantidade de atividades ainda sem finalizar. Para saber se o projeto terá atraso considere a maior data final das atividades e compare com a data final do projeto, se for maior que a data final, o projeto terminará com atrasos. Abaixo segue exemplo das tabelas para cadastros.

### Tecnologias usadas

![image](https://img.shields.io/badge/Quasar-blue.svg)
![image](https://img.shields.io/badge/laravel-red.svg)

## Logica da aplicação

Em `routes/web.php` é definido as rotas do backend que direcionam para `app/Http/controller/Projetos.php` e `app/Http/controller/Atividades.php` que usa `app/models/AtividadesModels.php` e `app/models/ProjetoModels.php` para interagir com o banco de dados,a estrutura do banco esta na pasta raiz em `mysql.sql`.O build do projeto importa o projeto `quasar` para o arquivo `resources/views/app.blade`.
O projeto `quasar` esta em `/quasarapp`,lá é definido as rotas para as paginas em `src/router/routes.js`,lá o grupo de rotas define um layout que está em `src/layouts/MainLayout.js` que nesse casso define o header de todas as paginas.Em `src\pages` estão salvos as paginas que usam os componentes que estão em `src/components`.
A conecxão do quasar com o laravel é feito via axios definido em `src/tools/axios.js`.

## executar

com o laravel e o NPM instalado conecte o banco de dados `mySql` com as tabelas de `mysql.sql` em .env, execute o comando `npm run server`,ele será executado em `http://127.0.0.1:8000`

## Funcionalidades

-   [x] Mostrar projetos
-   [x] Novo Projeto
-   [x] Editar Projeto
-   [x] Apagar Projeto
-   [x] Porcentagem finalizada dos projetos
-   [x] Porcentagem individual de conclusão dos projetos
-   [x] Data inicial e final dos projetos
-   [x] Projeto Finalizado
-   [x] Projeto Atrasado
-   [x] Descrição do Projeto

*   [x] Mostrar atividade
*   [x] Nova atividade
*   [x] Editar atividade
*   [x] Apagar atividade
*   [x] Verificação de datas
