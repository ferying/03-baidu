
$(function(){

	//更多产品的最小高度为浏览器的高度
	var windowHeight = $(window).height();
	$("header nav ul li.more .more-info").css("min-height",windowHeight);

	//搜索栏下面的tab选项卡
	$(".tab-title span").click(function(){
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
		$(".tab-content>div").hide();
		$(".tab-content>div:eq("+$(this).index()+")").show();
	});

	//点击换肤按钮 显示换肤部分内容
	$("#skin-btn").click(function(){
		$(".skin-container").show();
	});

	//换肤选项卡
	$("#skin-title > span").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$("#skin-list .item").hide();
		$("#skin-list .item:eq("+$(this).index()+")").show();
	});

	//选中皮肤图片时页面的变化
	$("#skin-list .item img").click(function(){
		var imgSrc = $(this).attr("src"); //获取图片路径
		var imgStyle = {
			"background":"url("+imgSrc+") no-repeat",
			"background-size":"100% 100%",
			"background-attachment":"fixed" //背景图片固定
		}
		//修改页面背景图片
		$("body").css(imgStyle); 
		//本地存储图片路径
		//将json对象转换成字符串形式后再存储,否则获取该值时返回[object Object]
		localStorage.setItem("imgStyle",JSON.stringify(imgStyle));

		//修改header背景色及其中的字体颜色
		var headerStyle = {
			"background" : "rgba(15,25,50,.3)",
			"border" : "none"
		}
		$("header").css(headerStyle);

		//修改header中相关字体的颜色
		$("header .top-links .weather-box a.city-weather").css("color","#fff");
		$("header .top-links .other-set span").css("color","#fff");
		$("header nav ul li > a").css("color","#fff");

		//修改footer中相关字体的颜色
		$("footer,footer a").css("color","#fff");
	});

	//获取本地缓存的图片路径
	var bgImg = JSON.parse(localStorage.getItem("imgStyle")); //将之前存储的json字符串先转成json对象
	if(bgImg != null){
		//修改背景图片
		$("body").css(bgImg);
		//修改头部样式
		$("header").css({
			"background" : "rgba(15,25,50,.3)",
			"border" : "none"
		});
		$("header .top-links .weather-box a.city-weather").css("color","#fff");
		$("header .top-links .other-set span").css("color","#fff");
		$("header nav ul li > a").css("color","#fff");
		//修改页脚字体的颜色
		$("footer,footer a").css("color","#fff");
	}


	//点击不使用皮肤 恢复默认皮肤
	$("#skin-default").click(function(){
		//回复页面背景颜色为白色
		$("body").css("background","#fff"); 
		//回复header样式
		$("header").css({
			"background" : "#fff",
			"border-bottom" : "1px solid #ebebeb"
		});
		$("header .top-links .weather-box a.city-weather").css("color","#555");
		$("header .top-links .other-set span").css("color","#555");
		$("header nav ul li > a").css("color","#555");
		//回复footer中字体的颜色
		$("footer,footer a").css("color","#999");

		//删除本地存储
		localStorage.removeItem("imgStyle"); 
	});

	//收起换肤部分内容
	$("#skin-up").click(function(){
		$(".skin-container").hide();
	});



	//百度搜索框置顶
	var logoHeight = $(".baidu-logo").offset().top + $(".baidu-logo").height();
	$(window).scroll(function(){//页面滚动时执行
		var scrollHeight = $(this).scrollTop(); //获取滚动条距顶端的高度
		if(scrollHeight > logoHeight){
			$(".search-container").addClass("search-fixed"); //固定搜索框
			$(".search-container img.baidu-logo").hide(); //大的logo图片隐藏
			$(".search-container img.baidu-logo-s").css("display","inline-block"); //小的logo图片显示
			$(".search-container .search_form").css("display","inline-block");
			$(".search-container .search_form").css("margin","8px 0 0 25px");
		}
		else{
			$(".search-container").removeClass("search-fixed");
			$(".search-container img.baidu-logo").show();
			$(".search-container img.baidu-logo-s").hide();
			$(".search-container .search_form").css("display","block");
			$(".search-container .search_form").css("margin","0 auto");
		}
	});
	

	//返回顶部
	$(window).scroll(function(){//页面滚动时执行
		var scrollHeight = $(this).scrollTop(); //获取滚动条距顶端的高度
		var windowHeight = Math.floor($(window).height()/2);  //获取浏览器的高度
		if(scrollHeight > windowHeight){
			$("#gotop").css("display","block");//显示返回顶部的按钮
		}else{
			$("#gotop").hide();//隐藏返回顶部按钮
		}
	});
	$("#gotop").click(function(){
		var speed = 200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
	});



});

