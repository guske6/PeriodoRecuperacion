function  max(arr){
    var len = arr.length;
    var max = 0;
    for (i=0; i<len; i++ ){
        num = arr[i];
        if (max < num){
            max = num; 
        }
    }
    return max; 
}

function multiplica(arr){
    var total = 1;
    for (i=0; i<arr.length; i++){
        total = total * arr[i];
    }
    return total;
}

function inviertepalabra(palabra){
    var len = palabra.lenght;
    var ultima = len-1;
    var aux = "";
    
    for (i=0; i<len/2; i++){
        aux = palabra[i];
        palabra[i]=ultima-i;
        palabra[ultima-i]=aux;
    }
    return palabra;
}
