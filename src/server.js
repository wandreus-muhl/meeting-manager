// Importando dependências
require('dotenv').config
const express = require('express')

// Configurando app
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Importando rotas
// const routes = require('./routes')
// app.use(routes)

// Iniciando servidor
app.listen(process.env.API_PORT || 3000, () => {
    console.log('🚀 - Servidor rodando na porta', process.env.API_PORT || 3000)
})

// Rota de teste
app.get('/', (req, res) => {
    res.json({
        message: 'Tá online'
    })
})