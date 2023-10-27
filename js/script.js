document.addEventListener("click", function (event) {
    if (event.target.closest(".header__burger")) {
      document.querySelector(".header__menu").classList.toggle("header__menu-active");
      document.querySelector(".header__burger").classList.toggle("active");
      document.querySelector(".mobile-overlay").classList.toggle("active");
      //$("body").toggleClass("lock");
      document.body.classList.toggle("lock");
    }
    if (event.target.closest(".mobile-overlay")) {
        document.querySelector(".header__menu").classList.remove("header__menu-active");
        document.querySelector(".header__burger").classList.remove("active");
        document.querySelector(".mobile-overlay").classList.remove("active");
        document.querySelector("body").classList.remove("lock");
    }
  })
  