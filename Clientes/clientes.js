let nuevoCliente = [] ;

const addClient = (ev) =>{
    ev.preventDefault() ;

let $cliente = {
    rfc: document.getElementById("rfc").value ,
    razonSc: document.getElementById("razonSc").value ,
    direccionFisc: document.getElementById("direccionFisc").value ,
    email: document.getElementById("email").value 
}
    nuevoCliente.push($cliente) ; 
    document.forms[0].reset() ;

    console.warn('cliente añadido al localstorage' , nuevoCliente)


    localStorage.setItem("cliente" , JSON.stringify($cliente))
    let pre = document.querySelector('#msg pre')  
    pre.textContent = '\n' + JSON.stringify(nuevoCliente , '\t' , 2 )
}

    document.addEventListener("DOMContentLoaded",  ()=>{
        document.getElementById('btnRegistro').addEventListener("click" , addClient)
    })