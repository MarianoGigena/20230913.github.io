
import { API_URL } from "./formApiConfig.js";

// script.js
const botonMostrarModal = document.getElementById('mostrarModal');
const modal = document.getElementById('dialog');
const botonCerrarModal = document.getElementById('cerrarModal');
const botonCerrarModal2 = document.getElementById('cerrarModal2');

botonMostrarModal.addEventListener('click', () => {
    //modal.style.display = 'block';
    modal.showModal();
});

botonCerrarModal.addEventListener('click', () => {
    //modal.style.display = 'none';
    modal.close();
});

botonCerrarModal2.addEventListener('click', () => {
   // modal.style.display = 'none';
    modal.close();
});

/*window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});*/

document.querySelector("form").addEventListener("submit", async (e) =>
{
    e.preventDefault();

    const form = document.querySelector("form");

    let dataForm = new FormData(form);

    dataForm.append("ticket_time", new Date().toString());

    await fetch(API_URL, {

        method:"POST",
        body: dataForm,
    });

    form.classList.add("animation");

    alert("Su consulta fue enviada con éxito.");

    const endForm = ()=> { 
        
        modal.close();
        form.classList.remove("animation");
        form.reset();
    };

    setTimeout(endForm,1000);
})
