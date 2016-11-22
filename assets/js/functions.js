$(document).ready(function(){
  $('.trigger-nav').click(function(){
    $('.trigger-victim').slideToggle(500);
  });
  $(window).resize(function(){
      if($(window).width() > 992){
        $('.trigger-victim').removeAttr('style');
      }
    })

  $(window).scroll(function(){
  	 var height = $(document).scrollTop();
  	 if(height > 500){
  	 	$(".btn-up").fadeIn(500);
  	 }
  	 else{
  	 	$(".btn-up").fadeOut(500);
  	 }
  });
})
$(document).ready(function(){
  $('.btn-up').mPageScroll2id();
})





    
 
