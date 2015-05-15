$.fn.parallax = function() {

    var $window = $(window);

    function Parallax (elem) {   
        
        var elemTop = elem.offset().top - $(window).height(),
            elemBottom = elem.offset().top + ($(window).height()*2);
        
        // update background image according to scroll
        function checkScroll()
        { 
            var scrollTop = $window.scrollTop();

            // optimise to work only when the element is visible in the viewport
            if ( scrollTop > elemTop && scrollTop < elemBottom ) {
                    elem.css('backgroundPosition','center '+((
                        $(window).scrollTop() - elem.offset().top
                    ))+'px');
            }                    
        }   
        // update elemDist on resize
        $(window).on('resize',function(){            
            elemTop = elem.offset().top - $(window).height();   
            elemBottom = elem.offset().top + ($(window).height()*2)
        });
        // on window scroll,resize
        $(window).on('resize scroll',function(){            
            checkScroll();            
        });
        // on document ready
        $(document).ready(function(){
            checkScroll();
        });    
    };    
    
    return this.each(function(){        
        var p = new Parallax($(this));        
    });

}