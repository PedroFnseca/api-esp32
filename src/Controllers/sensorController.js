import db from '../Services/sensorService.js'
import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

// Rota para inserir dados de sensores no banco de dados
router.post('/insert', [
    body('id').not().notEmpty().withMessage('id é obrigatório'),
    body('valor').not().notEmpty().withMessage('valor é obrigatório')
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { id, valor } = req.body

    try{
        await db.insertSensor( id, valor)
        res.status(200).json({ Mensagem: 'Dados inseridos com sucesso' })
    } catch(err){
        res.status(500).json({ databaseError: 'Erro ao inserir dados' })
    }
})

// Rota para contar a quantidade de dados inseridos no banco de dados
router.get('/count', async (req, res) => {
    try{
        const count = await db.countData()
        res.status(200).json({ total: count[0].total })
    } catch(err){
        res.status(500).json({ databaseError: 'Erro ao contar dados' })
    }
})

// Rota para listar todos os dados do banco de dados
router.get('/alldata', async (req, res) => {
    try{
    const data = await db.getAll()

    if(data.length === 0){
        res.status(404).json({ Mensagem: 'Não há dados cadastrados' })
    } else {
        res.status(200).json({ Dados: data })
    }

    } catch(err){
        res.status(500).json({ databaseError: 'Erro ao listar dados' })
    }
})

// Deleta todos os dados do banco de dados na tabela tbl_sensor
router.get('/deleteall', async (req, res) => {
    try{
        await db.deleteAll()
        res.status(200).json({ Mensagem: 'Dados deletados com sucesso' })
    }
    catch(err){
        res.status(500).json({ databaseError: 'Erro ao deletar dados' })
    }
})

export default router
