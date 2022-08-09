#### Link para acessar api ```https://api-esp32.herokuapp.com```

<br>

> ## Inserir dados dos sensores 🌱
> ### URL (POST) 

#### ```.../sensor/insert```

#### Body JSON

    {
        "idSensor": 4,      
        "valorSensor": 80,
        "key": "valueKey"
    }

<br>

> ## Coletando dados dos sensores 🌱
> ### URL (GET)

#### 1- Todos os registros com seus valores ```.../sensor/allData```
#### 2- Todos os registros do id (parâmetro adicional "idSensor") ```.../sensor/allDataId```
#### 3- Números de registros ```.../sensor/allDataCount```
#### 4- Ultimos registros (parametro adicional "last" = número de registros) ```.../sensor/lastData```