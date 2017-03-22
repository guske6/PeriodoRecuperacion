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

// function to reverse a word

function inviertepalabra(palabra){
    var len = palabra.length;
    var npalabra= palabra.split("");
    var ultima = len-1;
    var aux = "";
    
    for (i=0; i<len/2; i++){
        aux = npalabra[i];
        npalabra[i] = npalabra[ultima-i];
        npalabra[ultima-i] = aux;
    }
    return npalabra.join("");
}

//function to reverse a phrase

function inviertefrase(frase){
    var nfrase = frase.split(" ");
    var len = nfrase.length;
    var ultima = len-1;
    var auxf = "";
    
    for (j=0; j<len; j++){
        nfrase[j] = inviertepalabra(nfrase[j]);
    }
    
    for (k=0; k<len/2; k++){
        auxf = nfrase[k];
        nfrase[k] = nfrase[ultima-k];
        nfrase[ultima-k] = auxf;
    }
    return nfrase.join(" ");
}

//function to search the longest word in an array

function encuentraPalabraMayor(palabras){
    var len = palabras.length;
    var mayor = "";
    
    for (i=0; i<len; i++){
        if (palabras[i].length > mayor.length){
            mayor = palabras[i];
        }
    }
    return mayor + "  es la palabra mayor";
}

// funcion para filtar las palabras con mayor longitud que i

function filtraPalabrasMayores(palabras, i){
    var len = palabras.length;
    var mayores = [];
    
    for (j=0; j<len; j++){
        if (palabras[j].length > i){
            mayores.push(palabras[j]);
        }
    }
    return mayores;
}