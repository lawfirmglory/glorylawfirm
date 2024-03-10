/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2016
 * @version 1.3.4
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
*/var DateFormatter;!function(){"use strict";var t,e,r,n,a,u,i;u=864e5,i=3600,t=function(t,e){return"string"==typeof t&&"string"==typeof e&&t.toLowerCase()===e.toLowerCase()},e=function(t,r,n){var a=n||"0",u=t.toString();return u.length<r?e(a+u,r):u},r=function(t){var e,n;for(t=t||{},e=1;e<arguments.length;e++)if(n=arguments[e])for(var a in n)n.hasOwnProperty(a)&&("object"==typeof n[a]?r(t[a],n[a]):t[a]=n[a]);return t},n=function(t,e){for(var r=0;r<e.length;r++)if(e[r].toLowerCase()===t.toLowerCase())return r;return-1},a={dateSettings:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["AM","PM"],ordinal:function(t){var e=t%10,r={1:"st",2:"nd",3:"rd"};return 1!==Math.floor(t%100/10)&&r[e]?r[e]:"th"}},separators:/[ \-+\/\.T:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,tzClip:/[^-+\dA-Z]/g},DateFormatter=function(t){var e=this,n=r(a,t);e.dateSettings=n.dateSettings,e.separators=n.separators,e.validParts=n.validParts,e.intParts=n.intParts,e.tzParts=n.tzParts,e.tzClip=n.tzClip},DateFormatter.prototype={constructor:DateFormatter,getMonth:function(t){var e,r=this;return e=n(t,r.dateSettings.monthsShort)+1,0===e&&(e=n(t,r.dateSettings.months)+1),e},parseDate:function(e,r){var n,a,u,i,s,o,c,f,l,h,d=this,g=!1,m=!1,p=d.dateSettings,y={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!e)return null;if(e instanceof Date)return e;if("U"===r)return u=parseInt(e),u?new Date(1e3*u):e;switch(typeof e){case"number":return new Date(e);case"string":break;default:return null}if(n=r.match(d.validParts),!n||0===n.length)throw new Error("Invalid date format definition.");for(a=e.replace(d.separators,"\x00").split("\x00"),u=0;u<a.length;u++)switch(i=a[u],s=parseInt(i),n[u]){case"y":case"Y":if(!s)return null;l=i.length,y.year=2===l?parseInt((70>s?"20":"19")+i):s,g=!0;break;case"m":case"n":case"M":case"F":if(isNaN(s)){if(o=d.getMonth(i),!(o>0))return null;y.month=o}else{if(!(s>=1&&12>=s))return null;y.month=s}g=!0;break;case"d":case"j":if(!(s>=1&&31>=s))return null;y.day=s,g=!0;break;case"g":case"h":if(c=n.indexOf("a")>-1?n.indexOf("a"):n.indexOf("A")>-1?n.indexOf("A"):-1,h=a[c],c>-1)f=t(h,p.meridiem[0])?0:t(h,p.meridiem[1])?12:-1,s>=1&&12>=s&&f>-1?y.hour=s+f-1:s>=0&&23>=s&&(y.hour=s);else{if(!(s>=0&&23>=s))return null;y.hour=s}m=!0;break;case"G":case"H":if(!(s>=0&&23>=s))return null;y.hour=s,m=!0;break;case"i":if(!(s>=0&&59>=s))return null;y.min=s,m=!0;break;case"s":if(!(s>=0&&59>=s))return null;y.sec=s,m=!0}if(g===!0&&y.year&&y.month&&y.day)y.date=new Date(y.year,y.month-1,y.day,y.hour,y.min,y.sec,0);else{if(m!==!0)return null;y.date=new Date(0,0,0,y.hour,y.min,y.sec,0)}return y.date},guessDate:function(t,e){if("string"!=typeof t)return t;var r,n,a,u,i,s,o=this,c=t.replace(o.separators,"\x00").split("\x00"),f=/^[djmn]/g,l=e.match(o.validParts),h=new Date,d=0;if(!f.test(l[0]))return t;for(a=0;a<c.length;a++){if(d=2,i=c[a],s=parseInt(i.substr(0,2)),isNaN(s))return null;switch(a){case 0:"m"===l[0]||"n"===l[0]?h.setMonth(s-1):h.setDate(s);break;case 1:"m"===l[0]||"n"===l[0]?h.setDate(s):h.setMonth(s-1);break;case 2:if(n=h.getFullYear(),r=i.length,d=4>r?r:4,n=parseInt(4>r?n.toString().substr(0,4-r)+i:i.substr(0,4)),!n)return null;h.setFullYear(n);break;case 3:h.setHours(s);break;case 4:h.setMinutes(s);break;case 5:h.setSeconds(s)}u=i.substr(d),u.length>0&&c.splice(a+1,0,u)}return h},parseFormat:function(t,r){var n,a=this,s=a.dateSettings,o=/\\?(.?)/gi,c=function(t,e){return n[t]?n[t]():e};return n={d:function(){return e(n.j(),2)},D:function(){return s.daysShort[n.w()]},j:function(){return r.getDate()},l:function(){return s.days[n.w()]},N:function(){return n.w()||7},w:function(){return r.getDay()},z:function(){var t=new Date(n.Y(),n.n()-1,n.j()),e=new Date(n.Y(),0,1);return Math.round((t-e)/u)},W:function(){var t=new Date(n.Y(),n.n()-1,n.j()-n.N()+3),r=new Date(t.getFullYear(),0,4);return e(1+Math.round((t-r)/u/7),2)},F:function(){return s.months[r.getMonth()]},m:function(){return e(n.n(),2)},M:function(){return s.monthsShort[r.getMonth()]},n:function(){return r.getMonth()+1},t:function(){return new Date(n.Y(),n.n(),0).getDate()},L:function(){var t=n.Y();return t%4===0&&t%100!==0||t%400===0?1:0},o:function(){var t=n.n(),e=n.W(),r=n.Y();return r+(12===t&&9>e?1:1===t&&e>9?-1:0)},Y:function(){return r.getFullYear()},y:function(){return n.Y().toString().slice(-2)},a:function(){return n.A().toLowerCase()},A:function(){var t=n.G()<12?0:1;return s.meridiem[t]},B:function(){var t=r.getUTCHours()*i,n=60*r.getUTCMinutes(),a=r.getUTCSeconds();return e(Math.floor((t+n+a+i)/86.4)%1e3,3)},g:function(){return n.G()%12||12},G:function(){return r.getHours()},h:function(){return e(n.g(),2)},H:function(){return e(n.G(),2)},i:function(){return e(r.getMinutes(),2)},s:function(){return e(r.getSeconds(),2)},u:function(){return e(1e3*r.getMilliseconds(),6)},e:function(){var t=/\((.*)\)/.exec(String(r))[1];return t||"Coordinated Universal Time"},I:function(){var t=new Date(n.Y(),0),e=Date.UTC(n.Y(),0),r=new Date(n.Y(),6),a=Date.UTC(n.Y(),6);return t-e!==r-a?1:0},O:function(){var t=r.getTimezoneOffset(),n=Math.abs(t);return(t>0?"-":"+")+e(100*Math.floor(n/60)+n%60,4)},P:function(){var t=n.O();return t.substr(0,3)+":"+t.substr(3,2)},T:function(){var t=(String(r).match(a.tzParts)||[""]).pop().replace(a.tzClip,"");return t||"UTC"},Z:function(){return 60*-r.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(o,c)},r:function(){return"D, d M Y H:i:s O".replace(o,c)},U:function(){return r.getTime()/1e3||0}},c(t,t)},formatDate:function(t,e){var r,n,a,u,i,s=this,o="",c="\\";if("string"==typeof t&&(t=s.parseDate(t,e),!t))return null;if(t instanceof Date){for(a=e.length,r=0;a>r;r++)i=e.charAt(r),"S"!==i&&i!==c&&(r>0&&e.charAt(r-1)===c?o+=i:(u=s.parseFormat(i,t),r!==a-1&&s.intParts.test(i)&&"S"===e.charAt(r+1)&&(n=parseInt(u)||0,u+=s.dateSettings.ordinal(n)),o+=u));return o}return""}}}();
/**
 * @preserve jQuery DateTimePicker
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
 */

/**
 * @param {jQuery} $
 */
