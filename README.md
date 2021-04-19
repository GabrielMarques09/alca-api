# Alcashop API

## Descrição

Alcashop API é o backend da aplicação Alcashop

## Instalação

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database Migrations

```bash
# gerar uma nova migração sincronizando entidades
$ npm run typeorm migration:generate -- -n Initial <descrição da Migration>

# Sincronizando Database  
$ npm run typeorm migration:run

``

## License

Gabriel Alcântara
