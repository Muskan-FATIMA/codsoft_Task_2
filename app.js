const menuBtn = document.getElementById("menu_btn");
const navlinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("open");

  const isopen = navlinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", () => {
  navlinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollReavelOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container

ScrollReveal().reveal(".header_container p", {
  ...scrollReavelOption,
});

ScrollReveal().reveal(".header_container h1", {
  ...scrollReavelOption,
  delay: 500,
});

//about container
ScrollReveal().reveal(".about_image img", {
  ...scrollReavelOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section_subheader", {
  ...scrollReavelOption,
  delay: 500,
});
ScrollReveal().reveal(".about_content .section_header", {
  ...scrollReavelOption,
  delay: 1000,
});
ScrollReveal().reveal(".about_content .section_description", {
  ...scrollReavelOption,
  delay: 1500,
});
ScrollReveal().reveal(".about_btn", {
  ...scrollReavelOption,
  delay: 2000,
});

//room conatiner
ScrollReveal().reveal(".room_card", {
  ...scrollReavelOption,
  interval: 500,
});

//service conatiner
ScrollReveal().reveal(".service_list li", {
  ...scrollReavelOption,
  interval: 500,
  origin: "right",
});
