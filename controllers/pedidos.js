//controlar as rotas

const pedidos = require('../models/pedidos')
const Pedido = require('../models/pedidos')

//retorna todos 
module.exports = app => {
    

//registrar pedidos
    app.post('/pedidos', (req, res) => {
        const valores = req.body
        Pedido.adiciona(valores, res)
    })

    app.get('/pedidos/:uuid', (req, res) => {
        const uuid = req.params.uuid
        Pedido.buscaPorId(uuid, res)
    })
}