﻿function isAlphaNum(b){var c=String.fromCharCode(b.charCode?b.charCode:b.which);if(!/^[a-zA-Z0-9\s]+$/.test(c))return b.preventDefault(),!1}
jQuery(window).load(function(){function b(){var c=document.body.clientWidth,b=$(".owl-demo-grid");767<c?"undefined"!=typeof b.data("owlCarousel")&&(b.data("owlCarousel").destroy(),b.removeClass("owl-carousel")):768>c&&b.owlCarousel({items:2,itemsDesktop:[1199,1],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[600,1]})}$(document).ready(b);$(window).resize(b);jQuery(".parallax").length&&jQuery(".parallax").each(function(){jQuery(this).parallax("30%",.1)});jQuery(".page-loader").remove()});
jQuery(document).ready(function(){$(".box_collection_mobile ul li a").click(function(){$(".box_collection_mobile ul li").toggleClass("show")});jQuery(".tz-award-slider").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!0,autoHeight:!0,navigation:!1,paginationNumbers:!0,itemsScaleUp:!1});jQuery("#author-slider .slider-items").owlCarousel({items:1,
itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!0,autoHeight:!0,navigation:!1,paginationNumbers:!0,itemsScaleUp:!1});jQuery(".tz-simple-product").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,
rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".simple_prev").click(function(){jQuery(".tz-simple-product").trigger("owl.prev")});jQuery(".simple_next").click(function(){jQuery(".tz-simple-product").trigger("owl.next")});jQuery(".partner-slider").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,
navigation:!0,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],paginationNumbers:!1,itemsScaleUp:!1});jQuery("#best-seller-slider .slider-items").owlCarousel({items:2,itemsDesktop:[1024,2],itemsDesktopSmall:[991,3],itemsTablet:[767,2],itemsMobile:[480,1],navigation:!0,navigationText:['<a class="flex-prev"></a>','<a class="flex-next"></a>'],slideSpeed:500,autoHeight:!0,pagination:!1});$("#featured-slider .slider-items").owlCarousel({items:3,itemsDesktop:[1024,
3],itemsDesktopSmall:[900,2],itemsTablet:[480,1],itemsMobile:[414,1],navigation:!0,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],slideSpeed:500,autoHeight:!0,pagination:!1});$("#featured-slider-2 .slider-items").owlCarousel({items:4,itemsDesktop:[1024,4],itemsDesktopSmall:[992,3],itemsTablet:[768,2],itemsMobile:[414,1],navigation:!0,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],slideSpeed:500,autoHeight:!0,pagination:!1});
$("#featured-slider-3 .slider-items").owlCarousel({items:1,itemsDesktop:[1024,1],itemsDesktopSmall:[992,1],itemsTablet:[768,1],itemsMobile:[414,1],navigation:!0,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],slideSpeed:500,autoHeight:!0,pagination:!1});setTimeout(function(){-1<window.location.href.indexOf("?contact_posted=true")&&alert("G\u1eedi email th\u00e0nh c\u00f4ng")},1E3);jQuery(".tz-team-slider").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,
2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".tz-quote").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".tz-say-slider").owlCarousel({items:3,
itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".say_prev").click(function(){jQuery(".tz-say-slider").trigger("owl.prev")});jQuery(".say_next").click(function(){jQuery(".tz-say-slider").trigger("owl.next")});$(".__MB_NEWS_TAB3 li a").click(function(){var a=$(this).attr("id");$(".__MB_CONTAINER_READ3").hide();
$(".__MB_NEWS_TAB3 li a,.__MB_NEWS_TAB3 li").removeClass("active");$(this).addClass("active");$(this).parent().addClass("active");$(".__MB_CONTAINER_READ3_"+a).show()});var b=$("#sync1"),c=$("#sync2");b.owlCarousel({singleItem:!0,slideSpeed:1E3,navigation:!0,pagination:!1,afterAction:function(a){var d=this.currentItem;$("#sync2").find(".owl-item").removeClass("synced").eq(d).addClass("synced");if(void 0!==$("#sync2").data("owlCarousel")){a=c.data("owlCarousel").owl.visibleItems;var b=!1,e;for(e in a)d===
a[e]&&(b=!0);!1===b?d>a[a.length-1]?c.trigger("owl.goTo",d-a.length+2):(-1===d-1&&(d=0),c.trigger("owl.goTo",d)):d===a[a.length-1]?c.trigger("owl.goTo",a[1]):d===a[0]&&c.trigger("owl.goTo",d-1)}},responsiveRefreshRate:200});c.owlCarousel({items:5,itemsDesktop:[1199,5],itemsDesktopSmall:[979,5],itemsTablet:[768,4],itemsMobile:[479,3],pagination:!1,responsiveRefreshRate:100,afterInit:function(a){a.find(".owl-item").eq(0).addClass("synced")}});$("#sync2").on("click",".owl-item",function(a){a.preventDefault();
a=$(this).data("owlItem");b.trigger("owl.goTo",a)});if(992<=jQuery(window).width()){var f="";f=jQuery(this).scrollTop();30<=f?(jQuery(".tz-header2").addClass("tz-header-animation"),jQuery(".tz-header5").addClass("tz-header5-eff")):(jQuery(".tz-header2").removeClass("tz-header-animation"),jQuery(".tz-header5").removeClass("tz-header5-eff"));jQuery(window).scroll(function(){30<=jQuery(this).scrollTop()?jQuery(".tz-header2").addClass("tz-header-animation"):jQuery(".tz-header2").removeClass("tz-header-animation")})}if(0<
jQuery(".chart").length){var g=jQuery(".chart").offset().top;jQuery(window).scroll(function(){jQuery(window).scrollTop()>g-600&&(jQuery(".chart").easyPieChart({easing:"easeOutBounce",scaleColor:!1,size:150,lineWidth:5,trackColor:"#615950",barColor:"#f1805f",onStep:function(a,b,c){jQuery(this.el).find(".percent").text(Math.round(c))}}),jQuery(".tz-rotate-skill").css("opacity",1))})}var e=!0;jQuery(".tz-offcavas").click(function(){1==e?(jQuery(".tz-offcavans-menu").animate({left:"0"},300),jQuery(".tzscrollable").addClass("tz-offcavans-menu-eff"),
e=!1):(jQuery(".tz-offcavans-menu").animate({left:"-20em"},150,function(){jQuery(".tzscrollable").removeClass("tz-offcavans-menu-eff")}),e=!0)});jQuery(".tz-offcanvas-close").click(function(){jQuery(".tz-offcavans-menu").animate({left:"-20em"},150,function(){jQuery(".tzscrollable").removeClass("tz-offcavans-menu-eff")});e=!0});jQuery(".features-slider").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,
autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".features_prev").click(function(){jQuery(".features-slider").trigger("owl.prev")});jQuery(".features_next").click(function(){jQuery(".features-slider").trigger("owl.next")});jQuery(".sales-slider").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,
rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".sales_prev").click(function(){jQuery(".sales-slider").trigger("owl.prev")});jQuery(".sales_next").click(function(){jQuery(".sales-slider").trigger("owl.next")});jQuery(".features-slider2").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,
itemsScaleUp:!1});jQuery(".features_prev2").click(function(){jQuery(".features-slider2").trigger("owl.prev")});jQuery(".features_next2").click(function(){jQuery(".features-slider2").trigger("owl.next")});jQuery(".sales-slider2").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".sales_prev2").click(function(){jQuery(".sales-slider2").trigger("owl.prev")});
jQuery(".sales_next2").click(function(){jQuery(".sales-slider2").trigger("owl.next")});jQuery(".tz-shop-tab").each(function(){jQuery(this).find(".tzshop-content:first").show();jQuery(this).find(".tz-shop-title small:first").addClass("tab-active")});jQuery(".tz-shop-header .tz-shop-title small").click(function(){jQuery(this).parent().find("small").removeClass("tab-active");jQuery(this).addClass("tab-active");var a=jQuery(this).attr("data-option-value");jQuery(this).parent().parent().parent().find(".tzshop-content").slideUp();
jQuery("#"+a).slideDown()});jQuery(".tz-bestsellers-slider").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".bestsellers_prev").click(function(){jQuery(".tz-bestsellers-slider").trigger("owl.prev")});jQuery(".bestsellers_next").click(function(){jQuery(".tz-bestsellers-slider").trigger("owl.next")});
jQuery(".tz-love-slider").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!0,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".tz-love-words-slider").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,
singleItem:!1,rewindNav:!1,pagination:!0,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".tzautoplay").click(function(){var a=jQuery(this),b=a.parents(".tz-video").find(".videoID")[0];jQuery(this).hide();a.parents(".tz-video").find(".tz-video-content h3").css("opacity",0);a.parents(".tz-video").find(".tz-video-content strong").css("opacity",0);a.parents(".tz-video").find(".bg-video").hide();a.parents(".tz-video").find(".tzpause").show().css("opacity",0);b.paused&&b.play()});jQuery(".tzpause").click(function(){jQuery(this).hide();
var a=jQuery(this),b=a.parents(".tz-video").find(".videoID")[0];a.parents(".tz-video").find(".tz-video-content h3").css("opacity",1);a.parents(".tz-video").find(".tz-video-content strong").css("opacity",1);a.parents(".tz-video").find(".bg-video").show();a.parents(".tz-video").find(".tzautoplay").show();b.play&&b.pause()});jQuery(".tz-search").click(function(){jQuery(".tz-form-search").css("display","block");jQuery(".tz-search-input").focus()});jQuery(".tz-form-close").click(function(){jQuery(".tz-form-search").css("display",
"none")});jQuery(".tz-slider-full").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".tz_slider_prev").click(function(){jQuery(".tz-slider-full").trigger("owl.prev")});jQuery(".tz_slider_next").click(function(){jQuery(".tz-slider-full").trigger("owl.next")});jQuery(".tz-gallery-full").owlCarousel({items:4,
itemsDesktop:[1199,4],itemsDesktopSmall:[979,2],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,paginationNumbers:!1,itemsScaleUp:!1});jQuery(".tz-offfice-slider").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,2],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:500,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,singleItem:!1,rewindNav:!1,pagination:!1,
paginationNumbers:!1,itemsScaleUp:!1});jQuery(".tzaccordion").each(function(){jQuery(this).find("p:first").show();jQuery(this).find("h6:first").addClass("active");jQuery(this).find("h6:first i").addClass("fa-chevron-down").removeClass("fa-chevron-right")});jQuery(".tzaccordion h6").click(function(){var a=jQuery(this);a.parent().find(".active i").addClass("fa-chevron-right").removeClass("fa-chevron-down");a.parent().find(".active").removeClass("active");a.parent().find("p").slideUp("normal");1==jQuery(this).next("p").is(":hidden")&&
(jQuery(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right"),jQuery(this).addClass("active"),jQuery(this).next("p").slideDown("normal"))})});