const swiper = new Swiper('.card-swiper', {
    spaceBetween: 10,
    thumbs: {
        swiper: {
            el: '.card-swiper-tabs',
            slidesPerView: 6,
            spaceBetween: 16,
        }
        
    }

});

const swiper2 = new Swiper('.card-swiper-mobile', {
   spaceBetween: 10,
   thumbs: {
    swiper: {
        el: '.card-swiper-tabs-mobile',
        slidesPerView: 4,
        spaceBetween: 16,
    }
    
}
});