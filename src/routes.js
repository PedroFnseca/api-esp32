import express from 'express'
import sensor from './controllers/sensorController.js'

const router = express.Router()

router.use('/sensor', sensor)

router.use('*', (req, res) => {
    res.status(404).json({Erro404: 'Informe caminhos e métodos conforme a doc.'});
});

export default router