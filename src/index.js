//import cipher from './cipher.js';

//console.log(cipher);

///////////////////////////////////////7 aqui se ivoca toda la funcionalidad que interactua con el dom

function comenzar(){
    location.href= ("#pantallaInput");
    document.getElementById("pantallaInput").style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
  }
  
  
  
  // PARA CIFRAR UN MENSAJE
  function obtenerMensajeCifrado() 
  {
    var mensaje= document.getElementById("mensaje").value;
    //var numeroCifrado= document.getElementById("numeroCifrado");
    //var selecionado = numeroCifrado.value;
    //console.log(typeof selecionado, typeof mensaje);
    var numeroDeCifrado = document.getElementById("numeroDeCifrado").value;
     //document.getElementById("outputMensaje").innerHTML=numeroDeCifrado
    
    document.getElementById('MensajeCifrado').innerHTML=mensaje + "      (Número de cifrado:" + numeroDeCifrado + ").";
  
    //alert("Tu mensaje con " + numeroDeCifrado + " desplazamiento(s) de letra(s) está listo: " + mensaje);
  
    location.href = '#outputCifrarMensaje'
    document.getElementById("outputCifrarMensaje").style.display = 'block';
    document.getElementById("pantallaInput").style.display = 'none';
  
    //document.write("Tu mensaje con " + selecionado + " desplazamiento(s) de letra(s) está listo: " + mensaje);
  
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