function traerInformacion(){
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        }

    });

}

function pintarRespuesta(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].address+"</td>";
        myTable+="<td>"+items[i].exension+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData)
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion(){
    let myData={
        id:$("#id").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}


function traerInformacionClient(){
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta.items);
        }

    });

}

function pintarRespuestaClient(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoClient("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClient").append(myTable);

}
function guardarInformacionClient(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData);

    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("#ageClient").val("");
            traerInformacionClient();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacionClient(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("#ageClient").val("");
            traerInformacionClient();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoClient(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            traerInformacionClient();
            alert("Se ha Eliminado.")
        }
    });
}

function traerInformacionMessage(){
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta.items);
        }

    });

}

function pintarRespuestaMessage(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMessage("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMessage").append(myTable);

}
function guardarInformacionMessage(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#mensajeMessage").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData);

    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            $("#idMessage").val("");
            $("#mensajeMessage").val("");
            traerInformacionMessage();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacionMessage(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#mensajeMessage").val(),
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            $("#idMessage").val("");
            $("#mensajeMessage").val("");
            traerInformacionMessage();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfaf3fc3046b5f6-db202109241844.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            traerInformacionMessage();
            alert("Se ha Eliminado.")
        }
    });
}