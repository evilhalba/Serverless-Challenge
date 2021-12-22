# Serverless-Challenge

### Olá, esta é a versão mais avançada infelizmente não funcional de uma integração com o AWS Lambda+RDS(PostgreeSQL)+API Gateway

## 💻 Tecnologias utilizadas

* TypeScript
* Jest
* TypeOrm
* Tsyringe
* ServerLess Framework

## 📝 Conceitos utilizadas
S. Single Responsability Principle
O. Open-Closed Principle
L. Liskov Substitution Principle
I. Interface Segregation Principle
D. Dependency Inversion Principle


## :loudspeaker: Sugestões para a proposta do projeto
Pensando na possibilidade de crescimento do projeto com adição de novas funções(esquecendo que isso é um exercício unicamente para avaliação de conhecimentos), eu não usaria o Lambda para ser o core em específico da aplicação, quem sabe algum micro serviço, um gestor de filas(emissão de nota fiscal assíncrona por exemplo), para o tipo proposto eu faria pensando em algo que vai ter um tráfego mediano os seguintes recursos:
- Servidor de LoadBalance(nginx ou similar)
- Containers rodando a aplicação em si, podendo ter um escalonamento vertical inimaginavel
- Cacheamento de dados que podem vir a ter uma repetição(Elastic Cache)
- O banco de dados eu manteria na RDS(utilizando ainda um postgreSQL)

Claro isso tudo pensando em um projeto que fosse crescer de forma continua, se for apenas um pequeno serviço como o que foi proposto, eu manteria até o projeto mais simplificado que está no link a baixo, até porque o custo de operação de tudo que citei tem uma leve diferença(pra ser sutil) quanto ao custo do Lambda

## 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:
- [ ] Você instalou a versão mais recente do serverless framework
- [ ] Você instalou a versão mais recente do Yarn
- [ ] Você gerou uma RDS(Postgree) na Amazon AWS

## 🚀 Instalando 
Para instalar o projeto, siga estas etapas:
```
yarn 
```
Para o banco de dados funcionar corretamente você precisa após configurar o arquivo `ormconfig.json` executar o seguinte comando:

```
yarn typeorm migrations:run
```

E por ultimo PROMETO kkkkk,
Você precisa configurar a VPC da sua estancia RDS no arquivo `serverless.yml` (ISTO É ESSENCIAL PARA QUE O LAMBDA CONSIGA TER ACESSO LIVRE AO BANCO DE DADOS)

depois disso tudo é so fazer deploy:
```
serverless deploy
```

caso você queria realizar os testes unitarios para ver os resultados:
```
yarn test 
```

![Alt text](https://1drv.ms/u/s!Av0sbFjiOlRngbVQHlohhYDkpJEM4g?e=wbk9XP)

## ☕Muito obrigado pela atenção e aproveite!


