$(document).ready(function () {
  "use strict";

  //===== Dropdown Anmiation =====//
  var drop = $("nav > div ul ul li");
  $("nav > div ul ul").each(function () {
    var delay = 50;
    $(this)
      .find(drop)
      .each(function () {
        $(this).css({ transitionDelay: delay + "ms" });
        delay += 50;
      });
  });

  //===== Menu Active =====//
  var pgurl = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $("nav ul li a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == "")
      $(this)
        .parent("li")
        .addClass("active")
        .parent()
        .parent()
        .addClass("active")
        .parent()
        .parent()
        .addClass("active");
  });

  //===== Menu Active =====//
  var pgurl = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $(".menu-wrap ul li a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == "")
      $(this)
        .parent("li")
        .addClass("active")
        .parent()
        .parent()
        .addClass("active-parent")
        .parent()
        .parent()
        .addClass("active-parent");
  });

  //===== Side Menu =====//
  $(".rspn-mnu-btn").on("click", function () {
    $(".rsnp-mnu").addClass("slidein");
    return false;
  });
  $(".rspn-mnu-cls").on("click", function () {
    $(".rsnp-mnu").removeClass("slidein");
  });
  $(".rsnp-mnu li.menu-item-has-children > a").on("click", function () {
    $(this).parent().siblings("li").children("ul").slideUp();
    $(this).parent().siblings("li").removeClass("active");
    $(this).parent().children("ul").slideToggle();
    $(this).parent().toggleClass("active");
    return false;
  });

  //===== Accordions =====//
  if ($(".toggle").length > 0) {
    $(function () {
      //$('#toggle .toggle-content').hide();
      //$('#toggle h4:first').next().slideDown(500).parent().addClass("active");
      $("#toggle h4").on("click", function () {
        if ($(this).next().is(":hidden")) {
          $("#toggle h4").next().slideUp(500).parent().removeClass("active");
          $(this).next().slideDown(500).parent().toggleClass("active");
        }
      });
    });
  }
  $(".static").on("click", function () {
    $(this).next().slideDown(500).parent().toggleClass("active");
  });
}); //===== Document Ready Ends =====//

$(".checkbox-filter-title").click(function () {
  $(this)
    .next()
    .toggle("slow", function () {
      // Animation complete.
    });
});

let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");

let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";

  document.getElementById("result-min").innerHTML = _this.value;
}

function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  document.getElementById("result-max").innerHTML = _this.value;
}

if (inputLeft && inputRight) {
  setLeftValue();
  setRightValue();

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);

  inputLeft.addEventListener("mouseover", function () {
    thumbLeft.classList.add("hover");
  });

  inputLeft.addEventListener("mouseout", function () {
    thumbLeft.classList.remove("hover");
  });

  inputRight.addEventListener("mouseover", function () {
    thumbRight.classList.add("hover");
  });

  inputRight.addEventListener("mouseout", function () {
    thumbRight.classList.remove("hover");
  });
}

// Products filter top
$(".filter-top .filter-block").hover(function () {
  $(this).find("ul").stop(true, false, true).slideToggle(250);
  $(this).find("i").stop(true, false, true).toggleClass("rotate");
});

// Product inner

// ------ Quantity --------

$(document).ready(function () {
  $(".quantity-right-plus").click(function (e) {
    e.preventDefault();
    var quantity = parseInt($("#quantity_wanted").val());

    $("#quantity_wanted").val(quantity + 1);
  });

  $(".quantity-left-minus").click(function (e) {
    e.preventDefault();
    var quantity = parseInt($("#quantity_wanted").val());

    if (quantity > 0) {
      $("#quantity_wanted").val(quantity - 1);
    }
  });
});

setTimeout(function () {
  $(".addToCartResponse").fadeOut("slow");
}, 6000); // <-- time in milliseconds

// $(".filter-heading").click(function () {
//   $(this).stop(true, false).next(".category-content").slideToggle();
//   $(this)
//     .stop(true, false)
//     .children(".hide-text,.show-text")
//     .toggleClass("d-none");
// });
$(".filter-name").click(function () {
  $(this).stop(true, false).next(".f-body").slideToggle();
  $(this).children(".fa-chevron-down").toggleClass("up");
});

$(".category-item").hover(function () {
  $(this).stop(true, false).children(".category-dropdown").toggleClass("show");
});

