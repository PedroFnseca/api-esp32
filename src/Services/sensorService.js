import dabase from '../Database/connection.js';

// Coleta todos os dados do banco de dados na tabela tbl_sensor
async function getAll(){
    const connection = await dabase.connect()

    const [rows] = await connection.query('SELECT * FROM tbl_sensor')

    connection.end()

    return rows
}

// Insere no banco de dados os valores do sensor
async function insertSensor(data){
    const { id_sensor, valor_sensor } = data

    const connection = await dabase.connect()

    const sql = 'INSERT INTO tbl_sensor(valorSensor, id_sensor, dataHora) VALUES (?, ?, (SELECT NOW()))'

    await conn.query('SET time_zone = "-03:00"')
    await connection.query(sql, [id_sensor, valor_sensor])

    connection.end()
}

// Conta a quantidade de dados inseridos no banco de dados na tabela tbl_sensor
async function countData(){
    const connection = await dabase.connect()

    const [rows] = await connection.query('SELECT COUNT(*) as total FROM tbl_sensor')

    connection.end()

    return rows
}

// Deleta todos os dados do banco de dados na tabela tbl_sensor
async function deleteAll(){
    const connection = await dabase.connect()

    const sql = 'DELETE FROM tbl_sensor'

    await connection.query(sql)

    connection.end()
}

export default {
    getAll,
    insertSensor,
    countData,
    deleteAll
}