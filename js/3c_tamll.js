document.addEventListener('touchstart',function(e){
	e.preventDefault();
})


window.onload=function(){	

(function(){   //解决a标签转跳
	var a=document.querySelectorAll('a');  
	for(var i=0;i<a.length;i++){
		a[i].addEventListener('touchmove',function(){
			this.isMove=true;
		})
		a[i].addEventListener('touchend',function(){
			if(!this.isMove){
				window.location.href=this.href;
			}
			this.isMove=false;
		})
	}
})();

(function(){  //搜索条
	var search=document.querySelector(".search");
	var searchs=document.querySelector(".searchs");
	var returnS=document.querySelector(".returnS");
	search.addEventListener('touchstart',function(){
		searchs.style.display='block';
	})
	returnS.addEventListener('touchstart',function(){
		searchs.style.display='none';
	})
})();
			
(function(){   //收藏夹
	var point=document.querySelector(".point"),
	    byc=document.querySelector(".maorbycar"),
	    onOff=true;
	point.addEventListener('touchstart',function(e){
		e.stopPropagation();
		if(onOff){
			byc.style.display="block";
			onOff=false;
			onD=true;
		}else{
			byc.style.display="none";
			onOff=true;
			onD=false
		}		
	})
	    byc.addEventListener("touchstart",function(e){
			e.stopPropagation();
		})
		document.addEventListener("touchstart",function(e){
			byc.style.display="none";
			onOff=true;
			e.stopPropagation();
		})
})();

(function(){   //城市选择
	var ad=document.querySelector(".address"),
	    city=document.querySelector(".city"),
	    returnM=document.querySelector(".returnM"),
	    two=document.querySelector(".nowcity_two"),
	    cityContent=document.querySelector(".cityContent"),
	    lis=cityContent.querySelectorAll('li'),
	    left=city.offsetWidth;
	    
	cssTransform(city,'translateX',left);
    ad.addEventListener('touchstart',function(){
    	city.style.transition='0.5s cubic-bezier(.34,.92,.58,.9)';
    	cssTransform(city,'translateX',0);
    	
    })
    for(var i=0;i<lis.length;i++){
    	lis[i].addEventListener('touchstart',function(){
    		var left=city.offsetWidth;
    		ad.innerHTML=this.innerHTML;
    		city.style.transition='0.5s';
    	    cssTransform(city,'translateX',left);
    	})
    }
    returnM.addEventListener('touchstart',function(){ 	
    	var left=city.offsetWidth;
    	city.style.transition='0.5s';
    	cssTransform(city,'translateX',left);
    })
})();

(function(){   //轮播
	var swiper = new Swiper('.myswiper1', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop : true,
        autoplay : 2000,
        touchAngle:30,    //角度
        autoplayDisableOnInteraction:false  //解决轮播滑动后不能自动播放
    });
})();

(function(){     //倒计时
	lastTime();
  	setInterval(function(){
		lastTime();
	},1000)

   function lastTime(){
   	   var iDay=document.querySelector('.iDay'),
   	       iHours=document.querySelector('.iHours'),
   	       iMin=document.querySelector('.iMin'),
   	       iSed=document.querySelector('.iSed'),
   	       iNow=new Date(),
   	       iNew=new Date('July 1,2017 10:0:3'),
   	       t = Math.floor((iNew - iNow)/1000);
   	   
   	   iDay.innerHTML=Math.floor(t/86400);
   	   iHours.innerHTML=Math.floor(t%86400/3600);
   	   iMin.innerHTML=Math.floor(t%86400%3600/60);
   	   
   	   if(10>t%60){
   	   	iSed.innerHTML='0'+t%60;
   	   }else{
   	   	iSed.innerHTML=t%60;
   	   }   	   
   }
})();

