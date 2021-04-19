
let ArrayProductos=[];

let item={
    Codigo:"",
    precio:"",
}

function AgregarProductos(texto,text){
    item={
        Codigo:texto,
        precio:text
    }
/* .push para agregar un elemento al arreglo*/
    ArrayProductos.push(item);
}
/*.onsumbit para que cuando se le de click el dato se almacene e el arreglo
e.preventDefault para evitar que la pagina se refresque cuando se le manden datos al formulario*/
formulario.onsubmit=function(e){
    e.preventDefault();
    let textoCodigo= Codigo.value;
    let textPrecio= Precio.value;
    AgregarProductos(textoCodigo,textPrecio)
    console.log(ArrayProductos);
    Codigo.value="";
    Precio.value="";
    GuaradarBD();
}
/*JSON.stringify sirve para convertir los arreglos a texto*/
function GuaradarBD(){
    localStorage.setItem('Codigo',JSON.stringify(ArrayProductos));
    MostrarBD();
}
function MostrarBD(){
    /*JSON.parse para convertir string a texto*/
    console.log(localStorage.getItem('Codigo'));
}
