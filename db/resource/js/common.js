// Create Element.remove() function if not exist
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
//forEach script
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(str) {
		if (this.length < str.length) { return false; }
		return this.indexOf(str) == 0;
	}
}
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(str) {
		if (this.length < str.length) { return false; }
		return this.lastIndexOf(str) + str.length == this.length;
	}
}

(function (arr) {
arr.forEach(function (item) {
    if (item.hasOwnProperty('after')) {
    return;
    }
    Object.defineProperty(item, 'after', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
        docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
        var isNode = argItem instanceof Node;
        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this.nextElementSibling);
    }
    });
});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


var agent = navigator.userAgent.toLowerCase();
var isIe = false;
//var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

var isMobile = function() {
    var maxTouchPoints = navigator.maxTouchPoints;
    var agent = navigator.userAgent.toLowerCase();

    var isMac = /Macintosh/i.test(navigator.userAgent);

    if (isMac && maxTouchPoints > 0) return true;

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi|mobi/i.test(navigator.userAgent) ? true : false;
}();


var responsive = {
    'pcOnly'  : window.matchMedia("(min-width: 1025px)").matches,
    'tabOnly' : window.matchMedia("(min-width: 801px) and (max-width: 1024px)").matches,
    'tab'     : window.matchMedia("(max-width: 1280px)").matches,
    'tabS'    : window.matchMedia("(max-width: 1024px)").matches,
    'mob'     : window.matchMedia("(max-width: 800px)").matches
}

function common_switchEvt(el) {
    if(!el) return false;
    if(el.classList.contains('on')) {
        el.classList.remove('on');
    }else {
        el.classList.add('on');
    }
    return true;
}


function responsiveEvt(_matchMedia){
	return  window.matchMedia(_matchMedia).matches;
}


if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
    isIe = true;
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}


function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function openPopup(tg, _fnc){

    if(_fnc) {
        var context = this, args = arguments;
        _fnc.apply(context, args);
    };
    var fileName = tg.replace('#','') + '.html';
    if($(tg).length >= 1) $(tg).remove();
    $.ajax({
        url: '/views/popup/'+fileName,
        dataType : "html",
        success: function(data) {
            var html = $.parseHTML(data);
            document.getElementById('container').appendChild(html[0]);
            $(tg).addClass('on');
            $(tg).fadeIn(300);

            if (!$('.all_menu_wrap').hasClass('on')){
                scroll.disable();
            }
        }
    })
    // 留ㅺ컻蹂��섎줈 �⑥닔瑜� 諛쏆쑝硫� �ㅽ뻾
    return false;
}

function closePopup(tg, _fnc) {
    if(_fnc) {
        var context = this, args = arguments;
        _fnc.apply(context, args);
    };
    $(tg).removeClass('on');
    $(tg).fadeOut(300, function() {
        $(tg).remove();

        if (!$('.all_menu_wrap').hasClass('on')){
            scroll.enable();
        }
    });
}

function common_fileOpen(_this){
	$(_this).closest('.fm_file').find('input[type=file]').trigger('click');
}

function common_fileChang(_this){
	$(_this).closest('.fm_file').find('input[type=text]').val($(_this).val());
}


document.addEventListener("DOMContentLoaded", function() {
	if(isMobile){
		document.querySelector('html').classList.add('mobile');
	}
});

function dispatchEvt(_tg, _type) {
    var evt = createNewEvent(_type);
    var tg = _tg;
    tg.dispatchEvent(evt);
}
function createNewEvent(eventName) {
    var event;
    if (typeof(Event) === 'function') {
        event = new Event(eventName, {bubbles: false});
    } else {
        event = document.createEvent('Event');
        event.initEvent(eventName, false, false);
    }
    return event;
}


window.addEventListener('load', function() {
    const waveEle = Array.from(document.querySelectorAll(`.wave_anim:not(.custom)`));
    waveEle.forEach(el => {
        const txt = el.innerText;
        el.innerHTML = '';
        let doc = document.createDocumentFragment();
        for(let i = 0; i < txt.length; i++) {
            if(txt[i] != '\n') {
                const span = document.createElement('span');
                span.innerText = txt[i];
                span.classList.add('wave');
                span.style.animationDelay = `${i * 0.02}s`;
                doc.appendChild(span);
            }else {
                const br = document.createElement('br');
                doc.appendChild(br);
            }
        }
        el.appendChild(doc);
    })


    const accor = Array.from(document.querySelectorAll('.accordion_item'));
    if(accor) {
        accor.forEach(el => {
            el.querySelector('.adion_trigger').addEventListener('click', event => {
                const next = event.currentTarget.nextElementSibling;
                console.log(event.currentTarget);
                console.log(next);
                if(el.classList.contains('on')) {
                    el.classList.remove('on')
                    $(next).stop().slideUp(300);
                }else {
                    el.classList.add('on')
                    $(next).stop().slideDown(300);
                }
            })
        })
    }

});



function getSiblings(element) {
    var siblings = [];
    var sibling = element.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== element) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  }

function getIndex(element) {
    var parent = element.parentNode;
    var children = parent.children;
    for (var i = 0; i < children.length; i++) {
        if (children[i] === element) {
            return i;
        }
    }
    return -1; // element媛� parent�� �먯떇 �붿냼媛� �꾨땶 寃쎌슦 -1�� 由ы꽩
}

function throttle(func, milliseconds) {
    var throttleCheck;
    return function () {
        var context = this, args = arguments;
        if (!throttleCheck) {
        throttleCheck = setTimeout(function() {
            func.apply(context, args);
            throttleCheck = false;
        }, milliseconds);
        }
    };
};

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};