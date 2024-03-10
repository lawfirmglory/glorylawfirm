function searchSuccess(){
	var sword  = $("#sword").val();
	window.document.location.href="01success_case.html?sword=" + encodeURIComponent(sword);
}
function searchSuccessReview(){
	var sword  = $("#sword").val();
	window.document.location.href="02review.html?sword=" + encodeURIComponent(sword);
}
function searchPress(){
	var sword  = $("#sword").val();
	window.document.location.href="01press.html?sword=" + encodeURIComponent(sword);
}

$(document).ready(function(){
	
	$("input[name=ra_op]").on('click',function(){
		var val = $(this).val();
		window.document.location.href="?sc=" + val;
	});
	$("input[name=ra_bd_menu]").on('click',function(){
		var val = $(this).val();
		window.document.location.href="?sc=" + val;
	});


});

function onlineCheck(){
	var param = $("#formPwd").serialize();
	var pwd = $("#pwd").val();
	if(pwd == ""){
		alert('鍮꾨�踰덊샇瑜� �낅젰�댁＜�몄슂.');
		$("#pwd").focus();
		return;
	}



	$.ajax({
		type: "POST",
		url: "/bbs/password_check_crime.php",
		dataType:"json",
		data:param,
		success:function(data){
			var result = data.result;

			if(result == 'ok'){
				window.document.location.href="view.html?code=" + $("#online_auth_code").val();
			}else{
				alert('鍮꾨�踰덊샇媛� �쇱튂�섏� �딆뒿�덈떎.');
				return;
			}
		},
		error:function(xhr){
			alert('泥섎━以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.');
			return false;
		}
	});
}

function drawMap(flag){
	var address = "";
	var company = "";
	var mapContainer = null; 
	if(flag == '01'){
		address = "�쒖슱 �쒖큹援� 諛섑룷��濡�30湲� 82";
		company = "�쒖슱�щТ��";
		mapContainer = document.getElementById('map');
	}else	if(flag == '02'){
		address = "�몄쿇 誘몄텛��援� �뚯꽦濡� 171";
		company = "�몄쿇�щТ��";
		mapContainer = document.getElementById('map2');
	}else	if(flag == '03'){
		address = "�쒖슱 �쒖큹援� �ъ엫�밸줈8湲� 16";
		company = "�쒖큹�щТ��";
		mapContainer = document.getElementById('map3');
	}


	
	mapOption = {
			center: new kakao.maps.LatLng(33.450701, 126.570667), // 吏��꾩쓽 以묒떖醫뚰몴
			level: 3 // 吏��꾩쓽 �뺣� �덈꺼
	};  

	// 吏��꾨� �앹꽦�⑸땲��    
	var map = new kakao.maps.Map(mapContainer, mapOption); 

	// 二쇱냼-醫뚰몴 蹂��� 媛앹껜瑜� �앹꽦�⑸땲��
	var geocoder = new kakao.maps.services.Geocoder();

	// 二쇱냼濡� 醫뚰몴瑜� 寃��됲빀�덈떎
	geocoder.addressSearch(address, function(result, status) {

    // �뺤긽�곸쑝濡� 寃��됱씠 �꾨즺�먯쑝硫� 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 寃곌낵媛믪쑝濡� 諛쏆� �꾩튂瑜� 留덉빱濡� �쒖떆�⑸땲��
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // �명룷�덈룄�곕줈 �μ냼�� ���� �ㅻ챸�� �쒖떆�⑸땲��
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">' + company + '</div>'
        });
        infowindow.open(map, marker);

        // 吏��꾩쓽 以묒떖�� 寃곌낵媛믪쑝濡� 諛쏆� �꾩튂濡� �대룞�쒗궢�덈떎
        map.setCenter(coords);
    } 
	});  
	 map.relayout();
}