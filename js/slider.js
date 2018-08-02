$(document).ready(function(){
   $('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    nav:false,
    dots:true,
    items:3,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:1
        }


    }
})


   $('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    nav:true,
    dots:false,
    items:3,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:1
        }


    }
})


    $('.owl-three').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    nav:false,
    dots:true,
    items:3,
    dotsData: true,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:1
        }


    }
})


 
});