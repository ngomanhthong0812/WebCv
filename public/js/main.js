//   BROWSE ALL CATEGORIES
let menuOpen = false;

function expandBox() {
  const menu = document.querySelector(".menu_scroll");
  const icon = document.querySelector(".icon");

  if (menuOpen) {
    // Nếu menu đã mở, thu gọn nó
    menu.style.height = "0px";
    setTimeout(() => {
      menu.style.opacity = "0"; // Thêm delay 0.5s trước khi thiết lập opacity thành 0
    }, 500);
    icon.style.transform = "rotate(0deg)";
    menuOpen = false;
  } else {
    // Nếu menu đã đóng, mở nó
    menu.style.height = "377px";
    menu.style.opacity = "1"; // Khi mở menu, đặt opacity thành 1
    icon.style.transform = "rotate(180deg)";
    menuOpen = true;
  }
}

// Chuyển banner
let slideIndex = 1;
showSlides(slideIndex);

// Thiết lập hàm tự động chuyển ảnh sau mỗi 5 giây
setInterval(function () {
  plusSlides(1);
}, 10000);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  // Gọi hàm chuyển lớp cho "haohan" sau khi chuyển ảnh

  changeHaohanClass();
}

// Hàm để thay đổi lớp của "haohan" dựa trên slideIndex
function changeHaohanClass() {
  let haohan1 = document.querySelector(".sale_slider_1");
  let haohan2 = document.querySelector(".sale_slider_2");
  let haohan3 = document.querySelector(".sale_slider_3");

  // Loại bỏ tất cả các lớp trước khi thêm lớp mới
  haohan1.classList.remove("sale_slider_1_1");
  haohan2.classList.remove("sale_slider_2_2");
  haohan3.classList.remove("sale_slider_3_3");

  if (slideIndex === 1) {
    haohan1.innerHTML = "MEGA SALE <br> 70% OFF";
    haohan2.innerHTML = "EXHAUST PIPE FOR SUPER CAR";

    setTimeout(() => {
      // Thêm lại lớp CSS sau 50ms để kích hoạt hiệu ứng
      haohan1.classList.add("sale_slider_1_1");
      haohan2.classList.add("sale_slider_2_2");
      haohan3.classList.add("sale_slider_3_3");
    }, 50);
  } else if (slideIndex === 2) {
    haohan1.innerHTML = "CAR'S LED <br> TAIL LIGHTS";
    haohan2.innerHTML = "PROVIDE A SAFETY ASPECT";
    // Thêm lại lớp CSS sau 50ms để kích hoạt hiệu ứng
    setTimeout(() => {
      haohan1.classList.add("sale_slider_1_1");
      haohan2.classList.add("sale_slider_2_2");
      haohan3.classList.add("sale_slider_3_3");
    }, 50);
  } else if (slideIndex === 3) {
    haohan1.innerHTML = "CAR'S BODY <br> PARTS";
    haohan2.innerHTML = "35% OFF SPARE PARST";

    // Thêm lại lớp CSS sau 50ms để kích hoạt hiệu ứng
    setTimeout(() => {
      haohan1.classList.add("sale_slider_1_1");
      haohan2.classList.add("sale_slider_2_2");
      haohan3.classList.add("sale_slider_3_3");
    }, 50);
  }
}

//search_parts
var index = 0;
function search_parts(n) {
  var menu1 = document.getElementById("menu_search_parts_1");
  var menu2 = document.getElementById("menu_search_parts_2");
  var menu3 = document.getElementById("menu_search_parts_3");
  if (n == 1) {
    menu1.classList.toggle("menu_search_parts");
    index = 1;
    menu2.classList.remove("menu_search_parts");
    menu3.classList.remove("menu_search_parts");
  }
  if (n == 2) {
    menu2.classList.toggle("menu_search_parts");
    index = 2;
    menu1.classList.remove("menu_search_parts");
    menu3.classList.remove("menu_search_parts");
  }
  if (n == 3) {
    menu3.classList.toggle("menu_search_parts");
    index = 3;
    menu2.classList.remove("menu_search_parts");
    menu1.classList.remove("menu_search_parts");
  }
}

document.addEventListener("mouseup", function (event) {
  var menu = document.getElementById("menu_search_parts_" + index);
  var buttons = document.getElementById("menu_parts_" + index);

  // Kiểm tra xem sự kiện mouseup có xảy ra bên ngoài tất cả các nút và menu không
  if (!buttons.contains(event.target) && !menu.contains(event.target)) {
    // Xoá lớp nếu click bên ngoài nút và menu
    menu.classList.remove("menu_search_parts");
  }
});
