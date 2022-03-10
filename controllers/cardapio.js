//controlar as rotas

const Cardapios = require('../models/cardapios')

//retorna todos 
module.exports = app => {
    app.get('/cardapio', (req, res) => {
        Cardapios.lista(res)
    })
//retorna um sabor específico pelo id
    app.get('/cardapio/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Cardapios.buscaPorId(id, res)
    })
//adiciona novos sabores
    app.post('/cardapio', (req, res) => {
        const cardapios = req.body

        Cardapios.adiciona(cardapios, res)
    })

//altera valores
    app.patch('/cardapio/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Cardapios.altera(id, valores, res)
    })

//deleta dados
    app.delete('/cardapio/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Cardapios.deleta(id, res)
    })
}