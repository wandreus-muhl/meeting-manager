const localStorage = require('localStorage')

exports.listMeetings = (req, res) => {
    // Busca as reuniões armazenadas no localStorage
    const meetings = JSON.parse(localStorage.getItem('meetings'))
    if(!meetings) { // Verifica se há reuniões armazenadas
        res.send({
            'message': 'Não há reuniões agendadas'
        })
    } else {
        res.send({
            meetings 
        })
    }
}

exports.addMeetings = (req, res) => {
    // Busca as reuniões guardadas no localStorage
    const meetings = JSON.parse(localStorage.getItem('meetings')) || []

    // Controle do objeto
    const meet = req.body
    meet.id = meetings.length + 1 // Adiciona um ID ao objeto informado

    // Adiciona o corpo da requisição ao array de reuniões
    meetings.push(req.body)

    // Salva o vetor no localStorage
    localStorage.setItem('meetings', JSON.stringify(meetings))

    res.send({
        meetings 
    })
}

