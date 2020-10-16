jQuery(document).ready(function($) {


    /*======= Skillset *=======*/


    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = Math.floor(Math.random() * (100 - 90) + 90);

            $(this).animate({
                width: itemWidth + "%"
            }, 800);

        });

    });



});