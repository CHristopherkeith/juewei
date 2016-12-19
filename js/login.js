var loginObj=function(){
	this.init();
}

loginObj.prototype={

	init:function(){
		this.loginWaySwitch();
	},

	loginWaySwitch:function(){
		$(".loginway p").on("click",function(){
			$(".loginway p").toggleClass("wayselect");
			$(".wechatway,.idway").toggleClass("dspblock");
		})

		$(".pswforget").on("mouseenter",function(){
			$(".hint").toggle();
		})

		$(".pswforget").on("mouseleave",function(){
			$(".hint").toggle();
		})
	}
}