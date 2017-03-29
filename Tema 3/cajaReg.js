class Empleado{
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
    constructor(idproducto, nombreProducto, precio){
        this.idproducto = idproducto;
        this.articulo = nombreProducto;
        this.precio = precio; 
    }
    
    muestraProducto(){
        
        return "ID: " + this.idproducto + "\n producto: " + this.articulo + "\n precio: " + this.precio + "€";  
    }
}

class CajaRegistradora {
    
    constructor(){
        this.listaEmpleados = [];
        this.listaProductos = [];
        this.activa = false;
        this.empactivo = "";
        this.empactdesc = 0;
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
    
    introducirProducto(idprod, nomprod, prec){
        if (this.empactivo){
            this.listaProductos.push(new Producto(idprod, nomprod, prec));
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
    
    identificarEmpleado(ident){
        for (var i=0; i<this.listaEmpleados.length; i++){
            if (this.listaEmpleados[i].id == ident){
                this.activa = true;
                this.empactivo = this.listaEmpleados[i].nombre;
                this.empactdesc = this.listaEmpleados[i].descuento;
                console.log("El empleado " + this.empactivo + " se ha registrado ");
            }
        }
    }
    
    agregaArticulo(id, cant){
        var prodPrecio = 0; 
        var artPrecTot = 0;
        
        for (var i=0; i<this.listaProductos.length; i++){
            if (this.listaProductos[i].idproducto == id){
                prodPrecio = this.listaProductos[i].precio;
                console.log ("\n " + this.listaProductos[i].articulo + " se a agregado con: " + cant + " Unidades");
            }
        }
        
        artPrecTot = cant * prodPrecio;
        this.total = artPrecTot + this.total;
    }
    
    iniciarCuenta(){
        if (this.empactivo){
            this.cuentaActiva = true;
            console.log("\n Cuenta iniciada");
        }
        
        if (this.cuentaActiva){
            
        }
    }
    
    finalizarCuenta(){
        this.cuentaActiva = false;
        this.total = this.total - (this.total * (this.empactdesc/100));
        console.log("\n La cuenta es de: " + this.total + "€");
        console.log("\n Le atendió: " + this.empactivo + " con un descuento de: " + this.empactdesc + "%");
        this.total = 0;
    }
}

function cargaEmpleados (){

    micaja.introducirEmpleado(1, "Gustavo", "granada", 10);
    micaja.introducirEmpleado(2, "Juan", "granada", 5);
    micaja.introducirEmpleado(3, "Diana", "granada", 15);

}

function cargaProductos (){
    
    micaja.introducirProducto("1","pañuelos", 0.94);
    micaja.introducirProducto("2","pipas", 1.10);
    micaja.introducirProducto("3","barra de pan", 0.45);
    
}

function iniciaCaja(){
    
    micaja = new CajaRegistradora();
    cargaEmpleados();
    
    if(micaja.activa == false){
        micaja.identificarEmpleado(prompt("\n Indique su ID de Empleado: "));
    }
    
    cargaProductos();
    
    do {
        iniciar = prompt("\n ¿Desea iniciar la venta? si/no");
        if (iniciar == "si"){
            micaja.iniciarCuenta();
        }
    }while(micaja.cuentaActiva == false);
    
    do{
        
        var idArt = prompt("\n Indique id del artículo: ");
        
        if (idArt == "fincuenta"){
            micaja.finalizarCuenta();
            break;
        }
        var cant = parseInt(prompt("\n Indique cantidad: "));
        
        micaja.agregaArticulo(idArt, cant);
        
    }while(micaja.cuentaActiva);
}