// const cardapio = require('../controllers/cardapio')
const conexao = require('../infraestrutura/conexao')

class Pedido {
    adiciona(pedido, res) {
        const sql = 'INSERT INTO pedido SET ?'

        conexao.query(sql, pedido, (erro, resultados) => {
            if(erro){
            res.status(400).json(erro)
            } else {
                res.status(201).json({pedido})
            }
        })
    }

    buscaPorId(uuid, res) {
        const sql = `SELECT * FROM pedido WHERE uuid="${uuid}"`

        conexao.query(sql, (erro, resultados) => {
            const pedido = resultados
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(pedido)
            }
        })
    }

}

    
module.exports = new Pedido