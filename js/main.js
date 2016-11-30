
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		loopAdditionalSlides: 1,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		scrollbar: '.swiper-scrollbar',
	})
	var arr = ['pro.png','2.png','bei.png', 'guang.png', 'lunboimg1.png', 'lunboimg2.png', 'lunboimg3.png', 'lunboimg4.png', 'mask.png', 'message.png', 'pg1.png', 'pg1arrow.png', 'pg1qute.png', 'pg2.png', 'pg2btn.png','pg2mesbtn.png', 'quit.png', 'shang.png', 'true.png'];
	$(document).fnLoad(arr);
//	$("#pg1pump").hide();	
	 var bgsound = document.getElementById("bgsound");	 
			$('html').one('touchstart',function(){
			    bgsound.play();
			});
	$("#music").on("click",function(){
		if($(this).attr("src")=="img/musicclose.png"){
			$(this).attr("src","img/music.png");
			bgsound.play();
		}else{
			$(this).attr("src","img/musicclose.png");
			bgsound.pause();
		}		
	})
	$("#message").on("click", function() {
		$("#mask4").show();
		$("#pg1pump").show();	
		$("#pg1pump").css("visibility","visible")
	});
	$(".pg1qute").on("click", function() {
		$("#pg1pump").hide();
		$("#mask4").hide();
		$(".pg1").show();
	})
	$("#mask").on("click",function(){
		$(this).hide();
		$("#pump2").hide();
	})
	$("#pg2mesbtn").on("click", function() {
		$("#mask3").show();
		$("#pump").show("slow");
	});
	$("#quit").on("click", function() {
		$("#pump").hide();
		$("#mask3").hide();
	})
	$("#pg2btn").on("click", function() {
		$("#mask").show();
		$("#pump2").show("slow");
	});
	$("#suB").on("click", function() {
		$("#mask").hide();
		$("#mask2").show();
		$("#pump2").hide("quick");
		$("#pump3").show("slow");
	});
	$("#return").on("click", function() {
		$("#pump3").hide("quick");
		$("#mask2").hide("quick");
		$(".pg2").show();
	});