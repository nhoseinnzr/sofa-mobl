$('.owl-carousel2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },
        767: {
            items: 3,
        },
        1000: {
            items: 6,
        }
    }
})
$('.owl-similar').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },
        767: {
            items: 3,
        },
        1000: {
            items: 6,
        }
    }
})
$('.owl-blog').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },
        767: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})
$('.owl-main-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,

})
$('.owl-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 4,
    rtl:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            center:true,
        },
        767: {
            items: 3,
        },
        1000: {
            items: 4,
            center:true
        }
    }

})
$('body').on('click','.div-more .btn',function (){
    $(this).closest('.tags').addClass('expand')

})
$('body').on('click','#menu-item-responsive',function(){
    $('.menu-responsive').toggleClass('active');
    $('.bottom-menu .a').removeClass('active')
    $('.category-responsive').removeClass('active');
    $(this).toggleClass('active');
})
$('body').on('click','#menu-category-responsive',function(){
    $('.menu-responsive').removeClass('active');
    $('.bottom-menu .a').removeClass('active')
    $('.category-responsive').toggleClass('active');
    $(this).toggleClass('active');

})
$('body').on('click','#close-category',function(){

    $('.category-responsive').removeClass('active');
    $('#menu-category-responsive').removeClass('active');
})

$('body').on('click','#close-menu',function(){

    $('.menu-responsive').removeClass('active');
    $('#menu-item-responsive').removeClass('active');
})

$('body').on('click','.right-cat .category-item',function(){
   $('.category-item').removeClass('active');
   $('.left-cat .row').addClass('d-none');
   $(this).addClass('active');
   let id = $(this).attr('data-cat')
    $('#'+id).removeClass('d-none')

})