var datetimepickerFactory = function ($) {
	'use strict';

	var default_options  = {
		i18n: {
			ar: { // Arabic
				months: [
					"�碼��� 碼�麻碼��", "娩磨碼慢", "笠莫碼邈", "��卍碼�", "�碼��", "幕万�邈碼�", "魔��万", "笠磨", "粒����", "魔娩邈�� 碼�粒��", "魔娩邈�� 碼�麻碼��", "�碼��� 碼�粒��"
				],
				dayOfWeekShort: [
					"�", "麻", "晩", "漠", "寞", "卍", "幕"
				],
				dayOfWeek: ["碼�粒幕膜", "碼�碼麻���", "碼�麻�碼麻碼立", "碼�粒邈磨晩碼立", "碼�漠��卍", "碼�寞�晩馬", "碼�卍磨魔", "碼�粒幕膜"]
			},
			ro: { // Romanian
				months: [
					"Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
				],
				dayOfWeekShort: [
					"Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S창"
				],
				dayOfWeek: ["Duminic훱", "Luni", "Mar큇i", "Miercuri", "Joi", "Vineri", "S창mb훱t훱"]
			},
			id: { // Indonesian
				months: [
					"Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
				],
				dayOfWeekShort: [
					"Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"
				],
				dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
			},
			is: { // Icelandic
				months: [
					"Jan첬ar", "Febr첬ar", "Mars", "Apr챠l", "Ma챠", "J첬n챠", "J첬l챠", "횁g첬st", "September", "Okt처ber", "N처vember", "Desember"
				],
				dayOfWeekShort: [
					"Sun", "M찼n", "횧ri챨", "Mi챨", "Fim", "F철s", "Lau"
				],
				dayOfWeek: ["Sunnudagur", "M찼nudagur", "횧ri챨judagur", "Mi챨vikudagur", "Fimmtudagur", "F철studagur", "Laugardagur"]
			},
			bg: { // Bulgarian
				months: [
					"赳戟�逵�龜", "圭筠勻��逵�龜", "�逵��", "�極�龜剋", "�逵橘", "規戟龜", "規剋龜", "�勻均���", "鬼筠極�筠劇勻�龜", "�克�棘劇勻�龜", "�棘筠劇勻�龜", "�筠克筠劇勻�龜"
				],
				dayOfWeekShort: [
					"�畇", "�戟", "��", "鬼�", "槻�", "��", "鬼閨"
				],
				dayOfWeek: ["�筠畇筠剋�", "�棘戟筠畇筠剋戟龜克", "��棘�戟龜克", "鬼��畇逵", "槻筠�勻����克", "�筠��克", "鬼�閨棘�逵"]
			},
			fa: { // Persian/Farsi
				months: [
					'�邈�邈膜��', '碼邈膜�磨�娩魔', '漠邈膜碼膜', '魔�邈', '�邈膜碼膜', '娩�邈��邈', '��邈', '笠磨碼�', '笠莫邈', '膜�', '磨���', '碼卍��膜'
				],
				dayOfWeekShort: [
					'�沕娩�磨�', '膜�娩�磨�', '卍� 娩�磨�', '��碼邈娩�磨�', '毛�寞娩�磨�', '寞�晩�', '娩�磨�'
				],
				dayOfWeek: ["�沕�뚕다녩ⓜ�", "膜�娩�磨�", "卍��뚕다녩ⓜ�", "��碼邈娩�磨�", "毛�寞�뚕다녩ⓜ�", "寞�晩�", "娩�磨�", "�沕�뚕다녩ⓜ�"]
			},
			ru: { // Russian
				months: [
					'赳戟勻逵��', '圭筠勻�逵剋�', '�逵��', '�極�筠剋�', '�逵橘', '��戟�', '��剋�', '�勻均���', '鬼筠戟��閨��', '�克��閨��', '�棘�閨��', '�筠克逵閨��'
				],
				dayOfWeekShort: [
					"��", "�戟", "��", "鬼�", "槻�", "��", "鬼閨"
				],
				dayOfWeek: ["�棘�克�筠�筠戟�筠", "�棘戟筠畇筠剋�戟龜克", "��棘�戟龜克", "鬼�筠畇逵", "槻筠�勻筠�均", "���戟龜�逵", "鬼�閨閨棘�逵"]
			},
			uk: { // Ukrainian
				months: [
					'鬼��筠戟�', '���龜橘', '�筠�筠鈞筠戟�', '�勻��筠戟�', '龜�逵勻筠戟�', '槻筠�勻筠戟�', '�龜極筠戟�', '鬼筠�極筠戟�', '�筠�筠�筠戟�', '�棘勻�筠戟�', '�龜��棘極逵畇', '���畇筠戟�'
				],
				dayOfWeekShort: [
					"�畇剋", "�戟畇", "���", "鬼�畇", "槻�勻", "��戟", "鬼閨�"
				],
				dayOfWeek: ["�筠畇�剋�", "�棘戟筠畇�剋棘克", "��勻�棘�棘克", "鬼筠�筠畇逵", "槻筠�勻筠�", "�'��戟龜��", "鬼�閨棘�逵"]
			},
			en: { // English
				// months: [
				// 	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				// ],
				// dayOfWeekShort: [
				// 	"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				// ],
				// dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

				months: [
					"1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"
				],
				dayOfWeekShort: [
					"��", "��", "��", "��", "紐�", "湲�", "��"
				],
				dayOfWeek: ["�쇱슂��", "�붿슂��", "�붿슂��", "�섏슂��", "紐⑹슂��", "湲덉슂��", "�좎슂��"]
			},
			el: { // �貫貫管館菅觀郭
				months: [
					"�慣館恝�郭�菅恝�", "過琯棺�恝�郭�菅恝�", "�郭��菅恝�", "���官貫菅恝�", "�郭菅恝�", "�恝�館菅恝�", "�恝�貫菅恝�", "��款恝���恝�", "誇琯��串關棺�菅恝�", "�觀��棺�菅恝�", "�恝串關棺�菅恝�", "�琯觀串關棺�菅恝�"
				],
				dayOfWeekShort: [
					"���", "�琯�", "課�菅", "課琯�", "�琯關", "�慣�", "誇慣棺"
				],
				dayOfWeek: ["���菅慣觀冠", "�琯��串�慣", "課�官�管", "課琯�郭��管", "�串關��管", "�慣�慣�觀琯�冠", "誇郭棺棺慣�恝"]
			},
			de: { // German
				months: [
					'Januar', 'Februar', 'M채rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
				],
				dayOfWeekShort: [
					"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
				],
				dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
			},
			nl: { // Dutch
				months: [
					"januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
				],
				dayOfWeekShort: [
					"zo", "ma", "di", "wo", "do", "vr", "za"
				],
				dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
			},
			tr: { // Turkish
				months: [
					"Ocak", "힇ubat", "Mart", "Nisan", "May캇s", "Haziran", "Temmuz", "A휓ustos", "Eyl체l", "Ekim", "Kas캇m", "Aral캇k"
				],
				dayOfWeekShort: [
					"Paz", "Pts", "Sal", "횉ar", "Per", "Cum", "Cts"
				],
				dayOfWeek: ["Pazar", "Pazartesi", "Sal캇", "횉ar힊amba", "Per힊embe", "Cuma", "Cumartesi"]
			},
			fr: { //French
				months: [
					"Janvier", "F챕vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao청t", "Septembre", "Octobre", "Novembre", "D챕cembre"
				],
				dayOfWeekShort: [
					"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
				],
				dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
			},
			es: { // Spanish
				months: [
					"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
				],
				dayOfWeekShort: [
					"Dom", "Lun", "Mar", "Mi챕", "Jue", "Vie", "S찼b"
				],
				dayOfWeek: ["Domingo", "Lunes", "Martes", "Mi챕rcoles", "Jueves", "Viernes", "S찼bado"]
			},
			th: { // Thai
				months: [
					'錫□툈錫｀림錫꾝륫', '錫곟만錫□툩錫꿋툧錫긍툢錫섁퉴', '錫□링錫쇸림錫꾝륫', '仙�錫□릇錫꿋륭錫�', '錫왽륵錫⒯툩錫꿋툌錫�', '錫□릿錫뽤만錫쇸림錫№툢', '錫곟르錫곟툗錫꿋툌錫�', '錫む릿錫뉋릊錫꿋툌錫�', '錫곟릴錫쇸륭錫꿋륭錫�', '錫뺖만錫�림錫꾝륫', '錫왽륵錫ⓣ툑錫닮툈錫꿋륭錫�', '錫섁릴錫쇸름錫꿋툌錫�'
				],
				dayOfWeekShort: [
					'錫�림.', '錫�.', '錫�.', '錫�.', '錫왽륵.', '錫�.', '錫�.'
				],
				dayOfWeek: ["錫�림錫쀠릿錫뺖륭仙�", "錫댽릴錫쇸툠錫｀퉴", "錫�릴錫뉋툌錫꿋르", "錫왽만錫�", "錫왽륵錫ム릴錫�", "錫ⓣ만錫곟르仙�", "仙�錫む림錫｀퉴", "錫�림錫쀠릿錫뺖륭仙�"]
			},
			pl: { // Polish
				months: [
					"stycze흦", "luty", "marzec", "kwiecie흦", "maj", "czerwiec", "lipiec", "sierpie흦", "wrzesie흦", "pa탄dziernik", "listopad", "grudzie흦"
				],
				dayOfWeekShort: [
					"nd", "pn", "wt", "힄r", "cz", "pt", "sb"
				],
				dayOfWeek: ["niedziela", "poniedzia흢ek", "wtorek", "힄roda", "czwartek", "pi훳tek", "sobota"]
			},
			pt: { // Portuguese
				months: [
					"Janeiro", "Fevereiro", "Mar챌o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeekShort: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
				],
				dayOfWeek: ["Domingo", "Segunda", "Ter챌a", "Quarta", "Quinta", "Sexta", "S찼bado"]
			},
			ch: { // Simplified Chinese
				months: [
					"訝���", "雅뚧쐢", "訝됪쐢", "�쎿쐢", "雅붹쐢", "��쐢", "訝껅쐢", "�ユ쐢", "阿앮쐢", "�곫쐢", "�곦���", "�곦틠��"
				],
				dayOfWeekShort: [
					"��", "訝�", "雅�", "訝�", "��", "雅�", "��"
				]
			},
			se: { // Swedish
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",  "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"S철n", "M책n", "Tis", "Ons", "Tor", "Fre", "L철r"
				]
			},
			km: { // Khmer (�쀡왃�잁왃�곢윊�섂웴��)
				months: [
					"�섂��싡왃��", "���삔옒�믟옑��", "�섂왅�볚왃��", "�섂웳�잁왃��", "�㎭옝�쀡왃��", "�섂왅�먤왊�볚왃��", "�����믟��듻왃��", "�잁왆�졹왃��", "���됣윊�됣왃��", "�뤳왊�쎺왃��", "�쒊왅�끷윊�녲왅����", "�믟윊�볚왋��"
				],
				dayOfWeekShort: ["�㏇왃�묃왅��", "�끷윇�볚윊�묅��", "�㏇엫�믟엩�뜬옔��", "�뽥왊�믠��", "�뽥윊�싡옞�뗢��", "�잁왊���믟옔��", "�잁웷�싡윂"],
				dayOfWeek: ["�㏇왃�묃왅�뤳윊�쇺��", "�끷윇�볚윊�묅��", "�㏇엫�믟엩�뜬옔��", "�뽥왊�믠��", "�뽥윊�싡옞�잁윊�붳옃�료윂��", "�잁왊���믟옔��", "�잁웷�싡윂"]
			},
			kr: { // Korean
				months: [
					"1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"
				],
				dayOfWeekShort: [
					"��", "��", "��", "��", "紐�", "湲�", "��"
				],
				dayOfWeek: ["�쇱슂��", "�붿슂��", "�붿슂��", "�섏슂��", "紐⑹슂��", "湲덉슂��", "�좎슂��"]
			},
			it: { // Italian
				months: [
					"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
				],
				dayOfWeekShort: [
					"Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
				],
				dayOfWeek: ["Domenica", "Luned챙", "Marted챙", "Mercoled챙", "Gioved챙", "Venerd챙", "Sabato"]
			},
			da: { // Dansk
				months: [
					"Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"S첩n", "Man", "Tir", "Ons", "Tor", "Fre", "L첩r"
				],
				dayOfWeek: ["s첩ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l첩rdag"]
			},
			no: { // Norwegian
				months: [
					"Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
				],
				dayOfWeekShort: [
					"S첩n", "Man", "Tir", "Ons", "Tor", "Fre", "L첩r"
				],
				dayOfWeek: ['S첩ndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'L첩rdag']
			},
			ja: { // Japanese
				months: [
					"1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"
				],
				dayOfWeekShort: [
					"��", "��", "��", "麗�", "��", "��", "��"
				],
				dayOfWeek: ["�ζ썫", "�덃썫", "�ユ썫", "麗닸썫", "�ⓩ썫", "�묉썫", "�잍썫"]
			},
			vi: { // Vietnamese
				months: [
					"Th찼ng 1", "Th찼ng 2", "Th찼ng 3", "Th찼ng 4", "Th찼ng 5", "Th찼ng 6", "Th찼ng 7", "Th찼ng 8", "Th찼ng 9", "Th찼ng 10", "Th찼ng 11", "Th찼ng 12"
				],
				dayOfWeekShort: [
					"CN", "T2", "T3", "T4", "T5", "T6", "T7"
				],
				dayOfWeek: ["Ch沼� nh梳춗", "Th沼� hai", "Th沼� ba", "Th沼� t튼", "Th沼� n훱m", "Th沼� s찼u", "Th沼� b梳즭"]
			},
			sl: { // Sloven큄훾ina
				months: [
					"Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Tor", "Sre", "훻et", "Pet", "Sob"
				],
				dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "훻etrtek", "Petek", "Sobota"]
			},
			cs: { // 훻e큄tina
				months: [
					"Leden", "횣nor", "B힂ezen", "Duben", "Kv휎ten", "훻erven", "훻ervenec", "Srpen", "Z찼힂챠", "힀챠jen", "Listopad", "Prosinec"
				],
				dayOfWeekShort: [
					"Ne", "Po", "횣t", "St", "훻t", "P찼", "So"
				]
			},
			hu: { // Hungarian
				months: [
					"Janu찼r", "Febru찼r", "M찼rcius", "횁prilis", "M찼jus", "J첬nius", "J첬lius", "Augusztus", "Szeptember", "Okt처ber", "November", "December"
				],
				dayOfWeekShort: [
					"Va", "H챕", "Ke", "Sze", "Cs", "P챕", "Szo"
				],
				dayOfWeek: ["vas찼rnap", "h챕tf흷", "kedd", "szerda", "cs체t철rt철k", "p챕ntek", "szombat"]
			},
			az: { //Azerbaijanian (Azeri)
				months: [
					"Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
				],
				dayOfWeekShort: [
					"B", "Be", "횉a", "횉", "Ca", "C", "힇"
				],
				dayOfWeek: ["Bazar", "Bazar ert�si", "횉�r힊�nb� ax힊am캇", "횉�r힊�nb�", "C체m� ax힊am캇", "C체m�", "힇�nb�"]
			},
			bs: { //Bosanski
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Uto", "Sri", "훻et", "Pet", "Sub"
				],
				dayOfWeek: ["Nedjelja","Ponedjeljak", "Utorak", "Srijeda", "훻etvrtak", "Petak", "Subota"]
			},
			ca: { //Catal횪
				months: [
					"Gener", "Febrer", "Mar챌", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
				],
				dayOfWeekShort: [
					"Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
				],
				dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
			},
			'en-GB': { //English (British)
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeekShort: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				],
				dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			},
			et: { //"Eesti"
				months: [
					"Jaanuar", "Veebruar", "M채rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
				],
				dayOfWeekShort: [
					"P", "E", "T", "K", "N", "R", "L"
				],
				dayOfWeek: ["P체hap채ev", "Esmasp채ev", "Teisip채ev", "Kolmap채ev", "Neljap채ev", "Reede", "Laup채ev"]
			},
			eu: { //Euskara
				months: [
					"Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
				],
				dayOfWeekShort: [
					"Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
				],
				dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
			},
			fi: { //Finnish (Suomi)
				months: [
					"Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes채kuu", "Hein채kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
				],
				dayOfWeekShort: [
					"Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
				],
				dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
			},
			gl: { //Galego
				months: [
					"Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
				],
				dayOfWeekShort: [
					"Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
				],
				dayOfWeek: ["Domingo", "Luns", "Martes", "M챕rcores", "Xoves", "Venres", "S찼bado"]
			},
			hr: { //Hrvatski
				months: [
					"Sije훾anj", "Velja훾a", "O탑ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Uto", "Sri", "훻et", "Pet", "Sub"
				],
				dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "훻etvrtak", "Petak", "Subota"]
			},
			ko: { //Korean (�쒓뎅��)
				months: [
					"1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"
				],
				dayOfWeekShort: [
					"��", "��", "��", "��", "紐�", "湲�", "��"
				],
				dayOfWeek: ["�쇱슂��", "�붿슂��", "�붿슂��", "�섏슂��", "紐⑹슂��", "湲덉슂��", "�좎슂��"]
			},
			lt: { //Lithuanian (lietuvi킬)
				months: [
					"Sausio", "Vasario", "Kovo", "Baland탑io", "Gegu탑휊s", "Bir탑elio", "Liepos", "Rugpj큰훾io", "Rugs휊jo", "Spalio", "Lapkri훾io", "Gruod탑io"
				],
				dayOfWeekShort: [
					"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "힋e큄"
				],
				dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre훾iadienis", "Ketvirtadienis", "Penktadienis", "힋e큄tadienis"]
			},
			lv: { //Latvian (Latvie큄u)
				months: [
					"Janv훮ris", "Febru훮ris", "Marts", "Apr카lis ", "Maijs", "J큰nijs", "J큰lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
				],
				dayOfWeekShort: [
					"Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
				],
				dayOfWeek: ["Sv휆tdiena", "Pirmdiena", "Otrdiena", "Tre큄diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
			},
			mk: { //Macedonian (�逵克筠畇棘戟�克龜)
				months: [
					"�逵戟�逵�龜", "�筠勻��逵�龜", "劇逵��", "逵極�龜剋", "劇逵�", "��戟龜", "��剋龜", "逵勻均���", "�筠極�筠劇勻�龜", "棘克�棘劇勻�龜", "戟棘筠劇勻�龜", "畇筠克筠劇勻�龜"
				],
				dayOfWeekShort: [
					"戟筠畇", "極棘戟", "勻�棘", "��筠", "�筠�", "極筠�", "�逵閨"
				],
				dayOfWeek: ["�筠畇筠剋逵", "�棘戟筠畇筠剋戟龜克", "��棘�戟龜克", "鬼�筠畇逵", "槻筠�勻��棘克", "�筠�棘克", "鬼逵閨棘�逵"]
			},
			mn: { //Mongolian (�棘戟均棘剋)
				months: [
					"1-� �逵�", "2-� �逵�", "3-� �逵�", "4-� �逵�", "5-� �逵�", "6-� �逵�", "7-� �逵�", "8-� �逵�", "9-� �逵�", "10-� �逵�", "11-� �逵�", "12-� �逵�"
				],
				dayOfWeekShort: [
					"�逵勻", "��均", "��逵", "�奈�", "��戟", "��劇", "��劇"
				],
				dayOfWeek: ["�逵勻逵逵", "��均劇逵�", "��逵均勻逵", "�奈��勻", "�逵逵�逵戟", "��劇閨逵", "��劇"]
			},
			'pt-BR': { //Portugu챗s(Brasil)
				months: [
					"Janeiro", "Fevereiro", "Mar챌o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeekShort: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S찼b"
				],
				dayOfWeek: ["Domingo", "Segunda", "Ter챌a", "Quarta", "Quinta", "Sexta", "S찼bado"]
			},
			sk: { //Sloven훾ina
				months: [
					"Janu찼r", "Febru찼r", "Marec", "Apr챠l", "M찼j", "J첬n", "J첬l", "August", "September", "Okt처ber", "November", "December"
				],
				dayOfWeekShort: [
					"Ne", "Po", "Ut", "St", "힋t", "Pi", "So"
				],
				dayOfWeek: ["Nede컁a", "Pondelok", "Utorok", "Streda", "힋tvrtok", "Piatok", "Sobota"]
			},
			sq: { //Albanian (Shqip)
				months: [
					"Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N챘ntor", "Dhjetor"
				],
				dayOfWeekShort: [
					"Die", "H챘n", "Mar", "M챘r", "Enj", "Pre", "Shtu"
				],
				dayOfWeek: ["E Diel", "E H챘n챘", "E Mart휆", "E M챘rkur챘", "E Enjte", "E Premte", "E Shtun챘"]
			},
			'sr-YU': { //Serbian (Srpski)
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeekShort: [
					"Ned", "Pon", "Uto", "Sre", "훾et", "Pet", "Sub"
				],
				dayOfWeek: ["Nedelja","Ponedeljak", "Utorak", "Sreda", "훻etvrtak", "Petak", "Subota"]
			},
			sr: { //Serbian Cyrillic (鬼�極�克龜)
				months: [
					"�逵戟�逵�", "�筠閨��逵�", "劇逵��", "逵極�龜剋", "劇逵�", "��戟", "��剋", "逵勻均���", "�筠極�筠劇閨逵�", "棘克�棘閨逵�", "戟棘勻筠劇閨逵�", "畇筠�筠劇閨逵�"
				],
				dayOfWeekShort: [
					"戟筠畇", "極棘戟", "��棘", "��筠", "�筠�", "極筠�", "��閨"
				],
				dayOfWeek: ["�筠畇筠�逵","�棘戟筠畇筠�逵克", "叫�棘�逵克", "鬼�筠畇逵", "槻筠�勻��逵克", "�筠�逵克", "鬼�閨棘�逵"]
			},
			sv: { //Svenska
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
				],
				dayOfWeekShort: [
					"S철n", "M책n", "Tis", "Ons", "Tor", "Fre", "L철r"
				],
				dayOfWeek: ["S철ndag", "M책ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L철rdag"]
			},
			'zh-TW': { //Traditional Chinese (濚곲쳱訝�뻼)
				months: [
					"訝���", "雅뚧쐢", "訝됪쐢", "�쎿쐢", "雅붹쐢", "��쐢", "訝껅쐢", "�ユ쐢", "阿앮쐢", "�곫쐢", "�곦���", "�곦틠��"
				],
				dayOfWeekShort: [
					"��", "訝�", "雅�", "訝�", "��", "雅�", "��"
				],
				dayOfWeek: ["�잍쐿��", "�잍쐿訝�", "�잍쐿雅�", "�잍쐿訝�", "�잍쐿��", "�잍쐿雅�", "�잍쐿��"]
			},
			zh: { //Simplified Chinese (嶸�鵝볞릎��)
				months: [
					"訝���", "雅뚧쐢", "訝됪쐢", "�쎿쐢", "雅붹쐢", "��쐢", "訝껅쐢", "�ユ쐢", "阿앮쐢", "�곫쐢", "�곦���", "�곦틠��"
				],
				dayOfWeekShort: [
					"��", "訝�", "雅�", "訝�", "��", "雅�", "��"
				],
				dayOfWeek: ["�잍쐿��", "�잍쐿訝�", "�잍쐿雅�", "�잍쐿訝�", "�잍쐿��", "�잍쐿雅�", "�잍쐿��"]
			},
			ug:{ // Uyghur(痲��曼�邈��)
				months: [
					"1-痲碼�","2-痲碼�","3-痲碼�","4-痲碼�","5-痲碼�","6-痲碼�","7-痲碼�","8-痲碼�","9-痲碼�","10-痲碼�","11-痲碼�","12-痲碼�"
				],
				dayOfWeek: [
					"���娩��磨�", "膜�娩��磨�","卍��娩��磨�","�碼邈娩��磨�","毛��娩��磨�","寞���","娩��磨�"
				]
			},
			he: { //Hebrew (鬧�淚�瘻)
				months: [
					'����淚', '壘�淚��淚', '�淚婁', '�壘淚��', '���', '����', '����', '����遼�', '遼壘���淚', '��樓���淚', '�����淚', '�屢��淚'
				],
				dayOfWeekShort: [
					'�\'', '�\'', '�\'', '�\'', '�\'', '�\'', '漏�瘻'
				],
				dayOfWeek: ["淚�漏��", "漏��", "漏��漏�", "淚��鬧�", "���漏�", "漏�漏�", "漏�瘻", "淚�漏��"]
			},
			hy: { // Armenian
				months: [
					"�辣�鸞籃蘿�", "�樂纜�籃蘿�", "�蘿�纜", "逃擥�諾酪", "�蘿蘭諾濫", "�辣�鸞諾濫", "�辣�酪諾濫", "�裸辣濫纜辣濫", "�樂擥纜樂爛螺樂�", "�辣亂纜樂爛螺樂�", "�辣蘭樂爛螺樂�", "都樂亂纜樂爛螺樂�"
				],
				dayOfWeekShort: [
					"篤諾", "鍍�亂", "鍍��", "�辣�", "�鸞裸", "���螺", "�螺絡"
				],
				dayOfWeek: ["篤諾�蘿亂諾", "鍍�亂辣�剌蘿螺絡諾", "鍍�樂�剌蘿螺絡諾", "�辣�樂�剌蘿螺絡諾", "�諾鸞裸剌蘿螺絡諾", "���螺蘿絡", "�蘿螺蘿絡"]
			},
			kg: { // Kyrgyz
				months: [
					'內��奈戟 逵橘�', '�龜�畇龜戟 逵橘�', '�逵剋均逵戟 ���逵戟', '槻�戟 ���逵戟', '��均�', '��剋菌逵', '龜筠克筠', '�逵� �棘戟逵', '��克 �棘戟逵', '龜棘均�鈞畇�戟 逵橘�', '�筠�龜戟龜戟 逵橘�', '�筠��龜戟 逵橘�'
				],
				dayOfWeekShort: [
					"�筠克", "�奈橘", "珪筠橘", "珪逵�", "�筠橘", "��劇", "��筠"
				],
				dayOfWeek: [
					"�筠克�筠劇閨", "�奈橘�旦劇閨", "珪筠橘�筠劇閨", "珪逵��筠劇閨", "�筠橘�筠劇閨龜", "��劇逵", "��筠戟閨"
				]
			},
			rm: { // Romansh
				months: [
					"Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"
				],
				dayOfWeekShort: [
					"Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"
				],
				dayOfWeek: [
					"Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"
				]
			},
			ka: { // Georgian
				months: [
					'�섂깘�쒊깢�먤깲��', '�쀡깞�묃깞�졹깢�먤깪��', '�쎺깘�졹깴��', '�먤깯�졹깦�싡깦', '�쎺깘�섂깳��', '�섂깢�쒊깦�■깦', '�섂깢�싡깦�■깦', '�먤깚�뺗깦�■깴��', '�■깞�α깴�붳깫�묃깞�졹깦', '�앩깷�㏇깮�쎺깙�붳깲��', '�쒊깮�붳깫�묃깞�졹깦', '�볚깞�쇹깞�쎺깙�붳깲��'
				],
				dayOfWeekShort: [
					"�쇹깢", "�앩깲��", "�■깘�쎺깿", "�앩깤��", "��깵��", "�왾깘��", "�ⓤ깘��"
				],
				dayOfWeek: ["�쇹깢�섂깲��", "�앩깲�ⓤ깘�묃깘�쀡깦", "�■깘�쎺깿�먤깙�먤깤��", "�앩깤��깿�먤깙�먤깤��", "��깵�쀡깿�먤깙�먤깤��", "�왾깘�졹깘�■깧�붳깢��", "�ⓤ깘�묃깘�쀡깦"]
			}
		},

		ownerDocument: document,
		contentWindow: window,

		value: '',
		rtl: false,

		format:	'Y/m/d H:i',
		formatTime:	'H:i',
		formatDate:	'Y/m/d',

		startDate:	false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
		step: 60,
		monthChangeSpinner: true,

		closeOnDateSelect: false,
		closeOnTimeSelect: true,
		closeOnWithoutClick: true,
		closeOnInputClick: true,
		openOnFocus: true,

		timepicker: true,
		datepicker: true,
		weeks: false,

		defaultTime: false,	// use formatTime format (ex. '10:00' for formatTime:	'H:i')
		defaultDate: false,	// use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

		minDate: false,
		maxDate: false,
		minTime: false,
		maxTime: false,
		minDateTime: false,
		maxDateTime: false,

		allowTimes: [],
		opened: false,
		initTime: true,
		inline: false,
		theme: '',
		touchMovedThreshold: 5,

		onSelectDate: function () {},
		onSelectTime: function () {},
		onChangeMonth: function () {},
		onGetWeekOfYear: function () {},
		onChangeYear: function () {},
		onChangeDateTime: function () {},
		onShow: function () {},
		onClose: function () {},
		onGenerate: function () {},

		withoutCopyright: true,
		inverseButton: false,
		hours12: false,
		next: 'xdsoft_next',
		prev : 'xdsoft_prev',
		dayOfWeekStart: 0,
		parentID: 'body',
		timeHeightInTimePicker: 25,
		timepickerScrollbar: true,
		todayButton: true,
		prevButton: true,
		nextButton: true,
		defaultSelect: true,

		scrollMonth: true,
		scrollTime: true,
		scrollInput: true,

		lazyInit: false,
		mask: false,
		validateOnBlur: true,
		allowBlank: true,
		yearStart: 1950,
		yearEnd: 2050,
		monthStart: 0,
		monthEnd: 11,
		style: '',
		id: '',
		fixed: false,
		roundTime: 'round', // ceil, floor
		className: '',
		weekends: [],
		highlightedDates: [],
		highlightedPeriods: [],
		allowDates : [],
		allowDateRe : null,
		disabledDates : [],
		disabledWeekDays: [],
		yearOffset: 0,
		beforeShowDay: null,

		enterLikeTab: true,
		showApplyButton: false,
		insideParent: false,
	};

	var dateHelper = null,
		defaultDateHelper = null,
		globalLocaleDefault = 'en',
		globalLocale = 'en';

	var dateFormatterOptionsDefault = {
		meridiem: ['AM', 'PM']
	};

	var initDateFormatter = function(){
		var locale = default_options.i18n[globalLocale],
			opts = {
				days: locale.dayOfWeek,
				daysShort: locale.dayOfWeekShort,
				months: locale.months,
				monthsShort: $.map(locale.months, function(n){ return n.substring(0, 3) })
			};

		if (typeof DateFormatter === 'function') {
			dateHelper = defaultDateHelper = new DateFormatter({
				dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
			});
		}
	};

	var dateFormatters = {
		moment: {
			default_options:{
				format: 'YYYY/MM/DD HH:mm',
				formatDate: 'YYYY/MM/DD',
				formatTime: 'HH:mm',
			},
			formatter: {
				parseDate: function (date, format) {
					if(isFormatStandard(format)){
						return defaultDateHelper.parseDate(date, format);
					}
					var d = moment(date, format);
					return d.isValid() ? d.toDate() : false;
				},

				formatDate: function (date, format) {
					if(isFormatStandard(format)){
						return defaultDateHelper.formatDate(date, format);
					}
					return moment(date).format(format);
				},

				formatMask: function(format){
					return format
						.replace(/Y{4}/g, '9999')
						.replace(/Y{2}/g, '99')
						.replace(/M{2}/g, '19')
						.replace(/D{2}/g, '39')
						.replace(/H{2}/g, '29')
						.replace(/m{2}/g, '59')
						.replace(/s{2}/g, '59');
				},
			}
		}
	}

	// for locale settings
	$.datetimepicker = {
		setLocale: function(locale){
			var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
			if (globalLocale !== newLocale) {
				globalLocale = newLocale;
				// reinit date formatter
				initDateFormatter();
			}
		},

		setDateFormatter: function(dateFormatter) {
			if(typeof dateFormatter === 'string' && dateFormatters.hasOwnProperty(dateFormatter)){
				var df = dateFormatters[dateFormatter];
				$.extend(default_options, df.default_options);
				dateHelper = df.formatter;
			}
			else {
				dateHelper = dateFormatter;
			}
		},
	};

	var standardFormats = {
		RFC_2822: 'D, d M Y H:i:s O',
		ATOM: 'Y-m-d\TH:i:sP',
		ISO_8601: 'Y-m-d\TH:i:sO',
		RFC_822: 'D, d M y H:i:s O',
		RFC_850: 'l, d-M-y H:i:s T',
		RFC_1036: 'D, d M y H:i:s O',
		RFC_1123: 'D, d M Y H:i:s O',
		RSS: 'D, d M Y H:i:s O',
		W3C: 'Y-m-d\TH:i:sP'
	}

	var isFormatStandard = function(format){
		return Object.values(standardFormats).indexOf(format) === -1 ? false : true;
	}

	$.extend($.datetimepicker, standardFormats);

	// first init date formatter
	initDateFormatter();

	// fix for ie8
	if (!window.getComputedStyle) {
		window.getComputedStyle = function (el) {
			this.el = el;
			this.getPropertyValue = function (prop) {
				var re = /(-([a-z]))/g;
				if (prop === 'float') {
					prop = 'styleFloat';
				}
				if (re.test(prop)) {
					prop = prop.replace(re, function (a, b, c) {
						return c.toUpperCase();
					});
				}
				return el.currentStyle[prop] || null;
			};
			return this;
		};
	}
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (obj, start) {
			var i, j;
			for (i = (start || 0), j = this.length; i < j; i += 1) {
				if (this[i] === obj) { return i; }
			}
			return -1;
		};
	}

	Date.prototype.countDaysInMonth = function () {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
	};

	$.fn.xdsoftScroller = function (options, percent) {
		return this.each(function () {
			var timeboxparent = $(this),
				pointerEventToXY = function (e) {
					var out = {x: 0, y: 0},
						touch;
					if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
						touch  = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						out.x = touch.clientX;
						out.y = touch.clientY;
					} else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
						out.x = e.clientX;
						out.y = e.clientY;
					}
					return out;
				},
				getWheelDelta = function (e) {
					var deltaY = 0;

					if ('detail' in e) { deltaY = e.detail; }
					if ('wheelDelta' in e) { deltaY = -e.wheelDelta / 120; }
					if ('wheelDeltaY' in e) { deltaY = -e.wheelDeltaY / 120; }
					if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) { deltaY = 0; }

					deltaY *= 10;

					if ('deltaY' in e) { deltaY = e.deltaY; }

					if (deltaY && e.deltaMode) {
						if (e.deltaMode === 1) {
							deltaY *= 40;
						} else {
							deltaY *= 800;
						}
					}

					return deltaY;
				},
				timebox,
				timeboxTop = 0,
				parentHeight,
				height,
				scrollbar,
				scroller,
				maximumOffset = 100,
				start = false,
				startY = 0,
				startTop = 0,
				h1 = 0,
				touchStart = false,
				startTopScroll = 0,
				calcOffset = function () {};

			if (percent === 'hide') {
				timeboxparent.find('.xdsoft_scrollbar').hide();
				return;
			}

			if (!$(this).hasClass('xdsoft_scroller_box')) {
				timebox = timeboxparent.children().eq(0);
				timeboxTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
				parentHeight = timeboxparent[0].clientHeight;
				height = timebox[0].offsetHeight;
				scrollbar = $('<div class="xdsoft_scrollbar"></div>');
				scroller = $('<div class="xdsoft_scroller"></div>');
				scrollbar.append(scroller);

				timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
				calcOffset = function calcOffset(event) {
					var offset = pointerEventToXY(event).y - startY + startTopScroll;
					if (offset < 0) {
						offset = 0;
					}
					if (offset + scroller[0].offsetHeight > h1) {
						offset = h1 - scroller[0].offsetHeight;
					}
					timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
				};

				scroller
					.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
						}

						startY = pointerEventToXY(event).y;
						startTopScroll = parseInt(scroller.css('marginTop'), 10);
						h1 = scrollbar[0].offsetHeight;

						if (event.type === 'mousedown' || event.type === 'touchstart') {
							if (options.ownerDocument) {
								$(options.ownerDocument.body).addClass('xdsoft_noselect');
							}
							$([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
								$([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft_scroller', arguments_callee)
									.off('mousemove.xdsoft_scroller', calcOffset)
									.removeClass('xdsoft_noselect');
							});
							$(options.ownerDocument.body).on('mousemove.xdsoft_scroller', calcOffset);
						} else {
							touchStart = true;
							event.stopPropagation();
							event.preventDefault();
						}
					})
					.on('touchmove', function (event) {
						if (touchStart) {
							event.preventDefault();
							calcOffset(event);
						}
					})
					.on('touchend touchcancel', function () {
						touchStart =  false;
						startTopScroll = 0;
					});

				timeboxparent
					.on('scroll_element.xdsoft_scroller', function (event, percentage) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
						}
						percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;
						timeboxTop = parseFloat(Math.abs((timebox[0].offsetHeight - parentHeight) * percentage).toFixed(4));

						scroller.css('marginTop', maximumOffset * percentage);
						timebox.css('marginTop', -timeboxTop);
					})
					.on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
						var percent, sh;
						parentHeight = timeboxparent[0].clientHeight;
						height = timebox[0].offsetHeight;
						percent = parentHeight / height;
						sh = percent * scrollbar[0].offsetHeight;
						if (percent > 1) {
							scroller.hide();
						} else {
							scroller.show();
							scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
							maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
							if (noTriggerScroll !== true) {
								timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || timeboxTop / (height - parentHeight)]);
							}
						}
					});

				timeboxparent.on('mousewheel', function (event) {
					var deltaY = getWheelDelta(event.originalEvent);
					var top = Math.max(0, timeboxTop - deltaY);
					timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
					event.stopPropagation();
					return false;
				});

				timeboxparent.on('touchstart', function (event) {
					start = pointerEventToXY(event);
					startTop = timeboxTop;
				});

				timeboxparent.on('touchmove', function (event) {
					if (start) {
						event.preventDefault();
						var coord = pointerEventToXY(event);
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
					}
				});

				timeboxparent.on('touchend touchcancel', function () {
					start = false;
					startTop = 0;
				});
			}
			timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
		});
	};

	$.fn.datetimepicker = function (opt, opt2) {
		var result = this,
			KEY0 = 48,
			KEY9 = 57,
			_KEY0 = 96,
			_KEY9 = 105,
			CTRLKEY = 17,
			CMDKEY = 91,
			DEL = 46,
			ENTER = 13,
			ESC = 27,
			BACKSPACE = 8,
			ARROWLEFT = 37,
			ARROWUP = 38,
			ARROWRIGHT = 39,
			ARROWDOWN = 40,
			TAB = 9,
			F5 = 116,
			AKEY = 65,
			CKEY = 67,
			VKEY = 86,
			ZKEY = 90,
			YKEY = 89,
			ctrlDown	=	false,
			cmdDown = false,
			options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),

			lazyInitTimer = 0,
			createDateTimePicker,
			destroyDateTimePicker,

			lazyInit = function (input) {
				input
					.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
						if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
							return;
						}
						clearTimeout(lazyInitTimer);
						lazyInitTimer = setTimeout(function () {

							if (!input.data('xdsoft_datetimepicker')) {
								createDateTimePicker(input);
							}
							input
								.off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback)
								.trigger('open.xdsoft');
						}, 100);
					});
			};

		createDateTimePicker = function (input) {
			var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
				xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				datepicker = $('<div class="xdsoft_datepicker active"></div>'),
				month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
					'<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +
					'<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +
					'<button type="button" class="xdsoft_next"></button></div>'),
				calendar = $('<div class="xdsoft_calendar"></div>'),
				timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
				timebox = $('<div class="xdsoft_time_variant"></div>'),
				applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),

				monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
				yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
				triggerAfterOpen = false,
				XDSoft_datetime,

				xchangeTimer,
				timerclick,
				current_time_index,
				setPos,
				timer = 0,
				_xdsoft_datetime,
				forEachAncestorOf;

			if (options.id) {
				datetimepicker.attr('id', options.id);
			}
			if (options.style) {
				datetimepicker.attr('style', options.style);
			}
			if (options.weeks) {
				datetimepicker.addClass('xdsoft_showweeks');
			}
			if (options.rtl) {
				datetimepicker.addClass('xdsoft_rtl');
			}

			datetimepicker.addClass('xdsoft_' + options.theme);
			datetimepicker.addClass(options.className);

			month_picker
				.find('.xdsoft_month span')
				.after(monthselect);
			month_picker
				.find('.xdsoft_year span')
				.after(yearselect);

			month_picker
				.find('.xdsoft_month,.xdsoft_year')
				.on('touchstart mousedown.xdsoft', function (event) {
					var select = $(this).find('.xdsoft_select').eq(0),
						val = 0,
						top = 0,
						visible = select.is(':visible'),
						items,
						i;

					month_picker
						.find('.xdsoft_select')
						.hide();
					if (_xdsoft_datetime.currentTime) {
						val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
					}

					select[visible ? 'hide' : 'show']();
					for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
						if (items.eq(i).data('value') === val) {
							break;
						} else {
							top += items[0].offsetHeight;
						}
					}

					select.xdsoftScroller(options, top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
					event.stopPropagation();
					return false;
				});

			var handleTouchMoved = function (event) {
				var evt = event.originalEvent;
				var touchPosition = evt.touches ? evt.touches[0] : evt;
				this.touchStartPosition = this.touchStartPosition || touchPosition;
				var xMovement = Math.abs(this.touchStartPosition.clientX - touchPosition.clientX);
				var yMovement = Math.abs(this.touchStartPosition.clientY - touchPosition.clientY);
				var distance = Math.sqrt(xMovement * xMovement + yMovement * yMovement);
				if(distance > options.touchMovedThreshold) {
					this.touchMoved = true;
				}
			}

			month_picker
				.find('.xdsoft_select')
				.xdsoftScroller(options)
				.on('touchstart mousedown.xdsoft', function (event) {
					var evt = event.originalEvent;
					this.touchMoved = false;
					this.touchStartPosition = evt.touches ? evt.touches[0] : evt;
					event.stopPropagation();
					event.preventDefault();
				})
				.on('touchmove', '.xdsoft_option', handleTouchMoved)
				.on('touchend mousedown.xdsoft', '.xdsoft_option', function () {
					if (!this.touchMoved) {
						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						}

						var year = _xdsoft_datetime.currentTime.getFullYear();
						if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
							_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
						}

						$(this).parent().parent().hide();

						datetimepicker.trigger('xchange.xdsoft');
						if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
							options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
						}

						if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
							options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
						}
					}
				});

			datetimepicker.getValue = function () {
				return _xdsoft_datetime.getCurrentTime();
			};

			datetimepicker.setOptions = function (_options) {
				var highlightedDates = {};

				options = $.extend(true, {}, options, _options);

				if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
					options.allowTimes = $.extend(true, [], _options.allowTimes);
				}

				if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
					options.weekends = $.extend(true, [], _options.weekends);
				}

				if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
					options.allowDates = $.extend(true, [], _options.allowDates);
				}

				if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe)==="[object String]") {
					options.allowDateRe = new RegExp(_options.allowDateRe);
				}

				if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
					$.each(_options.highlightedDates, function (index, value) {
						var splitData = $.map(value.split(','), $.trim),
							exDesc,
							hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]), // date, desc, style
							keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
						if (highlightedDates[keyDate] !== undefined) {
							exDesc = highlightedDates[keyDate].desc;
							if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
								highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
							}
						} else {
							highlightedDates[keyDate] = hDate;
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
					highlightedDates = $.extend(true, [], options.highlightedDates);
					$.each(_options.highlightedPeriods, function (index, value) {
						var dateTest, // start date
							dateEnd,
							desc,
							hDate,
							keyDate,
							exDesc,
							style;
						if ($.isArray(value)) {
							dateTest = value[0];
							dateEnd = value[1];
							desc = value[2];
							style = value[3];
						}
						else {
							var splitData = $.map(value.split(','), $.trim);
							dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
							dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
							desc = splitData[2];
							style = splitData[3];
						}

						while (dateTest <= dateEnd) {
							hDate = new HighlightedDate(dateTest, desc, style);
							keyDate = dateHelper.formatDate(dateTest, options.formatDate);
							dateTest.setDate(dateTest.getDate() + 1);
							if (highlightedDates[keyDate] !== undefined) {
								exDesc = highlightedDates[keyDate].desc;
								if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
									highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
								}
							} else {
								highlightedDates[keyDate] = hDate;
							}
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
					options.disabledDates = $.extend(true, [], _options.disabledDates);
				}

				if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
					options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
				}

				if ((options.open || options.opened) && (!options.inline)) {
					input.trigger('open.xdsoft');
				}

				if (options.inline) {
					triggerAfterOpen = true;
					datetimepicker.addClass('xdsoft_inline');
					input.after(datetimepicker).hide();
				}

				if (options.inverseButton) {
					options.next = 'xdsoft_prev';
					options.prev = 'xdsoft_next';
				}

				if (options.datepicker) {
					datepicker.addClass('active');
				} else {
					datepicker.removeClass('active');
				}

				if (options.timepicker) {
					timepicker.addClass('active');
				} else {
					timepicker.removeClass('active');
				}

				if (options.value) {
					_xdsoft_datetime.setCurrentTime(options.value);
					if (input && input.val) {
						input.val(_xdsoft_datetime.str);
					}
				}

				if (isNaN(options.dayOfWeekStart)) {
					options.dayOfWeekStart = 0;
				} else {
					options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
				}

				if (!options.timepickerScrollbar) {
					timeboxparent.xdsoftScroller(options, 'hide');
				}

				if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
					options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
				}

				if (options.maxDate &&  /^[\+\-](.*)$/.test(options.maxDate)) {
					options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
				}

				if (options.minDateTime &&  /^\+(.*)$/.test(options.minDateTime)) {
					options.minDateTime = _xdsoft_datetime.strToDateTime(options.minDateTime).dateFormat(options.formatDate);
				}

				if (options.maxDateTime &&  /^\+(.*)$/.test(options.maxDateTime)) {
					options.maxDateTime = _xdsoft_datetime.strToDateTime(options.maxDateTime).dateFormat(options.formatDate);
				}

				applyButton.toggle(options.showApplyButton);

				month_picker
					.find('.xdsoft_today_button')
					.css('visibility', !options.todayButton ? 'hidden' : 'visible');

				month_picker
					.find('.' + options.prev)
					.css('visibility', !options.prevButton ? 'hidden' : 'visible');

				month_picker
					.find('.' + options.next)
					.css('visibility', !options.nextButton ? 'hidden' : 'visible');

				setMask(options);

				if (options.validateOnBlur) {
					input
						.off('blur.xdsoft')
						.on('blur.xdsoft', function () {
							if (options.allowBlank && (!$.trim($(this).val()).length ||
								(typeof options.mask === "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_')))) {
								$(this).val(null);
								datetimepicker.data('xdsoft_datetime').empty();
							} else {
								var d = dateHelper.parseDate($(this).val(), options.format);
								if (d) { // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
									$(this).val(dateHelper.formatDate(d, options.format));
								} else {
									var splittedHours   = +([$(this).val()[0], $(this).val()[1]].join('')),
										splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));

									// parse the numbers as 0312 => 03:12
									if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
										$(this).val([splittedHours, splittedMinutes].map(function (item) {
											return item > 9 ? item : '0' + item;
										}).join(':'));
									} else {
										$(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
									}
								}
								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							}

							datetimepicker.trigger('changedatetime.xdsoft');
							datetimepicker.trigger('close.xdsoft');
						});
				}
				options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;

				datetimepicker
					.trigger('xchange.xdsoft')
					.trigger('afterOpen.xdsoft');
			};

			datetimepicker
				.data('options', options)
				.on('touchstart mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
					yearselect.hide();
					monthselect.hide();
					return false;
				});

			//scroll_element = timepicker.find('.xdsoft_time_box');
			timeboxparent.append(timebox);
			timeboxparent.xdsoftScroller(options);

			datetimepicker.on('afterOpen.xdsoft', function () {
				timeboxparent.xdsoftScroller(options);
			});

			datetimepicker
				.append(datepicker)
				.append(timepicker);

			if (options.withoutCopyright !== true) {
				datetimepicker
					.append(xdsoft_copyright);
			}

			datepicker
				.append(month_picker)
				.append(calendar)
				.append(applyButton);

			if (options.insideParent) {
				$(input).parent().append(datetimepicker);
			} else {
				$(options.parentID).append(datetimepicker);
			}

			XDSoft_datetime = function () {
				var _this = this;
				_this.now = function (norecursion) {
					var d = new Date(),
						date,
						time;

					if (!norecursion && options.defaultDate) {
						date = _this.strToDateTime(options.defaultDate);
						d.setFullYear(date.getFullYear());
						d.setMonth(date.getMonth());
						d.setDate(date.getDate());
					}

					d.setFullYear(d.getFullYear());

					if (!norecursion && options.defaultTime) {
						time = _this.strtotime(options.defaultTime);
						d.setHours(time.getHours());
						d.setMinutes(time.getMinutes());
						d.setSeconds(time.getSeconds());
						d.setMilliseconds(time.getMilliseconds());
					}
					return d;
				};

				_this.isValidDate = function (d) {
					if (Object.prototype.toString.call(d) !== "[object Date]") {
						return false;
					}
					return !isNaN(d.getTime());
				};

				_this.setCurrentTime = function (dTime, requireValidDate) {
					if (typeof dTime === 'string') {
						_this.currentTime = _this.strToDateTime(dTime);
					}
					else if (_this.isValidDate(dTime)) {
						_this.currentTime = dTime;
					}
					else if (!dTime && !requireValidDate && options.allowBlank && !options.inline) {
						_this.currentTime = null;
					}
					else {
						_this.currentTime = _this.now();
					}

					datetimepicker.trigger('xchange.xdsoft');
				};

				_this.empty = function () {
					_this.currentTime = null;
				};

				_this.getCurrentTime = function () {
					return _this.currentTime;
				};

				_this.nextMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() + 1,
						year;
					if (month === 12) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
						month = 0;
					}

					year = _this.currentTime.getFullYear();

					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);

					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.prevMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() - 1;
					if (month === -1) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
						month = 11;
					}
					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.getWeekOfYear = function (datetime) {
					if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
						var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
						if (typeof week !== 'undefined') {
							return week;
						}
					}
					var onejan = new Date(datetime.getFullYear(), 0, 1);

					//First week of the year is th one with the first Thursday according to ISO8601
					if (onejan.getDay() !== 4) {
						onejan.setMonth(0, 1 + ((4 - onejan.getDay()+ 7) % 7));
					}

					return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
				};

				_this.strToDateTime = function (sDateTime) {
					var tmpDate = [], timeOffset, currentTime;

					if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
						return sDateTime;
					}

					tmpDate = /^([+-]{1})(.*)$/.exec(sDateTime);

					if (tmpDate) {
						tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
					}

					if (tmpDate  && tmpDate[2]) {
						timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
						currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
					} else {
						currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
					}

					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now();
					}

					return currentTime;
				};

				_this.strToDate = function (sDate) {
					if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
						return sDate;
					}

					var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.strtotime = function (sTime) {
					if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
						return sTime;
					}
					var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.str = function () {
					var format = options.format;
					if (options.yearOffset) {
						format = format.replace('Y', _this.currentTime.getFullYear() + options.yearOffset);
						format = format.replace('y', String(_this.currentTime.getFullYear() + options.yearOffset).substring(2, 4));
					}
					return dateHelper.formatDate(_this.currentTime, format);
				};
				_this.currentTime = this.now();
			};

			_xdsoft_datetime = new XDSoft_datetime();

			applyButton.on('touchend click', function (e) {//pathbrite
				e.preventDefault();
				datetimepicker.data('changed', true);
				_xdsoft_datetime.setCurrentTime(getCurrentValue());
				input.val(_xdsoft_datetime.str());
				datetimepicker.trigger('close.xdsoft');
			});
			month_picker
				.find('.xdsoft_today_button')
				.on('touchend mousedown.xdsoft', function () {
					datetimepicker.data('changed', true);
					_xdsoft_datetime.setCurrentTime(0, true);
					datetimepicker.trigger('afterOpen.xdsoft');
				}).on('dblclick.xdsoft', function () {
				var currentDate = _xdsoft_datetime.getCurrentTime(), minDate, maxDate;
				currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
				minDate = _xdsoft_datetime.strToDate(options.minDate);
				minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
				if (currentDate < minDate) {
					return;
				}
				maxDate = _xdsoft_datetime.strToDate(options.maxDate);
				maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
				if (currentDate > maxDate) {
					return;
				}
				input.val(_xdsoft_datetime.str());
				input.trigger('change');
				datetimepicker.trigger('close.xdsoft');
			});
			month_picker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('touchend mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false;

					(function arguments_callee1(v) {
						if ($this.hasClass(options.next)) {
							_xdsoft_datetime.nextMonth();
						} else if ($this.hasClass(options.prev)) {
							_xdsoft_datetime.prevMonth();
						}
						if (options.monthChangeSpinner) {
							if (!stop) {
								timer = setTimeout(arguments_callee1, v || 100);
							}
						}
					}(500));

					$([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee2() {
						clearTimeout(timer);
						stop = true;
						$([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee2);
					});
				});

			timepicker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('touchend mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false,
						period = 110;
					(function arguments_callee4(v) {
						var pheight = timeboxparent[0].clientHeight,
							height = timebox[0].offsetHeight,
							top = Math.abs(parseInt(timebox.css('marginTop'), 10));
						if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {
							timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
						} else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
							timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
						}
						/**
						 * Fixed bug:
						 * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
						 * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
						 * would cause a bug when you use jquery.css method.
						 * Let's say: * { transition: all .5s ease; }
						 * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
						 * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
						 * next/prev button.
						 *
						 * What we should do:
						 * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
						 */
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
						period = (period > 10) ? 10 : period - 10;
						if (!stop) {
							timer = setTimeout(arguments_callee4, v || period);
						}
					}(500));
					$([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee5() {
						clearTimeout(timer);
						stop = true;
						$([options.ownerDocument.body, options.contentWindow])
							.off('touchend mouseup.xdsoft', arguments_callee5);
					});
				});

			xchangeTimer = 0;
			// base handler - generating a calendar and timepicker
			datetimepicker
				.on('xchange.xdsoft', function (event) {
					clearTimeout(xchangeTimer);
					xchangeTimer = setTimeout(function () {

						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						}

						var table =	'',
							start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
							i = 0,
							j,
							today = _xdsoft_datetime.now(),
							maxDate = false,
							minDate = false,
							minDateTime = false,
							maxDateTime = false,
							hDate,
							day,
							d,
							y,
							m,
							w,
							classes = [],
							customDateSettings,
							newRow = true,
							time = '',
							h,
							line_time,
							description;

						while (start.getDay() !== options.dayOfWeekStart) {
							start.setDate(start.getDate() - 1);
						}

						table += '<table><thead><tr>';

						if (options.weeks) {
							table += '<th></th>';
						}

						for (j = 0; j < 7; j += 1) {
							table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
						}

						table += '</tr></thead>';
						table += '<tbody>';

						if (options.maxDate !== false) {
							maxDate = _xdsoft_datetime.strToDate(options.maxDate);
							maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
						}

						if (options.minDate !== false) {
							minDate = _xdsoft_datetime.strToDate(options.minDate);
							minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
						}

						if (options.minDateTime !== false) {
							minDateTime = _xdsoft_datetime.strToDate(options.minDateTime);
							minDateTime = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), minDateTime.getHours(), minDateTime.getMinutes(), minDateTime.getSeconds());
						}

						if (options.maxDateTime !== false) {
							maxDateTime = _xdsoft_datetime.strToDate(options.maxDateTime);
							maxDateTime = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), maxDateTime.getHours(), maxDateTime.getMinutes(), maxDateTime.getSeconds());
						}

						var maxDateTimeDay;
						if (maxDateTime !== false) {
							maxDateTimeDay = ((maxDateTime.getFullYear() * 12) + maxDateTime.getMonth()) * 31 + maxDateTime.getDate();
						}

						while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
							classes = [];
							i += 1;

							day = start.getDay();
							d = start.getDate();
							y = start.getFullYear();
							m = start.getMonth();
							w = _xdsoft_datetime.getWeekOfYear(start);
							description = '';

							classes.push('xdsoft_date');

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
								customDateSettings = options.beforeShowDay.call(datetimepicker, start);
							} else {
								customDateSettings = null;
							}

							if(options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]"){
								if(!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))){
									classes.push('xdsoft_disabled');
								}
							}

							if(options.allowDates && options.allowDates.length>0){
								if(options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1){
									classes.push('xdsoft_disabled');
								}
							}

							var currentDay = ((start.getFullYear() * 12) + start.getMonth()) * 31 + start.getDate();
							if ((maxDate !== false && start > maxDate) || (minDateTime !== false && start < minDateTime)  || (minDate !== false && start < minDate) || (maxDateTime !== false && currentDay > maxDateTimeDay) || (customDateSettings && customDateSettings[0] === false)) {
								classes.push('xdsoft_disabled');
							}

							if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
								classes.push('xdsoft_disabled');
							}

							if (options.disabledWeekDays.indexOf(day) !== -1) {
								classes.push('xdsoft_disabled');
							}

							if (input.is('[disabled]')) {
								classes.push('xdsoft_disabled');
							}

							if (customDateSettings && customDateSettings[1] !== "") {
								classes.push(customDateSettings[1]);
							}

							if (_xdsoft_datetime.currentTime.getMonth() !== m) {
								classes.push('xdsoft_other_month');
							}

							if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
								classes.push('xdsoft_current');
							}

							if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
								classes.push('xdsoft_today');
							}

							if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
								classes.push('xdsoft_weekend');
							}

							if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
								hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
								classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
								description = hDate.desc === undefined ? '' : hDate.desc;
							}

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
								classes.push(options.beforeShowDay(start));
							}

							if (newRow) {
								table += '<tr>';
								newRow = false;
								if (options.weeks) {
									table += '<th>' + w + '</th>';
								}
							}

							table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' +
								'<div>' + d + '</div>' +
								'</td>';

							if (start.getDay() === options.dayOfWeekStartPrev) {
								table += '</tr>';
								newRow = true;
							}

							start.setDate(d + 1);
						}
						table += '</tbody></table>';

						calendar.html(table);

						month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
						month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear() + options.yearOffset);

						// generate timebox
						time = '';
						h = '';
						m = '';

						var minTimeMinutesOfDay = 0;
						if (options.minTime !== false) {
							var t = _xdsoft_datetime.strtotime(options.minTime);
							minTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
						}
						var maxTimeMinutesOfDay = 24 * 60;
						if (options.maxTime !== false) {
							var t = _xdsoft_datetime.strtotime(options.maxTime);
							maxTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
						}

						if (options.minDateTime !== false) {
							var t = _xdsoft_datetime.strToDateTime(options.minDateTime);
							var currentDayIsMinDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
							if (currentDayIsMinDateTimeDay) {
								var m = 60 * t.getHours() + t.getMinutes();
								if (m > minTimeMinutesOfDay) minTimeMinutesOfDay = m;
							}
						}

						if (options.maxDateTime !== false) {
							var t = _xdsoft_datetime.strToDateTime(options.maxDateTime);
							var currentDayIsMaxDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
							if (currentDayIsMaxDateTimeDay) {
								var m = 60 * t.getHours() + t.getMinutes();
								if (m < maxTimeMinutesOfDay) maxTimeMinutesOfDay = m;
							}
						}

						line_time = function line_time(h, m) {
							var now = _xdsoft_datetime.now(), current_time,
								isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
							now.setHours(h);
							h = parseInt(now.getHours(), 10);
							now.setMinutes(m);
							m = parseInt(now.getMinutes(), 10);
							classes = [];
							var currentMinutesOfDay = 60 * h + m;
							if (input.is('[disabled]') || (currentMinutesOfDay >= maxTimeMinutesOfDay) || (currentMinutesOfDay < minTimeMinutesOfDay)) {
								classes.push('xdsoft_disabled');
							}

							current_time = new Date(_xdsoft_datetime.currentTime);
							current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

							if (!isALlowTimesInit) {
								current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
							}

							if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && ((!isALlowTimesInit && options.step > 59) || current_time.getMinutes() === parseInt(m, 10))) {
								if (options.defaultSelect || datetimepicker.data('changed')) {
									classes.push('xdsoft_current');
								} else if (options.initTime) {
									classes.push('xdsoft_init_time');
								}
							}
							if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
								classes.push('xdsoft_today');
							}
							time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
						};

						if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
							for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
								for (j = 0; j < 60; j += options.step) {
									var currentMinutesOfDay = i * 60 + j;
									if (currentMinutesOfDay < minTimeMinutesOfDay) continue;
									if (currentMinutesOfDay >= maxTimeMinutesOfDay) continue;
									h = (i < 10 ? '0' : '') + i;
									m = (j < 10 ? '0' : '') + j;
									line_time(h, m);
								}
							}
						} else {
							for (i = 0; i < options.allowTimes.length; i += 1) {
								h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
								m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
								line_time(h, m);
							}
						}

						timebox.html(time);

						opt = '';

						for (i = parseInt(options.yearStart, 10); i <= parseInt(options.yearEnd, 10); i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + (i + options.yearOffset) + '</div>';
						}
						yearselect.children().eq(0)
							.html(opt);

						for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
						}
						monthselect.children().eq(0).html(opt);
						$(datetimepicker)
							.trigger('generate.xdsoft');
					}, 10);
					event.stopPropagation();
				})
				.on('afterOpen.xdsoft', function () {
					if (options.timepicker) {
						var classType, pheight, height, top;
						if (timebox.find('.xdsoft_current').length) {
							classType = '.xdsoft_current';
						} else if (timebox.find('.xdsoft_init_time').length) {
							classType = '.xdsoft_init_time';
						}
						if (classType) {
							pheight = timeboxparent[0].clientHeight;
							height = timebox[0].offsetHeight;
							top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
							if ((height - pheight) < top) {
								top = height - pheight;
							}
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
						} else {
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
						}
					}
				});

			timerclick = 0;
			calendar
				.on('touchend click.xdsoft', 'td', function (xdevent) {
					xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
					timerclick += 1;
					var $this = $(this),
						currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}

					currentTime.setDate(1);
					currentTime.setFullYear($this.data('year'));
					currentTime.setMonth($this.data('month'));
					currentTime.setDate($this.data('date'));

					datetimepicker.trigger('select.xdsoft', [currentTime]);

					input.val(_xdsoft_datetime.str());

					if (options.onSelectDate &&	$.isFunction(options.onSelectDate)) {
						options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}

					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
					if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === false && !options.timepicker))) && !options.inline) {
						datetimepicker.trigger('close.xdsoft');
					}
					setTimeout(function () {
						timerclick = 0;
					}, 200);
				});

			timebox
				.on('touchstart', 'div', function (xdevent) {
					this.touchMoved = false;
				})
				.on('touchmove', 'div', handleTouchMoved)
				.on('touchend click.xdsoft', 'div', function (xdevent) {
					if (!this.touchMoved) {
						xdevent.stopPropagation();
						var $this = $(this),
							currentTime = _xdsoft_datetime.currentTime;

						if (currentTime === undefined || currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
							currentTime = _xdsoft_datetime.currentTime;
						}

						if ($this.hasClass('xdsoft_disabled')) {
							return false;
						}
						currentTime.setHours($this.data('hour'));
						currentTime.setMinutes($this.data('minute'));
						datetimepicker.trigger('select.xdsoft', [currentTime]);

						datetimepicker.data('input').val(_xdsoft_datetime.str());

						if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
							options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
						}
						datetimepicker.data('changed', true);
						datetimepicker.trigger('xchange.xdsoft');
						datetimepicker.trigger('changedatetime.xdsoft');
						if (options.inline !== true && options.closeOnTimeSelect === true) {
							datetimepicker.trigger('close.xdsoft');
						}
					}
				});

			datepicker
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollMonth) {
						return true;
					}
					if (event.deltaY < 0) {
						_xdsoft_datetime.nextMonth();
					} else {
						_xdsoft_datetime.prevMonth();
					}
					return false;
				});

			input
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollInput) {
						return true;
					}
					if (!options.datepicker && options.timepicker) {
						current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
						if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
							current_time_index += event.deltaY;
						}
						if (timebox.children().eq(current_time_index).length) {
							timebox.children().eq(current_time_index).trigger('mousedown');
						}
						return false;
					}
					if (options.datepicker && !options.timepicker) {
						datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
						if (input.val) {
							input.val(_xdsoft_datetime.str());
						}
						datetimepicker.trigger('changedatetime.xdsoft');
						return false;
					}
				});

			datetimepicker
				.on('changedatetime.xdsoft', function (event) {
					if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
						var $input = datetimepicker.data('input');
						options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
						delete options.value;
						$input.trigger('change');
					}
				})
				.on('generate.xdsoft', function () {
					if (options.onGenerate && $.isFunction(options.onGenerate)) {
						options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					if (triggerAfterOpen) {
						datetimepicker.trigger('afterOpen.xdsoft');
						triggerAfterOpen = false;
					}
				})
				.on('click.xdsoft', function (xdevent) {
					xdevent.stopPropagation();
				});

			current_time_index = 0;

			/**
			 * Runs the callback for each of the specified node's ancestors.
			 *
			 * Return FALSE from the callback to stop ascending.
			 *
			 * @param {DOMNode} node
			 * @param {Function} callback
			 * @returns {undefined}
			 */
			forEachAncestorOf = function (node, callback) {
				do {
					node = node.parentNode;

					if (!node || callback(node) === false) {
						break;
					}
				} while (node.nodeName !== 'HTML');
			};

			/**
			 * Sets the position of the picker.
			 *
			 * @returns {undefined}
			 */
			setPos = function () {
				var dateInputOffset,
					dateInputElem,
					verticalPosition,
					left,
					position,
					datetimepickerElem,
					dateInputHasFixedAncestor,
					$dateInput,
					windowWidth,
					verticalAnchorEdge,
					datetimepickerCss,
					windowHeight,
					windowScrollTop;

				$dateInput = datetimepicker.data('input');
				dateInputOffset = $dateInput.offset();
				dateInputElem = $dateInput[0];

				verticalAnchorEdge = 'top';
				verticalPosition = (dateInputOffset.top + dateInputElem.offsetHeight) - 1;
				left = dateInputOffset.left;
				position = "absolute";

				windowWidth = $(options.contentWindow).width();
				windowHeight = $(options.contentWindow).height();
				windowScrollTop = $(options.contentWindow).scrollTop();

				if ((options.ownerDocument.documentElement.clientWidth - dateInputOffset.left) < datepicker.parent().outerWidth(true)) {
					var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
					left = left - diff;
				}

				if ($dateInput.parent().css('direction') === 'rtl') {
					left -= (datetimepicker.outerWidth() - $dateInput.outerWidth());
				}

				if (options.fixed) {
					verticalPosition -= windowScrollTop;
					left -= $(options.contentWindow).scrollLeft();
					position = "fixed";
				} else {
					dateInputHasFixedAncestor = false;

					forEachAncestorOf(dateInputElem, function (ancestorNode) {
						if (ancestorNode === null) {
							return false;
						}

						if (options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
							dateInputHasFixedAncestor = true;
							return false;
						}
					});

					if (dateInputHasFixedAncestor && !options.insideParent) {
						position = 'fixed';

						//If the picker won't fit entirely within the viewport then display it above the date input.
						if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
							verticalAnchorEdge = 'bottom';
							verticalPosition = (windowHeight + windowScrollTop) - dateInputOffset.top;
						} else {
							verticalPosition -= windowScrollTop;
						}
					} else {
						if (verticalPosition + datetimepicker[0].offsetHeight > windowHeight + windowScrollTop) {
							verticalPosition = dateInputOffset.top - datetimepicker[0].offsetHeight + 1;
						}
					}

					if (verticalPosition < 0) {
						verticalPosition = 0;
					}

					if (left + dateInputElem.offsetWidth > windowWidth) {
						left = windowWidth - dateInputElem.offsetWidth;
					}
				}

				datetimepickerElem = datetimepicker[0];

				forEachAncestorOf(datetimepickerElem, function (ancestorNode) {
					var ancestorNodePosition;

					ancestorNodePosition = options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position');

					if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
						left = left - ((windowWidth - ancestorNode.offsetWidth) / 2);
						return false;
					}
				});

				datetimepickerCss = {
					position: position,
					left: options.insideParent ? dateInputElem.offsetLeft : left,
					top: '',  //Initialize to prevent previous values interfering with new ones.
					bottom: ''  //Initialize to prevent previous values interfering with new ones.
				};

				if (options.insideParent) {
					datetimepickerCss[verticalAnchorEdge] = dateInputElem.offsetTop + dateInputElem.offsetHeight;
				} else {
					datetimepickerCss[verticalAnchorEdge] = verticalPosition;
				}

				datetimepicker.css(datetimepickerCss);
			};

			datetimepicker
				.on('open.xdsoft', function (event) {
					var onShow = true;
					if (options.onShow && $.isFunction(options.onShow)) {
						onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onShow !== false) {
						datetimepicker.show();
						setPos();
						$(options.contentWindow)
							.off('resize.xdsoft', setPos)
							.on('resize.xdsoft', setPos);

						if (options.closeOnWithoutClick) {
							$([options.ownerDocument.body, options.contentWindow]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
								datetimepicker.trigger('close.xdsoft');
								$([options.ownerDocument.body, options.contentWindow]).off('touchstart mousedown.xdsoft', arguments_callee6);
							});
						}
					}
				})
				.on('close.xdsoft', function (event) {
					var onClose = true;
					month_picker
						.find('.xdsoft_month,.xdsoft_year')
						.find('.xdsoft_select')
						.hide();
					if (options.onClose && $.isFunction(options.onClose)) {
						onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onClose !== false && !options.opened && !options.inline) {
						datetimepicker.hide();
					}
					event.stopPropagation();
				})
				.on('toggle.xdsoft', function () {
					if (datetimepicker.is(':visible')) {
						datetimepicker.trigger('close.xdsoft');
					} else {
						datetimepicker.trigger('open.xdsoft');
					}
				})
				.data('input', input);

			timer = 0;

			datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
			datetimepicker.setOptions(options);

			function getCurrentValue() {
				var ct = false, time;

				if (options.startDate) {
					ct = _xdsoft_datetime.strToDate(options.startDate);
				} else {
					ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
					if (ct) {
						ct = _xdsoft_datetime.strToDateTime(ct);
						if (options.yearOffset) {
							ct = new Date(ct.getFullYear() - options.yearOffset, ct.getMonth(), ct.getDate(), ct.getHours(), ct.getMinutes(), ct.getSeconds(), ct.getMilliseconds());
						}
					} else if (options.defaultDate) {
						ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
						if (options.defaultTime) {
							time = _xdsoft_datetime.strtotime(options.defaultTime);
							ct.setHours(time.getHours());
							ct.setMinutes(time.getMinutes());
						}
					}
				}

				if (ct && _xdsoft_datetime.isValidDate(ct)) {
					datetimepicker.data('changed', true);
				} else {
					ct = '';
				}

				return ct || 0;
			}

			function setMask(options) {

				var isValidValue = function (mask, value) {
						var reg = mask
							.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')
							.replace(/_/g, '{digit+}')
							.replace(/([0-9]{1})/g, '{digit$1}')
							.replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')
							.replace(/\{digit[\+]\}/g, '[0-9_]{1}');
						return (new RegExp(reg)).test(value);
					},
					getCaretPos = function (input) {
						try {
							if (options.ownerDocument.selection && options.ownerDocument.selection.createRange) {
								var range = options.ownerDocument.selection.createRange();
								return range.getBookmark().charCodeAt(2) - 2;
							}
							if (input.setSelectionRange) {
								return input.selectionStart;
							}
						} catch (e) {
							return 0;
						}
					},
					setCaretPos = function (node, pos) {
						node = (typeof node === "string" || node instanceof String) ? options.ownerDocument.getElementById(node) : node;
						if (!node) {
							return false;
						}
						if (node.createTextRange) {
							var textRange = node.createTextRange();
							textRange.collapse(true);
							textRange.moveEnd('character', pos);
							textRange.moveStart('character', pos);
							textRange.select();
							return true;
						}
						if (node.setSelectionRange) {
							node.setSelectionRange(pos, pos);
							return true;
						}
						return false;
					};

				if(options.mask) {
					input.off('keydown.xdsoft');
				}

				if (options.mask === true) {
					if (dateHelper.formatMask) {
						options.mask = dateHelper.formatMask(options.format)
					} else {
						options.mask = options.format
							.replace(/Y/g, '9999')
							.replace(/F/g, '9999')
							.replace(/m/g, '19')
							.replace(/d/g, '39')
							.replace(/H/g, '29')
							.replace(/i/g, '59')
							.replace(/s/g, '59');
					}
				}

				if ($.type(options.mask) === 'string') {
					if (!isValidValue(options.mask, input.val())) {
						input.val(options.mask.replace(/[0-9]/g, '_'));
						setCaretPos(input[0], 0);
					}

					input.on('paste.xdsoft', function (event) {
						// couple options here
						// 1. return false - tell them they can't paste
						// 2. insert over current characters - minimal validation
						// 3. full fledged parsing and validation
						// let's go option 2 for now

						// fires multiple times for some reason

						// https://stackoverflow.com/a/30496488/1366033
						var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData,
							pastedData = clipboardData.getData('text'),
							val = this.value,
							pos = this.selectionStart

						var valueBeforeCursor = val.substr(0, pos);
						var valueAfterPaste = val.substr(pos + pastedData.length);

						val = valueBeforeCursor + pastedData + valueAfterPaste;
						pos += pastedData.length;

						if (isValidValue(options.mask, val)) {
							this.value = val;
							setCaretPos(this, pos);
						} else if ($.trim(val) === '') {
							this.value = options.mask.replace(/[0-9]/g, '_');
						} else {
							input.trigger('error_input.xdsoft');
						}

						event.preventDefault();
						return false;
					});

					input.on('keydown.xdsoft', function (event) {
						var val = this.value,
							key = event.which,
							pos = this.selectionStart,
							selEnd = this.selectionEnd,
							hasSel = pos !== selEnd,
							digit;

						// only alow these characters
						if (((key >=  KEY0 && key <=  KEY9)  ||
								(key >= _KEY0 && key <= _KEY9)) ||
							(key === BACKSPACE || key === DEL)) {

							// get char to insert which is new character or placeholder ('_')
							digit = (key === BACKSPACE || key === DEL) ? '_' :
								String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key);

							// we're deleting something, we're not at the start, and have normal cursor, move back one
							// if we have a selection length, cursor actually sits behind deletable char, not in front
							if (key === BACKSPACE && pos && !hasSel) {
								pos -= 1;
							}

							// don't stop on a separator, continue whatever direction you were going
							//   value char - keep incrementing position while on separator char and we still have room
							//   del char   - keep decrementing position while on separator char and we still have room
							while (true) {
								var maskValueAtCurPos = options.mask.substr(pos, 1);
								var posShorterThanMaskLength = pos < options.mask.length;
								var posGreaterThanZero = pos > 0;
								var notNumberOrPlaceholder = /[^0-9_]/;
								var curPosOnSep = notNumberOrPlaceholder.test(maskValueAtCurPos);
								var continueMovingPosition = curPosOnSep && posShorterThanMaskLength && posGreaterThanZero

								// if we hit a real char, stay where we are
								if (!continueMovingPosition) break;

								// hitting backspace in a selection, you can possibly go back any further - go forward
								pos += (key === BACKSPACE && !hasSel) ? -1 : 1;

							}

							if (event.metaKey) {    // cmd has been pressed
								pos = 0;
								hasSel = true;
							}

							if (hasSel) {
								// pos might have moved so re-calc length
								var selLength = selEnd - pos

								// if we have a selection length we will wipe out entire selection and replace with default template for that range
								var defaultBlank = options.mask.replace(/[0-9]/g, '_');
								var defaultBlankSelectionReplacement = defaultBlank.substr(pos, selLength);
								var selReplacementRemainder = defaultBlankSelectionReplacement.substr(1) // might be empty

								var valueBeforeSel = val.substr(0, pos);
								var insertChars = digit + selReplacementRemainder;
								var charsAfterSelection = val.substr(pos + selLength);

								val = valueBeforeSel + insertChars + charsAfterSelection

							} else {
								var valueBeforeCursor = val.substr(0, pos);
								var insertChar = digit;
								var valueAfterNextChar = val.substr(pos + 1);

								val = valueBeforeCursor + insertChar + valueAfterNextChar
							}

							if ($.trim(val) === '') {
								// if empty, set to default
								val = defaultBlank
							} else {
								// if at the last character don't need to do anything
								if (pos === options.mask.length) {
									event.preventDefault();
									return false;
								}
							}

							// resume cursor location
							pos += (key === BACKSPACE) ? 0 : 1;
							// don't stop on a separator, continue whatever direction you were going
							while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
								pos += (key === BACKSPACE) ? 0 : 1;
							}

							if (isValidValue(options.mask, val)) {
								this.value = val;
								setCaretPos(this, pos);
							} else if ($.trim(val) === '') {
								this.value = options.mask.replace(/[0-9]/g, '_');
							} else {
								input.trigger('error_input.xdsoft');
							}
						} else {
							if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
								return true;
							}
						}

						event.preventDefault();
						return false;
					});
				}
			}

			_xdsoft_datetime.setCurrentTime(getCurrentValue());

			input
				.data('xdsoft_datetimepicker', datetimepicker)
				.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function () {
					if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
						return;
					}
					if (!options.openOnFocus) {
						return;
					}
					clearTimeout(timer);
					timer = setTimeout(function () {
						if (input.is(':disabled')) {
							return;
						}

						triggerAfterOpen = true;
						_xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
						if(options.mask) {
							setMask(options);
						}
						datetimepicker.trigger('open.xdsoft');
					}, 100);
				})
				.on('keydown.xdsoft', function (event) {
					var elementSelector,
						key = event.which;
					if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
						elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
						datetimepicker.trigger('close.xdsoft');
						elementSelector.eq(elementSelector.index(this) + 1).focus();
						return false;
					}
					if ([TAB].indexOf(key) !== -1) {
						datetimepicker.trigger('close.xdsoft');
						return true;
					}
				})
				.on('blur.xdsoft', function () {
					datetimepicker.trigger('close.xdsoft');
				});
		};
		destroyDateTimePicker = function (input) {
			var datetimepicker = input.data('xdsoft_datetimepicker');
			if (datetimepicker) {
				datetimepicker.data('xdsoft_datetime', null);
				datetimepicker.remove();
				input
					.data('xdsoft_datetimepicker', null)
					.off('.xdsoft');
				$(options.contentWindow).off('resize.xdsoft');
				$([options.contentWindow, options.ownerDocument.body]).off('mousedown.xdsoft touchstart');
				if (input.unmousewheel) {
					input.unmousewheel();
				}
			}
		};
		$(options.ownerDocument)
			.off('keydown.xdsoftctrl keyup.xdsoftctrl')
			.off('keydown.xdsoftcmd keyup.xdsoftcmd')
			.on('keydown.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = true;
				}
			})
			.on('keyup.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = false;
				}
			})
			.on('keydown.xdsoftcmd', function (e) {
				if (e.keyCode === CMDKEY) {
					cmdDown = true;
				}
			})
			.on('keyup.xdsoftcmd', function (e) {
				if (e.keyCode === CMDKEY) {
					cmdDown = false;
				}
			});

		this.each(function () {
			var datetimepicker = $(this).data('xdsoft_datetimepicker'), $input;
			if (datetimepicker) {
				if ($.type(opt) === 'string') {
					switch (opt) {
						case 'show':
							$(this).select().focus();
							datetimepicker.trigger('open.xdsoft');
							break;
						case 'hide':
							datetimepicker.trigger('close.xdsoft');
							break;
						case 'toggle':
							datetimepicker.trigger('toggle.xdsoft');
							break;
						case 'destroy':
							destroyDateTimePicker($(this));
							break;
						case 'reset':
							this.value = this.defaultValue;
							if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
								datetimepicker.data('changed', false);
							}
							datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
							break;
						case 'validate':
							$input = datetimepicker.data('input');
							$input.trigger('blur.xdsoft');
							break;
						default:
							if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
								result = datetimepicker[opt](opt2);
							}
					}
				} else {
					datetimepicker
						.setOptions(opt);
				}
				return 0;
			}
			if ($.type(opt) !== 'string') {
				if (!options.lazyInit || options.open || options.inline) {
					createDateTimePicker($(this));
				} else {
					lazyInit($(this));
				}
			}
		});

		return result;
	};

	$.fn.datetimepicker.defaults = default_options;

	function HighlightedDate(date, desc, style) {
		"use strict";
		this.date = date;
		this.desc = desc;
		this.style = style;
	}
};
;(function (factory) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define(['jquery', 'jquery-mousewheel'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS style for Browserify
		module.exports = factory(require('jquery'));;
	} else {
		// Browser globals
		factory(jQuery);
	}
}(datetimepickerFactory));



