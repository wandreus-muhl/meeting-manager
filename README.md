# Meeting Manager
Gerenciador de reuniões que utiliza JavaScript. Consiste em uma pequena API que armazena e controla os dados no localStorage (utiliza-se uma biblioteca Node). Atividade de JS da trilha de aprendizado - Compass.

## Configuração inicial
Para fazer o uso da aplicação, deve-se clonar o repositório remoto para a sua máquina através do comando:

``git clone https://github.com/wandreus-muhl/meeting-manager-js.git``

Com o repositório clonado, abra-o em um terminal e execute:

``npm install``

Esse comando instalará as dependências da aplicação.

Após isso, copie o conteúdo do arquivo `.env.example` e cole-o em um novo arquivo que deve ser nomeado como `.env`, então substitua as informações pelos valores de sua preferência.

## Funcionalidades
Essa API conta com funcionalidades básicas para o gerenciamento de objetos, dentre elas:

- Listagem de reuniões: através da rota `/meet`, com o método de requisição `GET`, pode-se visualizar todas as reuniões cadastradas durante o período de funcinamento do servidor (caso o mesmo seja reiniciado, também será o localStorage, logo todas as reuniões)
- Adição de reuniões: através da rota `/meet` também é possível adicionar reuniões, entretanto, o método da requisição deve ser `POST`. A API não conta com nenhum modelo de reunião, portanto uma reunião pode ser cadastrada com qualquer informação. Para efeito de testes, as reuniões estavam sendo cadastradas seguindo o seguinte formato:
    ~~~
    {
        "titulo": "Daily - Hellman",
        "data": "2021-12-24",
        "horario": "14:00"
    }
    ~~~
    Após a requisição ser feita, o controlador atribui um ID para a reunião, o qual é a sequência do ID da última reunião cadastrada
- Exclusão de reuniões: essa funcionalidade pode ser realizada através da rota `/meet/:meet_id`, onde `:meet_id` representa o ID da reunião a ser excluída.