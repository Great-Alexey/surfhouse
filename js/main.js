
i=0;
var a     = $('#nowLan');
    var en    = $('#en');
    var ru    = $('#ru');
    var ua    = $('#ua');
    var block = $('.changeLangIn p');

$(en).click(function(){
      $(a).text('EN');
      block.hide();
   });
   $(ru).click(function(){
      $(a).text('RU');
      block.hide();
   });
   $(ua).click(function(){
      $(a).text('UA');
      block.hide();
   }); 
   $('.changeLang').click(function(){
       if(i===0){
           block.show();
           $('#treugOff').css({display: 'none'});
           $('#treugOn').css({display: 'block'});
           i=1;
       }
       else{
           block.hide();
           $('#treugOn').css({display: 'none'});
           $('#treugOff').css({display: 'block'});
           i=0;
       }
});

//$(function() {
//    $( "#speed" ).selectmenu();
//  });
$('#accordion').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
        });
$('#accordion2').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
        });
$('#accordion3').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
        });
$(function() {
    $(function() {
        var carouselNavigation = $('.carousel-navigation').jcarousel();
    
        carouselNavigation.jcarousel('items').each(function() {

        });
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
});

$(function() {
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };
    $(function() {
        var carouselStage      = $('.carousel-stageSlider').jcarousel();
        var carouselNavigation = $('.carousel-navigationSlider').jcarousel();

        carouselNavigation.jcarousel('items').each(function() {
            var item = $(this);
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

        $('.prev-stageSlider').jcarouselControl({
                target: '-=1'
            });

        $('.next-stageSlider').jcarouselControl({
                target: '+=1'
            });      
    });
});

$(function() { 
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };
    $(function() {
        var carouselStage      = $('.containerProductContent').jcarousel();
        var carouselNavigation = $('.carousel-navigationProduct').jcarousel();
        carouselNavigation.jcarousel('items').each(function() {
            var item = $(this);
            var target = connector(item, carouselStage);
            item
                .on('jcarouselcontrol:active', function() {
                    carouselNavigation.jcarousel('scrollIntoView', this);
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
        $('.prev-navigationProduct')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });
        $('.next-navigationProduct')
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
});


var tab= $('.productTabs ul li');
function active(){
    
    var b= $('.tabs div');
    
    for(i=0;i<tab.length;i++){
        if(tab[i]===this){
            tab[i].className='active';
            b[i].style.display='block';
        }
        else{
            tab[i].className=' ';
            b[i].style.display='none';
        }
    }
}
for(i=0;i<tab.length;i++){
    tab[i].addEventListener("click", active);
    }
    
        var cartA = 1;
    $('.plus').click(function(){
      cartA = cartA +1; 
      $('.countIn').text(cartA);    
    }) ;
  $('.minus').click(function(){
      if (cartA > 0){
          cartA = cartA -1;
       $('.countIn').text(cartA);
      }
    });
    var cartB = 1;
    $('.plus2').click(function(){
      cartB = cartB +1; 
      $('.countIn2').text(cartB);    
    }) ;
  $('.minus2').click(function(){
      if (cartB > 0){
          cartB = cartB -1;
       $('.countIn2').text(cartB);
      }
    });
    
    
//   function make(){
//       var a = 0;
//       if($(this).hasClass('plus')){
//           a = a +1;
//        
//    console.log(a);
//       }
//       else if($(this).hasClass('minus')){
//           a = a -1;
//        
//    console.log(a);
//       }
//   }
    
//var currentCount = 1;
//function makeCounter() {
////  var currentCount = 1;
//
//  return function() {
//    return currentCount++;
//    console.log(counter());
//  };
//  var counter = makeCounter();
//}
//function Counter() {
//  
//
//  return function() {
//    return currentCount--;
//    console.log(counter());
//  };
//  var counter = Counter();
//}


 