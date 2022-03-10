//criar tabelas

class Tabelas {
    init(conexao) {
        this.conexao = conexao

        // this.criarCardapio()
    }

    // criarCardapio(){
    //     const sql = 'CREATE TABLE IF NOT EXISTS cardapio (id int NOT NULL AUTO_INCREMENT, sabor varchar(50) NOT NULL, preco varchar(20) NOT NULL, descricao text, PRIMARY KEY(id))'
        
    //     this.conexao.query(sql, (erro) => {
    //         if(erro){
    //             console.log(erro)
    //         } else {
    //             console.log('Tabela Cardapio criada com sucesso')
    //         }
    //     })
    // }
}

module.exports = new Tabelas