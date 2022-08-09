#### Link para acessar api ```https://esp32-willian.herokuapp.com```

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
#### 3- Números de registros ```.../sensor/count```