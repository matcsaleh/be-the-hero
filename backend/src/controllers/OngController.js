const conections = require('../database/conections');
const crypto = require('crypto');

module.exports = ({
    async create(request, response){
        const {name, email, city, whatsapp, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await conections('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
    
        });
        
        return response.json({ id });
    },
    async index(request, response){
        const ongs = await conections('ongs').select('*');

        return response.json(ongs);

    }
})