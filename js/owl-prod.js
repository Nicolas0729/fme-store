$('.owl-prod').owlCarousel({
    loop:true,
    autoplay: true,
    margin: 20,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:4
        },
        900:{
            items:5
        },
        1000:{
            items:5
        },
        1300:{
            items:5
      }
    }
})