# Nome Projeto
### Sobre o projeto

<br>

## O que é HTTP? 🤔
> ### Tópico 1
> ### Tópico 2

<br>

| Método | Descrição |
|--------|-----------|
|  POST  |desc método|
|GET     | desc método|
|DELETE| desc método|

<br>

## Como instalar o projeto 📥

### Primeiramente deve-se escolher uma pasta e abri-la pelo terminal em que tenha suporte ao ```GIT``` e executar o seguinte comando:
```bash
git clone https://github.com/pedroFnseca/api-esp32.git
```

### Entre na pasta criada pelo git e digite:
```bash
cd api-esp32
```

### Baixe as dependências do projeto com o seguinte comando:
```bash
npm install
```
### Para executar em modo local, dê o comando:
```bash
node src/index.js
```
<br>

## Métodos disponibilizados ✅
### Nota prévia ⚠️

> ### A sintaxe ```...``` representa a URL base da API, que deve ser substituída dependendo do modo de uso. Neste caso, no qual é uma API hospedada em modo local, o URL é: ```https://localhost:3333```

<br> 

### URL (POST) ```.../sensor/insert``` 
```json
{
    "idSensor": 4,      
    "valorSensor": 80
}
```
### GET 📬

#### 1- Todos os registros com seus valores ```.../sensor/alldata```
#### 2- Números de registros ```.../sensor/count```
#### 3- Apagar todos os registros dos sensores ```.../sensor/deleteall```

<br>

## Está pronto! Boa utilização 😊


<p align = "center">
<img src= "https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>
