/* complete-order vertical stepper */
$(".lang-btn").html(`<a class="dropdown-item fs-13 text-start"
><img
  src="../assets/images/palestine.jpg" width="20px"
  alt=""
/>العربية</a
>`);
$("li.lang-item ").click(function () {
  var img = $(this).find("img").attr("src");
  var text = this.innerText;
  var value = $(this).find("img").attr("value");
  console.log(value)
  item =
    '<a class="dropdown-item fs-13 text-start"><img width="20px" src="' +
    img +
    '"/>' +
    text +
    "</a>";
  $(".lang-btn").html(item);
});
var next_click = document.querySelectorAll(".next_button");
var main_form = document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progress-bar li");
var para = document.querySelectorAll(".progress-bar li p");
var circle = document.querySelectorAll(".progress-bar li .span1");
var dash = document.querySelectorAll(".progress-bar li .span2");
let formnumber = 1;
next_click.forEach(function (next_click_form) {
  next_click_form.addEventListener('click', function () {
    formnumber++;
    updateform();
    progress_forward();
    nextUpdateHorizontalStepper(formnumber + 1);
  });
});
var back_click = document.querySelectorAll(".back_button");
back_click.forEach(function (back_click_form) {
  back_click_form.addEventListener('click', function () {
    if (formnumber > 1) {
      formnumber--;
      updateform();
      progress_backward();
      backUpdateHorizontalStepper(formnumber + 1)
    }

  });
});
function nextUpdateHorizontalStepper(activeId) {
  if (document.getElementById('step' + activeId)) {
    document.getElementById('step' + activeId).classList.add('active-step')
    document.getElementById('step' + (activeId - 1)).classList.remove('active-step')
    document.getElementById('step' + (activeId - 1)).classList.add('before-active-step')
  }
}
function backUpdateHorizontalStepper(activeId) {
  if (document.getElementById('step' + activeId)) {
    document.getElementById('step' + activeId).classList.add('active-step')
    document.getElementById('step' + activeId).classList.remove('before-active-step')
    document.getElementById('step' + (activeId + 1)).classList.remove('active-step')
  }
}
function updateform() {
  var form_num = formnumber;
  main_form.forEach(function (mainform_number) {
    mainform_number.classList.remove('active');
    for (i = 0; i < step_list.length; i++) {
      step_list[i].classList.remove('active');
      step_list[form_num - 1].style.backgroundColor = 'white';
    }
    for (i = 0; i < para.length; i++) {
      para[form_num - 1].style.color = "#456ED6"
    }
    for (i = 0; i < circle.length; i++) {
      circle[form_num - 1].style.border = '5px solid #456ED6'
    }
    for (i = 0; i < dash.length; i++) {
      dash[form_num - 1].style.border = '1px dashed #456ED6'
    }
  })
  main_form[formnumber].classList.add('active');

}

function progress_forward() {
  step_list[formnumber].classList.add('active');
}
function progress_backward() {
  var form_num = formnumber + 1;
  step_list[form_num].classList.remove('active');
  for (i = 0; i < step_list.length; i++) {
    step_list[form_num - 1].classList.add('active');

  }
  for (i = 0; i < para.length; i++) {
    para[form_num - 1].style.color = "black"
  }
  for (i = 0; i < circle.length; i++) {
    circle[form_num].style.border = '5px solid rgba(116, 116, 116, 0.5)';
    circle[form_num - 1].style.border = '0px';
  }
  for (i = 0; i < dash.length; i++) {
    dash[form_num - 1].style.border = '1px dashed #747474'
  }

}

function contentchange() {
  step_num_content.forEach(function (content) {
    content.classList.remove('active');
    content.classList.add('d-none');
  });
  step_num_content[formnumber].classList.add('active');
}

/* complete order radio buttons */

