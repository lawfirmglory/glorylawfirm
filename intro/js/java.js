function num_only(){
    if((event.keyCode<48) || (event.keyCode>57)) {
      event.returnValue=false;
    }
  }
  
  // �대�吏� �ㅻ쾭 怨듯넻 �⑥닔
  function imgOver(oImg){
      var reg = new RegExp('_off');
      oImg.src = oImg.src.replace(reg,'_on');
  }
  // �대�吏� �꾩썐 怨듯넻 �⑥닔
  function imgOut(oImg){
      var reg = new RegExp('_on');
      oImg.src = oImg.src.replace(reg,'_off');
  } 
  
  // ��젣 寃��� �뺤씤
  function del(href){
      if(confirm("�쒕쾲 ��젣�� �먮즺�� 蹂듦뎄�� 諛⑸쾿�� �놁뒿�덈떎.\n\n�뺣쭚 ��젣�섏떆寃좎뒿�덇퉴?")) {
          document.location.href = encodeURI(href);
      }
  }
  
  //吏���꽑��
  function getLocation(ID,sido,gugun) {
      if(sido) {
          $.ajax({
              url:"/program/company/getLocation.php?SIDO="+encodeURI(sido)+"&GUGUN=" + encodeURI(gugun) + "&ID=" + ID,
              success:function(data) {
                  $("#" + ID).html(data);
              }
          });
      }
  }
  
  //�レ옄留� �낅젰
  function onlyNumber(e) {
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
          // Allow: Ctrl+A
              (e.keyCode == 65 && e.ctrlKey === true) ||
          // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  }
  
  //�명뭼諛뺤뒪 �대┃�� value媛� ��젣
  function Change (target,type){
      if ( target.value == target.defaultValue && type==0) target.value = '';
      if ( !target.value && type==1) target.value = target.defaultValue;
  }
  
  //寃뚯떆�� 移댄뀒怨좊━ �곌껐
  function category_link(val){
      location.href="?category="+encodeURI(val);
  }
  
  // �꾩씠��/鍮꾨쾲 李얘린
  function member_find(){
      window.open('/member/find.php', 'popup', 'width=450, height=300, status=no, toolbar=no, menubar=no, directories=no, location=no');
  }