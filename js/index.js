/*Using Lettering.js
https://github.com/davatron5000/Lettering.js/*/
$(document).ready(function () {
  $(".stack").lettering();
});

$(window).on("load", function () {
  //Preloader
  $("#loading").fadeOut(500);

  //UIDeveloper Animation after complete page load
  $("h2.stack").addClass("animated flip flipCustomh2");
  $("h1.author").addClass("animated bounceInDown bounceCustomh1");
  $("ul.bounceCustomUl1").addClass("animated bounceInLeft");
  $("ul.bounceCustomUl2").addClass("animated bounceInRight");
  $("div.intro").addClass("animated fadeIn");
});

//Triggering animation on Scroll - Progress Bar
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  let animationName = "progress-bar";

  if (scroll >= 1000) {
    $("div[class=lefttoright]").addClass(animationName);
  } else {
    $("div[class=lefttoright]").removeClass(animationName);
  }

  //My works
  let offset = $("#portfolio").offset().top - 100;
  if ($(window).scrollTop() >= offset) {
    $("#portfolio .quick-links").show(400);
  } else {
    $("#portfolio .quick-links").hide(400);
  }
});

// smoothScroll function
function smoothScroll(new_position) {
  $("html, body").animate(
    {
      scrollTop: new_position.top,
    },
    100
  );
  return false;
}

$(document).ready(function () {
  populateWorks();
  populateWebApps();

  // Closes the sidebar menu
  $("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  // Opens the sidebar menu
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Scroll to top button
  let fixed = false;
  $(document).scroll(function () {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $("#to-top").show("slow", function () {
          $("#to-top").css({
            position: "fixed",
            display: "block",
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $("#to-top").hide("slow", function () {
          $("#to-top").css({
            display: "none",
          });
        });
      }
    }
  });

  //Smooth Scroll - homepage links
  $(".home-section-links li a, body #to-top").on("click", function (e) {
    e.preventDefault();

    let jump = $(this).attr("href");
    let new_position = $(jump).offset();
    smoothScroll(new_position);
  });

  //Smooth Scroll - sidebar links
  $("#sidebar-wrapper .sidebar-nav li a").on("click", function (e) {
    e.preventDefault();

    let jump = $(this).attr("href");
    let new_position = $(jump).offset();
    smoothScroll(new_position);

    $("#sidebar-wrapper").toggleClass("active");
  });

  //My works - slide line animation
  const navBar = document.getElementById("works-category-blks");
  const navUnderline = navBar.querySelector(".slide-line");
  const navItems = navBar.querySelectorAll("a");

  function handleMouseEnterNavItem(event) {
    // executed whencllcked on a navigation item
    // update cursor to match position and size of target
    event.preventDefault();
    const { offsetLeft, clientWidth } = event.target;
    navUnderline.style.left = offsetLeft + "px";
    navUnderline.style.width = clientWidth + "px";
  }

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", handleMouseEnterNavItem);
  });
  navBar.children[0].click();

  //My works - center links
  $("#works-category-blks a").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $(".works-category").find(target).show().siblings("div").hide();
    populateWorks();
    populateWebApps();

    $(this)
      .parent("#works-category-blks")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");

    // if (target == "#websites-wrap") {
    //   $(".quick-links").find("span[data-block='#websites-wrap']").click();
    // } else if (target == "#webapps-wrap") {
    //   $(".quick-links").find("span[data-block='#webapps-wrap']").click();
    // }
  });

  //My works - right-side links
  // $("#portfolio .quick-links span").on("click", function (e) {
  //   e.preventDefault();
  //   const target = $(this).data("block");
  //   $(".works-category").find(target).show().siblings("div").hide();
  //   let pos = $("#portfolio").offset();
  //   smoothScroll(pos);
  //   populateWorks();
  //   populateWebApps();

  //   $(this).parent(".quick-links").find(".active").removeClass("active");
  //   $(this).addClass("active");

  //   if (target == "#websites-wrap") {
  //     $("#works-category-blks").find("a[href='#websites-wrap']").click();
  //     navBar.children[0].click();
  //   } else if (target == "#webapps-wrap") {
  //     $("#works-category-blks").find("a[href='#webapps-wrap']").click();
  //     navBar.children[1].click();
  //   }
  // });

  //Works - external link
  $("body").on("click", ".block-wrap .blk-item", function () {
    let target = $(this).data("link");
    window.open(target, "_blank", "noopener,noreferrer");
  });
});
