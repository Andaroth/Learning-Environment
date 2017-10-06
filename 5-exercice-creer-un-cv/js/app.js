$(document).ready(function() {
    
    
    $(document).scroll(function() {
        if ($("#folio").visible()) {
            $(".folio").addClass("sideLink_onview");
        }
        else {
            $(".folio").removeClass("sideLink_onview");
        }
    });
    
    
    // Sauce : https://codepen.io/pedrodj46/pen/BKBOaJ
    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    // Sauce : http://www.design-fluide.com/17-11-2013/un-defilement-anime-smooth-scroll-en-jquery-sans-plugin/
    $('.goScroll').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
    
});


