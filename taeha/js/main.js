$(function() {
    var scrollobj = ".animation, .animation_text, .delay1, .delay05, .delay04, .delay03";
  
    function scrollContainer() {
      var scrollPos = $(document).scrollTop();
      var activePoint = parseInt($(window).height() - $(window).height() / 4);
      var removePoint = parseInt(0);
      $(scrollobj).each(function(e) {
  
        //console.log('$(window)scrollTop()');
  
        var currLink = $(this)
        if (currLink.offset().top - activePoint <= scrollPos && currLink.offset().top + currLink.height() > scrollPos + removePoint) {
          currLink.addClass("sc-evnet");
        }
      });
    }
    $('.pos.mobile').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      speed: 1200,
      infinite: true
    });
    $("#slick").slick({
      dots: false,
      /* �꾨옒�� */
      infinite: true,
      /* 留⑤걹�대�吏��먯꽌 �앸굹吏� �딄퀬 �ㅼ떆 留⑥븵�쇰줈 �대룞 */
      slidesToShow: 4,
      /* �붾㈃�� 蹂댁뿬吏� �대�吏� 媛�닔*/
      slidesToScroll: 4,
      arrows: true,
      /* �붿궡�� */
      speed: 1000,
      /* �ㅼ쓬�대�吏�濡� �섍꺼吏덈븣 嫄몃━�� �쒓컙 */
      responsive: [{
          breakpoint: 1280,
          settings: {
            rows:2,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 640,
          settings: {
            rows:2,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        }
  
      ]
    });
  
  
  
    $('.menber_slick').slick({
      slidesToShow: 8.4,
      SlidesToScroll:1,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus:true,
      pauseOnHover: true,
      pauseOnDotsHover:true,
      centerMode: true,
      swipe: false,
       // draggable : false,
      SwipeToSlide:false,
      focusOnSelect: true,
      centerPadding: '5px',
      responsive: [
    // {
    //   breakpoint: 950,
    //   settings: {
    //     slidesToShow: 10
    //   }
    // },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 6.2,
        slidesToScroll: 5,
        centerMode: false,
        autoplay: true,
        touchMove:true,
        swipe: true,
        SwipeToSlide:true
      }
    },
    {
       breakpoint: 480,
       settings: {
         autoplay: true,
         centerMode: true,
         slidesToShow: 3.2,
         infinite: true,
         speed: 1500,
         autoplay: true,
         autoplaySpeed: 3000,
         centerMode: true,
         swipe: false,
       }
     },
  ]
    });
  
    // $(".banner_slick").slick({
    //   dots: true,
    //   arrows: true,
    //   /* �꾨옒�� */
    //   infinite: true,
    //   /* 留⑤걹�대�吏��먯꽌 �앸굹吏� �딄퀬 �ㅼ떆 留⑥븵�쇰줈 �대룞 */
    //   slidesToShow: 1,
    //   touchMove: false,
    //   /* �붾㈃�� 蹂댁뿬吏� �대�吏� 媛�닔*/
    //   slidesToScroll: 1,
    //   arrows: true,
    //   /* �붿궡�� */
    //   speed: 2000,
    //   autoplay: false,
    //   autoplaySpeed: 2000,
    //   responsive: [ // 諛섏쓳�� �� 援ы쁽 �듭뀡
    //      {
    //     	breakpoint: 640, //�붾㈃ �ъ씠利� 640px
    //     		settings: {
    //     			//�꾩뿉 �듭뀡�� �뷀뤃�� , �ш린�� 異붽��섎㈃ 洹멸구濡� 蹂�寃�
    //     			speed : 500 //�띾룄 蹂�寃�
    //     		}
    //     	}
    //     ]
    // });
  
    // $("#slick2").slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     fade: true,
    //     speed: 3000,
    //     infinite: true,
    //     responsive: [ // 諛섏쓳�� �� 援ы쁽 �듭뀡
    //         {
    //             breakpoint: 640, //�붾㈃ �ъ씠利� 960px
    //             settings: {
    //                 //�꾩뿉 �듭뀡�� �뷀뤃�� , �ш린�� 異붽��섎㈃ 洹멸구濡� 蹂�寃�
    //                 speed: 500,
    //             }
    //         }
    //     ]
    // });
  
  
    //    $('#slick2').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //        if (currentSlide == 0) {
    //            $('.drug_type ul li:eq(0) h5').text("1-1");
    //            $('.drug_type ul li:eq(1) h5').text("1-2");
    //        } else if (currentSlide == 1) {
    //            $('.drug_type ul li:eq(0) h5').text("2-1");
    //            $('.drug_type ul li:eq(1) h5').text("2-2");
    //        } else if (currentSlide == 2) {
    //            $('.drug_type ul li:eq(0) h5').text("3-1");
    //            $('.drug_type ul li:eq(1) h5').text("3-2");
    //        } else if (currentSlide == 3) {
    //            $('.drug_type ul li:eq(0) h5').text("4-1");
    //            $('.drug_type ul li:eq(1) h5').text("4-2");
    //        }
    //    });
  
    var scroll_one = false;
  
    $(window).bind("scroll", function() {
      scrollContainer();
  
      if ($(window).scrollTop() > 200 && scroll_one == false) {
  
        //            $('.counter').jQuerySimpleCounter({
        //                // start number
        //                start: 0,
        //                // end number
        //                end: 1017,
        //                // easing effect
        //                easing: 'easeOutCubic',
        //                // duration time in ms
        //                duration: 3000
        //            });
  
        //            $(".counter").animateNumbers(1017);
        // $(".counter").animateNumbers(success_story_count, true, 1500);
        scroll_one = true;
      }
  
  
    });
  
    function phils_image_price(input) {
      var output = ""
  
      for (var i = 0; i < input.length; i++) {
        var chr = input.substring(i, i + 1)
        if (chr == '짙') {
          output += '<img border="0" src="img/pound.gif">';
        } else if (chr == '.') {
          output += '<img border="0" src="img/dot.gif">';
        } else {
          output += '<img border="0" src="img/' + (chr + 1) + '.gif">';
        }
        return output;
      }
    }
  
    $(".marker-animation").markerAnimation({
      color: '#eee4d1',
      duration: '0s'
    });
  
    $('.top_Btn').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  
  
    var tabAnchor = $('.tab_btn li'),
      tabPanel = $('.tab_panel');
  
    tabAnchor.bind("click", function() {
  
      $(this).addClass('on');
      $(this).siblings('li').removeClass('on');
      var $targetIdx = $(this).index();
      $('.tab_cont .tab_panel:eq(' + $targetIdx + ')').addClass('on').siblings().removeClass('on')
    });
  
    tabAnchor.eq(0).trigger('click');
  
  
  
  
  });