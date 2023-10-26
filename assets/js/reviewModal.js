const REVIEW_API_URL = "https://sheetdb.io/api/v1/0f0xwosumm03g";

const botonMostrarModal2 = document.getElementById('review-mostrarModal');
const reviewModal = document.getElementById('review-dialog');
const botonCerrarModal2 = document.getElementById('review-cerrarModal');
const botonCerrarModal22 = document.getElementById('review-cerrarModal2');
const revieCheck = document.getElementById('review-check');
const labels2 = document.getElementsByClassName('review-label');
const hidenElements = document.getElementsByClassName('review-hiden');
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

const successfulMSG2 = document.getElementById('review-successful-msg-form');

const showReviewModal = ()=> 
{
    botonMostrarModal2.addEventListener('click', () => {
        reviewModal.showModal();
    });
    
    botonCerrarModal2.addEventListener('click', () => {
        reviewModal.close();
    });
    
    botonCerrarModal22.addEventListener('click', () => {
        reviewModal.close();
    });


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
const reviewFunction = ()=>
{
    reviewModal.addEventListener("submit", async (e) =>
    {
        e.preventDefault();
    
        const form2 = document.getElementById("review-formulario");
    
        let dataForm = new FormData(form2);
    
        dataForm.append("ticket_time", new Date().toString());
    
        await fetch(REVIEW_API_URL, {
    
            method:"POST",
            body: dataForm,
        });
    
        revieCheck.classList.add("review-check");

        const hidebuttons = () =>
        {
            for (let label2 of labels2) 
            {
                label2.style.display = 'none';
            }

            for (let hideElement of hidenElements) 
            {
                hideElement.style.display = 'none';
            }

            successfulMSG2.style.display = 'block';
        }
    
        hidebuttons();
    
        const endForm = ()=> { 
            
            reviewModal.close();
            revieCheck.classList.remove("review-check");
            form2.reset();

            for (let hideElement of hidenElements) 
            {
                hideElement.style.display = 'inline';
            }
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

export { showReviewModal, reviewFunction};
