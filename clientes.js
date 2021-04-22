
    var arr = new Array() ;


    function addData(){
        getData() ;
        arr.push({
            rfc: document.getElementById("rfc").value ,
            razonSc: document.getElementById("razonSc").value ,
            direccionFisc: document.getElementById("direccionFisc").value ,
            email: document.getElementById("email").value 
        }) ;
        localStorage.setItem("localData" , JSON.stringify(arr)) ;

    }

    function showData(){
        getData() ;
        var tbl = document.getElementById("MyTable")

        for (var i = 0 ; i < arr.length ; i++){
            var row = tbl.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();

            cell1.innerHTML = arr[i].rfc ;
            cell2.innerHTML = arr[i].razonSc ;
            cell3.innerHTML = arr[i].direccionFisc ;
            cell4.innerHTML = arr[i].email ;
        }
    }

    function getData(){
        var str = localStorage.getItem("localData") ;
        if (str != null){
            arr = JSON.parse(str)
        }
    }

    function deleteStorage(){
        localStorage.clear()
        var elmtTable = document.getElementById('myTable');
        var tableRows = elmtTable.getElementsByTagName( 'tr');
        var rowCount = tableRows.length;

        for (var x=rowCount-1; x>0; x--) {
        elmtTable.removeChild(tableRows[x]);
}
    }   
