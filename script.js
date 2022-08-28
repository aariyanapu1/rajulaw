$(document).ready(function () {
  //* Mobile navigation
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-xmark");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-xmark");
    }
  });

  // * For counter animation

  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });

  //  * For the sticky navigation
  $(".js--section-about-us").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    },
  );

      
    /* Navigation scroll */
    // $(function() {
    //     $('a[href*=#]:not([href=#])').click(function() {
    //       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //         if (target.length) {
    //           $('html,body').animate({
    //             scrollTop: target.offset().top
    //           }, 1000);
    //           return false;
    //         }
    //       }
    //     });
    //   });
});
