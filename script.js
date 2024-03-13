$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["student","From cse department","youtuber","developer","selfmotivator"],
        typeSpeeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["student","From cse department","and iam","youtuber","developer","and"],
        typeSpeeed: 100,
        backSpeed: 60,
        loop: true
    });




    // carousel script
    
      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop: false, // Set to true if you want the carousel to loop
          margin: 20,
          nav: false, // Hide default navigation buttons
          responsive:{
            0:{
              items:1
            },
            600:{
              items:2
            },
            1000:{
              items:3
            }
          }
        });
    
        // Custom navigation buttons
        $(".next").click(function(){
          $(".owl-carousel").trigger("next.owl.carousel");
        });
        $(".prev").click(function(){
          $(".owl-carousel").trigger("prev.owl.carousel");
        });
      });
    
    
});