var swiper = new Swiper(".projectSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var gallerySwiper = new Swiper(".gallerySwiper", {
  lazy: true,
  spaceBetween: 30,
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".similarproducts", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// Home Banner
const homeBannerSwiper = new Swiper(".homeBannerSwiper", {
  lazy: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});

$("#submitFilter").click(function () {
  $("#filterForm :input").not(":submit").clone().hide().appendTo("#form1");
  return true;
});

$("#filterByPrice").on("click", function (e) {
  e.preventDefault();
  var oldNameVal = parseInt($("#nameInput").val());

  if (oldNameVal == 0) {
    $("#nameInput").val(1);
  } else {
    $("#nameInput").val(0);
  }

  $("#catform :input").not(":submit").clone().hide().appendTo("#filterForm");
  $("#filterForm").submit();
  return true;
});

$("#filterByName").on("click", function (e) {
  e.preventDefault();
  var oldPriceVal = parseInt($("#priceInput").val());

  if (oldPriceVal == 0) {
    $("#priceInput").val(1);
  } else {
    $("#priceInput").val(0);
  }

  $("#catform :input").not(":submit").clone().hide().appendTo("#filterForm");
  $("#filterForm").submit();
  return true;
});

$(".togglesub").click(function (e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find("li.subli .inner").removeClass("show");
    $this.parent().parent().find("li.subli .inner").slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

$(".accardion-parent").click(function () {
  var $this = $(this);
  if ($this.next().hasClass("parentshow")) {
    $this.next().removeClass("parentshow");
    $this.next().children().find(".subsubdiv").removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

$(".parent_menu_m").click(function () {
  var $this = $(this);
  if ($this.next().hasClass("parentshow")) {
    $this.next().removeClass("parentshow");
    // $this.next().children().find('.sub_sub_mob_menu').removeClass('show');
    $this.next().slideUp(350);
  } else {
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

$(".sub_sub_mob_menu_triger").click(function () {
  var $this = $(this);
  if ($this.next().hasClass("parentshow")) {
    $this.next().removeClass("parentshow");
    $this.next().children().find(".sub_sub_mob_menu").removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

$("#submitLeftSideForm").click(function () {
  $("#filter-top-form button")
    .not(":submit")
    .clone()
    .hide()
    .appendTo("#checkboxFilterForm");
  return true;
});

$('button[name="name"]').on("click", function () {
  $("#checkboxFilterForm :input")
    .not(":submit")
    .clone()
    .hide()
    .appendTo("#filter-top-form");
  $(this).closest("form").submit();
  return true;
});

$('button[name="price"]').on("click", function () {
  $("#checkboxFilterForm :input")
    .not(":submit")
    .clone()
    .hide()
    .appendTo("#filter-top-form");
  $(this).closest("form").submit();
  return true;
});

$(".mob-user-navs-li-lang").on("click", function () {
  $(".dropdownMenuLangNew").css({
    visibility: "visible",
    display: "block",
  });
});

$(".forgot").on("click", function () {
  $(".login-register-tab-list a:last").tab("show");
});
$(".quantity_wanted").change(function () {
  var amount = 0;
  let pcount = document.getElementById("pcount").value;
  //minValue =  parseInt($(this).attr('min'));
  //maxValue =  parseInt($(this).attr('max'));
  qiymet = parseInt($(this).attr("qiy"));
  qid = parseInt($(this).attr("qid"));
  amountI = parseInt($(this).attr("amountI"));
  valueCurrent = parseInt($(this).val());
  document.getElementById("amount" + amountI).textContent =
    valueCurrent * qiymet;
  for (i = 1; i <= pcount; i++) {
    amount =
      parseInt(amount) +
      parseInt(document.getElementById("amount" + i).textContent);
  }
  document.getElementById("totalAmount").textContent = amount;
});

$(function () {
  $(".select-header").on("change", function () {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });
  $("#add_to_order").click(function () {
    $("#orderForm").submit();
  });
});
$(".reset-btn").click(() => {
  $("#login").removeClass("show");
  $("#login").removeClass("active");
  $("#resset").addClass("show");
  $("#resset").addClass("active");
});
$("#register-tab").click(() => {
  $("#resset").removeClass("show");
  $("#resset").removeClass("active");
});
$(".has-submenu svg").click(function () {
  $(this).parent().next(".sub-menu").slideToggle(400);
});
function bindValues(price_slider, inputNumberMin, inputNumberMax) {
  price_slider.noUiSlider.on("update", function (values, handle) {
    var value = values[handle];

    if (handle) {
      inputNumberMax.value = Math.round(value);
    } else {
      inputNumberMin.value = Math.round(value);
    }
  });

  inputNumberMin.addEventListener("change", function () {
    var sliderIndex = this.getAttribute("data-slider");
    price_sliders[sliderIndex].noUiSlider.set([this.value, null]);
  });

  inputNumberMax.addEventListener("change", function () {
    var sliderIndex = this.getAttribute("data-slider");
    price_sliders[sliderIndex].noUiSlider.set([null, this.value]);
  });
}

var price_sliders = document.querySelectorAll(".price-filter");
var inputsNumberMin = document.querySelectorAll(".price-filter-min-price");
var inputsNumberMax = document.querySelectorAll(".price-filter-max-price");

var price_sliders_1 = document.querySelectorAll(".price-filter_1");
var inputsNumberMin_1 = document.querySelectorAll(".price-filter-min-price_1");
var inputsNumberMax_1 = document.querySelectorAll(".price-filter-max-price_1");
for (var i = 0; i < price_sliders.length; i++) {
  noUiSlider.create(price_sliders[i], {
    start: [
      Number(inputsNumberMin[i].getAttribute("data-start-min")),
      Number(inputsNumberMax[i].getAttribute("data-start-max")),
    ],
    connect: true,
    range: {
      min: Number(inputsNumberMin[i].getAttribute("data-min")),
      max: Number(inputsNumberMax[i].getAttribute("data-max")),
    },
  });
  bindValues(price_sliders[i], inputsNumberMin[i], inputsNumberMax[i]);
}

for (var i = 0; i < price_sliders_1.length; i++) {
  noUiSlider.create(price_sliders_1[i], {
    start: [
      Number(inputsNumberMin_1[i].getAttribute("data-min")),
      Number(inputsNumberMax_1[i].getAttribute("data-max")),
    ],
    connect: true,
    range: {
      min: Number(inputsNumberMin_1[i].getAttribute("data-min")),
      max: Number(inputsNumberMax_1[i].getAttribute("data-max")),
    },
  });
  bindValues(price_sliders_1[i], inputsNumberMin_1[i], inputsNumberMax_1[i]);
}
