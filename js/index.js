var scrollImgSrc=[	
		"images/certificate5.jpg",	
		"images/certificate6.jpg",
		"images/certificate7.jpg",
		"images/certificate8.jpg",
		"images/certificate9.jpg",
		"images/certificate1.jpg",
		"images/certificate2.jpg",
		"images/certificate3.jpg",
		"images/certificate4.jpg",		
	];

var that;

var indexObj=function(){
	
	this.init();
}

indexObj.prototype={

	init:function(){
		var left="",margin="";
		var orgSiteWidth="",orgMarginLeft="",orgWrapWidth="";

		that=this;
		orgSiteWidth=$(".sitebottom").css("width");
		orgMarginLeft=$(".sitebottom").css("margin-left");
		if(orgMarginLeft==="auto"){
			orgMarginLeft=$(".bottomtitle").offset().left.toString()+"px";
			$(".sitebottom").css("margin-left",orgMarginLeft);
		}
		orgWrapWidth=$(".sitebottomwarp").css("width");

		this.serviceSelect();
		this.certificateScroll();
		this.bottomCollapse(orgSiteWidth,orgMarginLeft,orgWrapWidth);
		this.mapAction();
		this.langSelect();
		this.caseSwitch();
		this.positionSelect();
	},

	serviceSelect:function(){
		var clickIndex=0,selectIndex=0,moveDis="";

		moveDis=(parseInt($(".contentwidth").css("width").match(/\d+/g))/5).toString()+"px";
		$("div[class^='sv']").on("click",function(){
			
			clickIndex=$(this).index();
			selectIndex=$("div[class$='select']").index();
			$("div[class$='select']").removeClass("select");
			$(this).addClass("select");
			$(this).prev().addClass("dspblock");
			if(clickIndex<selectIndex){
				$(".service div").slice(clickIndex+1,selectIndex+1).animate({left:"+="+moveDis},function(){
					$(".service div").eq(selectIndex-1).removeClass("dspblock");
				})	
			}
			else{
				$(".service div").slice(selectIndex+1,clickIndex+1).animate({left:"-="+moveDis},function(){
					$(".service div").eq(selectIndex-1).removeClass("dspblock");
				})
			}
			
		})
	},

	certificateScroll:function(){
		var src="",moveDis=""

		moveDis=(parseInt($(".contentwidth").css("width").match(/\d+/g))/4).toString()+"px";
		src=scrollImgSrc.shift();
			scrollImgSrc.push(src);
		$(".certificateshow").append($(".certificateshow div").first().clone());
		$(".certificateshow img").last().attr("src",src)

		
		$(".certificateshow").animate({left:"-="+moveDis},5000,"linear",function(){
			$(".certificateshow div").first().remove();
			$(".certificateshow").css("left","0px");
			//that.certificateScroll();
			setTimeout(that.certificateScroll,2000);
		});
	},

	bottomCollapse:function(orgSiteWidth,orgMarginLeft,orgWrapWidth){
		$(".arrow").on("click",function(){
			
			if($(".sitebottom").css("width")!=="22px"){
				$(".sitebottom").animate({width:"22px",marginLeft:"0px"},2000);
				$(".sitebottomwarp").animate({width:"22px"},2000)
			}
			else{
				$(".sitebottom").animate({width:orgSiteWidth,marginLeft:orgMarginLeft},2000);
				$(".sitebottomwarp").animate({width:orgWrapWidth},2000)
			}
			
		})
	},

	mapAction:function(){

		$(".mapnav").on("click",function(){
			$(".mapwrap").addClass("dspblock");
			$(".map img").animate({width:"756px",height:"416px"},1000,function(){
				$(".mapclose").addClass("dspblock");
			})
		})

		$(".mapshader,.mapclose").on("click",function(){
			$(".mapclose").removeClass("dspblock");
			$(".map img").animate({width:"0px",height:"0px"},300,function(){
				$(".mapwrap").removeClass("dspblock");
			})
		})

	},

	caseSwitch:function(){
		var nowSelect="";

		$("span[class^='sw']").on("click",function(){
			if($(this)[0]!==$(".swselect")[0]){
				$(".swselect").removeClass("swselect");
				nowSelect=$(this).attr("class")+"show";
				$(this).addClass("swselect");			
				$(".case .preselect").fadeOut(1000,function(){
					$("."+nowSelect).fadeIn(1000);
					$(this).removeClass("preselect");
					$("."+nowSelect).attr("class","preselect "+nowSelect);
				});
			}
		})

		$("b[class^='cp']").on("click",function(){
			if($(this)[0]!==$(".cpselect")[0]){
				$(".cpselect").removeClass("cpselect");
				nowSelect=$(this).attr("class")+"show";
				$(this).addClass("cpselect");
				$(".cpcase .preselect").fadeOut();
				$("."+nowSelect).fadeIn();
				$(this).removeClass("preselect");
				$("."+nowSelect).attr("class","preselect "+nowSelect);
			}
		})

		$(".industry p").on("click",function(){
			$(".industry .csselect").removeClass("csselect");
			$(this).addClass("csselect");
		})

		$(".area p").on("click",function(){
			$(".area .csselect").removeClass("csselect");
			$(this).addClass("csselect");
		})
	},

	langSelect:function(){
		$(".language").on("click",function(){
			$(".language").toggleClass("topahover");
			$(".langselect").fadeToggle(500);
		})
	},

	positionSelect:function(){
		$(".position input").on("click",function(){
			$(".psselect").removeClass("psselect");
			$(this).prev().addClass("psselect");
		})
	}

}