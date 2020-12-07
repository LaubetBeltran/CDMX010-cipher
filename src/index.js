//import cipher from './cipher.js';

//console.log(cipher);

///////////////////////////////////////7 aqui se ivoca toda la funcionalidad que interactua con el dom
// Botón de la página de inicio que lleva a la pantalla input.
function comenzar(){
    location.href= ("#pantallaInput");
    document.getElementById("pantallaInput").style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
}
  

 
// PARA CIFRAR UN MENSAJE
function obtenerMensajeCifrado(){             
  var texto = document.getElementById('mensaje').value;
  var offset = parseInt (document.getElementById('numeroDeCifrado').value);
  let mensajeCifrado = "";               
  for(var i = 0; i <= 1000; i++) {
    var num = texto.charCodeAt(0 +i);
    if(num >=65 && num <=90) {
      var resta = num - 65;
      var suma = resta + offset;
      var residuo = suma % 26;
      var numFinal = residuo + 65;
      var cifrado = String.fromCharCode(numFinal);
          
      mensajeCifrado= mensajeCifrado.concat(cifrado);
    
    } else if(num == 32){
      mensajeCifrado = mensajeCifrado.concat(' ');

    } else if (num == 46){
      mensajeCifrado = mensajeCifrado.concat('.');

    } else if (num == 44){
      mensajeCifrado = mensajeCifrado.concat(','); 

    } else if (num >=97 && num <=122) {
      var restaMinuscula = num - 97;
      var sumaMinuscula = restaMinuscula + offset; 
      var residuoMinuscula = sumaMinuscula % 26;
      var numFinalMinuscula = residuoMinuscula + 97;
      var cifradoMinuscula = String.fromCharCode(numFinalMinuscula);

      mensajeCifrado = mensajeCifrado.concat(cifradoMinuscula);

    } else {
      var simboloDesconocido = String.fromCharCode(num);
      mensajeCifrado = mensajeCifrado.concat(simboloDesconocido); 
    }
  }

      document.getElementById('MensajeCifrado').innerHTML= mensajeCifrado



    //DOM PARA OCULTAR INPUT E IR AL OUPUT CON EL MENSAJE CIFRADO
    location.href = '#outputCifrarMensaje'
    document.getElementById("outputCifrarMensaje").style.display = 'block';
    document.getElementById("pantallaInput").style.display = 'none';

} 

  
  // PARA DESCIFRAR UN MENSAJE
function obtenerMensajeDescifrado() {
  var texto = document.getElementById('mensaje').value;
  var offset = parseInt (document.getElementById('numeroDeCifrado').value);
  let mensajeDescifrado = "";
  for(var i = 0; i <= 1000; i++) {
    var num = texto.charCodeAt(0 +i);
    if(num >=65 && num <=90) {
      var resta = num - 65;
      var residuo = offset % 26;
      if (residuo <= resta){
        var resta2 = resta - residuo;
      } else if (residuo > resta){
        var diferencia = residuo - resta;
            var resta2 = 26 - diferencia;
      }
      var numFinal = resta2 + 65;
      var descifrado = String.fromCharCode(numFinal);
      mensajeDescifrado= mensajeDescifrado.concat(descifrado);
          
    } else if(num >=97 && num <=122) {
      var resta = num - 97;
      var residuo = offset % 26;
      if (residuo <= resta){
        var resta2 = resta - residuo;
      } else if (residuo > resta){
        var diferencia = residuo - resta;
        var resta2 = 26 - diferencia;
      }
      var numFinal = resta2 + 97;
      var descifrado = String.fromCharCode(numFinal);
      mensajeDescifrado= mensajeDescifrado.concat(descifrado);
    } else{
      var simboloDesconocido = String.fromCharCode(num);
      mensajeDescifrado = mensajeDescifrado.concat(simboloDesconocido); 
    }
         
          
  }
    
    document.getElementById('MensajeDescifrado').innerHTML= mensajeDescifrado  
     
    //DOM PARA OCULTAR INPUT E IR AL OUPUT CON EL MENSAJE DESCIFRADO
    location.href = '#outputDescifrarMensaje'
    document.getElementById("outputDescifrarMensaje").style.display = 'block';
    document.getElementById("pantallaInput").style.display = 'none';
}
  
  
//BOTONES PARA VOLVER ESCRIBIR UN MENSAJE NUEVO

  //Botón para  volver al input y limparlo desde la Pantalla outputCifrarMensaje
  function nuevoMensaje1(){
    location.href = "#pantallaInput";
    document.getElementById("pantallaInput").style.display= 'block';
    document.getElementById("outputCifrarMensaje").style.display= 'none';
    document.getElementById("mensaje").value = "";
    document.getElementById("numeroDeCifrado").value = "0";
  }

  // Botón para volver al input y limpiarlo desde la Pantalla outputDescifrarMensaje
  function nuevoMensaje2()
  {
    location.href = "#pantallaInput";
    document.getElementById("pantallaInput").style.display= 'block';
    document.getElementById("outputDescifrarMensaje").style.display= 'none';
    document.getElementById("mensaje").value = "";
    document.getElementById("numeroDeCifrado").value = "0";
  
  }
  // Botón para  volver al input desde la Pantalla navegar1
  function nuevoMensaje3(){
    location.href = "#pantallaInput";
    document.getElementById("navegar1").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  // Botón para  volver al input desde la Pantalla navegar2
  function nuevoMensaje4(){
    location.href="#pantallaInput";
    document.getElementById("navegar2").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  // Botón para  volver al input desde la Pantalla navegar3
  function nuevoMensaje5(){
    location.href="#pantallaInput";
    document.getElementById("navegar3").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }

//MOSTRAR/OCULTAR DE LOS ENLACES DE LA BARRA DE NAVEACIÓN

  //Para mostrar Pantalla navegación 1 ¿qué es el cifrado César?
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
  //Para mostrar Pantalla navegación 2 ¿qué utilidad tiene?
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

  //Para mostrar Pantalla navegación 3 ¿como cifrar o descifrar un mensaje?
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
  


//BOTONES PARA VOLVER AL INICIO
  //Botón para volver al inicio esde las Pantallas Output y borrar información del input
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
    document.getElementById("numeroDeCifrado").value = "0";
  }

  // Botón para volver al inicio desde las patallas de la barra de navegación
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

 //Boton del logo y nombre de la página para refrescar la url 
  function refrescarUrl(){
      location.reload()
  }