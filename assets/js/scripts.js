import {TweenLite} from "gsap/TweenMax";
import '../scss/main.scss';



let scrollButton = document.querySelectorAll(".btn__scroll");
let popupButton = document.querySelectorAll(".btn__popup");
let footer = document.querySelector("footer");
let flooring = document.querySelector(".flooring");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");

let scrollToElements = [footer, flooring];

// scrolling to

scrollButton.forEach((el,i)=> {
    el.addEventListener('click', ()=> {
        scrollToElements[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })
})


//   popup on/off

popupButton.forEach((el,i)=> {
    el.addEventListener('click', ()=> {
            popup.classList.add("popup--visible");
    })
})


popupClose.addEventListener('click', ()=> {
            popup.classList.remove("popup--visible");
    })


