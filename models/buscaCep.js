//utilizando axios

const axios = require('axios')
const { send } = require('express/lib/response')
// const buscaCep = require('../controllers/buscaCep')

class BuscaCep {
    busca(cep, res) {
        axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                console.log(response)
                res.json(response.data)
            })
        
    }    
}

    
module.exports = new BuscaCep
