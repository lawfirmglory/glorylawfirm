// Mobile
// if(isMobile && !isIe){
// }
function vhMax (){
	var vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', vh + 'px');
}
vhMax();

window.addEventListener('resize', debounce(vhMax, 100));
var scroll = {
	disable : function(){
		scroll.overflow = $('body').css('overflow');
		$('body').css('overflow', 'hidden');
	},
	enable : function(){
		$('body').css('overflow', scroll.overflow);
	},
}
var layout = {
	init: function () {
		setTimeout(function(){
			AOS.init({ easing: 'ease-out-cubic', duration:1000, once : true, offset: 10, });
		}, 300);

		// init
		layout.header = document.querySelector('#header');
		layout.footer = document.querySelector('#footer');
		layout.con    = document.querySelector('#con');
		layout.familyBtn = layout.footer.querySelector('.family_btn');
		layout.topBtn = layout.footer.querySelector('.ft_top');

		//resize event
		layout.lastResizeWidth = 0;
		layout.resize();
		window.addEventListener("resize", layout.resize);

		
		//scroll event
		layout.scrollTop = 0;
		layout.lastScrollTop = 0;
		layout.scroll();
		// layout.scrollTargetEl = (isMobile) ? document.querySelector('body') : window;
		window.addEventListener("scroll", layout.scroll);

		layout.familyBtn.addEventListener('click', function() {
			common_switchEvt(this);
		})

		layout.nav();

		layout.allmenu();

		layout.flowAnim();

		if(layout.topBtn) {
			layout.topBtn.addEventListener('click', function() {
				window.scrollTo({
					top: 0,
				});
			})
		}

		const lang = document.querySelector('.h_inner .lang_box');
		lang.addEventListener('click', event => {
			if(window.matchMedia('(max-width: 1280px)').matches) {
				common_switchEvt(lang);
			}
		})
	},

	nav: function() {
		layout.nav = layout.header.querySelector('#gnb');
		layout.dep1 = Array.from(layout.nav.querySelectorAll('.dep1'));
		const rt = document.documentElement;
		const getNavHei = function() {
			return getComputedStyle(rt).getPropertyValue('--dep2-hei').replace('rem','') * 16;
		}
		const setNavHei = function(hei) {
			return rt.style.setProperty('--dep2-hei', `${hei / 16}rem`);
		}
		let hei = getNavHei();
		const getMaxHei = function() {
			let h = 0;
			Array.from(layout.nav.querySelectorAll('.dep2')).forEach(el => {
				el.style.height = 'auto';
				if(el.offsetHeight >= h) h = el.offsetHeight;
				el.style.height = 'var(--dep2-hei)';
			})
			return h;
		}

		function loadEvt() {
			if(!layout.nav.classList.contains('_load')) {
				layout.nav.classList.add('_load');
				layout.header.classList.add('on');
			}
			event.currentTarget.removeEventListener('mouseenter', loadEvt);
		}

		layout.dep1.forEach(el => {
			el.addEventListener('mouseenter', loadEvt);
		})
		
		layout.nav.addEventListener('mouseenter', function() {
			layout.header.classList.add('on');
		});
		layout.nav.addEventListener('mouseleave', function() {
			layout.header.classList.remove('on');
			Array.from(layout.nav.querySelectorAll('.dep2_tit.on')).forEach(el => { el.classList.remove('on')});
			setNavHei(Number(getMaxHei()));
		})

		
		let dep2 = '';
		Array.from(layout.nav.querySelectorAll('.dep2_tit')).forEach(el => {
			if(el.nextElementSibling) {
				el.classList.add('child');
				el.addEventListener('click', function(event) {
					event.preventDefault();
					common_switchEvt(el);
					dep2.forEach(ele => {
						if(el != ele) {
							ele.classList.remove('on')
						}
					});
					setNavHei(Number(getMaxHei()));
				})
			}
		})
		dep2 = Array.from(layout.nav.querySelectorAll('.dep2_tit.child'));
	},
	allmenu: function() {
		const allMnBtns = Array.from(document.querySelectorAll('.all_menu_btn'));
		layout.allMenuWrap = document.querySelector('#allMenuWrap');
		layout.activeAllMn = false;
		allMnBtns.forEach(el => {
			el.addEventListener('click', function() {
				if(this.classList.contains('on')) {
					layout.activeAllMn = false;
					allMnBtns.forEach(el => el.classList.remove('on'));
					layout.closeAllMenu();
				}else {
					layout.activeAllMn = true;
					allMnBtns.forEach(el => el.classList.add('on'));
					layout.openAllMenu();
				}
			})
		});
		Array.from(layout.allMenuWrap.querySelectorAll('.dep2_tit')).forEach(el => {
			if(el.nextElementSibling) el.classList.add('child');
		})
		layout.dep1 = Array.from(layout.allMenuWrap.querySelectorAll('.dep1_tit, .dep2_tit.child'));
		layout.dep1.forEach(el => {
			el.addEventListener('click', function(event) {
				if(window.matchMedia('(max-width: 1280px)').matches) {
					event.preventDefault();
					common_switchEvt(this);
				}
			})
		})

	},
	openAllMenu: function() {
		scroll.disable();
		layout.allMenuWrap.classList.add('on');
	},
	closeAllMenu: function() {
		scroll.enable();
		layout.allMenuWrap.classList.remove('on');
	},
	resize: function () {
		var delta = 30;

		var _resizeWidth = window.innerWidth;
		if (Math.abs(layout.lastResizeWidth - _resizeWidth) <= delta) return;

		//�ㅽ뻾援ш컙


		layout.lastResizeWidth = _resizeWidth;
	},
	flowAnim: function() {
		const elements = gsap.utils.toArray(".flow_anim, .fade_anim");
		if(!elements) return; // �놁쑝硫� 由ы꽩
		elements.forEach(el => {
			gsap.to(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 88%',
					end: 'bottom top',
					markers: false,
					onEnter: () => {
						el.classList.add('view');
					}
				}
			})
		})
	},
	scroll: function () {
		var delta = (isMobile) ? 30 : 15;


		layout.innerHeight = window.innerHeight;
		layout.headerH     = layout.header.offsetHeight;
		layout.conTop      = layout.con.offsetTop;
		layout.footerTop   = layout.footer.offsetTop;
		layout.footerH     = layout.footer.offsetHeight;
		
		layout.scrollTop = (isIe) ? document.querySelector('html').scrollTop : window.pageYOffset;
		layout.scrollTop = (isMobile) ? document.querySelector('html').scrollTop : layout.scrollTop;
		
		//scroll up down 援щ텇
		if(layout.lastScrollTop < layout.scrollTop && layout.conTop < layout.scrollTop){
			!layout.header.classList.contains('down') ? layout.header.classList.add('down') : '';
		}else if(layout.lastScrollTop  > layout.scrollTop && layout.conTop < layout.scrollTop){
			layout.header.classList.remove('down');
		}
		if(layout.scrollTop == 0) {
			layout.header.classList.contains('down') ? layout.header.classList.remove('down') : '';
		}

		//header
		if(layout.headerH / 2 < layout.scrollTop) {
			!layout.header.classList.contains('scroll') ? layout.header.classList.add('scroll') : '';
			// $('.floating_menu').addClass('scroll');
		}else{
			layout.header.classList.contains('scroll') ? layout.header.classList.remove('scroll') : '';
			$(".header.scroll").removeClass('scroll');
			// $('.floating_menu').removeClass('scroll');
		}

		layout.lastScrollTop = layout.scrollTop;


		var trigger = Array.from(document.querySelectorAll('.sub_cont'));
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

layout.init();