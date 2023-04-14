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



const reservarBtn = document.querySelector('#botonreserva');
const reservarForm = document.querySelector('#reservar-form');
const reservarclick = document.querySelector('#botondereservar');

reservarclick.addEventListener('click', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const dateInput = document.querySelector('#date');
  const timeInput = document.querySelector('#time');
  const partySizeInput = document.querySelector('#party-size');
  const reservation = {
    name: nameInput.value,
    email: emailInput.value,
    date: dateInput.value,
    time: timeInput.value,
    partySize: partySizeInput.value
  };
  console.log(reservation); // envía la reserva a un servidor o API en lugar de imprimir en la consola
  reservarForm.reset(); // borra los datos del formulario después de enviar
});