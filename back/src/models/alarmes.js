var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AlarmeSchema = new Schema({
    nomeDevice: String,
    nomeAlarme: String,
    type: Number,
    deviceType: Number,
    serial: String,
    checked: Boolean,
});

module.exports = mongoose.model('Alarme', AlarmeSchema);