//criar tabelas

class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarCardapios()
    }

    criarCardapios(){
        const sql = 'CREATE TABLE IF NOT EXISTS cardapios (id int NOT NULL AUTO_INCREMENT, sabor varchar(50) NOT NULL, preco varchar(20) NOT NULL, descricao text, PRIMARY KEY(id))'
        
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela Cardapios criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas