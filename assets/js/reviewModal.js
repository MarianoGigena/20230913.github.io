import { REVIEW_API_URL } from "./reviewApiConfig.js";

const botonMostrarModal2 = document.getElementById('mostrarModal-2');
const modal2 = document.getElementById('dialog-2');
const botonCerrarModal2 = document.getElementById('cerrarModal-2');
const botonCerrarModal22 = document.getElementById('cerrarModal2-2');
const botonEnviar2 = document.getElementById('sumbit-button-2');
const check2 = document.getElementById('check-2');

const labels2 = document.getElementsByClassName('label-2');
const nameInput2 = document.getElementById('nombre-2');
const textArea2 = document.getElementById('comentarios-2');
const rateContainer = document.getElementById('rate-container');

const modelSelector = document.getElementById('model-selector');

const rate1 = document.getElementById('rate-1');
const rate2 = document.getElementById('rate-2');
const rate3 = document.getElementById('rate-3');
const rate4 = document.getElementById('rate-4');
const rate5 = document.getElementById('rate-5');

const textRate = document.getElementById('rate-header');
const textRateValue = document.getElementById('rate-value');



let rateValue = "";

const successfulMSG2 = document.getElementById('successful-msg-form-2');



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

const rateValueFunction = ()=> 
{
    rate1.addEventListener('click', () => 
    {
        rateValue = "Mala";
        textRate.innerText = `${rateValue}`;
        textRateValue.value= rateValue;
    });

    rate2.addEventListener('click', () => 
    {
        rateValue = "Regular";
        textRate.innerText = `${rateValue}`;
        textRateValue.value= rateValue;
    });

    rate3.addEventListener('click', () => 
    {
        rateValue = "Buena";
        textRate.innerText = `${rateValue}`;
        textRateValue.value= rateValue;
    });

    rate4.addEventListener('click', () => 
    {
        rateValue = "Muy buena";
        textRate.innerText = `${rateValue}`;
        textRateValue.value= rateValue;
    });

    rate5.addEventListener('click', () => 
    {
        rateValue = "Excelente";
        textRate.innerText = `${rateValue}`;
        textRateValue.value= rateValue;
    });
}

const reviewFormFunction = ()=>
{
    modal2.addEventListener("submit", async (e) =>
    {
        e.preventDefault();
    
        const form2 = document.getElementById("formulario-2");
    
        let dataForm = new FormData(form2);
    
        dataForm.append("ticket_time", new Date().toString());
    
        await fetch(REVIEW_API_URL, {
    
            method:"POST",
            body: dataForm,
        });
    
        check2.classList.add("check-2");
    
        /*alert("Su opinión fue enviada con éxito.");*/
    
        const hidebuttons = () =>
        {
            botonCerrarModal2.style.display = 'none';
            botonCerrarModal22.style.display = 'none';
            botonEnviar2.style.display = 'none';

            nameInput2.style.display = 'none';
            textArea2.style.display = 'none';
            textRate.style.display = 'none';
            textRateValue.style.display = 'none';
            rateContainer.style.display = 'none';
            modelSelector.style.display = 'none';
            for (let label2 of labels2) 
            {
                label2.style.display = 'none';
            }

            successfulMSG2.style.display = 'block';
        }
    
        hidebuttons();
    
        const endForm = ()=> { 
            
            modal2.close();
            check2.classList.remove("check-2");
            form2.reset();
            botonCerrarModal2.style.display = 'inline';
            botonCerrarModal22.style.display = 'inline';
            botonEnviar2.style.display = 'inline';

            nameInput2.style.display = 'inline';
            textArea2.style.display = 'inline';

            textRate.style.display = 'inline';
            textRateValue.style.display = 'inline';

            rateContainer.style.display = 'flex';
            successfulMSG2.style.display = 'none';
            modelSelector.style.display = 'block';

            for (let label of labels2) 
            {
                label.style.display = 'block';
            }

            rateValue = "";
            textRate.innerText = "";
            textRateValue.value= "";

        };
    
        setTimeout(endForm,2000);
    });
}

export {showReviewModal, rateValueFunction, reviewFormFunction};