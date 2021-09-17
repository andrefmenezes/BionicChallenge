<template>
  <main class="alarmes">
    <div class="lista bg-white radius">
      <div class="filtro">
        <select name="tipoAlarme" id="tipoAlarme" v-on:blur="filtro">
          <option disabled selected style="display: none" value="">
            Tipo de alarme
          </option>
          <option value="1">
            1
          </option>
           <option value="2">
            2
          </option>
           <option value="3">
            3
          </option>
           <option value="4">
            4
          </option>
           <option value="5">
            5
          </option>
        </select>
        <select name="tipoDispo" id="tipoDispo" v-on:blur="filtro">
          <option disabled selected style="display: none" value="">
            Tipo de dispositivo
          </option>
          <option value="1">
            1
          </option>
           <option value="2">
            2
          </option>
           <option value="3">
            3
          </option>
           <option value="4">
            4
          </option>
           <option value="5">
            5
          </option>
        </select>
      </div>
      <div class="tb">
        <table id="tbl" border="1">
          <thead>
            <tr>
              <th>Device</th>
              <th class ="none">Device Type</th>
              <th>Alarm</th>
              <th class ="none">Type</th>
              <th class ="none">Serial</th>              
              <th>Checked</th>
              
            </tr>
          </thead>

          <tbody>
            <tr v-for="alarme of alarmes " :key="alarme._id">
              <td>{{alarme.nomeDevice}}</td>
              <td class ="none" >{{alarme.deviceType}}</td>
              <td>{{alarme.nomeAlarme}}</td>
              <td class ="none">{{alarme.type}}</td>
              <td class ="none">{{alarme.serial}}</td>
              <td>{{alarme.checked}}</td>
            </tr>
           
            
          </tbody>
        </table>
      </div>
      <div class="btn">
        <button @click="decrement()">Back</button>
        <button @click="increment()">Next</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  props: {},
  data() {
    return {
      alarme: {
        _id: "",
        nomeDevice: "",
        nomeAlarme: "",
        type: "",
        deviceType: "",
        serial: "",
        checked: ""
        
      },
      alarmes: [],
      page: 1,
     
     
    };
  },
    mounted() {
    this.listar();
   this.atualiza();
  },
methods: {
   async listar() {  
     const response =  await axios.get(
          `http://localhost:8082/alarme?page=${this.page}`
        )
        
        this.alarmes = response.data;    
        
        return response.data       
          
    },
    atualiza: async function(){
       
this.alarmes= setInterval(() => {
        this.listar()
    },1000);
       
    
},
increment(){  
  if(this.alarmes.length < 5 ){
    this.page --;
    this.listar();  
  }
 this.page ++;
  this.listar();  
},
decrement(){
    this.page --;
    this.listar();
     if(this.page <= 0){
     this.page = 1 ; 
   }
 },
   filtro: async function(){
     var deviceType = document.getElementById("tipoDispo").value;  
     var type = document.getElementById("tipoAlarme").value; 
 if(deviceType && !type){
const response =  await axios.get(
          `http://localhost:8082/alarmFilterDeviceType/${deviceType}`
        )
        
        this.alarmes = response.data;  
 }else if(type && !deviceType){
const response =  await axios.get(
          `http://localhost:8082/alarmFilterType/${type}`
        )
        
        this.alarmes = response.data;  
 }else if(type && deviceType){
const response =  await axios.get(
          `http://localhost:8082/alarmFilter/${deviceType}/${type}`
        )
        
        this.alarmes = response.data;  
 }

       
    
},
},

};


</script>

<style>
.bg-white {
  background-color: white;
}
.radius {
  border-radius: 7px;
}
.alarmes {
  width: 100%;
  float: left;
  padding: 3% 4%;
  text-align: center;
  min-height: 60vh;
}
.lista {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}
.tb {
  background-color: white;
  padding: 64px;
  margin: 0 auto;
  margin-top: 0px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tb table,
th,
td {
  border: 1px solid #a5a19e;
  border-collapse: collapse;
}
.tb th,
td {
  color: #e68232;
  padding: 15px;
}
.tb th {
  text-align: center;
}
.tb table {
  border-spacing: 5px;
}
.filtro {
  justify-content: end;
  display: flex;
  flex-direction: row;
  padding-right: 10px;
}
.btn {
  /* margin-left: 57%; */
}
.btn button {
  width: 113px;
  height: 30px;
  border: 4px solid #e68232;
  background: #645a50;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  margin-right: 5%;
}
@media screen and (max-width: 736px){
      
      .none{                     
            display:none;
                
                          
       
      }
     
    }
</style>
