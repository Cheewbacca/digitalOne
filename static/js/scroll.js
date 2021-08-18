function isMobile() {
	    if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
	     return false;
	    }
	    else {return true};
	}

$(document).ready(
    function (){
    	if (isMobile()){
	        $('#scroll').niceScroll({
	            cursorcolor: "#505e87",
	            cursoropacitymin: 0.5,
	            cursorwidth: "5px",
	            cursorfixedheight: 70,
	            cursorborderradius: "0px",
	            cursorborder: "initial",
	            cursorminheight: 10,
	            background: "#313644",
	            railpadding: { top: 0, right: 0, left: 0, bottom: 0 }
	            })
    	}else{
    		$('.content').css("overflow", "auto");
    	}
	}
);