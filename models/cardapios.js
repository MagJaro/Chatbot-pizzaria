const cardapio = require('../controllers/cardapio')
const conexao = require('../infraestrutura/conexao')

class Cardapio {
    adiciona(cardapio, res) {

        const saborEhValido = cardapio.sabor.length >= 5

        const validacoes = [
            {
                nome: 'sabor',
                valido: saborEhValido,
                mensagem: 'O nome do sabor cadastrado deve ter pelo menos 5 caracteres.'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        } else {
            const sql = 'INSERT INTO Cardapio SET ?'

        conexao.query(sql, cardapio, (erro, resultados) => {
            if(erro){
               res.status(400).json(erro)
            } else {
                res.status(201).json({cardapio})
             }
          })
        }
    }

    lista(res){
        const sql = 'SELECT * FROM Cardapio'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Cardapio WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const cardapio = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(cardapio)
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Cardapio SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores,id})
            }
        })

    }

    deleta(id, res) {
        const sql = 'DELETE FROM Cardapio WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

    
module.exports = new Cardapio