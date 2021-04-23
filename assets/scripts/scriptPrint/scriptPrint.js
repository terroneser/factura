console.log('test ;-;');
let suma = 0;
//se declara esto con los id que tienen en el documento hojafactura.js para reducir codigo
let tablaprint = document.querySelector('#cuerpoTabla');
let datosprint = document.querySelector('#datosfactura');
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
//se declara el arreglo donde se almancena los datos de el storage
let arrayPrint = [];
//se pasan los datos de el storage a el array
arrayPrint = JSON.parse(localStorage.getItem('facturas'))
//el valor que se almaceno para la id a buscar en el registro
let apuntador =parseInt(sessionStorage.getItem('apuntador'))


const muestraNombre = (id) => {
    const nombreProducto = arregloProductos.find((p) => {
        if(p.id === +id){
            return p;
        };
    });
    return nombreProducto.nombreProducto;
};


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
<td>${muestraNombre(element.descripcion)}</td>
<td>$ ${element.precioUnitario}</td>
<td>$ ${element.precioTotal} </td>
</tr>`
/*let suma = parseFloat(element.precioTotal);
document.write('Subtotal: '+suma );*/
});
};


//esta funcion es para evitar problemas de que el arreglo se quede vacio
function update(){
    // si el arreglo esta como null se convierte a arreglo
    if(arrayPrint === null){
        arrayPrint =[];
    }
    //caso contrario se vuelve a alamcenar el valor de e localstorage en el arreglo
    else{
        arrayPrint = JSON.parse(localStorage.getItem('facturas'))
    };
};
//se ejecutan las funciones al cargar la pagina
test()
update()
