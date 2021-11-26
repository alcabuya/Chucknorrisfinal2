<!-- HTML -->
<template>
  <div id="app">
          <div id="ImgChuck">
            <img  width="100" height="100" src="./assets/Norris.jpg" alt="Chuck">
          </div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">          
          <h1>CHUCK NORRIS CONVERTER</h1>
          <label class="col-sm-2 col-form-label"><b>Ingrese un numero:</b> </label><br>
          <input id="name" v-model="message"> 
          <button v-on:click="myFunctionClick" class="btn btn-success btn-primary" data-bs-toggle="button" autocomplete="off">
            Convertir
          </button>
          <div>
            <br>
            <ol>
              <li><b>Caracter:</b> {{message}}</li>
              
              <li><b>Chuck Norris: {{Chuck_string}}</b> </li>
            </ol>

            </div>
           <h1>CHUCK NORRIS INVERTED CONVERTER</h1>
          <label class="col-sm-2 col-form-label"><b>Ingrese un numero:</b> </label><br>
          <input id="input2" v-model="input2"> 
          <button v-on:click="chuckinv" class="btn btn-success btn-primary" data-bs-toggle="button" autocomplete="off">
            Convertir
          </button>
          <div>
            <br>
            <ol>
              <li><b>Caracter:</b> {{input2}}</li>
              
              <li><b>Chuck Norris: {{Messageconverted}}</b> </li>
            </ol>

            </div>
          
  </div>
</template>


<!-- Java Script-->
<script>
export default {
  data: () => ({
    Binario : 0,
    message: "",
    asciiCode:0,
    hexValue:0,
    NumeroFull:[],
    Numero:0,
    Chuck_1:[],
    Chuck_string: "",
    input2: "",
    Messageconverted : ""

  }),
  methods: {
    myFunctionClick: function () { 
        this.Chuck_1 = [];       
        let dato = this.message;
        this.dato = dato;
        //console.log(dato);
        
        for(let i = 0; i<dato.length;i++){
             this.asciiCode = this.dato.charCodeAt(i);
             this.ChuckFunc();
        }   
        this.Chuck_string = this.Chuck_1.join(' ');
        //this.Chuck_string.replace(',','');
        //console.log(this.Chuck_string);
    },
    ChuckFunc: function () {
        

        this.hexValue = this.asciiCode.toString(16);
        //console.log(this.asciiCode)
        //console.log("0x" + this.hexValue);
        this.Binario = (parseInt(this.hexValue, 16).toString(2)).padStart(8, '0');
         //console.log(this.Binario)
         
        this.Numero =[ 0,0,0,0,0,0,0,0]
        for(let i=0;i<8;i++){
          this.Numero[i] = this.Binario.slice(i,i+1)
        }
        this.NumeroFull= this.Numero
        console.log("Numero Full:",this.NumeroFull)

      // Contador de 0's o 1's
        let contadorz=1,contadoru = 1;
        let contador_acum = [];
        let arreglo = [];
        let Chuck_Local=[];
       

        for(let i=0;i<8;i++){
          if(this.NumeroFull[i+1]==this.NumeroFull[i]){
            if(this.NumeroFull[i]==0 && (this.NumeroFull[i+1]== this.NumeroFull[i])){
              contadorz = contadorz+1;
            }
            else if(this.NumeroFull[i]==0){
              arreglo = contador_acum.push('0',contadorz); 
              contadorz = contadorz+1;
            }
            else if(this.NumeroFull[i]==1 && (this.NumeroFull[i+1]== this.NumeroFull[i])){
              contadoru = contadoru+1;
            }
            else{
              arreglo = contador_acum.push('1',contadoru);
              contadoru = contadoru+1;
            }
          }
          else{
            if(this.NumeroFull[i]=="0"){
              arreglo = contador_acum.push('0',contadorz)
              contadorz=1;
            }
            else{
              arreglo = contador_acum.push('1',contadoru)
              contadoru=1;
            }

          }
        }


        console.log("Acumulado:",contador_acum); 
        var NumeroIt = 0;
        for(let i=0;i<contador_acum.length;i=i+2){
          if(contador_acum[i]== "0"){
               Chuck_Local.push(' 00 ')

          }
          else if(contador_acum[i]=="1"){
                Chuck_Local.push(' 0 ')
          }
          
          for(let j = 0; j < contador_acum[i+1];j++){
              Chuck_Local[NumeroIt]=Chuck_Local[NumeroIt]+'0';
          }
          NumeroIt++;
          
        }
        //console.log("Chuck",Chuck_Local); 
        this.Chuck_1.push(Chuck_Local)
      
    },
    chuckinv: function(){
      //console.log("hola");
      let msgseparate = this.input2.split(' ');
      var binarray =[];
      //conversion to binary
      for(let i =0;i<msgseparate.length;i=i+2){
        if(msgseparate[i]=="00"){
          let ceros = msgseparate[i+1];
          //console.log(ceros.length);
          for(let j =0;j<ceros.length;j++){
              if(ceros[j]== '0'){
                binarray.push('0');
              }
          }
        }
        else if(msgseparate[i]=="0"){
          let unos = msgseparate[i+1];
          //console.log(unos.length);
          for(let j =0;j<unos.length;j++){
              if(unos[j]== '0'){
                binarray.push('1');
              }
          }
        }
      }
      // transforms binary to characters
      var binstring ="";
      let rep =1;
      for(let i  =0; i<binarray.length;i++){
        if(i == 8*rep){
            binstring = binstring  +';'+binarray[i];
            rep ++;
        }else{binstring = binstring  +binarray[i];}
        
      }
      //console.log(binstring);
      this.Messageconverted = this.ToString(binstring);
      
    },
    ToString: function(binaryy){
      var newBin = binaryy.split(";");
      var binCode = [];
      
      for (let i = 0; i < newBin.length; i++) {
          binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
        }
      return binCode.join("")
    }
  }
}
</script>

<!-- CSS -->
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 100px;
  border: 5px solid #1d8354;
  height:auto;
  width: 950px;  
}

#app {
  font-weight: normal;
  background-color: rgb(226, 227, 228);
  color: black;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
h1{
   margin: 0 auto;
   color: #1d8354

;
}

#ImgChuck{

  margin-top:5px ;
  width: 120px;
   color: #1d8354
}

</style>
