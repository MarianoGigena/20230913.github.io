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
    
            /*let model_title = document.getElementById('model');
            let rate_title = document.getElementById('rate');
            let name_title = document.getElementById('name');
            let commnet_title = document.getElementById('commnet');
            let reviewFlex = document.getElementById('review-flex');*/
    
            let reviewBox = document.getElementById('review-box')
            let length = data.table.rows.length;
    
            /*model_title.innerHTML = data.table.rows[0].c[1].v;
            rate_title.innerHTML = data.table.rows[0].c[0].v;
            name_title.innerHTML = data.table.rows[0].c[2].v;
            commnet_title.innerHTML = data.table.rows[0].c[3].v;
            */
    
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
                //newReviewBox.innerHTML = data.table.rows[i].c[0].v;
                //newReviewBox.innerHTML = data.table.rows[i].c[1].v;
                //newReviewBox.innerHTML = data.table.rows[i].c[2].v;
                //newReviewBox.innerHTML = data.table.rows[i].c[3].v;
    
                /*let newBoxRate = document.createElement('div');
                newBoxRate.id = ("box"+ i);
                newBoxRate.className = "some-style";
                rate_title.append(newBoxRate);
    
                newBoxRate.innerHTML = data.table.rows[i].c[0].v;
                //------------------------------------------------///
                let newBoxModel = document.createElement('div');
                newBoxModel.id = ("box"+ i);
                newBoxModel.className = "some-style";
                model_title.append(newBoxModel);
    
                newBoxModel.innerHTML = data.table.rows[i].c[1].v;
                //------------------------------------------------///
                let newBoxName = document.createElement('div');
                newBoxName.id = ("box"+ i);
                newBoxName.className = "some-style";
                name_title.append(newBoxName);
    
                newBoxName.innerHTML = data.table.rows[i].c[2].v;
                //------------------------------------------------///
                
                let newBoxComment = document.createElement('div');
                newBoxComment.id = ("box"+ i);
                newBoxComment.className = "some-style";
                commnet_title.append(newBoxComment);
    
                newBoxComment.innerHTML = data.table.rows[i].c[3].v;*/
            }
    
        })
}

export {sheetShowFuntion, sheetShowButton};
