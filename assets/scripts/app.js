// const llenarProductos = () => { } Funcion ANONIMA
let facturas = [];
let arregloDetalle = [];

let arregloProductos = [
    {id: 1, nombreProducto: "Thrush 17711 Turbo Silenciador", precio: 812.00},
    {id: 2,nombreProducto: "Duralast Platinum AGM Bateria 65-AGM Grupo BCI 65 750 CCA",precio: 2529.00},
    {id: 3,nombreProducto: "Llanta Bridgestone Turanza Er300 205/55R16",precio: 169.00},
    {id: 4,nombreProducto: "Castrol Aceite EDGE 5W-20 de 5 qt",precio: 451.00},
    {id: 5,nombreProducto: "Funda Para Volante De Cuero Antideslizante",precio: 365.16},
    {id: 6,nombreProducto: "Par Marcos Porta Placas",precio: 52.00},
    {id: 7,nombreProducto: "Autoasiento para carro Graco 4Ever 4-in-1 cougar",precio: 7790.00},
    {id: 8,nombreProducto: "Auto Estereo Bluetooth Pioneer",precio: 1614.00}
];

 //
const verificarFacturasLocalStorage = () => {
    const facturasLS = JSON.parse(localStorage.getItem("facturas"));
     //si son iguales los agrega a arreglo vacio
    facturas = facturasLS || [];
    
    /*if(facturasLS){
        facturas = facturasLS;
    };*/
};

verificarFacturasLocalStorage();

//agrega los productos al select "descripcion"
const llenarProductos = () => {
    arregloProductos.forEach((p) => {
        const option = document.createElement("option");
        option.value = p.id;
        option.innerText = p.nombreProducto;
        selectDescripcion.appendChild(option);
    });
};
llenarProductos();

//obtine el nombre del producto buscando por su id para la tabla
const getNombreProductoById = (id)=>{
    const objProducto = arregloProductos.find((p) => {
        if(p.id === +id){
            return p;
        };
    });
    return objProducto.nombreProducto;
};



const getPrecioProductoById = (id)=>{
    const objProducto = arregloProductos.find((p) => {
        if(p.id === +id){
            return p;
        };
    });
    return objProducto.precio;
};

//NO recibe nada maneja el array arregloDetalle
const redibujarTabla = () => {
    cuerpoTabla.innerHTML = ""; //evita repetir contenido

    //iteramos cada elemento del arreglo
    //el array recibe un callback de cada elemento del arreglo
    arregloDetalle.forEach((detalle) => {
        //se crea la tabla final
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${detalle.cantidad}</td>
                          <td>${getNombreProductoById(detalle.descripcion)}</td>
                          <td>${detalle.precioUnitario}</td>
                          <td>${detalle.precioTotal}</td>`;
         
        let tdModificar = document.createElement('td');
        let botonModificar = document.createElement('button');
        botonModificar.classList.add('btn', 'btn-warning');
        botonModificar.innerText = 'Modificar';
        botonModificar.onclick = () => {
            console.log('detectado')
            modificarBtn();
        };
        tdModificar.appendChild(botonModificar);
        fila.appendChild(tdModificar);
        cuerpoTabla.appendChild(fila);


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

const modificarBtn = () => {
    let pregunta = confirm('¿Desea modificar datos?');
    console.log(arregloDetalle);
    if(pregunta == true){
        console.log(arregloDetalle[0].cantidad)
        }
    };

const modificarTabla = () => {
    
};

//funcion eliminar regresa lo mismo menos el seleccionado
const eliminarDetalleById = (id) => {
    //filtrar los productos distintos al que recibi
    arregloDetalle = arregloDetalle.filter((detalle) => {
        if( +id !== +detalle.descripcion){
            return detalle;
        };
    });
    redibujarTabla();
};

//agregamos un producto adicional
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
            //descripcion por id
            if(+detalle.descripcion === +objDetalle.descripcion){
                //regresa la suma de prodcutos
                return {
                    cantidad: +detalle.cantidad + +objDetalle.cantidad,
                    descripcion: detalle.descripcion,
                    precioTotal: (+detalle.cantidad + +objDetalle.cantidad) * +detalle.precioUnitario,
                    precioUnitario: +detalle.precioUnitario
                };
            };
            //si no existe
            return detalle;
        }); 
    }else{
        arregloDetalle.push(objDetalle);
    };
    //console.log(objDetalle);
};

//agrega nuevos detalles a la factura
formDetalle.onsubmit = (e) => {
    e.preventDefault(); //para que no se actualice la pagina

    //Creación objeto de sección agregar
    const objDetalle = {
        cantidad: inputCantidad.value,
        descripcion: selectDescripcion.value, //value referencia de los value del option
        precioUnitario: inputUnitario.value,
        precioTotal: inputTotal.value
    };
    agregarDetalle(objDetalle);
    redibujarTabla();
    console.log(objDetalle);
};

btnGuardar.onclick = () =>{
    //crear objeto cabecera factura
    let objFactura = {
        nombre: inputRazonSocial.value,
        direccion: inputDireccion.value,
        fecha: inputFecha.value,
        numero: inputNum.value,
        ruc: inputRuc.value,
        //agrega el arreglo de productos
        detalle: arregloDetalle,
    };
    //agregamos el objeto al arreglo
    facturas.push(objFactura);
    //limpiar campos
    formCabecera.reset();
    formDetalle.reset();
    
    //localstorage
    localStorage.setItem("facturas", JSON.stringify(facturas)); //conversión a string
    //borrar tabla de tbody
    arregloDetalle = [];
    redibujarTabla();
    };

//cambia el p.unitario al cambiar el producto
selectDescripcion.onchange = () => {
    //evita error de select con string
    if(selectDescripcion.value == "0"){
        formDetalle.reset();
        return;
    };
    //Precio Dinamico cuando cambie select
    const precio = getPrecioProductoById(selectDescripcion.value);
    
    if(precio){
        inputUnitario.value = precio;
        calcularTotal();
    };
};
 //auto calcula el p. total de "agregar"
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

btnVer.onclick = () => {
    sesionNumber = document.getElementById('localSeleccion').value
    //se almacena el valor de el imput en un session storage para realizar la "consulta en tu array"
    sessionStorage.setItem('apuntador',sesionNumber)
    let imprimir = window.open('','','width=800 height=600'); 
    imprimir.document.write(hojaFactura);
};
console.log(arregloProductos);

