#### Link para acessar api ```https://esp32-willian.herokuapp.com```

<br>

> ## Inserir dados dos sensores 🌱
> ### Método (POST) 

#### ```.../sensor/insert```

#### Body JSON

    {
        "idSensor": 4,      
        "valorSensor": 80
    }

<br>

> ## Coletando dados dos sensores 🌱
> ### Método (GET)

#### 1- Todos os registros com seus valores ```.../sensor/alldata```
#### 2- Números de registros ```.../sensor/count```
#### 3- Apagar todos os registros dos sensores ```.../sensor/deleteall```
