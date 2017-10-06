// Ceci permet d'éxécuter le app.js APRÈS que la page ait fini de charger
$(document).ready(function(){
    
    // à l'appui de l'élément #goTop
    $("#goTop").click(function(){
        /* On demande de faire 
            animate  en une demi seconde, cela scroll vers le haut de la page avec une transition
        */
        $("html, body").animate({ 
           scrollTop: $( $(this).attr("href") ).offset().top // ( aller à > cette page > en haut)
        }, 500); // durée en ms de l'animation
        return false;
    }); // onClick end
    
});