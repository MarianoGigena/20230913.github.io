let SHEET_ID = "1-tBHeSc0UwDtkElexep6c-XHiABdzaXC1kF3XenPVOg";
let SHEET_TITLE = "reSheet";
let SHEET_RANGE = 'A2:D16'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);


const sheetShowButton = ()=>
{
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
}
const sheetShowFuntion = ()=>
{
    fetch(FULL_URL)
    .then(res => res.text())
    .then(rep =>
        {
            let data = JSON.parse(rep.substr(47).slice(0,-2));
    
            let reviewBox = document.getElementById('review-box')
            let length = data.table.rows.length;
    
            for(let i = 0; i < length; i++)
            {
                let newReviewBox = document.createElement('div');
                newReviewBox.id = ('review'+i);
                let reviewFull = (`
                <h2 class="review-item name">Usuario:
                    ${data.table.rows[i].c[2].v}
                </h2> 
                <h3 class="review-item model">
                    ${data.table.rows[i].c[1].v}
                </h3>
    
                <h3 class="review-item rate"> Experiencia:
                    ${data.table.rows[i].c[0].v}
                </h3> 
    
                <p class="review-item comment">
                    ${data.table.rows[i].c[3].v}
                </p>`);
    
                newReviewBox.className = 'review-style';
                reviewBox.append(newReviewBox);
    
                newReviewBox.innerHTML = reviewFull;
            }
        })
}

export {sheetShowFuntion, sheetShowButton};
