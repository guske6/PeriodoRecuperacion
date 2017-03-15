function validationCard(cardNumber){
    
    var str = cardNumber;
    
    var numbers = str.replace(/-/g,"");
    
    if (isNaN(numbers)){return false;}
    
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
            
        } if ( acaba == false ) {return acaba;}
        
          else {
              numfinal = numbers[numbers.length-1];
              if ( numfinal%2 != 0 ){
                  return false;
              }
              
          }for (n in numbers){
              
              var sumanums = numbers[n]+ sumanums;
              
              if (sumanums < 16){
                  return false;
              }
              else {return true;}
          }
        
    } else {return false;}
    
}