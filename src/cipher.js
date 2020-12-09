const cipher = {
  encode : function(texto, offset) {
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

    return mensajeCifrado;
  },
  decode: function(texto, offset) {
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

  return mensajeDescifrado;
   
  }
};

export default cipher;

