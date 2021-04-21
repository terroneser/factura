/*SE HACE UN ARREGLO QUE CONTEMNDRAN NUESTROS DATOS*/
let arrayDato = [];

let itemId = document.getElementById( "trash" ) ;
console.log( itemId ) ;
let id = itemId.getAttribute( "data-id" ) ;
console.log( id ) ;

let item = {
   Codigo:"",    NombreProducto:"",    Precio:"",  Existencia:"",
}
/*LA FUNCION  RECIBIRA UN TEXTO QUE LO GUARDARA EN EL ITEM*/
function agregarDatos(NCodigo,TProducto,NPrecio,NExistencia){
    item={
<<<<<<< HEAD
        Codigo:NCodigo, 
        NombreProducto:TNombre, 
        Precio:NPrecio, 
        Existencia:NExistencia,
=======
   Codigo:NCodigo,    NombreProducto:TProducto,    Precio:NPrecio,     Existencia:NExistencia,
>>>>>>> aa5fec97d5b267c548c0d367d888d190ec1c9f92
    }
    /*PUSH PARA METER UN ELEMENTO AL ARREGLO*/
    arrayDato.push(item);
}
<<<<<<< HEAD
/*.onsumbit para que cuando se le de click el dato se almacene e el arreglo
e.preventDefault para evitar que la pagina se refresque cuando se le manden datos al formulario*/
formulario.onsubmit= (e) => {
    e.preventDefault();
    /*let NCodigo= Codigo.value;
    let TNombre= NombreProducto.value;
    let NPrecio= Precio.value;
    let NExistencia= Existencia.value;
    AgregarProductos(NCodigo,TNombre,NPrecio,NExistencia)*/
    console.log(ArrayProductos);

    const objetoDetalle = {
        codigo: Codigo.value="",
        nombre: NombreProducto.value="",
        precio: Precio.value="",
        existencia: Existencia.value=""
    }

    
    GuaradarBD();
=======


/*.onsubmit para que cuando se le de click el texto se almacene en el array
e.preventDefault para evitar que la pagina se refresque cuando se le manden datos
se declaran variables que van almacenar los datos obtenidos*/
formulario.onsubmit=function(e){
    e.preventDefault();
    let NumeroCodigo=Codigo.value;
    let TextoProducto=NombreProducto.value;
    let NumeroPrecio=Precio.value;
    let NumeroExistencia=Existencia.value;
    agregarDatos(NumeroCodigo,TextoProducto,NumeroPrecio,NumeroExistencia,)
    console.log(arrayDato);


/*se les asigna un vacio para que los campos esten en blanco*/  
    Codigo.value="";
    NombreProducto.value="";
    Precio.value="";
    Existencia.value="";
    guardarBD();
>>>>>>> aa5fec97d5b267c548c0d367d888d190ec1c9f92
}
/*JSON.stringifi para  convertir el arreglo a texto*/
function guardarBD(){
    localStorage.setItem('Productos',JSON.stringify( arrayDato));
    mostrarBD();
}
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',MostrarBD);
function MostrarBD(){
    /*JSON.parse para convertir texto a datos JS*/
    //ArrayPrductos=JSON.parse(localStorage.getItem('Datos'));
}

const getNombreProductoById = (id)=>{
    const objProducto = ArrayProductos.find((p) => {
        if(p.id === +id){
            return p;
        };
    });
    return objProducto.NombreProducto;
}

const getPrecioProductoById = (id)=>{
    const objProducto = ArrayProductos.find((p) => {
        if(p.id === +id){
            return p;
        };
    });
    return objProducto.Precio;
};

const recargaTabla = () => {
    contenidoTabla.innerHTML = ""; //evita repetir contenido
    //iteramos el arreglo
    
    }
    recargaTabla();

    const tablaProductos = () => {
    contenidoTabla.innerHTML = JSON.parse(localStorage.getItem(ArrayProductos)); //evita repetir contenido
    }
    tablaProductos();

    /*listaProductos.innerHTML = ""; //evita repetir contenido
   
    for (var i=0;i<ArrayProductos.length;i++) {
        listaProductos.innerHTML+=
        `<div class="alert alert-primary" role="alert">
            <i class="fa fa-list" aria-hidden="true"></i>
            <strong>${ArrayProductos[i].listaProductos}</strong>--${ArrayProductos[i].estado}
            <span class="float-right">
              <i class="fa fa-edit ml-3" aria-hidden="true"></i>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>`*/


/*ESTO AUN NO FUNCIONA, DEBERIA MOSTRAR EN PANTALLA LOS PRODUCTOS ALMACENADOS
    
    }*/
=======
document.addEventListener('DOMContentLoaded',mostrarBD);
function mostrarBD(){
   /*JSON.parse para convertit string a texto*/
   arrayDato=JSON.parse(localStorage.getItem('Productos'));
   /* For va a ciclarse mientras tareas nuevas y escribira dentro de la lista*/
   for (var i=0;i<arrayDato.length;i++){
       listaTareas.innerHTML+=`
       <div class="alert alert-primary" role="alert"> 
       <strong>${arrayDato[i].Codigo}--${arrayDato[i].NombreProducto}--${arrayDato[i].Precio}--${arrayDato[i].Existencia}</strong>
       <span class="float-right">
         <i class="fa fa-edit ml-3" aria-hidden="true"></i>
         <i class="fa fa-trash" aria-hidden="true"></i>
       </span>
     </div>`
   }   
}

listaTareas.onclick=function(e){
    e.preventDefault();
    if(e.target.classList[1]=== "fa-edit" ||e.target.classList[1]==="fa-trash"){
        console.log(e.target.classList[1]);
    }
}
>>>>>>> aa5fec97d5b267c548c0d367d888d190ec1c9f92