(function(){  //IScroll实时Y值
	var tabNavs=document.querySelector('.tabNavs'),
	    scroller=document.querySelector('#scroller'),
	    wrapper=document.querySelector('#wrapper'),
	    navLFs=document.querySelector('.navLFs'),
	    onoff=false;
	    
	var myScroll = new IScroll('#wrapper', {
		scrollX:false, 
		scrollbars:'custom',
		fadeScrollbars: true,
		probeType:3,
			
	});

	myScroll.on('scroll', function() {
		var Y=this.y/wrapper.offsetWidth;
		hY(Y)
	});
		
	function hY(obj){
	 if(obj<=-1.941&&obj>=-4.22){
     	tabNavs.style.display='block'
     }else{
     	tabNavs.style.display='none'
     }
     if(obj<=-5.7){
     	navLFs.style.display='block';
     	navLFs.style.zIndex=100;
     	navLFs.style.opacity=1;
     }else{
     	navLFs.style.display='none';
     }
	}	
})();

(function(){	//吸顶导航1
	    var tabNav=document.querySelector('.tabNav'),
	        oA=tabNav.querySelectorAll('a'),
	        tabNavs=document.querySelector('.tabNavs'),
	        oA1=tabNavs.querySelectorAll('a'),
	        wrapper=document.querySelector('.my-wrapper2'),
	        slide=document.querySelector('.my-slide2');
	        
	    var swiper = new Swiper('.myswiper2',{
	    	touchAngle:20,
	    	touchMoveStopPropagation : false,
	    	onSlideChangeStart: function(swiper) {
	    		var num=swiper.activeIndex;
	    		TabC(num,oA,oA1);
	    	}
	    })
	        	       
	    for(var i=0;i<oA.length;i++){
    		oA[i].index = i;
    		oA[i].addEventListener('touchend',function(){
    		  swiper.slideTo(this.index)		    			
    		})	    		
	    }
	    	
	    for(var i=0;i<oA1.length;i++){
    		oA1[i].index = i;
    		oA1[i].addEventListener('touchend',function(){
    		  TabC(this.index,oA,oA1);
    		  swiper.slideTo(this.index)		    			
    		})	    		
	    }	    		        	    
 
})();


(function(){	//吸顶导航2
	 var navLF=document.querySelector('.navLF'),
	        navL=document.querySelector('.navL'),
	        oA=navLF.querySelectorAll('a'),
	        navLFs=document.querySelector('.navLFs'),
	        navLs=document.querySelector('.navLs'),
	        oA1=navLFs.querySelectorAll('a'),
	        wrapper=document.querySelector('.my-wrapper3'),
	        slide=document.querySelector('.my-slide3'),
	        oA_Width=oA[oA.length-1].offsetWidth+oA[oA.length-2].offsetWidth,
	        onoff;
	        	        
	  var myScroll = new IScroll(navLF, {
			scrollX: true,		
	        bounce:false
	    });
	    
	  var myScrolls = new IScroll(navLFs, {
			scrollX: true,		
	        bounce:false
	    });
	    
    myScroll.on('beforeScrollStart',function(){
      onoff=1;
	})
    myScroll.on('scroll',function(){
       onoff++;
	})
    
    myScrolls.on('beforeScrollStart',function(){
      onoff=1;
	})
    myScrolls.on('scroll',function(){
       onoff++;
	})
	    
    var swiper = new Swiper('.myswiper3',{
    	touchAngle:20,
    	onSlideChangeStart: function(swiper) {
    		var num=swiper.activeIndex;
    		if(num==5){
    		  navL.style.transition='500ms';
    		  cssTransform(navL,'translateX',-oA_Width);
    		  navLs.style.transition='500ms';
    		  cssTransform(navLs,'translateX',-oA_Width);
    		}
    		if(num==4){
    		  cssTransform(navL,'translateX',0);
    		  cssTransform(navLs,'translateX',0);
    		}
            TabC(num,oA,oA1); 
    	}
    })
	    	    
	for(var i=0;i<oA.length;i++){
		oA[i].index = i;
		oA[i].addEventListener('touchend',function(){
		  if(onoff==1){
			swiper.slideTo(this.index);
            TabC(this.index,oA,oA1);                           
          }
		})	    		
   } 
   
    for(var i=0;i<oA1.length;i++){
		oA1[i].index = i;
		oA1[i].addEventListener('touchend',function(){
		  if(onoff==1){
			swiper.slideTo(this.index);
            TabC(this.index,oA,oA1);                            
          }
		})	    		
    }
	    	    	    
     oA[4].addEventListener('touchend',function(){
     	      if(onoff==1){
     	      	myScroll.scrollTo(-oA_Width);
     	      	navLs.style.transition='500ms';
     	      	cssTransform(navLs,'translateX',-oA_Width);
     	      }                	
      })
     
     oA1[4].addEventListener('touchend',function(){
     	      if(onoff==1){
     	      	myScrolls.scrollTo(-oA_Width);
     	      	navL.style.transition='500ms';
     	      	cssTransform(navL,'translateX',-oA_Width);
     	      }                	
      })
	     
     for(var i=1;i<4;i++){
     	oA[i].addEventListener('touchend',function(){
     		  if(onoff==1){
     	      	myScroll.scrollTo(0);
     	      	navLs.style.transition='500ms';
     	      	cssTransform(navLs,'translateX',0);
     	      }
     	})
     }
     
     for(var i=1;i<4;i++){
     	oA1[i].addEventListener('touchend',function(){
     		  if(onoff==1){
     	      	myScrolls.scrollTo(0);
     	      	navL.style.transition='500ms';
     	      	cssTransform(navL,'translateX',0);
     	      }
     	})
     }

})();

