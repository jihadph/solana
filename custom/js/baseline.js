/* jQuery Functions */
$('document').ready(function () {

    /* SWIPER-FIRST: Section 1 Introduction */
    const swiper_first = new Swiper('.swiper-first', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        grabCursor: true,
        speed: 1000,
        preloadImages: true,
        simulateTouch: true,
        updateOnWindowResize: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        /*navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },/**/

        autoplay: {
            delay: 4000
        },
    });

    /* AOS */
    AOS.init();
});