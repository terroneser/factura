console.log('test ;-;');
//se declara esto con los id que tienen en el documento hojafactura.js para reducir codigo
let tablaprint = document.querySelector('#cuerpoTabla');
let datosprint = document.querySelector('#datosfactura');
//se declara el arreglo donde se almancena los datos de el storage
let arrayPrint = [];
//se pasan los datos de el storage a el array
arrayPrint = JSON.parse(localStorage.getItem('facturas'))
//el valor que se almaceno para la id a buscar en el registro
let apuntador =parseInt(sessionStorage.getItem('apuntador'))


//funcion para realizar la muestra en pantalla
function test(){
// se encribe en la parte de arriba los datos de le array consultado con su respectivo id tomado de el input
datosprint.innerHTML += `Nombre: ${arrayPrint[apuntador].nombre} | Direccion: ${arrayPrint[apuntador].direccion} | Fecha: ${arrayPrint[apuntador].fecha} | Numero: ${arrayPrint[apuntador].numero} | Ruc: ${arrayPrint[apuntador].ruc}`


// se realiza una funcion foreach para imprimir los valores que se tienen guardados en el listado de articulos
    arrayPrint[apuntador].detalle.forEach(element => {
        //seguidamnte por cada elemento encontrado en el arreglo en la posicion seleccionada se imprimen en pantalla todos los elemento 
        console.log(element)
        tablaprint.innerHTML += `<tr>
<td>${element.cantidad}</td>
<td>${element.descripcion}</td>
<td>${element.precioUnitario} $</td>
<td>${element.precioTotal} $</td>
</tr>`
});
}
//esta funcion es para evitar problemas de que el arreglo se quede vacio
function update(){
    // si el arreglo esta como null se convierte a arreglo
    if(arrayPrint === null){
        arrayPrint =[];
    }
    //caso contrario se vuelve a alamcenar el valor de e localstorage en el arreglo
    else{
        arrayPrint = JSON.parse(localStorage.getItem('facturas'))
    }
}
//se ejecutan las funciones al cargar la pagina
test()
update()
