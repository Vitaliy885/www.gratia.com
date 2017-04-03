$(document).ready(function(){
  $(window).on("load", function(){
    setTimeout(function(){
     $(".preloader-wrapper").fadeOut(500);
    },1000);
  })
});


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

$(document).ready(function() {

  $("#owl-demo").owlCarousel({

    autoPlay: 5000,
      navigation : true, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

    });

});







