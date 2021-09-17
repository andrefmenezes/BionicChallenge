const axios = require('axios')
const setNomeDevice = (deviceTypeRamdom) =>{
    var NomeDevice = ""
    switch (deviceTypeRamdom) {
        case 1:
            NomeDevice = "Bionic X"
          break;
        case 2:
            NomeDevice = "Bionic S21"
          break;
        case 3:
            NomeDevice = "Bionic Note 10"
          break;
        case 4:
            NomeDevice = "Bionic B2010"
          break;
        case 5:
            NomeDevice = "Bionic B2021"
          break;
        default:
            NomeDevice = ""
      }
      return NomeDevice
}
const setNomeAlarme = (typeRamdom) =>{
    var NomeAlarme = ""
    switch (typeRamdom) {
        case 1:
            NomeAlarme = "Labutar"
          break;
        case 2:
            NomeAlarme = "Academia"
          break;
        case 3:
            NomeAlarme = "Pelada"
          break;
        case 4:
            NomeAlarme = "Surf"
          break;
        case 5:
            NomeAlarme = "Futvolei"
          break;
        default:
            NomeAlarme = ""
      }
      return NomeAlarme
}
setInterval(() => {
    var typeRamdom = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    var deviceTypeRamdom = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    var nomeDevice =  setNomeDevice(deviceTypeRamdom);
    var nomeAlarme =  setNomeAlarme(typeRamdom);
    const data =
    {
        serial: '123456789',
        type: typeRamdom,
        checked: false,
        deviceType: deviceTypeRamdom,
        nomeDevice:nomeDevice,
        nomeAlarme:nomeAlarme
    }

    console.log("SendData", data);

    axios
        .post('http://localhost:8082/alarm', data)
        .then(res => {
            // console.log(`statusCode: ${res.status}`)
            // console.log(res)
        })
        .catch(error => {
            console.error(error)
        })
}, 10000);

