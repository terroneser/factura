let ArrayProductos=[];

let item={
    Codigo:"", NombreProducto:"",Precio:"",Existencia:"",
}

function AgregarProductos(NCodigo,TNombre,NPrecio,NExistencia){
    item={
        Codigo:NCodigo, NombreProducto:TNombre, Precio:NPrecio, Existencia:NExistencia,
    }
/* .push para agregar un elemento al arreglo*/
    ArrayProductos.push(item);
}
/*.onsumbit para que cuando se le de click el dato se almacene e el arreglo
e.preventDefault para evitar que la pagina se refresque cuando se le manden datos al formulario*/
formulario.onsubmit=function(e){
    e.preventDefault();
    let NCodigo= Codigo.value;
    let TNombre= NombreProducto.value;
    let NPrecio= Precio.value;
    let NExistencia= Existencia.value;
    AgregarProductos(NCodigo,TNombre,NPrecio,NExistencia)
    console.log(ArrayProductos);
    Codigo.value="";
    NombreProducto.value="";
    Precio.value="";
    Existencia.value="";
    GuaradarBD();
}
/*JSON.stringify sirve para convertir los arreglos a texto*/
function GuaradarBD(){
    localStorage.setItem('Datos',JSON.stringify(ArrayProductos));
    MostrarBD();
}
document.addEventListener('DOMContentLoaded',MostrarBD);
function MostrarBD(){
    /*JSON.parse para convertir string a texto*/
    ArrayPrductos=JSON.parse(localStorage.getItem('Datos'));

    
}
/*ESTO AUN NO FUNCIONA, DEBERIA MOSTRAR EN PANTALLA LOS PRODUCTOS ALMACENADOS*/
    for (var i=0;i<ArrayProductos.length;i++) {
        listaProductos.innerHTML+=`
        <div class="alert alert-primary" role="alert">
            <i class="fa fa-list" aria-hidden="true"></i>
            <strong>${ArrayProductos[i].listaProductos}</strong>--${ArrayProductos[i].estado}
            <span class="float-right">
              <i class="fa fa-edit ml-3" aria-hidden="true"></i>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>`
    }