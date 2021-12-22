# Serverless-Challenge

### Olá, esta é a versão mais avançada infelizmente não funcional de uma integração com o AWS Lambda+RDS(PostgreeSQL)+API Gateway

## 💻 Tecnologias utilizadas

* TypeScript
* Jest
* TypeOrm
* Tsyringe
* ServerLess Framework

## 📝 Conceitos utilizadas

## :loudspeaker: Sugestões para a proposta do projeto

## 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:
- [ ] Você instalou a versão mais recente do serverless framework
- [ ] Você instalou a versão mais recente do Yarn
- [ ] Você gerou uma RDS(Mysql) na Amazon AWS

## 🚀 Instalando 
Para instalar o projeto, siga estas etapas:
```
yarn 
```
Para o banco de dados funcionar corretamente você precisa após configurar o arquivo `ormconfig.json` executar o seguinte comando:

```
yarn typeorm migrations:run
```

Você precisa configurar o arquivo que está no diretorio src do projeto que se chama `MysqlConnector.js` 

E por ultimo PROMETO kkkkk,
Você precisa configurar a VPC da sua estancia RDS no arquivo `serverless.yml` (ISTO É ESSENCIAL PARA QUE O LAMBDA CONSIGA TER ACESSO LIVRE AO BANCO DE DADOS)

depois disso tudo é so fazer deploy:
```
serverless deploy
```

## ☕Aproveite, caso queira ver o projeto em ação utilize as seguintes URLs!


