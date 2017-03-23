class Contacto {
    constructor(nombre, direccion, telefono, email){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
    
    muestraContacto(){
        
        return "nombre: " + this.nombre + "dirección" + this.direccion + "telefono" + this.telefono + "email" + this.email;
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
        for (i=0; i<this.listaContactos.length; i++){
            if (this.listaContactos[i].nombre == nombuscar){
                this.listaContactos[i].muestraContacto();
            }
        }
    }
    
    mostrarTodos(){
        //
    }
    
    borrarContacto(){
        //
    }
}

agenda = new Agenda;