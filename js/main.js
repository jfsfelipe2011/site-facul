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
});
