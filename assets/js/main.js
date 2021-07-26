$(document).ready(function(){

    /*   Toggle slider #artists-carousel__slider  */
    if ( $('#artists-carousel__slider').length ) {
        $('#artists-carousel__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            nextArrow: "<button class='artists__carousel-btn artists__carousel-btn_right'>" +
                "<span class='arrow'></span>" +
                "</button>",
            prevArrow: "<button class='artists__carousel-btn artists__carousel-btn_left'>" +
                "<span class='arrow'></span>" +
                "</button>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                }
            ],
        });
    }

    /*   Toggle slider #exhibition-carousel__slider  */
    if ( $('#exhibition-carousel__slider').length ) {
        $('#exhibition-carousel__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            nextArrow: "<button class='artists__carousel-btn artists__carousel-btn_right'>" +
                "<span class='arrow'></span>" +
                "</button>",
            prevArrow: "<button class='artists__carousel-btn artists__carousel-btn_left'>" +
                "<span class='arrow'></span>" +
                "</button>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                }
            ],
        });
    }

    /*   Toggle slider #wave-carousel__slider  */
    if ( $('#wave-carousel__slider').length ) {
        $('#wave-carousel__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: "unslick"
                }
            ],
        });
    }
    <!-- Magnific img Picture page -->
if ( $('.img-wrap_magnifying').length ) {
        $('.img-wrap_magnifying').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true,
                titleSrc: ''
            },
            zoom: {
                enabled: false,
                duration: 300 // don't foget to change the duration also in CSS
            },
        });
    }

});


