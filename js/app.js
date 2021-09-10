const burger = document.querySelector('.burger');
const close = document.querySelector('.close');


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let tl = gsap.timeline();

window.innerWidth<1050 ? burger.addEventListener('click', () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.to('.navbar ul', {bottom: '0', display: 'flex'}, '-=.3')
            .to('.navbar ul li', {opacity: 1, pointerEvents: 'all', stagger: .2}, '0.3')
    }
}):''

window.innerWidth<1050 ?close.addEventListener('click', () => {
    tl.reverse();
}):'';

