import cipher from './cipher.js';

console.log(cipher);
console.log(cipher.encode('hola', 10))

///////////////////////////////////////7 aqui se ivoca toda la funcionalidad que interactua con el dom
// Botón de la página de inicio que lleva a la pantalla input.
function comenzar(){
    location.href= ("#pantallaInput");
    document.getElementById("pantallaInput").style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
}
  
document.getElementById('goInput').addEventListener('click', comenzar);
 
// PARA CIFRAR UN MENSAJE
function obtenerMensajeCifrado(){             
  var texto = document.getElementById('mensaje').value;
  var offset = parseInt (document.getElementById('numeroDeCifrado').value);
  const mensaje = cipher.encode(texto, offset);
 
  document.getElementById('MensajeCifrado').innerHTML= mensaje;
  document.getElementById('offsetDeCifrado').innerHTML= "(Número de Cifrado César = " + offset + ").";

    //DOM PARA OCULTAR INPUT E IR AL OUPUT CON EL MENSAJE CIFRADO
    location.href = '#outputCifrarMensaje'
    document.getElementById("outputCifrarMensaje").style.display = 'block';
    document.getElementById("pantallaInput").style.display = 'none';

} 

document.getElementById('cifrarMensaje').addEventListener('click', obtenerMensajeCifrado);

  
  // PARA DESCIFRAR UN MENSAJE
function obtenerMensajeDescifrado() {
  var texto = document.getElementById('mensaje').value;
  var offset = parseInt (document.getElementById('numeroDeCifrado').value);
  const mensaje = cipher.decode(texto, offset);
    document.getElementById('MensajeDescifrado').innerHTML= mensaje;
    document.getElementById('offsetDeDescifrado').innerHTML= "(Número de Cifrado César = " + offset + ").";   
     
    //DOM PARA OCULTAR INPUT E IR AL OUPUT CON EL MENSAJE DESCIFRADO
    location.href = '#outputDescifrarMensaje'
    document.getElementById("outputDescifrarMensaje").style.display = 'block';
    document.getElementById("pantallaInput").style.display = 'none';
}
  
document.getElementById('descifrarMensaje').addEventListener('click', obtenerMensajeDescifrado);
  
//BOTONES PARA VOLVER ESCRIBIR UN MENSAJE NUEVO

  //Botón para  volver al input y limparlo desde la Pantalla outputCifrarMensaje
  function nuevoMensaje1(){
    location.href = "#pantallaInput";
    document.getElementById("pantallaInput").style.display= 'block';
    document.getElementById("outputCifrarMensaje").style.display= 'none';
    document.getElementById("mensaje").value = "";
    document.getElementById("numeroDeCifrado").value = "0";
  }
  document.getElementById('nuevoMensaje1').addEventListener('click', nuevoMensaje1);
 
  // Botón para volver al input y limpiarlo desde la Pantalla outputDescifrarMensaje
  function nuevoMensaje2()
  {
    location.href = "#pantallaInput";
    document.getElementById("pantallaInput").style.display= 'block';
    document.getElementById("outputDescifrarMensaje").style.display= 'none';
    document.getElementById("mensaje").value = "";
    document.getElementById("numeroDeCifrado").value = "0";
  
  }
  document.getElementById('nuevoMensaje2').addEventListener('click', nuevoMensaje2);

  // Botón para  volver al input desde la Pantalla navegar1
  function nuevoMensaje3(){
    location.href = "#pantallaInput";
    document.getElementById("navegar1").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  document.getElementById('nuevoMensaje3').addEventListener('click', nuevoMensaje3);

  // Botón para  volver al input desde la Pantalla navegar2
  function nuevoMensaje4(){
    location.href="#pantallaInput";
    document.getElementById("navegar2").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  document.getElementById('nuevoMensaje4').addEventListener('click', nuevoMensaje4);

  // Botón para  volver al input desde la Pantalla navegar3
  function nuevoMensaje5(){
    location.href="#pantallaInput";
    document.getElementById("navegar3").style.display= 'none'
    document.getElementById("pantallaInput").style.display= 'block';
  }
  document.getElementById('nuevoMensaje5').addEventListener('click', nuevoMensaje5);

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
  document.getElementById('nav1').addEventListener('click', mostrarNavegar1);


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
  document.getElementById('nav2').addEventListener('click', mostrarNavegar2);  

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
  document.getElementById('nav3').addEventListener('click', mostrarNavegar3);
  


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
  document.getElementById('irAInicio1').addEventListener('click', irAInicioClean);
  document.getElementById('irAInicio2').addEventListener('click', irAInicioClean);
 


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
  document.getElementById('irAInicio3').addEventListener('click', irAInicio);
  document.getElementById('irAInicio4').addEventListener('click', irAInicio);
  document.getElementById('irAInicio5').addEventListener('click', irAInicio);

 //Enlace del logo y nombre de la página para refrescar la url 
  function refrescarUrl(){
      location.reload()
  }
  document.getElementById('enlaceDeInicio').addEventListener('click', refrescarUrl);