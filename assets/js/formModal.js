const API_URL = "https://sheetdb.io/api/v1/fc9tst40wyrgy";

const botonMostrarModal = document.getElementById('mostrarModal');
const modal = document.getElementById('dialog');
const botonCerrarModal = document.getElementById('cerrarModal');
const botonCerrarModal2 = document.getElementById('cerrarModal2');
const botonEnviar = document.getElementById('sumbit-button');
const check = document.getElementById('check');

const successfulMSG = document.getElementById('successful-msg-form');

const nameInput = document.getElementById('nombre');

const labels = document.getElementsByClassName('label');
const emailInput = document.getElementById('email');
const textArea = document.getElementById('comentarios');

const showFormModal = ()=> 
{
    botonMostrarModal.addEventListener('click', () => {
        modal.showModal();
    });

    botonCerrarModal.addEventListener('click', () => {
        modal.close();
    });

    botonCerrarModal2.addEventListener('click', () => {
        modal.close();
    });
}

const formFunction = ()=>
{
    modal.addEventListener("submit", async (e) =>
    {
        e.preventDefault();

        const form = document.querySelector("form");

        let dataForm = new FormData(form);

        dataForm.append("ticket_time", new Date().toString());

        await fetch(API_URL, {

            method:"POST",
            body: dataForm,
        });

        check.classList.add("check");

        const hidebuttons = () =>
        {
            botonCerrarModal.style.display = 'none';
            botonCerrarModal2.style.display = 'none';
            botonEnviar.style.display = 'none';
            nameInput.style.display = 'none';
            emailInput.style.display = 'none';
            textArea.style.display = 'none';

            for (let label of labels) 
            {
                label.style.display = 'none';
            }

            successfulMSG.style.display = 'block';
        }

        hidebuttons();

        const endForm = ()=> { 
            
            modal.close();
            check.classList.remove("check");
            form.reset();
            botonCerrarModal.style.display = 'inline';
            botonCerrarModal2.style.display = 'inline';
            botonEnviar.style.display = 'inline';
            
            nameInput.style.display = 'inline';
            emailInput.style.display = 'inline';
            textArea.style.display = 'inline';

            for (let label of labels) 
            {
                label.style.display = 'block';
            }
            successfulMSG.style.display = 'none';
        };

        setTimeout(endForm,2000);
    })
}

export { showFormModal, formFunction };
