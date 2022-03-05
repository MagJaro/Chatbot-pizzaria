const BuscaCep = require('../models/buscaCep')


module.exports = app => {
    
    //retorna o cep do cliente pelo id
    app.get('/cep/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        BuscaCep.busca(id, res)
    })
}