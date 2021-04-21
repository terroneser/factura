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
   Codigo:NCodigo,    NombreProducto:TProducto,    Precio:NPrecio,     Existencia:NExistencia,
    }
    /*PUSH PARA METER UN ELEMENTO AL ARREGLO*/
    arrayDato.push(item);
}


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
}
/*JSON.stringifi para  convertir el arreglo a texto*/
function guardarBD(){
    localStorage.setItem('Productos',JSON.stringify( arrayDato));
    mostrarBD();
}
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