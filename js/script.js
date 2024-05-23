    // counter on scroll
    var counted = 0;
$(window).scroll(function() {

  var oTop = $('.ecommerce-sales-icon').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.ecommerece-sales-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
});


    // fixed header

    $(window).scroll(function () {
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();

      if (scroll >= 150) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
  });


      // start top to bottom section

      $(function(){

        //Scroll event
        $(window).scroll(function(){
          var scrolled = $(window).scrollTop();
          if (scrolled > 200) $('.go-top').fadeIn('slow');
          if (scrolled < 200) $('.go-top').fadeOut('slow');
        });
        
        //Click event
        $('.go-top').click(function () {
          $("html, body").animate({ scrollTop: "0" },  500);
        });


        
      });
      
      // start accordian section

      $(document).ready(function(){
        $('.accordion-list > li > .answer').hide();
          
        $('.accordion-list > li').click(function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
          } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
          }
          return false;
        });

        // loader

        $(document).ready(function(){
          setTimeout(function(){
              $('.pre-loader').fadeOut();
          },2000);
      })
        
      });