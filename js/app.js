// Variables
const carrito = document.querySelector('#carrito'),
contenedorCarrito = document.querySelector('#lista-carrito tbody');
vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);
    }
}