/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS style for Browserify
		module.exports = factory;
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
		toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
			['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
		slice  = Array.prototype.slice,
		nullLowestDeltaTimeout, lowestDelta;

	if ( $.event.fixHooks ) {
		for ( var i = toFix.length; i; ) {
			$.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
		}
	}

	var special = $.event.special.mousewheel = {
		version: '3.1.12',

		setup: function() {
			if ( this.addEventListener ) {
				for ( var i = toBind.length; i; ) {
					this.addEventListener( toBind[--i], handler, false );
				}
			} else {
				this.onmousewheel = handler;
			}
			// Store the line height and page height for this particular element
			$.data(this, 'mousewheel-line-height', special.getLineHeight(this));
			$.data(this, 'mousewheel-page-height', special.getPageHeight(this));
		},

		teardown: function() {
			if ( this.removeEventListener ) {
				for ( var i = toBind.length; i; ) {
					this.removeEventListener( toBind[--i], handler, false );
				}
			} else {
				this.onmousewheel = null;
			}
			// Clean up the data we added to the element
			$.removeData(this, 'mousewheel-line-height');
			$.removeData(this, 'mousewheel-page-height');
		},

		getLineHeight: function(elem) {
			var $elem = $(elem),
				$parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
			if (!$parent.length) {
				$parent = $('body');
			}
			return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
		},

		getPageHeight: function(elem) {
			return $(elem).height();
		},

		settings: {
			adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
			normalizeOffset: true  // calls getBoundingClientRect for each event
		}
	};

	$.fn.extend({
		mousewheel: function(fn) {
			return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
		},

		unmousewheel: function(fn) {
			return this.unbind('mousewheel', fn);
		}
	});


	function handler(event) {
		var orgEvent   = event || window.event,
			args       = slice.call(arguments, 1),
			delta      = 0,
			deltaX     = 0,
			deltaY     = 0,
			absDelta   = 0,
			offsetX    = 0,
			offsetY    = 0;
		event = $.event.fix(orgEvent);
		event.type = 'mousewheel';

		// Old school scrollwheel delta
		if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
		if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
		if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
		if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

		// Firefox < 17 horizontal scrolling related to DOMMouseScroll event
		if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
			deltaX = deltaY * -1;
			deltaY = 0;
		}

		// Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
		delta = deltaY === 0 ? deltaX : deltaY;

		// New school wheel delta (wheel event)
		if ( 'deltaY' in orgEvent ) {
			deltaY = orgEvent.deltaY * -1;
			delta  = deltaY;
		}
		if ( 'deltaX' in orgEvent ) {
			deltaX = orgEvent.deltaX;
			if ( deltaY === 0 ) { delta  = deltaX * -1; }
		}

		// No change actually happened, no reason to go any further
		if ( deltaY === 0 && deltaX === 0 ) { return; }

		// Need to convert lines and pages to pixels if we aren't already in pixels
		// There are three delta modes:
		//   * deltaMode 0 is by pixels, nothing to do
		//   * deltaMode 1 is by lines
		//   * deltaMode 2 is by pages
		if ( orgEvent.deltaMode === 1 ) {
			var lineHeight = $.data(this, 'mousewheel-line-height');
			delta  *= lineHeight;
			deltaY *= lineHeight;
			deltaX *= lineHeight;
		} else if ( orgEvent.deltaMode === 2 ) {
			var pageHeight = $.data(this, 'mousewheel-page-height');
			delta  *= pageHeight;
			deltaY *= pageHeight;
			deltaX *= pageHeight;
		}

		// Store lowest absolute delta to normalize the delta values
		absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

		if ( !lowestDelta || absDelta < lowestDelta ) {
			lowestDelta = absDelta;

			// Adjust older deltas if necessary
			if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
				lowestDelta /= 40;
			}
		}

		// Adjust older deltas if necessary
		if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
			// Divide all the things by 40!
			delta  /= 40;
			deltaX /= 40;
			deltaY /= 40;
		}

		// Get a whole, normalized value for the deltas
		delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
		deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
		deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

		// Normalise offsetX and offsetY properties
		if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
			var boundingRect = this.getBoundingClientRect();
			offsetX = event.clientX - boundingRect.left;
			offsetY = event.clientY - boundingRect.top;
		}

		// Add information to the event object
		event.deltaX = deltaX;
		event.deltaY = deltaY;
		event.deltaFactor = lowestDelta;
		event.offsetX = offsetX;
		event.offsetY = offsetY;
		// Go ahead and set deltaMode to 0 since we converted to pixels
		// Although this is a little odd since we overwrite the deltaX/Y
		// properties with normalized deltas.
		event.deltaMode = 0;

		// Add event and delta to the front of the arguments
		args.unshift(event, delta, deltaX, deltaY);

		// Clearout lowestDelta after sometime to better
		// handle multiple device types that give different
		// a different lowestDelta
		// Ex: trackpad = 3 and mouse wheel = 120
		if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
		nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

		return ($.event.dispatch || $.event.handle).apply(this, args);
	}

	function nullLowestDelta() {
		lowestDelta = null;
	}

	function shouldAdjustOldDeltas(orgEvent, absDelta) {
		// If this is an older event and the delta is divisable by 120,
		// then we are assuming that the browser is treating this as an
		// older mouse wheel event and that we should divide the deltas
		// by 40 to try and get a more usable deltaFactor.
		// Side note, this actually impacts the reported scroll distance
		// in older browsers and can cause scrolling to be slower than native.
		// Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
		return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
	}

}));