const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrap-corousel i");
const carouselChildrens = [...carousel.children];

const carouselFunction = ()=>
{
    let isDragging = false, startX, startScrollLeft, timeoutID;

    let cardPerView = Math.round(carousel.offsetWidth);
    
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterBegin", card.outerHTML);
    });
    
    carouselChildrens.slice(0, cardPerView).forEach( card => {
        carousel.insertAdjacentHTML("beforeEnd", card.outerHTML);
    });
    
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -cardPerView : cardPerView;
        });
    });
    
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }
    
    const dragging = (e) => {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }
    
    const autoPlay = () => {
        if(window.innerWidth < 800) return;
        timeoutID = setTimeout(() => carousel.scrollLeft += cardPerView, 2500);
    }
    
    autoPlay();
    
    const infiniteScroll = () => {
        if(carousel.scrollLeft === 0){
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (carousel.offsetWidth) ;    
            carousel.classList.remove("no-transition");
        } 
        
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
    
        clearTimeout(timeoutID);
        if(!wrapper.matches(":hover")) autoPlay();
    }
    

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutID));
    wrapper.addEventListener("mouseleave", autoPlay);    
}

export { carouselFunction };