let $containers = $('.radio-btn ');
$containers.find(':radio').on('change', e => {
  $containers.removeClass('activeeee '); // remove from all containers
  $(e.target).closest('.radio-btn').addClass('activeeee'); // add class to current

});
/* complete-order radio switch */
$(function () {
  $("#switch-id1").change(function () {
    if ($(this).is(":checked")) {
      $(".contentA").hide();
      $(".hidden").hide();
    } else {
      $(".contentA").show();
      $(".hidden").show();
    }
  });
});
$(function () {
  $("#switch-id2").change(function () {
    if ($(this).is(":checked")) {
      $(".contentX").hide();
    } else {
      $(".contentX").show();
    }
  });
});
/* offcanvas */
function openCategory(catogoryId) {
  document.getElementById('main-canvas-tab').classList.add('d-none');
  document.getElementById('main-canvas-tab-contant').classList.add('d-none');
  document.getElementById(catogoryId + 'tab').classList.remove('d-none')
}
function backBtn(id) {
  document.getElementById('main-canvas-tab').classList.remove('d-none');
  document.getElementById('main-canvas-tab-contant').classList.remove('d-none');
  document.getElementById(id).classList.add('d-none');


}


document.addEventListener('click', function () {
  if (!event.target.classList.contains('sub-tab-selected')) return;
  event.target.classList.add('active');
  var links = document.querySelectorAll('.sub-tab-selected');
  for (var i = 0; i < links.length; i++) {
    if (links[i] === event.target) continue;
    links[i].classList.remove('active');
  }
}, false);


/* *** swiper 1 */

/* ********** Swiper 1 ************** */

let carosal = new Swiper(".carousal-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".carousal-swiper1 .swiper-button-next",
    prevEl: ".carousal-swiper1 .swiper-button-prev",
  },
});

let swipermySwiperSaying = new Swiper(".card_slider", {
  slidesPerView: 0.5,
  spaceBetween: 16,

  breakpoints: {
    "@0.00": {
      slidesPerView: 2.8,
      spaceBetween: 16,
      initialSlide: 1,
    },
    "@0.65": {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },

    "@1.00": {
      slidesPerView: 2.8,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 2.6,
      spaceBetween: 43,
    },
  },
  navigation: {
    nextEl: ".slider-container1 .swiper-button-next",
    prevEl: ".slider-container1 .swiper-button-prev",
  },
});

let swipercardslider2 = new Swiper(".card_slider2", {
  slidesPerView: 0.5,
  spaceBetween: 16,

  breakpoints: {
    "@0.00": {
      slidesPerView: 2.8,
      spaceBetween: 16,
      initialSlide: 1,
    },
    "@0.65": {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },

    "@1.00": {
      slidesPerView: 2.8,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 2.6,
      spaceBetween: 43,
    },
  },
  navigation: {
    nextEl: " .card_slider2 .nextt",
    prevEl: ".card_slider2 .prevv",
  },
});
/* Card3 Swiper */
let swipercardslider3 = new Swiper(".card_slider3", {
  freeMode: true,
  navigation: {
    nextEl: ".nextt1",
    prevEl: ".prevv1",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
    },
    991: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    1400: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
});

/* **** logo swiper ***** */
let swipermyimage = new Swiper(".logo_sliderr", {
  slidesPerView: 5,
  spaceBetween: 30,

  breakpoints: {
    "@0.00": {
      slidesPerView: 2.8,
      spaceBetween: 66,
      initialSlide: 1,
    },
    "@0.65": {
      slidesPerView: 2.8,
      spaceBetween: 72,
    },

    "@1.00": {
      slidesPerView: 2.8,
      spaceBetween: 108,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 80,
    },
  },
  navigation: {
    nextEl: ".modal-swiper-button-next ",
    prevEl: ".modal-swiper-button-prev",
  },
});

function openTab(evt, tabDetails) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabDetails).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpenn").click();

function menuTab(evt, menuTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuTab).style.display = "block";
  evt.currentTarget.className += " active";
}

/* **************** e-commerce image gallery *********** */
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

document.addEventListener('click', function () {
  if (!event.target.classList.contains('parent-rectangle')) return;
  event.target.classList.add('active');
  var links = document.querySelectorAll('.parent-rectangle');
  for (var i = 0; i < links.length; i++) {
    if (links[i] === event.target) continue;
    links[i].classList.remove('active');
  }
}, false);

/* ********* Change Button Color and content *** */
function onClick(el) {
  el.style.backgroundColor = "#456ED6";
  el.style.color = "white";
  el.style.borderRadius = '7px';
  el.innerHTML = "مضاف لعربة التسوق";
  el.style.width = "150px"
}