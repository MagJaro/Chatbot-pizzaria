const BuscaCep = require('../models/buscaCep')


module.exports = app => {
    
    //retorna o cep do cliente pelo id
    app.get('/cep/:id', (req, res) => {
        let id = req.params.id
        id = id.replace('-', '')
        
        BuscaCep.busca(id, res)
    })
}