$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:24,
        items:3,
        nav: true,
        navRewind: false,
        navText: ["<img src='img/left-svg.svg'>","<img src='img/right-svg.svg'>"], 
        responsive:{
            320:{
                items:2,
                margin: 10,
            },
            849:{
                items:3,
            },
            1200:{
                items:3,
            },
            
        }
    }
    );
    $(".open-menu").click(function(){
        $('.header-blok-mobile').animate({width:'toggle'},250,function (){
        if($('.header-blok-mobile').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })
    $(".close-svg").click(function(){
        $('.header-blok-mobile').animate({width:'toggle'},250,function (){
        if($('.header-blok-mobile').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })
    $(".header-blok-mobile ul li a").click(function(){
        $('.header-blok-mobile').hide()
        $('body').removeClass("open_body");
    })

    $('.header-blok-mobile').on('click', function(e) {
        if (e.target !== this)
            return;
        $('.header-blok-mobile').animate({width:'toggle'},250,function (){
      
        })
        
        });

    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
    $(".possibilities-link").click(function(){
        $('html, body').animate({
           scrollTop:$("#possibilities").position().top
         }, 500);
      });
      $(".token-link").click(function(){
        $('html, body').animate({
           scrollTop:$("#token").position().top
         }, 500);
      });
      $(".roadmap-link").click(function(){
        $('html, body').animate({
           scrollTop:$("#roadmap").position().top
         }, 500);
      });
      $(document).ready(function() {
        $("a.fancybox").fancybox()
      });
      

      $(".lang button").click(function(e){
        $(".lang_modal").toggle();
        $(".active").text($(this).text());
       

      });



      $(document).click((event) => {
        if (!$(event.target).closest('.lang').length) {
            $(".lang_modal").hide();
        }        
      });
  });


  