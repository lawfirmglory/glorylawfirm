
	
var main = {
	init: function () {
		main.visual(); // visual
		main.business(); // �ъ뾽�뚭컻
		// main.passion(); // professional with passion
		// main.manage(); // manage

		main.scroll();

		window.addEventListener('load', function() {
			document.querySelector('#container').classList.add('_load');
		})
	},
	visual: function() {
		const mv = main.visual;
		mv.wrap = document.querySelector('#mainVisual');
		mv.slide = mv.wrap.querySelector('.swiper-container');
		mv.paging = mv.slide.querySelector('.pagination');
		mv.pageBtns;
		mv.saveIndex = 0;
		mv.isTouch = false;


		mv.realTime = 0; // animFrameTime
		mv.delay = 3000;
		mv.speed = 1000;
		mv.progress = 0;
		mv.runningTime = mv.delay;
		mv.requestAnim;
		mv.currentTime = 0; // 
		mv.currentIdx; //
		mv.restartAnim; // 
		mv.slides = Array.from(mv.slide.querySelectorAll('.swiper-slide'));
		mv.swiper = new Swiper(mv.slide, {
			observer: true,
            observeParents: true,
            slidesPerGroup: 1,
            slidesPerView: 1,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
			pagination: {
				el: mv.paging,
				bulletClass: 'paging_btn',
				renderBullet: function (index, className) {
					return '<button type="button" class="' + className + '"><i class="text_hide">' + (index + 1) + "</i></button>";
				},
			},
            loop: true,
            speed: mv.speed,
			on: {
				init: function(swiper) {
					mv.currentIdx = 0;
					mv.pageBtns = Array.from(mv.paging.querySelectorAll('.paging_btn'));
					initProgress();
					setTimeout(function() {
						swiper.slides.forEach(el => {
							if(el != swiper.visibleSlides[0]) {
								el.querySelector('.mv_txt_box').classList.remove('active');
								return false;
							}
							el.querySelector('.mv_txt_box').classList.add('active');
						})
					}, 250);
				},
				touchStart: function(swiper, event) {
					// stopSwiper();
				},
				touchEnd: function(swiper, event) {
					mv.isTouch = true;
					// playSwiper();
				},
				transitionEnd: function(swiper) {
					mv.currentIdx = swiper.realIndex
				},
				realIndexChange: function(swiper) {
					var cnt =  0;
					var act = false;
					cancelAnimationFrame(mv.requestAnim);
					var currentIdx = swiper.realIndex;

					swiper.slides.forEach(el => {
						if(el != swiper.visibleSlides[0]) {
							el.querySelector('.mv_txt_box').classList.remove('active');
							return false;
						}
						el.querySelector('.mv_txt_box').classList.add('active');
					})

					while(cnt < mv.pageBtns.length) {
						mv.pageBtns[cnt].classList.remove('on');
						mv.pageBtns[cnt].style.setProperty('--duration', 0);
						if(cnt < currentIdx) {
							mv.pageBtns[cnt].classList.add('on')
						}else if(cnt == currentIdx) {
							act = true;
							mv.currentIdx = cnt;
							initProgress();
						}
						cnt++;
					}

					mv.saveIndex = swiper.realIndex; // 留덉�留� �몃뜳�� ����
				}
			},
		});

		function moveNextSlide() {
			mv.swiper.slideNext(mv.speed);
			// mv.swiper.slideTo(nextSlide, mv.speed);
		}
		function initProgress(startPercent = 1) {
			const current = mv.pageBtns[mv.currentIdx];
			cancelAnimationFrame(mv.requestAnim);
			let start = performance.now();
			function render(currentTime) {
				const elapsed = performance.now() - start;
				mv.progress = Math.min(((elapsed / mv.runningTime) * 100) + startPercent, 100);

				current.style.setProperty('--duration',`${mv.progress}%`);
				if(mv.progress >= 100) {
					cancelAnimationFrame(mv.requestAnim);
					mv.browserNow = performance.now();
					moveNextSlide()
					mv.isTouch = false;
				}else {
					mv.requestAnim = requestAnimationFrame(render);
				}
			}
			mv.requestAnim = requestAnimationFrame(render);
        }


		mv.contr = mv.slide.querySelector('.mv_contr');
		mv.stop = mv.contr.querySelector('.mv_pause');
		mv.play = mv.contr.querySelector('.mv_play');
		mv.stop.addEventListener('click', stopSwiper);
		function stopSwiper() {
			mv.contr.classList.add('on');
			cancelAnimationFrame(mv.restartAnim)
			cancelAnimationFrame(mv.requestAnim);
		}
		mv.play.addEventListener('click', playSwiper);

		function playSwiper() {
			mv.contr.classList.remove('on');
			initProgress(mv.progress);

			let saveRestartTime = performance.now();
			let limitTime = saveRestartTime + (mv.delay - mv.delay * (mv.progress / 100));
			function restart(timestamp) {
				saveRestartTime = performance.now();
				if(saveRestartTime >= limitTime) {
					mv.swiper.slideNext(mv.speed);
					cancelAnimationFrame(mv.restartAnim)
				}else {
					mv.restartAnim = requestAnimationFrame(restart);
				}
			}
			mv.restartAnim = requestAnimationFrame(restart);
		}
	},
	business: function() {
		const bs = main.business;
		bs.wrap = document.querySelector('#businessWrap');
		bs.item = Array.from(bs.wrap.querySelectorAll('.bs_box'));
		bs.item.forEach(el => {
			el.addEventListener('click', function() {
				let getHei;
				if(!el.style.getPropertyValue('--inner-height')) {
					getHei = el.querySelector('.bs_contents').offsetHeight;
					console.log(getHei);
				
					el.style.setProperty('--inner-height', `${getHei}px`);
				}			
				this.classList.add('on');
				
				getHei = el.querySelector('.bs_contents').offsetHeight;
				
				el.style.setProperty('--inner-height', `${getHei}px`);

				bs.item.filter((ele, idx) => {
					if(el !== ele) {
						ele.classList.remove('on');
					}else {
						switch(idx) {
							case 0:
								bs.wrap.classList.remove('on');
								break;
							default:
								bs.wrap.classList.add('on');
								break;
						}
					}
				});
			})
		})
	},
	passion: function() {
		const ps = main.passion;
		ps.wrap = document.querySelector('#passionWrap');
		ps.slide = ps.wrap.querySelector('.recruit_banner');
		ps.prev = ps.wrap.querySelector('.prev_btn');
		ps.next = ps.wrap.querySelector('.next_btn');
		ps.swiper = new Swiper(ps.slide, {
			observer: true,
            observeParents: true,
            slidesPerView: 1,
			slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,
			loopPreventsSliding: true,
            speed: 1000,
            loopAdditionalSlides: 4,
			watchSlidesProgress: true,
			lazy : {
				loadPrevNext : true, // �댁쟾, �ㅼ쓬 �대�吏��� 誘몃━ 濡쒕뵫
				lazyLoadingInPrevNextAmount: 6,
			},
			navigation: {
				prevEl: ps.prev,
				nextEl: ps.next,
			},
			breakpoints: {
				800: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			}
		});
	},
	manage: function() {
		const mn = main.manage;
		mn.items = Array.from(document.querySelectorAll('#manageWrap .manager_item'));


		mn.bg = document.querySelector('#manageWrap .hov_bg');
		const setTranslateBg = function(x, y) {
			mn.bg.style.setProperty('--set-transition', `${x}, ${y}`);
		};
		const moveManageBg = function(event) {
			mn.bg.classList.add('on');
			switch(getIndex(event.currentTarget)) {
				case 0:
					setTranslateBg(0, 0);
					break;
				case 1:
					setTranslateBg('100%', 0);
					break;
				case 2:
					setTranslateBg(0, '100%');
					break;
				case 3:
					setTranslateBg('100%', '100%');
					break;
			}
		}
		mn.items.forEach(el => {
			el.addEventListener('mouseenter', function(event){
				if(window.matchMedia('(min-width: 1024px)').matches) {
					moveManageBg.call(0, event);
				}
			});
			el.addEventListener('click', function(event) {
				if(window.matchMedia('(max-width: 1023px)').matches) {
					mn.items.forEach(ele => ele.classList.remove('on'));
					if(!event.currentTarget.classList.contains('on')) {
						event.currentTarget.classList.add('on');
						moveManageBg.call(0, event);
					}else {
						event.currentTarget.classList.remove('on');
					}
				}
			});
		})
		document.querySelector('.manage_lists').addEventListener('mouseleave', function() {
			mn.bg.classList.remove('on');
		})

		var setResizeHei = function() {
			mn.items.forEach(el => {
				// el.setAttribute('')
				if(el.querySelector('.ml_txt')) {
					el.style.setProperty('--set-height', el.querySelector('.ml_txt').offsetHeight+'px');
				}
			});
		};

		setResizeHei(); // height �명똿

		window.addEventListener('resize', throttle(setResizeHei), 100);
	},
	resize : function(){
		var delta = 30;

		var _resizeWidth = window.innerWidth;
		if (Math.abs(main.lastResizeWidth - _resizeWidth) <= delta) return;

		//�ㅽ뻾援ш컙

		main.lastResizeWidth = _resizeWidth;
    },
	scroll : function(){
		gsap.registerPlugin(ScrollTrigger);
		
		// shadow
		const mv = document.querySelector("#mainVisual");
		const mvCon = mv.querySelector('.visual_wrap');
		const mvTrigger = document.querySelector('#visualTransWrap');
		mvTrigger.style.height = `calc(var(--vh, 1vh) * 200)`;
		mv.style.height = `calc(var(--vh, 1vh) * 200)`;
		gsap.to(mvCon, {
			opacity: 0,
			scrollTrigger: {
				trigger: mvTrigger,
				start: 'bottom bottom',
				end: '200% bottom',
				pin: mvCon,
				pinSpacer: false,
				scrub: true,
			},
		})

		//�ㅽ뻾援ш컙

		main.lastScrollTop = _scrollTop;


		var trigger = gsap.utils.toArray('.mv_container');
		let bg = trigger.filter(el => el.classList.contains('bg_anim'));
		bg.forEach(function(el, idx) {
			gsap.to(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 70%',
					onEnter: () => {
						el.classList.add('on');
					}
				}
			})
		})
		trigger.forEach(function(tri, idx){
			let waves = Array.from(tri.querySelectorAll('.wave_anim[data-anim="scroll"]'));

			waves.forEach(el => {
				gsap.to(el, {
					scrollTrigger: {
						trigger: tri,
						start: 'top 50%',
						onEnter: () => {
							el.classList.add('on');
						}
					}
				})
			})
		});
    },
}

main.init();
