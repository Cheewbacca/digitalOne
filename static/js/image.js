$(document).ready(function() {
	var elems = $('.img-contain img');
	elems.each(function(){
	  var elem = $(this);
	  var width = elem.width();
	  var height = elem.height();
	  if(width < height){
		 elem.addClass('hg');
	  }else{
		 elem.addClass('center');
	  }
	})
  });