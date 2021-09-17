module.exports = class Alarme{
    
    async show( req, res){
        const Alarme = require('../models/alarmes')
        
        Alarme.find(function (error, alarmes) {
            if (error)
                res.send('Erro ao tentar Selecionar Todos os alarmes...: ' + error);

            res.json(alarmes);
        });
    }
     async showFilter( req, res){
        const Alarme = require('../models/alarmes')
        const alarmes = await Alarme.find({deviceType:req.params.deviceType, type:req.params.type})       
        res.json(alarmes);
       
    }
    async showFilterDevice( req, res){
        const Alarme = require('../models/alarmes')
        const alarmes = await Alarme.find({deviceType:req.params.deviceType})       
        res.json(alarmes);
       
    }
    async showFilterType( req, res){
        const Alarme = require('../models/alarmes')
        const alarmes = await Alarme.find({type:req.params.type})       
        res.json(alarmes);
       
    }
    async index( req, res){
        let { page = 1 } = req.query; 
       if(page == ''){
        page = 1;
    }
        let count = 1*(page -1);
        const Alarme = require('../models/alarmes')
        const alarmes = await Alarme.find().limit(5).skip(count).sort({_id:-1})
       
        res.json(alarmes)
    }
    async create( req, res){
        const Alarme = require('../models/alarmes')
        var alarme = new Alarme();        
        alarme.nomeDevice = req.body.nomeDevice;
        alarme.nomeAlarme = req.body.nomeAlarme;
        alarme.type = req.body.type;
        alarme.deviceType = req.body.deviceType;
        alarme.serial = req.body.serial;
        alarme.checked = req.body.checked;

        alarme.save(function (error) {
            if (error)
                res.send('Erro ao tentar salvar o Alarme....: ' + error);

            res.json({ message: 'Alarme Cadastrado com Sucesso!' });
        });
    }
   
    async delete( req, res){
        const Alarme = require('../models/alarmes')
        Alarme.remove({
            _id: req.params.alarme_id
        }, function (error) {
            if (error)
                res.send("Id do Alarme não encontrado....: " + error);

            res.json({ message: 'Alarme Excluído com Sucesso!' });
        });
    }


}