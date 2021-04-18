// const llenarProductos = () => { } Funcion ANONIMA
let facturas = [];
let arregloDetalle = [];

let arregloProductos = [
    {id: 1, nombreProducto: "Producto 1", precio: 100.5},
    {id: 2,nombreProducto: "Producto 2",precio: 52.0},
    {id: 3,nombreProducto: "Producto 3",precio: 16.9},
    {id: 4,nombreProducto: "Producto 4",precio: 25.8}
];

const verificarFacturasLocalStorage = () => {
    const facturasLS = JSON.parse(localStorage.getItem("facturas"));
    if(facturasLS){
        facturas = facturasLS;
    };
};

verificarFacturasLocalStorage();

const llenarProductos = () => {
    arregloProductos.forEach((p) => {
        const option = document.createElement("option");
        option.value = p.id;
        option.innerText = p.nombreProducto;
        selectDescripcion.appendChild(option);
    });
};
llenarProductos();
const getNombreProductoById = (id)=>{
    const objProducto = arregloProductos.find((p) => {
        if(p.id === +id){
            return p;
        };
    });
    return objProducto.nombreProducto;
}

const getPrecioProductoById = (id)=>{
    const objProducto = arregloProductos.find((p) => {
        if(p.id === +id){
            return p;
        };
    });
    return objProducto.precio;
};

//NO recibe nada maneja el array global
const redibujarTabla = () => {
    cuerpoTabla.innerHTML = ""; //evita repetir contenido
    //iteramos el arreglo
    arregloDetalle.forEach((detalle) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${detalle.cantidad}</td>
                          <td>${getNombreProductoById(detalle.descripcion)}</td>
                          <td>${detalle.precioUnitario}</td>
                          <td>${detalle.precioTotal}</td>`;
        
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.innerText = "Eliminar";

        botonEliminar.onclick = () => {
            eliminarDetalleById(detalle.descripcion);
        };        

        tdEliminar.appendChild(botonEliminar);
        fila.appendChild(tdEliminar);
        cuerpoTabla.appendChild(fila);
    });
};

const eliminarDetalleById = (id) => {
    //filtrar los productos distintos al que recibi
    arregloDetalle = arregloDetalle.filter((detalle) => {
        if( +id !== +detalle.descripcion){
            return detalle;
        };
    });
    redibujarTabla();
};

const agregarDetalle = (objDetalle) => {
    //buscar si el objDetalle existe en arregloDetalle
    //de ser así, se suma una vez

    //detalle var local
    const resultado = arregloDetalle.find((detalle) => {
        if( +objDetalle.descripcion === +detalle.descripcion){
            return detalle;
        };
    });
    if(resultado){
        //modificar valores repetidos
        arregloDetalle = arregloDetalle.map((detalle) => {
            //enteros
            if(+detalle.descripcion === +objDetalle.descripcion){
                return {
                    cantidad: +detalle.cantidad + +objDetalle.cantidad,
                    descripcion: detalle.descripcion,
                    precioTotal: (+detalle.cantidad + +objDetalle.cantidad) * +detalle.precioUnitario,
                    precioUnitario: +detalle.precioUnitario
                };
            };
            return detalle;
        }); 
    }else{
        arregloDetalle.push(objDetalle);
    };
    //console.log(objDetalle);
};

formDetalle.onsubmit = (e) => {
    e.preventDefault();
    //Creación objeto detalle
    const objDetalle = {
        cantidad: inputCantidad.value,
        descripcion: selectDescripcion.value, //value referencia de los value del option
        precioUnitario: inputUnitario.value,
        precioTotal: inputTotal.value
    };
    //console.log(objDetalle);

    agregarDetalle(objDetalle);
   
   //console.log(arregloDetalle)
    redibujarTabla();
};

btnGuardar.onclick = () =>{
    //crear objeto cabecera factura
    let objFactura = {
        nombre: inputRazonSocial.value,
        direccion: inputDireccion.value,
        fecha: inputFecha.value,
        numero: inputNum.value,
        ruc: inputRuc.value,
        detalle: arregloDetalle,
    };
    //console.log(objFactura);
    facturas.push(objFactura);
    //limpiar campos
    formCabecera.reset();
    formDetalle.reset();
    
    //localstorage
    localStorage.setItem("facturas", JSON.stringify(facturas));
    //borrar tabla de tbody
    arregloDetalle = [];
    redibujarTabla();
    };

selectDescripcion.onchange = () => {
    
    if(selectDescripcion.value == "0"){
        formDetalle.reset();
        return;
    }
    //Precio Dinamico cuando cambie select
    const precio = getPrecioProductoById(selectDescripcion.value);
    
    if(precio){
        inputUnitario.value = precio;
        calcularTotal();
    }
};

const calcularTotal = () => {
    //entero
    const cantidad = +inputCantidad.value;
    const pUnit = inputUnitario.value;
    const total = cantidad * pUnit;
    inputTotal.value = total.toFixed(2);
};

inputCantidad.onkeyup = () => {
    calcularTotal();
};
inputCantidad.onchange = () => {
    calcularTotal();
};