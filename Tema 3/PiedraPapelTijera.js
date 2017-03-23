// funcion para obtener un valor aleatorio de un array
// var rand = myArray[Math.floor(Math.random() * myArray.length)];


class PiPaTi {
    constructor(elecJugador){
        
        this.pipati = ["piedra", "papel", "tijera"];
        
        this.elecpipati = this.pipati[Math.floor(Math.random() * this.pipati.length)];
        
        if (elecJugador == this.elecpipati){
           console.log("empate");
        }
        
        // comprobar si gana jugador
        else if (elecJugador == "piedra" && this.elecpipati == "tijera"){
            
            console.log("Ganas");
        }
        
        else if (elecJugador == "papel" && this.elecpipati == "piedra"){
            
            console.log("Ganas");
        }
        
        else if (elecJugador == "tijera" && this.elecpipati == "papel"){
            
            console.log("Ganas");
        }
        
        // comprobar si gana juego
        else if (this.elecpipati == "piedra" && elecJugador == "tijera"){
            
            console.log("Pierdes");
        }
        
        else if (this.elecpipati == "papel" && elecJugador == "piedra"){
            
            console.log("Pierdes");
        }
        
        else if (this.elecpipati== "tijera" && elecJugador == "papel"){
            
            console.log("Pierdes");
        }
    }
}

