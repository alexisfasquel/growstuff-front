$(function() {

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

});