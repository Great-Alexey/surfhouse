

$('#accordion').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
        });

//(function($) {
//    
//
//    $(function() {
//
//        var carouselNavigation = $('.carousel-navigation').jcarousel();
//
//        
//        carouselNavigation.jcarousel('items').each(function() {
//
//
//
//        });
//
//        // Setup controls for the stage carousel
//        $('.prev-stage')
//            .on('jcarouselcontrol:inactive', function() {
//                $(this).addClass('inactive');
//            })
//            .on('jcarouselcontrol:active', function() {
//                $(this).removeClass('inactive');
//            })
//            .jcarouselControl({
//                target: '-=1'
//            });
//
//
//        // Setup controls for the navigation carousel
//        $('.prev-navigation')
//            .on('jcarouselcontrol:inactive', function() {
//                $(this).addClass('inactive');
//            })
//            .on('jcarouselcontrol:active', function() {
//                $(this).removeClass('inactive');
//            })
//            .jcarouselControl({
//                target: '-=1'
//            });
//
//        $('.next-navigation')
//            .on('jcarouselcontrol:inactive', function() {
//                $(this).addClass('inactive');
//            })
//            .on('jcarouselcontrol:active', function() {
//                $(this).removeClass('inactive');
//            })
//            .jcarouselControl({
//                target: '+=1'
//            });
//            
//    });
//})(jQuery);




(function($) {
    

    $(function() {
        $('.carousel-stage').jcarousel();

       
$(function() {
    $('.carousel-stage')
        .jcarousel({
            // Core configuration goes here
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;
});
        // Setup controls for the stage carousel
        $('.prev-stage')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-stage')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });       
    });
})(jQuery);
