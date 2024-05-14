(function ($) {
    /* ---------------------------------------------- /*
       * Preloader  
      /* ---------------------------------------------- */
  
    $(window).load(function () {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
    });
  
    $(document).ready(function () {
      $("body").scrollspy({
        target: ".navbar-custom",
        offset: 50,
      });
  
      $("a[href*=#]").bind("click", function (e) {
        var anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(anchor.attr("href")).offset().top,
            },
            1000
          );
        e.preventDefault();
      });
  
      /* ---------------------------------------------- /*
           * Background image
          /* ---------------------------------------------- */
  
      //$('#intro').backstretch(['assets/images/bg4.jpg']);
  
      // $('#intro').backstretch([
      // 	'assets/images/bg1.png'
      // ], {duration: 3000, fade: 750});
  
      /* ---------------------------------------------- /*
            * Navbar 
          /* ---------------------------------------------- */
  
      var navbar = $(".navbar");
      var navHeight = navbar.height();
  
      $(window).scroll(function () {
        if ($(this).scrollTop() >= navHeight) {
          navbar.addClass("navbar-color");
        } else {
          navbar.removeClass("navbar-color");
        }
      });
  
      if ($(window).width() <= 767) {
        navbar.addClass("custom-collapse");
      }
  
      $(window).resize(function () {
        if ($(this).width() <= 767) {
          navbar.addClass("custom-collapse");
        } else {
          navbar.removeClass("custom-collapse");
        }
      });
  
      /* ---------------------------------------------- /*
           * Count to
          /* ---------------------------------------------- */
  
      $("#stats").waypoint(
        function () {
          $(".timer").each(function () {
            (counter = $(this).attr("data-count")),
              $(this).delay(6000).countTo({
                from: 0,
                to: counter,
                speed: 3000, // Stats Counter Speed
                refreshInterval: 50,
              });
          });
        },
        { offset: "70%", triggerOnce: true }
      );
  
      /* ---------------------------------------------- /*
           * WOW Animation When You Scroll
          /* ---------------------------------------------- */
  
      wow = new WOW({
        mobile: true,
      });
      wow.init();
  
      /* ---------------------------------------------- /*
           * Owl slider 
          /* ---------------------------------------------- */
  
      $("#owl-clients").owlCarousel({
        items: 4,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000,
      });
  
      /* ---------------------------------------------- /*
           * Rotate
          /* ---------------------------------------------- */
  
      $(".rotate").textrotator({
        animation: "dissolve",
        separator: "|",
        speed: 3000,
      });
  
      /* ---------------------------------------------- /*
           * Portfolio pop up
          /* ---------------------------------------------- */
  
      $("#portfolio").magnificPopup({
        delegate: "a.pop-up",
        type: "image",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1],
        },
        image: {
          tError: "The image could not be loaded.",
          titleSrc: function (item) {
            return item.el.find(".ptitle").text();
          },
        },
      });

      $("#downloadBtn").click(function(e) {
        e.preventDefault();
        var url = 'https://drive.google.com/uc?export=download&id=1CE63TNC9V2bScUd1a5PjHvaErQa7mZo2';
        var filename = 'ranjith-cv.pdf';
        var atag = document.createElement('a');
        atag.href = url;
        atag.download = filename;
        atag.click();
        atag.remove()
      });
    });
  
  })(jQuery);