
var j = jQuery.noConflict();

j(document).ready(function(){
	j('.gallery_img').bxSlider({
   // mode: 'fade',
    captions: true,
	minSlides:1,
	maxSlides:4,
    slideWidth: 510,
	auto:true,
	pager:false
  });


j('.imag_2_content').mouseover(function(){	
	j(this).find('.h').show();
	 
});

j('.imag_2_content').mouseout(function(){	
	j(this).find('.h').hide();
	 
});

j('.img_1_content').mouseover(function(){	
	j(this).find('.T').show();
	 
});

j('.img_1_content').mouseout(function(){	
	j(this).find('.T').hide();
	 
});

 j("#i_menu").click(function(){
        j("#s-menu").fadeToggle("slow");
    });
 
});

j(window).scroll(function(){
	j('.mov').each(function(){
		var imagePos = j(this).offset().top;
		var topOfWindow = j(window).scrollTop();
		if(imagePos < topOfWindow + 500){
			j(this).addClass('fadeIn');
		}
	});
});




function valiFunction(){
  var y=document.getElementById("tx").value;
   if (y.length==0){
   document.getElementById("checkMail").innerHTML="Please fill the form"; 
      return false;
   }
   at=y.indexOf("@");
   dot=y.indexOf(".");
   if (at<1 || dot <1){
      document.getElementById("checkMail").innerHTML="*invalid email";
      return false;
   }
}



j('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        j(document).off("scroll");
        j('a').each(function () {
            j(this).removeClass('active');
        })
        j(this).addClass('active');
         var target = this.hash,
         menu = target;
        jtarget = j(target);
       j('html, body').stop().animate({
            'scrollTop': jtarget.offset().top+2
        }, 600, 'swing', function () {
            window.location.hash = target;
            j(document).on("scroll", onScroll);
        });
    });

 function onScroll(event){
  var scrollPos = j(document).scrollTop();
    j('#myTopnav a').each(function () {
     var currLink = j(this);
     var refElement = j(currLink.attr("href"));
     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

      j('#myTopnav a').removeClass("active");
        currLink.addClass("active");
}
    else{
    currLink.removeClass("active");
        }
    });

}


/*function openSlideMenu(){
	document.getElementById('side-menu').style.width="200px";
}

function closeSlideMenu(){
	document.getElementById('side-menu').style.width="0";
}*/
