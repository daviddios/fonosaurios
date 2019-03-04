$('.parallax-window').parallax({imageSrc: '/img/headerbg2.jpg'});

$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            //Evito el salto brusco al clickar en el menú:
            e.preventDefault();
             //Defino cada menú como una variable:
            var target = $(this).attr("href");
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target;
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Devuelvo la clase que está activa:
    $('.seccion').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navbar a.active').removeClass('active');
                    $('.navbar a').eq(i).addClass('active');
            }
    });
}).scroll();

//P.D: nunca utilizar beautyfile en javascript!!!!