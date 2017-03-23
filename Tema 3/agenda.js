class Contacto {
    constructor(nombre, direccion, telefono, email){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
    
    muestraContacto(){
        
        return "nombre: " + this.nombre + "\n direccion: " + this.direccion + "\n telefono: " + this.telefono + "\n email: " + this.email;
    }
}

class Agenda {
    constructor(){
        this.listaContactos = [];
    }
    
    introducirContacto(nom, dir, tel, em){
        this.listaContactos.push(new Contacto(nom, dir, tel, em));
    }
    
    mostrarContacto(nombuscar){
        for (var i=0; i<this.listaContactos.length; i++){
            if (this.listaContactos[i].nombre == nombuscar){
                return this.listaContactos[i].muestraContacto();
            }
        }
    }
    
    mostrarTodos(){
        for (var i=0; i<this.listaContactos.length; i++){
                console.log(this.listaContactos[i].muestraContacto());
        }
    }
    
    borrarContacto(nombuscar){
        for (var i=0; i<this.listaContactos.length; i++){
            if (this.listaContactos[i].nombre == nombuscar){
                this.listaContactos.splice(i, 1);
                agenda.mostrarTodos();
            }
        }
    }
}

agenda = new Agenda;
agenda.introducirContacto("juan", "granada", 6763456476, "juan@hotmail.com");
agenda.introducirContacto("gustavo", "granada", 7676846476, "guske6@hotmail.com");
agenda.introducirContacto("manolo", "granada", 986756476, "manolo@hotmail.com");