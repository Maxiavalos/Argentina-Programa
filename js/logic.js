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
