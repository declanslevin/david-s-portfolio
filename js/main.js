$(function() {

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }

    // Nav bars menu dropdown
    $('.nav-menu').on('click', function() {
        $('nav').slideToggle(400, function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('nav').removeAttr('style');
            } else {
                $(this).addClass('active');
            }
            let $carouselHeight = "calc(100% - " + $('header').outerHeight() + "px)" 
            $('.carousel').css('height', $carouselHeight)
        });
    })

    // Accordion
    $('.accordion-header').on('click', function() {
        $(this).siblings().slideToggle();
        $(this).children().last().toggleClass('fa-chevron-right-clicked')
    });

    if (isMobile === false) {
        $('.accordion-header').hover(function() {
            if (!$(this).children().last().hasClass('fa-chevron-right-clicked')) {
                $(this).children().last().toggleClass('accordion-chevron-hover');
            }
        })
    }

    if (isMobile === true) {
        $('.accordion-chevron').removeClass('accordion-chevron-nonmobile').addClass('accordion-chevron-mobile');
    }
    
    // Portfolio Tabs 
    $('.tab a').on('click', function(e) {
        e.preventDefault();
        // Tabs
        $('.tab.is-selected').removeClass('is-selected');
        $(this).parent().addClass('is-selected');
        //Hide role 
        $('.role').removeClass('is-active').addClass('is-hidden');
        // Show selected role
        let $thisRole = "#role-" + $(this).parent().data('tab');
        $($thisRole).removeClass('is-hidden').addClass('is-active');
        // Show selected showreel
        var src = $(this).attr('href');
        $('#showreel-frame').attr("src", src);
    })

    // Carousel
    $('.carousel-content').slick({
        prevArrow: '<div class="carousel-arrow-container carousel-arrow-container-left"><i class="fas fa-angle-left carousel-arrow-left"></i></div>',
        nextArrow: '<div class="carousel-arrow-container carousel-arrow-container-right"><i class="fas fa-angle-right carousel-arrow-right"></i></div>',
        touchMove: true,
        accessibility: true
    });

    // Carousel arrows highlighting
    if (isMobile === false) {
        $('.carousel-arrow-container-left').hover(function () {
            $(this).toggleClass('carousel-arrow-container-left-hover');
            $('.carousel-arrow-left').toggleClass('carousel-arrow-hover-left');
        })
        $('.carousel-arrow-container-right').hover(function () {
            $(this).toggleClass('carousel-arrow-container-right-hover');
            $('.carousel-arrow-right').toggleClass('carousel-arrow-hover-right');
        })
    } 
    if (isMobile === true) {
        $('.carousel-arrow-container-left').on('click',function () {
            $this = $(this);
            $this.addClass('carousel-arrow-container-left-touch')
            var $arrowLeft = $('.carousel-arrow-left');
            $arrowLeft.addClass('carousel-arrow-active-left');
            setTimeout(function() {
                $arrowLeft.removeClass('carousel-arrow-active-left')
                $this.removeClass('carousel-arrow-container-left-touch')
            }, 200);
        })
        $('.carousel-arrow-container-right').on('click',function () {
            $this = $(this);
            $this.addClass('carousel-arrow-container-right-touch')
            var $arrowRight = $('.carousel-arrow-right');
            $arrowRight.addClass('carousel-arrow-active-right');
            setTimeout(function() {
                $arrowRight.removeClass('carousel-arrow-active-right')
                $this.removeClass('carousel-arrow-container-right-touch')
            }, 200);
        })
    }
});