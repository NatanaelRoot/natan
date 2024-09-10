/* Preloader de la pagina web */

let preloader = document.querySelector(".preloader-container");

let mostrarLoader = () => {
    preloader.classList.add("open-loader");
}

let ocultarLoader = () => {
    preloader.classList.remove("open-loader");
}

window.addEventListener('DOMContentLoaded', () => {
    mostrarLoader();
});

window.addEventListener('load', () => {

    setTimeout(() => {
        ocultarLoader();
    }, 4000);
    
})

/* YouTube Kids Wallpaper */

let body = document.querySelector("#body");

let optionKids = document.querySelector("#option-kids");

optionKids.addEventListener('mouseover', () => {
    body.classList.add("kids");
});

optionKids.addEventListener('mouseout', () => {
    body.classList.remove("kids");
})

/* Agregar cuenta de Youtube */

let addAccount = document.querySelector(".add-account");

let openAddAccount = document.querySelector("#open-add-account");

let closeAddAccount = document.querySelector(".add-account__arrow");

function mostrarAddAccount() {
    addAccount.classList.add("active-account");
}

function cerrarAddAccount() {
    addAccount.classList.remove("active-account");
}

openAddAccount.addEventListener('click', () => {
    mostrarAddAccount();
})

closeAddAccount.addEventListener('click', () => {
    cerrarAddAccount();
})



let abrir = document.querySelector("#abrir");

abrir.addEventListener('click', function(){
    Hola();
})

function Hola() {
    // Captura el contenido de la etiqueta con id "source"
    var nombre = document.querySelector("#name").innerHTML;

    // Guarda el contenido en localStorage
    localStorage.setItem('contenidoTrasladado', nombre);

    // Redirige a la segunda página
    window.location.href = 'segunda.html';
}


