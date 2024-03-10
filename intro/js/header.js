const template = document.getElementById('header_template');
template.innerHTML = `
<header id="header">

	<!-- logo -->
	<h2 class="logo">
		<a href="./index.html">
			<img src="./intro/img/logo_on.png" alt="법무법인(유한) 글로리" class="basic" />
			<img src="./intro/img/f_logo.png" alt="" class="white" />
		</a>
	</h2>

	<!-- gnb -->
	<ul id="gnb">

<li class="">
	<a href="./case1.html">경찰・검찰 수사단계</a>
	<!-- <ul>
		<li class=""><a href="./intro/company/info">글로리</a></li>

		<li class=""><a href="./intro/company/whyap">왜 글로리인가?</a></li>

		<li class=""><a href="./intro/company/member">구성원소개</a></li>
		<li class=""><a href="./intro/company/board">언론보도</a></li>
	</ul> -->
</li>
<li class="">
	<a href="./case2.html">법원단계</a>
</li>
<li class="">
	<a href="./location.html">오시는길</a>
</li>


<li class="">
	<a href="./consulting.html">긴급상담</a>
	
</li>



	</ul>

	<div class="telBox">
		<a href="tel:042-721-0606">
			<dl>
				<dt>24시간 비밀상담</dt>
				<dd>042-721-0606</dd>
			</dl>
		</a>
	</div>

	<!-- slide button -->
	<div id="slide-btn">
		<div class="vam">
			<button><span></span></button>
		</div>
	</div>

	<div id="downBG"></div>
</header>

<div id="drdw"><ul class="inner"></ul></div>

<div id="slide-menu">
	<div class="tit">

		<a href="#" id="slide-close"></a>

	</div>

	<!-- gnb -->
	<ul id="gnb-mo">

<li class="">
	<a href="./case1.html">경찰・검찰 수사단계</a>
	
</li>
<li class="">
	<a href="./case2.html">법원단계</a>
</li>
<li class="">
	<a href="./location.html">오시는길</a>
</li>
<li class="">
	<a href="./consulting.html">긴급상담</a>

</li>



<li class=" hidden-gnb">
	<a href="./intro/doc/policy">약관 및 정책</a>
	<ul>
		<li class=""><a href="./intro/doc/policy">이용약관</a></li>
		<li class=""><a href="./intro/doc/private">개인정보처리방침</a></li>
		<li class=""><a href="./intro/doc/antiemail">이메일무단수집거부</a></li>
	</ul>
</li>
	</ul>
</div>
<div id="slide-bg"></div>


<div id="quickmenu">
	<div class="vam">
		<ul class="list">
			<li>
				<a href="tel:042-721-0606" class="link">
					<div class="icon"><img src="./intro/img/quick-icon1.gif" alt=""></div>
					<div class="text tel">
						전화 상담
					</div>
				</a>
			</li>

			<li>
				<a href="./consulting.html" class="link ng-online">
					<div class="icon ng-online"><img src="./intro/img/quick-icon2.gif" alt="" class="ng-online"></div>
					<div class="text ng-online">
						온라인<br />상담신청
					</div>
				</a>
			</li>

			<li>
				<a href="https://pf.kakao.com/_yTxbgb/chat" target="_blank" class="link ng-chat" >
					<div class="icon ng-chat"><img src="./intro/img/quick-icon3.gif" alt="" class="ng-chat"></div>
					<div class="text ng-chat">
						카카오톡<br />비밀상담
					</div>
				</a>
			</li>

			<li>
				<a href="./location.html" class="link">
					<div class="icon"><img src="./intro/img/quick-icon4.gif" alt=""></div>
					<div class="text">오시는길</div>
				</a>
			</li>
		</ul>
	</div>
</div>


	
`;

document.body.appendChild(template.content);