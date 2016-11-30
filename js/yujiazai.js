 $.fn.extend({
  	fnLoad: function(arr, callback) {
//		$('<div id="loading">' +
//			'<p id="load_percent">0%</p>' +
//			'<p id="load_wrap"><span id="load_time"></span></p>' +
//			'</div>').insertBefore($(".wrap"));
  		var imgs = [];
  		var index = 0;
		$("#move").css("left",17+"%")
  		for(var i = 0; i < arr.length; i++) {

  			var imgObj = new Image();

  			imgObj.src = "img/" + arr[i];

  			imgObj.onload = function() {
  				index++;
  				var percent = index/arr.length;
//				console.log(percent);
//				$("#move").css("left",0.4*percent*100 + "%")
			$("#perCent").html(parseInt(percent*100) + "%");
			$("#progress").width(percent*70 + "%");
//				$("#load_time").css("left", parseInt((index / arr.length - 1) * 100) + "%");
//				$("#load_percent").html(parseInt(percent * 100) + "%");
  				imgs.push(this);
  				if(index == arr.length) {
  					//全部加载完毕
//					$("#loading").remove();
					$(".proload").hide();
					$("#pg1pump").hide();
					$(".pg1").show();
					
  					$("label,.cityLabel,.customRadio").css({
  						"line-height": $(".fm p:first").height() + "px"
  					});
  					var _mh = $(".fm input:first").height();
  					$(".fm input").css({
  						"min-height": _mh
  					});
  					callback && callback();
  				}
  			}
  		}
  	}
  })