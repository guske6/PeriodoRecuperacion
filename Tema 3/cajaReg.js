class Empleado {
    constructor (id, nombre, direccion, descuento) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.descuento = descuento;
    }
    
    muestraEmpleado(){
        
        return "id: " + this.id + "\n nombre: " + this.nombre + "\n direccion: " + this.direccion + "\n descuento: " + this.descuento + "%"; 
    }
}

class Producto {
    constructor(nombreProducto, precio){
        this.articulo = nombreProducto;
        this.precio = precio; 
    }
    
    muestraProducto(){
        
        return "producto: " + this.articulo + "\n precio: " + this.precio + "€";  
    }
}

class CajaRegistradora {
    
    
    constructor(){
        this.listaEmpleados = [];
        this.listaProductos = [];
        this.activa = false;
        this.empactivo = "";
        this.total = 0;
        this.cuentaActiva = false;
    }
    
    introducirEmpleado(id, nom, dir, desc){
        this.listaEmpleados.push(new Empleado(id, nom, dir, desc));
    }
    
    mostrarEmpleados(){
        for (var i=0; i<this.listaEmpleados.length; i++){
            
            console.log(this.listaEmpleados[i].muestraEmpleado());
        }
    }
    
    introducirProducto(nomprod, prec){
        if (this.empactivo){
            this.listaProductos.push(new Producto(nomprod, prec));
        }
        
        else{
            console.log("no hay ningun empleado activo en esta caja");
        }
    }
    
    mostrarProductos(){
        for (var i=0; i<this.listaProductos.length; i++){
            
            console.log(this.listaProductos[i].muestraProducto());
        }
    }
    
    identificarEmpleado(idem){
        for (var i=0; i<this.listaEmpleados.length; i++){
            if (this.listaEmpleados[i].id == idem){
                this.activa = true;
                this.empactivo = this.listaEmpleados[i].nombre;
                console.log("El empleado: " + this.empactivo + " se ha registrado ");
            }
        }
    }
    
    iniciarCuenta(){
        if (this.empactivo){
            this.cuentaActiva = true;
        }
        
        if (this.cuentaActiva){
            
        }
    }
    
    finalizarCuenta(){
        
    }
}

micaja = new CajaRegistradora();
micaja.introducirEmpleado(1, "Gustavo", "granada", 10);
micaja.introducirEmpleado(2, "Juan", "granada", 5);
micaja.introducirEmpleado(3, "Diana", "granada", 15);

micaja.identificarEmpleado(2, "Juan");

micaja.introducirProducto("pañuelos", 0.94);
micaja.introducirProducto("pipas", 1.10);
micaja.introducirProducto("barra de pan", 0.45);