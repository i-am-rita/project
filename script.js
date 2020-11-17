//console.log(
//  typeof Object,
//  typeof Array,
//typeof Number
//   )
// const password = 'pass!wo'

// if (password >= 8){
// console.log('password is long enough')
// }else if (password >= 8 && password.includes('!')){
//     console.log('Great password!')
// }else{
//     console.log('password is not strong enough')
// }
//const age = 2;
// console.log(age);

const toggleMenu = document.querySelector("#mobile-menu"); //selecting the toggleMenu  that has an id of mobile-menu//
const toggleLinks = document.querySelector(".navbar__menu"); //selecting the toggleLinks with a class of navbar__menu//
const navLogo = document.querySelector("navbaar__logo");
//displaying mobile-menu i.e trying to make the mobile-menu active...... .is-active//
//created an arrow function//
const mobileMenu = () => {
  toggleMenu.classList.toggle("is-active"); //toggleMenu is targeting the mobile-menu and toggling the is-active class//
  toggleLinks.classList.toggle("active"); // when i click the icon, i want to toggle//
};

//adding eventlistener to initiate the toggle//
toggleMenu.addEventListener("click", mobileMenu); //eventListener takes in two arguments.... the event and the function declared already//

//show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  //a scroll position
  let scrollPosition = window.scrollY;

  //adds 'highlight' class to menu items
  if (window.innerWidth > 960 && scrollPosition < 600) {
    // only display highlight wwhen its on desktop//
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 2345) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPosition < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
