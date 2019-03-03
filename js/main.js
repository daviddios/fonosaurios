//Voy a crear una funcion que anime el scroll de la web

//El footer aparecerá debajo de lo que llamo "contenido", teniendo un pequeño swipe desde abajo lo que animará bastante la experiencia al usuario.
function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    } else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}
// Ahora voy a definir los tamaños de las secciones "header" "contenido" y "footer".
$(window).load(function () {
    //footer
    var windowHeight = $(window).height(),
        footerHeight = $('footer').height(),
//por cada <section class="contenido"> tengo que incrementar el tamaño del documento en el js
        heightDocument = ($('.contenido').height()) + ($('footer').height()) - 0;
    $('#animacion_scroll, #animacion_scroll_principal').css({
        'height': heightDocument + 'px'
    });

    // Defino el tamaño del "header" y el "contenido".

    $('.contenedor_parallax').css({
        'margin-top': windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // Al hacer scroll ⬇
    window.onscroll = function () {
        var scroll = window.scrollY;

        $('#animacion_scroll_principal').css({
            'top': '-' + scroll + 'px'
        });

        $('header').css({
            'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});