function TabC(obj,oA,oA1){
    for(var i=0;i<oA.length;i++){
		  oA[i].style.color='#b9b9b9';
		  oA[i].className='';
       }
	   for(var j=0;j<oA1.length;j++){
		  	oA1[j].style.color='#b9b9b9';
		    oA1[j].className='';
	   }
	   oA[obj].style.color='#f20032';
       oA[obj].className='tabClassN';
       oA1[obj].style.color='#f20032';
       oA1[obj].className='tabClassN';
}


(function(){
	var nav=document.querySelector('.left_nav'),
	    more=document.querySelector('.more'),
	    contentAll=document.querySelector('.left_nav_content'),
	    returnLeft=document.querySelector('.left_nav_return'),
	    c_left=document.querySelector('.l_n_c_left'),
	    aLi=c_left.querySelectorAll('li'),
	    left=0,
	    onoff=0;
	    
	    aLi[0].style.background='#fff';
	    aLi[0].style.borderRight='#fff';
	    
	    more.addEventListener('touchstart',function(){
			nav.style.display='block';
			left=contentAll.offsetWidth;
			contentAll.style.transition='0.5s';
			cssTransform(contentAll,'translateX',left);
			
			myScroll = new IScroll(c_left, {
				scrollX:false, 
				scrollbars:true,
				fadeScrollbars: true,
			});
		
			 myScroll.on('scroll',function(){
			  	  	  onoff++;
			  })
			 myScroll.on('scrollEnd',function(){
			  	  	  onoff=0;
			  	  	  tab();
			  })
		})
	
	    returnLeft.addEventListener('touchstart',function(){
			contentAll.style.transition='0.5s';
			cssTransform(contentAll,'translateX',-left);
			setTimeout(function(){
				nav.style.display='none';
			},500)		
})
	
tab(); 
function tab(){
 	for(var i=0;i<aLi.length;i++){   		
	  	aLi[i].addEventListener('touchend',function(){
	  		if(onoff<1){
	  		 for(var i=0;i<aLi.length;i++){
	  		     aLi[i].style.background='#eee';
	  		     aLi[i].style.borderRight='#e3e3e3';
	  		 }
	  		this.style.background='#fff';
	  		this.style.borderRight='#fff';
	  	  }
	  	})
    }
 }
	
})();



 
   
}

























