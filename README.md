# Chatbot-pizzaria 
Repositório para uma API de estudos do estágio TAKE Blip + json do chatbot 
# Entrega da última avaliação.

Explicação do fluxo do chatbot *considerado os blocos mais importantes*:
# Bloco Boas vindas: 
- Contém um script de saudação: cumprimenta o usuário de acordo com a hora;
- Contém um script para gerar um UUID - Identificador único universal: neste caso é utilizado para a requisição de fechar pedidos e como "protocolo" para acessar um pedido feito anteriormente;
- Contém a definição da variável paginacao: utilizada para mostrar o cardápio em duas partes.
# Bloco cardápio pizzas 
- Contém uma requisição HTTP Get para mostrar o cardápio;
- Contém um script para mostrar o id, sabor e preço das pizzas de 1-5 (paginação).
# Bloco Sim/script
- Contém um script com uma função p/ mostrar a segunda parde do cardápio 6-10 (paginação);
- _Obs.: Este bloco apresenta um problema => Quando o é escolhida a opção "ver mais opções" no bloco anterior e o usuário é direcionado para este bloco e a pergunta "deseja ver mais opções?" repete mesmo sem ter mais opções para mostrar, então é preciso escolher "não" para selecionar o sabor, caso contrario o bot não entende._ 
# Bloco Pedido: Tomada de decisão
- É neste bloco que usuário informa se deseja adicionar mais itens ao pedido ou não. Se a resposta for "desejo pedir mais um item" vai p/ o bloco adicionar nova pizza, cardápio pizzas e exibe pedido.
- Possui uma requisição HTTP Post que mostra o pedido do usuário que utiliza o UUID, sabor e preço;
# Bloco fechar pedido
- Contém uma requisição HTTP Get para mostrar o pedido utilizando UUID;
- Contém um script que retona as informações do pedido final (sabores e valor).
# Bloco Localização cliente e Bloco Busca Cep
- Estes blocos retornam a localização do cliente
- O usuário informa o cep que é armazenado em uma variável.
- Possui uma requisição HTTP que utiliza o cep informado;
- Contém um scrip para retornar a localização no bot. 
# Bloco Informe seu protocolo e Retorna Pedidos 
- Estes dois blocos foram utilizados para retornar um pedido feito anteriormente;
- O usuário informa o protocolo gerado no bloco de boas vindas, este valor é armazenado em uma variável e por meio de uma req HTTP Get e de um script o pedido feito anteriormente é informado (se existir). 
