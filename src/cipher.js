const cipher = {
  encode : function(offset, string) {
    let mensajeCifrado = "";               
    for(var i = 0; i <= 1000; i++) {
      var num = string.charCodeAt(0 +i);
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
  decode: function(offset, string) {
  let mensajeDescifrado = "";
  for(var i = 0; i <= 1000; i++) {
    var num = string.charCodeAt(0 +i);
    if(num >=65 && num <=90) {
      var resta = num - 65;
      var residuo = offset % 26;
      if (residuo <= resta){
        var resta2d1 = resta - residuo;
        var numFinal1 = resta2d1 + 65;
        var descifrado1 = String.fromCharCode(numFinal1);
        mensajeDescifrado= mensajeDescifrado.concat(descifrado1);

      } else if (residuo > resta){
        var diferencia = residuo - resta;
        var resta2d2 = 26 - diferencia;
        var numFinal2 = resta2d2 + 65;
        var descifrado2 = String.fromCharCode(numFinal2);
        mensajeDescifrado= mensajeDescifrado.concat(descifrado2);
      }

          
    } else if(num >=97 && num <=122) {
      var restaMinuscula = num - 97;
      var residuoMinuscula = offset % 26;
        if (residuoMinuscula <= restaMinuscula){
        var resta2Minuscula1 = restaMinuscula - residuoMinuscula;
        var numFinalMinuscula1 = resta2Minuscula1 + 97;
        var descifradoMinuscula1 = String.fromCharCode(numFinalMinuscula1);
        mensajeDescifrado= mensajeDescifrado.concat(descifradoMinuscula1);
      } else if (residuoMinuscula > restaMinuscula){
        var diferenciaMinuscula = residuoMinuscula - restaMinuscula;
        var resta2Minuscula2 = 26 - diferenciaMinuscula;
        var numFinalMinuscula2 = resta2Minuscula2 + 97;
        var descifradoMinuscula2 = String.fromCharCode(numFinalMinuscula2);
        mensajeDescifrado= mensajeDescifrado.concat(descifradoMinuscula2);
      }

    } else{
      var simboloDesconocido = String.fromCharCode(num);
      mensajeDescifrado = mensajeDescifrado.concat(simboloDesconocido); 
    }
         
          
  } 

  return mensajeDescifrado;
   
  }
};

export default cipher;

