const showReviewButton = document.getElementById('aside-review-button');
const fourthSection = document.getElementById('fourth-section');
let isShow = false;
showReviewButton.addEventListener('click', ()=>
{
    isShow = !isShow;

    if(isShow)
    {
        fourthSection.style.display = 'flex';
    }
    else
    {
        fourthSection.style.display = 'none';
    }
});