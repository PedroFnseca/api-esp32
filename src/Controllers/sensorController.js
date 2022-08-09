import db from '../Services/sensorService.js'
import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

// Rota para inserir dados de sensores no banco de dados
router.post('/insert', [
    body('id_sensor').not().notEmpty().withMessage('id_sensor é obrigatório'),
    body('valor_sensor').not().notEmpty().withMessage('valor_sensor é obrigatório')
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { id_sensor, valor_sensor } = req.body

    try{
        await db.insertSensor({ id_sensor, valor_sensor })
        res.status(200).json({ message: 'Dados inseridos com sucesso' })
    }
    catch(err){
        res.status(500).json({ databaseError: 'Erro ao inserir dados' })
    }
})

// Rota para contar a quantidade de dados inseridos no banco de dados
router.get('/count', async (req, res) => {
    const count = await db.countData()
    res.status(200).json({ count })
})

// Rota para listar todos os dados do banco de dados
router.get('/alldata', async (req, res) => {
    const data = await db.getAll()
    res.status(200).json({ data })
})

export default router