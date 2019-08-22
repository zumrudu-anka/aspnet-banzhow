//Detect ie7
var is_ie7 = 0;
if (bowser.msie && bowser.version < 8) {
    is_ie7 = 1;
}


$(function() {

    if (is_ie7) {
        $.fn.boxSizing.defaults.htcPath = 'js/boxsizing/boxsizing.htc';
        $('.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.input-group,.row,.content').boxSizing();
    }

    /* Carousel */
    $('#myCarousel').carousel({
        interval: 4000
    });

    $('#myCarousel').on('slide.bs.carousel', function() {
        $('.carousel-caption').css('display', 'none');
    });

    $('#myCarousel').on('slid.bs.carousel', function() {
        $('.carousel-inner > .item.active .carousel-caption').fadeIn("slow");
    });

    $(".carousel-inner").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function() {
            $(this).parent().carousel('prev');
        },
        threshold: 0
    });
    /***********/

    $(".social-networks li a").hover(
        function() {
            $(this).children('.normal').animate({
                marginTop: '-31px'
            }, 200);
        }, function() {
            $(this).children('.normal').animate({
                marginTop: '0px'
            }, 200);
        }
    );

    $(".link-portfolio").hover(
        function() {
            var opac = 1;
            if (bowser.msie && bowser.version <= 8) {
                opac = 0.8
            }
            $(this).children('.overlay-portfolio').animate({
                opacity: opac
            }, 500);
        }, function() {
            $(this).children('.overlay-portfolio').animate({
                opacity: 0
            }, 500);
        }
    );

    if (!device.mobile() && !device.tablet() && !is_ie7) {
        $(".section-colored.home").css('background-attachment', 'fixed');
        $(".section-colored.home").parallax("0%", 0.4);
    }

    /* Placeholder fallback for older browsers */
    $('input, textarea').placeholder();
});