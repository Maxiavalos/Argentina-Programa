// Funcion mostrar menu
var co=0;
function toggleMenu() {
    co++;
    var secciones = document.getElementsByClassName('oculto');
    for (var i = 0; i < secciones.length; i++) 
    {
        var seccion = secciones[i];
        if(co%2!==0){
        if (seccion.style.display === 'none' || seccion.style.display === ''){
            seccion.classList.toggle('mostrar');
            seccion.classList.remove('ocultar');
    }
    }
    if(co%2===0){
        seccion.classList.toggle('ocultar');
        seccion.classList.remove('mostrar');

    }    
}
}

document.getElementById("botonmenu").addEventListener("click", toggleMenu);



let listElements=document.querySelectorAll('.boton_click');
listElements.forEach(listElement=>{
    listElement.addEventListener('click',()=>{
        listElement.classList.toggle('arrow');
    })
})



//Funcion validar









const reservarBtn = document.querySelector('#botonreserva');
const reservarForm = document.querySelector('#reservar-form');
const reservarclick = document.querySelector('#botondereservar');




function validarFormulario() {
    document.getElementById("name-error").innerHTML = ""; 
    document.getElementById("email-error").innerHTML = ""; 
     document.getElementById("date-error").innerHTML = "";
    document.getElementById("time-error").innerHTML = "";
    document.getElementById("size-error").innerHTML = "";
    var reglasValidacion = {
      name: {
        presence: {
            allowEmpty: false,
          message: "^Este campo es obligatorio."
        },
        length: {
          minimum: 3,
          message: "^El nombre debe tener al menos 3 caracteres."
        }
      },
      email: {
        presence: {
        allowEmpty: false,
          message: "^Este campo es obligatorio."
        },
        email: {
          message: "^Ingrese una dirección de correo electrónico válida."
        }
      },
      date: {
        presence: {
        allowEmpty: false,
          message: "^Este campo es obligatorio."
        },
        format: {
          pattern: "^2023-[0-1][0-9]-[0-3][0-9]$", // Patrón para validar la fecha en formato AAAA-MM-DD
          message: "^Ingrese una fecha de este año"
        }
      },
      time: {
        presence: {
        allowEmpty: false,
          message: "^Este campo es obligatorio."
        },

        format:{
            pattern: "^(0[8-9]|1[0-9]|20):[0-5][0-9]$", // Patrón para validar la hora en formato HH:MM de 08:00 a 20:59
                message: "^Ingrese un horario entre las 8 am y las 8 pm."
        }
      },
      size:{
        presence:{
            allowEmpty:false,
            message: "^Este campo es obligatorio."
        }}
    };

    var formulario = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      size: document.getElementById("size").value
    };

    var errores = validate(formulario, reglasValidacion);
    if (errores) {
        document.getElementById("reservaexitosa").innerHTML="";
      // Mostrar mensajes de error
      if (errores.name) {
        document.getElementById("name-error").innerHTML = errores.name[0];
      }
      if (errores.email) {
        document.getElementById("email-error").innerHTML = errores.email[0];
      }
      if (errores.date) {
        document.getElementById("date-error").innerHTML = errores.date[0];
      }
      if (errores.time) {
        document.getElementById("time-error").innerHTML = errores.time[0];
      }
      if(errores.size){
        document.getElementById("size-error").innerHTML = errores.time[0];
      }

    } 
    else {
const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const dateInput = document.querySelector('#date');
  const timeInput = document.querySelector('#time');
  const sizeInput = document.querySelector('#size');
  const reservation = {
    name: nameInput.value,
    email: emailInput.value,
    date: dateInput.value,
    time: timeInput.value,
    size: sizeInput.value,
  };
   // Crea un nuevo objeto jsPDF
   var pdf = new jsPDF();
   pdf.setFont("Helvetica", "bold"); 
  pdf.text(20, 20, "Reserva exitosa"); 

   // Agrega el contenido al PDF
   pdf.setFont("Helvetica", "normal");
   pdf.text(20, 40, "Nombre: " + reservation.name);
   pdf.text(20, 50, "Email: " + reservation.email);
   pdf.text(20, 60, "Hora de la reserva: " + reservation.time);
   pdf.text(20, 70, "Cantidad de personas: " + reservation.size);
   pdf.text(20, 80, "Ubicación: Hernandez 657");

   // Guarda el PDF como un archivo
   pdf.save("Comprobante de reserva.pdf");
  console.log(reservation); // envía la reserva a un servidor o API en lugar de imprimir en la consola
  reservarForm.reset(); // borra los datos del formulario después de enviar
  document.getElementById("name-error").innerHTML = ""; // Borra mensajes de error al enviar correctamente el formulario
  document.getElementById("email-error").innerHTML = ""; // Borra mensajes de error al enviar correctamente el formulario
  document.getElementById("date-error").innerHTML = ""; // Borra mensajes de error al enviar correctamente el formulario
  document.getElementById("time-error").innerHTML = ""; // Borra mensajes de error al enviar correctamente el formulario
  document.getElementById("size-error").innerHTML = ""; // Borra mensajes de error al enviar correctamente el formulario
      // If Realizar acción cuando el formulario es válido
      // ...
      errores={};
    document.getElementById("reservaexitosa").innerHTML="Ha realizado la reserva exitosamente!";
    
    }

  }
  function cerrar(){
    document.getElementById("reservaexitosa").innerHTML="";
    document.getElementById("name-error").innerHTML = ""; 
    document.getElementById("email-error").innerHTML = ""; 
     document.getElementById("date-error").innerHTML = "";
    document.getElementById("time-error").innerHTML = "";
    document.getElementById("size-error").innerHTML = "";
  }





$(document).ready(function() {
            $("#btnEnviar").click(function() {
                var asunto = $("#asunto").val();
                var contanos = $("#contanos").val();
                $.ajax({
                    url: "https://reqres.in/api/users",
                    type: "POST",
                    data: {
                        asunto: asunto,
                        contanos: contanos
                    },
                    success: function(result) {
                        alert("Datos Enviados");
                    },
                    error: function(xhr, status, error) {
                        alert("Ha ocurrido un error: " + error);
                    }
                });
            });
        });
