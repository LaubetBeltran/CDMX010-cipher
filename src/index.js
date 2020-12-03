//import cipher from './cipher.js';

//console.log(cipher);

///////////////////////////////////////7 aqui se ivoca toda la funcionalidad que interactua con el dom

function comenzar(){
    location.href= ("#pantallaInput");
    document.getElementById("pantallaInput").style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
  }
  
  
  
// PARA CIFRAR UN MENSAJE
function obtenerMensajeCifrado(){             
  var texto = document.getElementById('mensaje').value;
  var offset = parseInt (document.getElementById('numeroDeCifrado').value);               
        for(var i = 0; i <= 1000; i++) {
          var num = texto.charCodeAt(0 +i);
          if(num >=65 && num <=90) {
          var resta = num - 65;
          var suma = resta + offset;
          var residuo = suma % 26;
          var numFinal = residuo + 65;
          var cifrado = String.fromCharCode(numFinal);
          var text = document.createTextNode(cifrado); 
          document.getElementById('MensajeCifrado').appendChild(text);

         // document.write(cifrado);  
          } else if(num == 32){
            var espacio = document.createTextNode(" "); 
            document.getElementById('MensajeCifrado').appendChild(espacio);
          } else if (num == 46){
            var punto = document.createTextNode(".");
            document.getElementById('MensajeCifrado').appendChild(punto);
          } else if (num == 44){
            var coma = document.createTextNode(","); 
            document.getElementById('MensajeCifrado').appendChild(coma);
          } else if (num >=97 && num <=122) {
            var restaMinuscula = num - 97;
            var sumaMinuscula = restaMinuscula + offset;
            var residuoMinuscula = sumaMinuscula % 26;
            var numFinalMinuscula = residuoMinuscula + 97;
            var cifradoMinuscula = String.fromCharCode(numFinalMinuscula);

            var textMinuscula= document.createTextNode(cifradoMinuscula); 
          document.getElementById('MensajeCifrado').appendChild(textMinuscula);
            //document.write(cifradoMinuscula);
          } else {
            var simboloDesconocido = String.fromCharCode(num);
            var textoDesconicido = document.createTextNode(simboloDesconocido);
          document.getElementById('MensajeCifrado').appendChild(textoDesconicido);
            //document.write(simboloDesconocido);
          }
          }



    //DOM PARA OCULTAR INPUT E IR AL OUPUT
    location.href = '#outputCifrarMensaje'
    document.getElementById("outputCifrarMensaje").style.display = 'block';
    document.getElementById("pantallaInput").style.display = 'none';


    //document.getElementById('MensajeCifrado').innerHTML;
  } 

  
  // PARA DESCIFRAR UN MENSAJE
  function obtenerMensajeDescifrado() 
  {
    var mensaje= document.getElementById("mensaje").value;
    var numeroDeCifrado = document.getElementById("numeroDeCifrado").value;
    
    document.getElementById('MensajeDescifrado').innerHTML= mensaje + "   (Número de cifrado:" + numeroDeCifrado + ").";
     
    //alert("Tu mensaje con " + numeroDeCifrado + " desplazamiento(s) de letra(s) está listo: " + mensaje);
  
    location.href = '#outputDescifrarMensaje'
    document.getElementById("outputDescifrarMensaje").style.display = 'block';
    document.getElementById("pantallaInput").style.display = 'none';
  }
  
  
  //BOTONES PARA VOLVER ESCRIBIR UN MENSAJE NUEVO
  function nuevoMensaje1()
  {
    location.href = "#pantallaInput";
    document.getElementById("pantallaInput").style.display= 'block';
    document.getElementById("outputCifrarMensaje").style.display= 'none';
    document.getElementById("mensaje").value = "";
    document.getElementById("numeroDeCifrado").value = "";
  
  
  }
  
  function nuevoMensaje2()
  {
    location.href = "#pantallaInput";
    document.getElementById("pantallaInput").style.display= 'block';
    document.getElementById("outputDescifrarMensaje").style.display= 'none';
    document.getElementById("mensaje").value = "";
    document.getElementById("numeroDeCifrado").value = "";
  
  }
  
  
  
  function mostrarNavegar1(){
    location.href = "#navegar1";
    document.getElementById("navegar1").style.display= 'block';
    document.getElementById("navegar2").style.display= 'none';
    document.getElementById("navegar3").style.display= 'none';
    document.getElementById("outputDescifrarMensaje").style.display= 'none'
    document.getElementById("outputCifrarMensaje").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'none'
    document.getElementById('pantallaInicio').style.display='none';
  
  }
  
  function nuevoMensaje3(){
    location.href = "#pantallaInput";
    document.getElementById("navegar1").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  
  
  function mostrarNavegar2(){
    location.href="#navegar2";
    document.getElementById("navegar2").style.display= 'block'
    document.getElementById("navegar1").style.display= 'none'
    document.getElementById("navegar3").style.display= 'none'
    document.getElementById("outputDescifrarMensaje").style.display= 'none'
    document.getElementById("outputCifrarMensaje").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'none'
    document.getElementById('pantallaInicio').style.display='none';
  
  }
  
  function nuevoMensaje4(){
    location.href="#pantallaInput";
    document.getElementById("navegar2").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  
  
  
  function mostrarNavegar3(){
    location.href="#navegar3";
    document.getElementById("navegar3").style.display= 'block'
    document.getElementById("navegar1").style.display= 'none'
    document.getElementById("navegar2").style.display= 'none'
    document.getElementById("outputDescifrarMensaje").style.display= 'none'
    document.getElementById("outputCifrarMensaje").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'none'
    document.getElementById('pantallaInicio').style.display='none';
  
  }
  
  function nuevoMensaje5(){
    location.href="#pantallaInput";
    document.getElementById("navegar3").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  
  
  function irAInicioClean(){
  
    location.href="#pantallaInicio";
    document.getElementById("pantallaInicio").style.display='block';
    document.getElementById("navegar1").style.display= 'none';
    document.getElementById("navegar2").style.display= 'none';
    document.getElementById("navegar3").style.display= 'none';
    document.getElementById("outputDescifrarMensaje").style.display= 'none'
    document.getElementById("outputCifrarMensaje").style.display= 'none';
    document.getElementById("pantallaInput").style.display= 'none';
    document.getElementById("mensaje").value = "";
    document.getElementById("numeroDeCifrado").value = "";
  }
  function irAInicio(){
  
    location.href="#pantallaInicio";
    document.getElementById("pantallaInicio").style.display='block';
    document.getElementById("navegar1").style.display= 'none';
    document.getElementById("navegar2").style.display= 'none';
    document.getElementById("navegar3").style.display= 'none';
    document.getElementById("outputDescifrarMensaje").style.display= 'none'
    document.getElementById("outputCifrarMensaje").style.display= 'none';
    document.getElementById("pantallaInput").style.display= 'none';
  }
  
  function refrescarUrl(){
      location.reload()
  }