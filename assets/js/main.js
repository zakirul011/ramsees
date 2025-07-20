(function ($) {
  "use strict";

  /*=========================
	PRELOADER JS
	===========================*/
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  /*=========================
	magnificPopup image JS
	===========================*/
  $(".video-btn").magnificPopup({
    type: "iframe",
  });

  $(".pop-img-btn").magnificPopup({
    type: "image",
  });
  $(".hero-nav a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  $(".gallery-item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  $(".single-shop-tab a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  $(".single-blog-gallery").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*=========================
	HERO SLIDER JS
	===========================*/
  function heroSlider() {
    var BasicSlider = $(".hero-slider");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".hero-slide:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.hero-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      fade: true,
      arrows: false,
      asNavFor: ".hero-navs",
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  heroSlider();

  /*=========================
	hero-navs
	===========================*/
  $(".hero-navs").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
    asNavFor: ".hero-slider",
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
  });

  /*=========================
	news-slide
	===========================*/
  $(".news-slider").on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".news-area .slider-counter").html(
        "<span>" + i + "</span>" + "/" + slick.slideCount
      );
    }
  );
  $(".news-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: ".news-area .slider-nav",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=========================
	product-slide
	===========================*/
  $(".product-slider").on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".product-area .slider-counter").html(
        "<span>" + i + "</span>" + "/" + slick.slideCount
      );
    }
  );
  $(".product-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: ".product-area .slider-nav",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".brand-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    appendArrows: ".brand-area .slider-nav",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  /*=========================
	about-bx-slider
	===========================*/
  $(".about-bx-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  /*=========================
	testimony-slider
	===========================*/
  $(".single-testimony-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  // testimony-slider
  $(".double-testimony-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  // GALLERY PAGE 
   	// init Isotope
	$('.gallery-page-content').imagesLoaded( function() {
		var $grid = $('.gallery-page-content').isotope({
         itemSelector: ".gallery-item",
         masonry: {            
            columnWidth: ".gallery-item",
          }
		});
		// filter items on button click
		$('.gallery-page-link').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
			$(this).addClass('active').siblings().removeClass('active');
		});

		const galleryFilter = document.querySelectorAll('.gallery-page-link, .gallery-page-overlay, .gallery-filter-btn')
		galleryFilter.forEach(btn => {
			btn.addEventListener('click', ()=>{
				for (let i = 0; i < galleryFilter.length; i++) {
					galleryFilter[i].classList.toggle('active')
				}
			})
		});
	 });

  // sticky
  var wind = $(window);
  var sticky = $(".header-area");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 150) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // contact map
  const map = document.querySelectorAll(".contact-area .map");
  map.forEach((element) => {
    let elementWidth =
      element.getBoundingClientRect().width +
      window.innerWidth -
      element.closest(".container").getBoundingClientRect().width;

    element.style.width = elementWidth + "px";
  });

  // search-popup
  const searchPop = document.querySelectorAll('.search-popup')

  searchPop.forEach(pop => {
    let triggerIcon = document.querySelectorAll('.search-pop-close, .search-pop-open')
    triggerIcon.forEach(icon => {
        icon.addEventListener('click', (e)=>{
          e.preventDefault();
          pop.classList.toggle('active')
        })
    });
  });

  //FAQ ACCORDION
  const faqWrap = document.querySelectorAll(".faq-box-wrap");
  faqWrap.forEach((wrap) => {
    let faqBox = wrap.querySelectorAll(".faq-box");
    faqBox.forEach((bx) => {
      let title = bx.querySelector(".faq-box-title");
      let body = bx.querySelector(".faq-box-body");
      if (bx.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
      }
      title.addEventListener("click", () => {
        if (bx.classList.contains("active")) {
          bx.classList.remove("active");
          body.style.maxHeight = null;
        } else {
          for (let i = 0; i < faqBox.length; i++) {
            faqBox[i].classList.remove("active");
            faqBox[i].querySelector(".faq-box-body").style.maxHeight = null;
          }
          bx.classList.add("active");
          body.style.maxHeight = body.scrollHeight + "px";
        }
      });
    });
  });

  // responsive menu
  const resBar = document.querySelectorAll(
    ".humberger-bar, .resonsive-slide-overlay"
  );
  resBar.forEach((btn) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < resBar.length; i++) {
        resBar[i].classList.toggle("active");
      }
      document.querySelector(".resonsive-slide").classList.toggle("active");
    });
  });

  // if has child
  const listItem = document.querySelectorAll(".responsive-menu ul li");
  listItem.forEach((item) => {
    if (item.contains(item.querySelector("ul"))) {
      item.classList.add("has-child");
      item.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  });

  // responsive menu clicking event
  const responsiveMenuLink = document.querySelectorAll(
    ".responsive-menu ul li.has-child"
  );
  responsiveMenuLink.forEach((link) => {
    link.addEventListener("click", () => {
      let submenu = document.querySelector(".submenu");
      link.classList.toggle("active");
      submenu.classList.toggle("active");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + 10 + "px";
      }
    });
  });
  

  // qty
  const qty = document.querySelectorAll(".qty");
  qty.forEach((wrap) => {
    let input = wrap.querySelector("input");
    let stepUp = wrap.querySelector(".spin-up");
    let stepDown = wrap.querySelector(".spin-down");
    stepUp.addEventListener("click", () => {
      input.stepUp();
    });
    stepDown.addEventListener("click", () => {
      input.stepDown();
    });
  });

  // niceSelect
  $("select").niceSelect();

  // counterUp
  const counters = document.querySelectorAll(".counter");
  const speed = 200;
  counters.forEach((counter) => {
    let h = 0;
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    window.addEventListener("scroll", () => {
      let counterTop = counter.getBoundingClientRect().top;
      if (counterTop <= window.innerHeight && h == 0) {
        updateCount();
        h = 1;
      }
    });
  });

  // custom tab
  tabFunc(
    document.querySelectorAll(".single-shop-link"),
    document.querySelectorAll(".single-shop-tab")
  );
  tabFunc(
    document.querySelectorAll(".single-shop-detail-link li"),
    document.querySelectorAll(".single-shop-detail-tab")
  );
  tabFunc(
    document.querySelectorAll(".account-link li"),
    document.querySelectorAll(".account-tab")
  );

  function tabFunc(tabLinks, tabs) {
    tabLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        for (let i = 0; i < tabLinks.length; i++) {
          tabLinks[i].classList.remove("active");
          tabs[i].classList.remove("active");
        }
        link.classList.add("active");
        tabs[index].classList.add("active");
      });
    });
  }

  
   // change the view mode in shop page
   const shopViewModebtns = document.querySelectorAll(".shop-view-mode li");
   shopViewModebtns.forEach((btn) => {
      let productWrap = document.querySelector(".product-item-wrap");
      btn.addEventListener("click", () => {
         productWrap.classList.remove("list-mode");
         if (btn.classList.contains("list-mode-btn")) {
            productWrap.classList.add("list-mode");
         }
      });
   });
   
   const shopFIlterShower = document.querySelectorAll(
    ".shop-filter-close, .shop-filter-open, .shop-filter-overlay"
 );
 shopFIlterShower.forEach((btn) => {
    btn.addEventListener("click", () => {
       let shopFilterWrap = document.querySelector(".shop-page-area");
       shopFilterWrap.classList.toggle("offset-active");
    });
 });

     // selectable star action
	 const selectableStarts = document.querySelectorAll('.selectable-star li')
	 selectableStarts.forEach((star, index) => {
		star.addEventListener('click', ()=>{
		   for (let i = 0; i < star.parentElement.children.length; i++) {
			 star.parentElement.children[i].classList.remove('ratted')
		   }
		   for (let i = 0; i <= index; i++) {
			 star.parentElement.children[i].classList.add('ratted')
		   }
		   document.getElementsByName('ratted-value')[0].value = index + 1
		})
	 });

	// select sibling child
	const selectableList = document.querySelectorAll(
		".shop-filter-category ul li, .shop-filter-list li, .shop-sort li, .shop-view-mode li"
		);
		selectableList.forEach((list) => {
		list.addEventListener("click", () => {
			let sibling = list.parentElement.children;
	
			if (list.classList.contains('active')) {
				for (let i = 0; i < sibling.length; i++) {
					sibling[i].classList.remove("active");
				}
			}else{
				for (let i = 0; i < sibling.length; i++) {
					sibling[i].classList.remove("active");
				}
				list.classList.add("active");
			}
		});
		});
	  

  /*=========================
	SCROLL-UP JS
	===========================*/
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // skrollr activation
  var s = skrollr.init({
    forceHeight: false,
  });
  if (s.isMobile()) {
    s.destroy();
  }

  

  // add padding to body as header
  window.addEventListener("resize", () => {
	getResizedFunc()
  });
  window.addEventListener("load", () => {
	getResizedFunc()
  });
  
  function getResizedFunc() {
	if (document.querySelector(".header-area")) {
	  const getPaddingOfHeader = document.body;
	  const headerHeight = document
		.querySelector(".header-area")
		.getBoundingClientRect().height;

	  getPaddingOfHeader.style.paddingTop = headerHeight + "px";
	}

  }
  
  
   // show or hide input password text
   const passwordBx = document.querySelectorAll(".password-bx");

   passwordBx.forEach((bx) => {
      let input = bx.querySelector("input");
      let icon = bx.querySelector("i");

      icon.addEventListener("click", () => {
         if (input.type == "password") {
            input.type = "text";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
         } else {
            input.type = "password";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
         }
      });
   });

   const ccInput = document.querySelectorAll('.cc-input')
   ccInput.forEach(input => {
     input.addEventListener('input', ()=>{
      input.value = cc_format(input.value)
     })
   });

   function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (let i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  // checkout ship address slide
  const checkoutShip = document.querySelectorAll('.ship-checkout')
  checkoutShip.forEach(ship => {
    let title = document.querySelector('.ship-checkout-title')
    let slide = document.querySelector('.ship-checkout-slide')
    title.addEventListener('click', ()=>{
      if (slide.style.maxHeight) {
        slide.style.maxHeight = null;        
        ship.classList.remove('active')
      }else{        
        slide.style.maxHeight = slide.scrollHeight + 'px';
        ship.classList.add('active')
      }
    })
  });
  

	//    applyLergestheight
	applyLergestheight(document.querySelectorAll(".testimony-slide"));

	function applyLergestheight(items) {
	  const itemheight = [];
	  items.forEach((item) => {
		itemheight.push(item.getBoundingClientRect().height);
	  });
	  items.forEach((item) => {
		item.style.height = Math.max.apply(null, itemheight) + "px";
	  });
	}

  // One Page Nav
  var top_offset = $(".header-area").height() - 50;
  $(".mainmenu ul, .responsive-menu ul").onePageNav({
    scrollOffset: top_offset,
  });
})(jQuery);
