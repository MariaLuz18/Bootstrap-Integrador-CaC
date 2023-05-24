function CalcularResumen(){ 
    const cantidad=document.getElementById("formVentaCantidad").value;
    const valorTicket=200;
    const categoria=document.getElementById("formVentaCategoria").value;
    const nombre=document.getElementById("formVentaNombre").value;
    const apellido=document.getElementById("formVentaApellido").value;
    const correo=document.getElementById("formVentaCorreo").value;
    let total=0;

    if (categoria=="Junior" && nombre!=""&&apellido!=""&&correo!="") {
        total=valorTicket*cantidad;
        total-=15*(valorTicket*cantidad)/100
    }else{ 
        if (categoria=="Trainee" && nombre!=""&&apellido!=""&&correo!="") {
            total=valorTicket*cantidad;
            total-=50*(valorTicket*cantidad)/100
        }else{
            if (categoria=="Estudiante" && nombre!=""&&apellido!=""&&correo!="") {
                total=valorTicket*cantidad
                total-=80*(valorTicket*cantidad)/100;
            }else{
                generarNuevasAlertas();
            }
        }  
    }
    const resultado=document.getElementById("resultadoResumen");
    resultado.textContent=total;
}


function seleccionCategoriaEstudiante(){
    var select=document.getElementById("formVentaCategoria");
    select.selectedIndex = 2;
}

function seleccionCategoriaJunior(){
    var select=document.getElementById("formVentaCategoria");
    select.selectedIndex = 0;
}

function seleccionCategoriaTrainee(){
    var select=document.getElementById("formVentaCategoria");
    select.selectedIndex = 1;
}

function resetOutput(){ 

    const resultado=document.getElementById("resultadoResumen");
    resultado.textContent=0;
}

function agregarNuevaAlerta(clase, mensaje) {
    let alertasDiv = document.getElementById("alertas");
    
    let alerta = document.createElement("DIV");
    alerta.innerHTML = mensaje
    + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
    + '<span aria-hidden="true">&times;</span>'
    + '</button>';
    alerta.classList.add('alert');
    alerta.classList.add(clase);
    alerta.classList.add('alert-dismissible');
    alerta.classList.add('fade');
    alerta.classList.add('show');
    alerta.setAttribute("role", "alert");
  
    alertasDiv.appendChild(alerta);
    $(alerta).toggleClass('in out'); 
  }

  function generarNuevasAlertas() {
    agregarNuevaAlerta('alert-danger', '<strong>¡Problemas!</strong> completa todos los campos.');
  }
  function reseteo(){
    let total=0;
    const resultado=document.getElementById("resultadoResumen");
    resultado.textContent=total;
  }
   
