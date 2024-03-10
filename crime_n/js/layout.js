var swiperTab1 = null;
var swiperTab2 = null;
var swiperTab3 = null;
//layout
$(function () {
    $('#header').each(function () {

        var $window = $(window), 
            $header = $(this), 
            headerOffsetTop = $header.offset().top;

        $window.on('scroll', function () {
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
        $window.trigger('scroll');

    });
});

(function($){
	
	var $WIN=$(window);	
	
	function floating_btn(){
		$(window).on('scroll',function(){
			var sct=$WIN.scrollTop()+$WIN.height()-$('#footer').offset().top;

            if(sct>0) $('#bt_top').css('margin-bottom',sct+'px');
			else $('#bt_top').css('margin-bottom','0');
		});
	}
	
	$WIN.on('load',function(){
        floating_btn();
	});
	
})(jQuery);
$(document).ready(function(e) {
    $('#bt_gnb').click(function(e) {
        $(this).toggleClass('on');
        $('#gnb_mo').toggleClass('on');
        $('html').toggleClass('on');
        $('.gnb_bg').toggleClass('on');
    });
    $('.gnb_bg').click(function(e) {
        $(this).removeClass('on');
        $('#gnb_mo').removeClass('on');
        $('html').removeClass('on');
        $('#bt_gnb').removeClass('on');
    });
    $('#gnb>li').mouseenter(function(e) {
        $(this).addClass('on');
		$(this).siblings().removeClass('on');
    });
    $('#gnb>li').mouseleave(function(e) {
        $(this).removeClass('on');
    });
    $('#gnb_mo>li>a').click(function(e) {
        $(this).parent().toggleClass('on');
		$(this).parent().siblings().removeClass('on');
    });
    $('#footer .bt_business_info').click(function(e) {
        $('#footer').toggleClass('on');
    });
});

$(function () {
    $('header').each(function () {

        var $window = $(window), 
            $header = $(this), 
            headerOffsetTop = $header.offset().top;

        $window.on('scroll', function () {
            if ($window.scrollTop() > 10) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
        $window.trigger('scroll');

    });
});

function MM_jumpMenu(targ,selObj,restore){ //v3.0
eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
if (restore) selObj.selectedIndex=0;
}


// Function to add commas to a number
function numberWithCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function animateCountOnScroll($element) {
    var $this = $element;
    var targetNumber = parseInt($this.attr("data-target"));
    var duration = 1000;
    var currentNumber = 0;
    var increment = Math.ceil(targetNumber / (duration / 50));
    var animationStarted = false;

    function resetAnimation() {
        currentNumber = 0;
        $this.text("000");
        animationStarted = false;
    }

    function checkAndAnimate() {
        if (isElementInViewport($this)) {
            if (!animationStarted) {
                resetAnimation();
                animationStarted = true;
                animateCount();
            }
        } else {
            resetAnimation();
        }
    }

    function animateCount() {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            if (currentNumber > targetNumber) {
                currentNumber = targetNumber;
            }
            $this.text(numberWithCommas(currentNumber));
            setTimeout(animateCount, 50);
        }
    }

    $(window).on("scroll", checkAndAnimate);
    checkAndAnimate(); // Check on initial load
}

$(document).ready(function () {
    $(".m_case_count .count dl dd span").each(function () {
        animateCountOnScroll($(this));
    });
});

$(document).ready(function() {
    $("ul.tab_m_location li").click(function() {
				var code = $(this).attr("code");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().find(".tab_m_location_content").removeClass('on');
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).addClass('on');
				initMainSwiper(code);
				drawMap(code);
        return false;
    });
}); 
$(document).ready(function() {
    $("ul.tab_ly_info li").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().find(".tab_ly_info_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });
});
$(document).ready(function() {
    $("ul.tab_location li").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().find(".tab_location_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
				var code = $(this).attr("code");
				drawMap(code);
        return false;
    });
});

$(document).ready(function () {        
    $(".info_view .ct_img").addClass("on");
});


/*�앹뾽 媛쒖씤�뺣낫�섏쭛 諛� �댁슜 �꾨Ц蹂닿린*/
$(document).ready(function () {        
	$('.close_area').click(function(e) {
        $(this).parent().fadeOut(200);
        $('.pu_bg').fadeOut(200);
        $('html').removeClass('on');
		$('.pu_agree_detail').fadeOut(200);
		$('.pop_area2').fadeOut(200);
    });
	$('.agree_detail_btn').click(function(e) {
        $('.pu_agree_detail').fadeIn(200);
        $('.pu_bg').fadeIn(200);
        $('html').addClass('on');
    });
	$('.a_password').click(function(e) {
		var code = $(this).attr("code");
				$("#online_auth_code").val(code);
        $('.pop_area2').fadeIn(200);
        $('.pu_password').fadeIn(200);
        $('html').addClass('on');
    });
});


//scrollTop
$(document).ready(function() {
	$(".go_top").on("click",function(){
		$('html, body').animate({
			scrollTop : "0",
		},800);
		return false;
	});
 });


$(document).ready(function () {  
    var swiper = new Swiper('.info_view .case .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: 3000,
        breakpoints: {
            1300: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 15,
            }
        }
    });
    var swiper = new Swiper('.info_view .press .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 40,
        autoplay: 3000,
        breakpoints: {
            1300: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 15,
            }
        }
    });

		initMainSwiper('');
});

function initMainSwiper(flag){

	if(flag == "" || flag == '01'){
		if($(".m_location .gallery").hasClass('gal01')){
			swiperTab1 = new Swiper('.m_location .gal01 .swiper-container', {
					slidesPerView: 4,
					autoplay: 3000,
					spaceBetween: 12,
					//freeMode: true,
					loop: true,
					observer: true,
					observeParents: true,
					breakpoints: {
							1300: {
									slidesPerView: 3,
									spaceBetween: 15,
							},
							768: {
									slidesPerView: 2,
									spaceBetween: 10,
							},
							560: {
									slidesPerView: 1,
							}
					}
			});
		}
	}

	if(flag == "" || flag == '02'){
		if($(".m_location .gallery").hasClass('gal02')){
			swiperTab2 = new Swiper('.m_location .gal02 .swiper-container', {
					slidesPerView: 4,
					autoplay: 3000,
					spaceBetween: 12,
					//freeMode: true,
					loop: true,
					observer: true,
					observeParents: true,
					breakpoints: {
							1300: {
									slidesPerView: 3,
									spaceBetween: 15,
							},
							768: {
									slidesPerView: 2,
									spaceBetween: 10,
							},
							560: {
									slidesPerView: 1,
							}
					}
			});
		}
	}

	if(flag == "" || flag == '03'){
		if($(".m_location .gallery").hasClass('gal03')){
			swiperTab2 = new Swiper('.m_location .gal03 .swiper-container', {
					slidesPerView: 4,
					autoplay: 3000,
					spaceBetween: 12,
					//freeMode: true,
					loop: true,
					observer: true,
					observeParents: true,
					breakpoints: {
							1300: {
									slidesPerView: 3,
									spaceBetween: 15,
							},
							768: {
									slidesPerView: 2,
									spaceBetween: 10,
							},
							560: {
									slidesPerView: 1,
							}
					}
			});
		}
	}
}