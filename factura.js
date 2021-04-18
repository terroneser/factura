const formDetalle = document.getElementById("formDetalle");
const inputCantidad = document.getElementById("inputCantidad");
const selectDescripcion = document.getElementById("selectDescripcion");
const inputUnitario = document.getElementById("inputUnitario");
const inputTotal = document.getElementById("inputTotal");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const btnGuardar = document.getElementById("btnGuardar");

// const llenarProductos = () => { } Funcion ANONIMA

let arregloDetalle = [];

let arregloProductos = [
    {
        id: 1,
        nombreProducto: "Producto 1",
        precio: 100.5
    },
    {
        id: 2,
        nombreProducto: "Producto 2",
        precio: 52.0
    },
    {
        id: 3,
        nombreProducto: "Producto 3",
        precio: 16.9
    },
    {
        id: 4,
        nombreProducto: "Producto 4",
        precio: 25.8
    }
];

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
        tdEliminar.appendChild(botonEliminar);
        fila.appendChild(tdEliminar);
        cuerpoTabla.appendChild(fila);
    });
}

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
    arregloDetalle.push(objDetalle);
    console.log(arregloDetalle)
    redibujarTabla();
};

btnGuardar.onclick = () =>{
    //crear objeto cabecera factura
};