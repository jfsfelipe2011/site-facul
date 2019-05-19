$( document ).ready(function() {
    var $doc = $('html, body');
    $('a').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            $("#menu").removeClass("hide");
        } else {
            $("#menu").addClass("hide");
        }
    });

    // Wow
    new WOW().init();

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
});