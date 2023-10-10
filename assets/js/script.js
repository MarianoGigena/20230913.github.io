// script.js
const botonMostrarModal = document.getElementById('mostrarModal');
const modal = document.getElementById('miModal');
const botonCerrarModal = document.getElementById('cerrarModal');
const botonCerrarModal2 = document.getElementById('cerrarModal2');

botonMostrarModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

botonCerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
botonCerrarModal2.addEventListener('click', () => {
    modal.style.display = 'none';
});

/*window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});*/