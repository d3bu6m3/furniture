$(document).ready(function() {
    var $fade =  $(".fade_in--bottom");

    $(window).scroll(function () { 
        $fade.each(function () {
        
            fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
            windowBottom = $(window).scrollTop() + $(window).height();
            
            if (fadeMiddle < windowBottom) {
            $(this).addClass("fadeInBottom");
            }
        });
    });

    /* On Load: Trigger Scroll Once*/
    $(window).scroll();
 });