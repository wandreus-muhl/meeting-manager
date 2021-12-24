const localStorage = require('localStorage')

exports.listMeetings = (req, res) => {
    const meetings = {
        'titulo': 'Daily - Hellman',
        'data': '2021-12-24',
        'horario': '14:00'
    }
    if(!meetings) {
        res.send({
            'message': 'Não há reuniões agendadas'
        })
    } else {
        res.send({
            'reuniões': meetings 
        })
    }
}