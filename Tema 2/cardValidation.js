function validationCard(cardNumber){
    
    var str = cardNumber;
    var numbers = str.replace(/-/g , "");
    
    var resultado = {valid:true, CardID:cardNumber, error:"sin errores"};
    
    if (isNaN(numbers)){resultado.valid = false; 
                        resultado.error = "contiene algun caracter no numerico"; 
                        return resultado;}
    
    if (numbers.length == 16){
        var acaba = false;
        var indice = 0;
        
        while (indice < numbers.length-1 && !acaba){
            
            firstNumber = numbers[indice];
            secondNumber = numbers[indice+1];
            indice += 1;
            
            if (firstNumber != secondNumber){
                acaba = true;
            }
            
        } if ( acaba == false ) {resultado.valid = false; 
                                 resultado.error = "todos los numeros son iguales"; 
                                 return resultado;}
        
          else {
              numfinal = numbers[numbers.length-1];
              if ( numfinal%2 != 0 ){
                  resultado.valid = false;
                  resultado.error = "el ultimo numero no es par";
                  return resultado;
              }
            
              var sumanums = 0;
              
          }for (n in numbers){
              
              sumanums = parseInt(numbers[n]) + sumanums;
             
          }
            if (sumanums < 16){
                resultado.valid = false;
                resultado.error = "la suma de los numeros no es superior a 16"
                return resultado;
            } else {return resultado;}
        
    } else {
        resultado.valid = false;
        resultado.error = "No contiene 16 caracteres de longitud"
        return resultado;}
    
}