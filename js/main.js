

$('#accordion').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
        });

(function($) {
    

    $(function() {

        var carouselNavigation = $('.carousel-navigation').jcarousel();

        
        carouselNavigation.jcarousel('items').each(function() {



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


        // Setup controls for the navigation carousel
        $('.prev-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-navigation')
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













        

//(function($) {
//    
//
//    $(function() {
//        $('.slider .carousel-stage').jcarousel();
//       
//$(function() {
//    $('.slider .carousel-stage')
//        .jcarousel({
//    interval: 10,
//    wrap: 'both'
//
//        })
//        .jcarouselAutoscroll({
//            interval: 5000,
//            target: '+=1',
//            autostart: true
//        });
//});
//        $('.buttonLeft')
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
//        $('.buttonRight')
//            .on('jcarouselcontrol:inactive', function() {
//                $(this).addClass('inactive');
//            })
//            .on('jcarouselcontrol:active', function() {
//                $(this).removeClass('inactive');
//            })
//            
//            .jcarouselControl({
//                target: '+=1'
//            });  
//    });
//})(jQuery);




















(function($) {
    
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

    $(function() {
        // Setup the carousels. Adjust the options for both carousels here.
        var carouselStage      = $('.carousel-stageSlider').jcarousel();
        var carouselNavigation = $('.carousel-navigationSlider').jcarousel();

        // We loop through the items of the navigation carousel and set it up
        // as a control for an item from the stage carousel.
        carouselNavigation.jcarousel('items').each(function() {
            var item = $(this);

            // This is where we actually connect to items.
            var target = connector(item, carouselStage);

            $('.slider .carousel-stageSlider')
                .jcarousel({
            interval: 10,
            wrap: 'both'

                })
                .jcarouselAutoscroll({
                    interval: 5000,
                    target: '+=1',
                    autostart: true
                });

            item
                .on('jcarouselcontrol:active', function() {
//                    carouselNavigation.jcarousel('scrollIntoView', this);
                    item.addClass('active');
                })
                .on('jcarouselcontrol:inactive', function() {
                    item.removeClass('active');
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage
                });
        });

        // Setup controls for the stage carousel
        $('.prev-stageSlider')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-stageSlider')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

//       
    });
})(jQuery);
