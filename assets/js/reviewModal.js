import { REVIEW_API_URL } from "./reviewApiConfig.js";

// script.js
const botonMostrarModal2 = document.getElementById('mostrarModal-2');
const modal2 = document.getElementById('dialog-2');
const botonCerrarModal2 = document.getElementById('cerrarModal-2');
const botonCerrarModal22 = document.getElementById('cerrarModal2-2');
const botonEnviar2 = document.getElementById('sumbit-button-2');
const check2 = document.getElementById('check-2');

const showReviewModal = ()=> 
{
    botonMostrarModal2.addEventListener('click', () => {
        modal2.showModal();
    });
    
    botonCerrarModal2.addEventListener('click', () => {
        modal2.close();
    });
    
    botonCerrarModal22.addEventListener('click', () => {
        modal2.close();
    });
}

const reviewFormFunction = ()=>
{
    document.querySelector("form").addEventListener("submit", async (e) =>
    {
        e.preventDefault();
    
        const form = document.querySelector("form-2");
    
        let dataForm = new FormData(form);
    
        dataForm.append("ticket_time", new Date().toString());
    
        await fetch(REVIEW_API_URL, {
    
            method:"POST",
            body: dataForm,
        });
    
        check2.classList.add("check-2");
    
        alert("Su consulta fue enviada con éxito.");
    
        const hidebuttons = () =>
        {
            botonCerrarModal2.style.display = 'none';
            botonCerrarModal22.style.display = 'none';
            botonEnviar2.style.display = 'none';
        }
    
        hidebuttons();
    
        const endForm = ()=> { 
            
            modal2.close();
            check2.classList.remove("check-2");
            form.reset();
            botonCerrarModal2.style.display = 'inline';
            botonCerrarModal22.style.display = 'inline';
            botonEnviar2.style.display = 'inline';
        };
    
        setTimeout(endForm,2000);
    });
}

export {showReviewModal, reviewFormFunction};