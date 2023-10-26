const API_URL = "https://sheetdb.io/api/v1/fc9tst40wyrgy";

const botonMostrarModal = document.getElementById('mostrarModal');
const modal = document.getElementById('dialog');
const botonCerrarModal = document.getElementById('cerrarModal');
const botonCerrarModal2 = document.getElementById('cerrarModal2');
const check = document.getElementById('check');
const successfulMSG = document.getElementById('successful-msg-form');
const hidenElements = document.getElementsByClassName('hiden');
const labels = document.getElementsByClassName('label');


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

            for (let hideElement of hidenElements) 
            {
                hideElement.style.display = 'none';
            }

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

            for (let hideElement of hidenElements) 
            {
                hideElement.style.display = 'inline';
            }

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
