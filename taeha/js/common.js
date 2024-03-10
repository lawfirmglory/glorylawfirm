$(function () {

    $(".hand").slick({
      dots: false,
      /* �꾨옒�� */
      // infinite: true,
      /* 留⑤걹�대�吏��먯꽌 �앸굹吏� �딄퀬 �ㅼ떆 留⑥븵�쇰줈 �대룞 */
      slidesToShow: 3,
      /* �붾㈃�� 蹂댁뿬吏� �대�吏� 媛�닔*/
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      /* �붿궡�� */
      speed: 1200,
      /* �ㅼ쓬�대�吏�濡� �섍꺼吏덈븣 嫄몃━�� �쒓컙 */
      responsive: [{
          breakpoint: 1280,
          settings: {
            rows: 2,
            slidesToShow: 2,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            rows:1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
  
      ]
    });
  
    // $(".hand2").slick({
    //   dots: false,
    //   /* �꾨옒�� */
    //   // infinite: true,
    //   /* 留⑤걹�대�吏��먯꽌 �앸굹吏� �딄퀬 �ㅼ떆 留⑥븵�쇰줈 �대룞 */
    //   slidesToShow: 2,
    //   /* �붾㈃�� 蹂댁뿬吏� �대�吏� 媛�닔*/
    //   slidesToScroll: 1,
    //   arrows: true,
    //   autoplay: true,
    //   /* �붿궡�� */
    //   speed: 1200,
    //   /* �ㅼ쓬�대�吏�濡� �섍꺼吏덈븣 嫄몃━�� �쒓컙 */
    //   responsive: [{
    //       breakpoint: 1280,
    //       settings: {
    //         rows: 2,
    //         slidesToShow: 2,
    //         slidesToScroll: 4,
    //         infinite: true
    //       }
    //     },
    //     {
    //       breakpoint: 640,
    //       settings: {
    //         rows:1,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true
    //       }
    //     }
    //
    //   ]
    // });
  
    //var _spacing = 100;
    //var _banner_time = 8000;
    $('.fixed_banner_mobile').css({'display':'block'})
    //let _banner = $('.fixed_banner_mobile > div > div').html();
    //let _w = $('.fixed_banner_mobile > div > div > p').width()
    //$('.fixed_banner_mobile > div > div').html(_banner+_banner)
    //$('.fixed_banner_mobile > div > div > p').css({'width':_w+'px','padding-right':_spacing+'px'})
    var didScroll;
    //rolling();
    function rolling(){
      $('.fixed_banner_mobile > div').animate({'margin-left':_w*-1+'px'}, _banner_time,"linear",function(){
        $(this).css({'margin-left':'0px'})
        rolling();
      })
    }
    // �ㅽ겕濡ㅼ떆�� �ъ슜�먭� �ㅽ겕濡ㅽ뻽�ㅻ뒗 寃껋쓣 �뚮┝
    $(window).scroll(function(event){
        didScroll = true;
    });
  
    //0.25珥덈쭏�� �ㅽ겕濡� �щ� 泥댄겕�섏뿬 �ㅽ겕濡� 以묒씠硫� hasScrolled() �몄텧
    setInterval(function(){
        if(didScroll){
            hasScrolled();
        }
    }, 250);
  
  
    var lawer = [
      {
        name1:'�� 踰뺣Т遺��κ�',
        // name2:'�닿��� 怨좊Ц蹂��몄궗',
        name2:'�닿��� 蹂��몄궗',
        img_src:'/include/images/common/fixed_lawer1.png',
        history:["쨌踰뺣Т遺��κ�","쨌怨좊벑寃��ъ옣","쨌��寃�李곗껌怨듭븞遺���","쨌��寃�李곗껌以묒븰�섏궗遺���"]
      },
      {
        name1:'�� �쒖슱遺곷�吏�泥�옣',
        // name2:'�꾩뼇�� 蹂��몄궗',
        name2:'�꾩뼇�� 蹂��몄궗',
        img_src:'/include/images/common/fixed_lawer_ywlim.png',
        history:["쨌���쒕��� �깅줉 �뺤궗�꾨Ц","쨌�뺤궗�ш굔 1,200嫄� �섑뻾","쨌媛뺢컙/�댁씤 �� 媛뺣젰�ш굔 臾댁즲","쨌�깅쾾二� 臾댄삉��/湲곗냼�좎삁 鸚�","쨌�ш린,�〓졊 �� �ъ궛踰붿즲 臾댁즲","쨌怨듭쨷��3�� JTBC �� 諛⑹넚 異쒖뿰"]
      },
      {
        name1:'�먃룰��� 異쒖떊',
        // name2:'理쒖듅�� ���쒕��몄궗',
        name2:'理쒖듅�� 蹂��몄궗',
        img_src:'/include/images/common/fixed_lawer4.png',
        history:["쨌遺��곗�諛⑷�李곗껌寃���","쨌�섏젙遺�吏�諛⑸쾿�� �먯궗","쨌20. 12 踰뺢��댁엫","쨌愿묒＜吏�寃� �쒖쿇吏�泥� 寃���","쨌�섏젙遺�吏�諛⑷�李곗껌 寃���","쨌愿묒＜吏�諛⑸쾿�� �쒖쿇吏��� �먯궗"]
      },
      {
        name1:'援곌��� 異쒖떊',
        // name2:'�좎옱�� ���쒕��몄궗',
        name2:'源�吏꾪삎 蹂��몄궗',
        img_src:'/include/images/common/fixed_lawer21.png',
        history:["쨌援���덉쟾湲고쉷遺�(�� 援���뺣낫��) �ъ쭅","쨌援���덈낫�듭씪�곌뎄�� �먯옣","쨌��踰뺤썝 踰뺤썝�됱젙泥� 踰뺢��몄궗�꾩썝�� �꾩썝","쨌踰뺥븰�꾨Ц���숈썝 �묒쓽�� �댁궗"]
      },
      {
        name1:'寃쎌같 異쒖떊',
        // name2:'源��몄젙 怨좊Ц蹂��몄궗',
        name2:'�먯썝�� 蹂��몄궗',
        img_src:'/include/images/common/fixed_lawer8.png',
        history:["쨌踰뺣Т踰뺤씤 �쒗븯 �몄쿇 吏��ъ옣","쨌寃쎄린�⑤�寃쎌같泥� �섏궗怨� �곸옣�ъ궗愿�","쨌寃쎄린�쒗씎寃쎌같�� �섏궗怨� 寃쎌젣踰붿즲쨌�ъ씠踰꾨쾾二꾩닔�ы�","쨌�몄쿇寃쎌같泥� 寃쎈Т怨� 援���뚯넚�대떦","쨌SP* 洹쇰줈�� �щ쭩�ш굔 TF��","쨌**�곕� 吏묐떒�댁넚嫄곕� �섏궗湲고쉷","쨌�꾩꽭�ш린 �밸퀎�⑥냽 �섏궗湲고쉷","쨌釉뚯씠*** 媛��곹솕�� �ш린�ш굔 TF�� �� �ㅼ닔","쨌�� 沅뚯쑝濡� 諛곗슦�� �섏궗�ㅻТ �� �꾩꽌 吏묓븘 �ㅼ닔"]
      },
      {
        name1:'�뺤궗�꾨Ц蹂��몄궗',
        // name2:'梨꾩쓽以� 蹂��몄궗',
        name2:'梨꾩쓽以� 蹂��몄궗',
        img_src:'/include/images/common/fixed_lawer5.png',
        history:["쨌���쒕��� �깅줉 �뺤궗�꾨Ц","쨌�뺤궗�ш굔 1,200嫄� �섑뻾","쨌媛뺢컙/�댁씤 �� 媛뺣젰�ш굔 臾댁즲","쨌�깅쾾二� 臾댄삉��/湲곗냼�좎삁 鸚�","쨌�ш린,�〓졊 �� �ъ궛踰붿즲 臾댁즲","쨌怨듭쨷��3�� JTBC �� 諛⑹넚 異쒖뿰"]
      },
      {
        name1:'�뺤궗�꾨Ц蹂��몄궗',
        // name2:'�앹쥌�� 蹂��몄궗',
        name2:'�앹쥌�� 蹂��몄궗',
        img_src:'/include/images/common/fixed_lawer6.png',
        history:["쨌���쒕��� �깅줉 �뺤궗�꾨Ц蹂��몄궗","쨌���쒕��몄궗�묓쉶 ���섏썝","쨌�뺤궗�ш굔 1,000嫄� �댁긽","쨌�댄깭�� �댁씤�ш굔 �� 蹂�濡� ","쨌�깅쾾二꾩쟾�댁꽱�� ���쒕��몄궗","쨌���쒕��� 嫄댁꽕�뺤궗�꾨Ц媛� 怨쇱젙 �섎즺 ","쨌KBS, MBC, �고빀�댁뒪 �� 諛⑹넚 異쒖뿰 �ㅼ닔"]
      },
    ]
  
    var lawer_cnt = lawer.length;
    var i=0;
  
  
    function hasScrolled() {
      if($(document).scrollTop()<100){
          $('.fixed_banner').hide();
      } else {
          $('.fixed_banner').show();
      }
    }
  
    const law_change = function(){
      if(i==lawer_cnt-1){
        i=0;
        law_change_item();
      } else {
        i++;
        law_change_item();
      }
    }
  
    const law_change_item = function(){
      $('.fixed_banner_box .left_box .name_box').animate({
          opacity: 0
      },500);
      $('.fixed_banner_box .center_man img').animate({
          opacity: 0
      },500);
      $('.fixed_banner_box .right_box ul').animate({
          opacity: 0
      },500);
  
      law_change_item2();
    }
  
    const law_change_item2 = function(){
  
      $('.fixed_banner_box .left_box .name_box').animate({
          opacity: 1
      },500).delay(500);
      $('.fixed_banner_box .center_man img').animate({
          opacity: 1
      },500).delay(500);
      $('.fixed_banner_box .right_box ul').animate({
          opacity: 1
      },500).delay(500);
  
      setTimeout(function() {
        var node1;
        $('.fixed_banner_box .left_box .name_box h3').text(lawer[i].name1);
        $('.fixed_banner_box .left_box .name_box p').text(lawer[i].name2);
        $('.fixed_banner_box .center_man img').attr("src",lawer[i].img_src);
        var history_cnt = lawer[i].history.length;
        for(var j=0;j<history_cnt;j++){
          node1 += '<li>'+ lawer[i].history[j] +'</li>';
        }
        $('.fixed_banner_box .right_box ul').html(node1);
      }, 500);
  
  
    }
  
  
    var law_id = setInterval(law_change, 3500);
  
      $('header .hamberger').click(function () {
          $('body').toggleClass('active');
          $('.header__wrap').toggleClass('active');
      });
  
      setTimeout(function () {
          $('header').addClass('view');
      }, 500);
  
      function header_fade() {
          var bannerTimer = null;
          if ($("body").width() <= 1280) {
              bannerTimer = setTimeout(function () {
                  $("header").addClass('active')
              }, 0);
              $(window).bind("scroll", function (e) {
                  if ($("body").width() <= 1280) {
                      $("header").removeClass('active')
                      clearInterval(bannerTimer);
                      bannerTimer = setTimeout(function () {
                          $("header").addClass('active')
                      }, 0);
                  }
              });
              // $('.page_banner > i').bind('click',function(e){
              //     $(window).unbind("scroll");
              //     e.preventDefault();
              //     $(this).parent().fadeOut(200);
              // });
          } else {
  
              clearInterval(bannerTimer);
              $("header").addClass('active')
          }
      }
  
      //    $(window).resize(function () {
      //        if ($(document).width() <= 1262) {
      //            $('.depth1').addClass('table_mobile');
      //            $("nav ul.depth1.table_mobile ul.depth2").slideUp();
      //            $("nav ul.depth1.table_mobile > li > a").click(function (e) {
      //                $("nav ul.depth1 > li > a").removeClass('gnb_active');
      //                $("nav ul.depth1.table_mobile ul.depth2").slideUp();
      //                $(this).toggleClass('gnb_active').siblings(".depth2").stop().slideToggle();
      //                e.preventDefault();
      //            });
      //
      //        } else {
      //            $("nav ul.depth1.table_mobile ul.depth2").slideDown();
      //            $('.depth1').removeClass('table_mobile');
      //            $('body').removeClass('active');
      //        }
      //        header_fade();
      //    }).trigger("resize");
  
      /* open mobile */
      if ($(document).width() <= 1262) {
          $('.depth1').addClass('table_mobile');
          $("nav ul.depth1.table_mobile ul.depth2").slideUp();
          $("nav ul.depth1.table_mobile > li > a").click(function (e) {
              if ($(this).hasClass('gnb_active')) {
                  $(this).siblings(".depth2").stop().slideToggle();
                  $("nav ul.depth1.table_mobile > li > a").removeClass('gnb_active');
              } else {
                  $("nav ul.depth1.table_mobile > li > a").removeClass('gnb_active');
                  $("nav ul.depth1.table_mobile ul.depth2").slideUp();
                  $(this).toggleClass('gnb_active').siblings(".depth2").stop().slideToggle();
              }
              e.preventDefault();
          });
      }
  
      var scrollobj = ".dummy, .text_box, .things_3, .animation, .animation_text, .delay1, .delay05, .delay04";
  
      function scrollContainer() {
  
          var scrollPos = $(document).scrollTop();
          var activePoint = parseInt($(window).height() - $(window).height() / 6);
          var removePoint = parseInt(0);
          if (scrollPos > 55) {
              $('header').addClass("active");
              $('.call_box').addClass("active");
              $('.fixed_banner_mobile').addClass("active");
          } else {
              $('header').removeClass("active");
              $('.call_box').removeClass("active");
              $('.fixed_banner_mobile').removeClass("active");
          }
          $(scrollobj).each(function (e) {
              var currLink = $(this)
              if (currLink.offset().top - activePoint <= scrollPos && currLink.offset().top + currLink.height() > scrollPos + removePoint) {
                  currLink.addClass("sc-event");
              }
          });
      }
      $(".top_Btn").click(function () {
          $('html, body').animate({
              scrollTop: 0
          }, 400);
          return false;
      });
  
      $(window).bind("scroll", function () {
          scrollContainer();
      }).trigger("scroll");
  
  
      $('.Phone.is-animating').click(function (e) {
          e.preventDefault();
          e.stopPropagation();
          if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $(this).parents().parents().removeClass('act');
              $(this).parents().removeAttr("href");
          } else {
              $(this).addClass('active');
              $(this).parents().parents().addClass('act');
              $(this).parents().attr("href", "tel:02-6959-4939");
          }
  
          $('.Phone.is-animating').off();
  
      });
  
      $(".marker-animation").markerAnimation({
          color: '#eee4d1'
      });
  
      header_banner();
  
  });
  
  const header_banner = function() {
  
    const items = document.querySelectorAll(".header__banner .item");
        let currentIndex = 0;
  
        // �⑥닔瑜� �몄텧�섏뿬 �꾩씠�쒖쓣 蹂�寃쏀븯怨� 5珥덈쭏�� �몄텧
        function rotateItems() {
  
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add("active");
  
            if(currentIndex==0){
              $('.header__banner').addClass('bg1');
            } else {
              $('.header__banner').removeClass('bg1');
            }
        }
  
        // 5珥덈쭏�� �몄텧
        setInterval(rotateItems, 6000);
  }
  
  $(window).on( "scroll", function(e){
      var wT = $(this).scrollTop();
      // const ini_top = 75;
      if( wT >55) {
        $('header.test').addClass('fixed')
      } else {
        $('header.test').removeClass('fixed')
      }
  });