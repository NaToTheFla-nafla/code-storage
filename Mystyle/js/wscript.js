// 让搜索框动态显示
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

// 让主体指引动态显示
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

// 点击索引标题后到达指示位置
let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.clothes .box-container .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

// 使图片可以滑动展示
var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".shoes-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".ACC-slide", {
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".OOTD-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// clothes添加图片部分
function ProcessFile(e) {
  var file = document.getElementById('file').files[0];
  if (file) {
      var reader = new FileReader();
      reader.onload = function (event) {
          var txt = event.target.result;

          var img = document.createElement("img");
          img.src = txt;//将图片base64字符串赋值给img的src
         // console.log(txt);
          document.getElementById("result").appendChild(img);
      };
  }
  reader.readAsDataURL(file);
}

function contentLoaded() {
  document.getElementById('file').addEventListener('change',
      ProcessFile, false);
}

window.addEventListener("DOMContentLoaded", contentLoaded, false);

    