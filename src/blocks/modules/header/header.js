document.getElementsByClassName("header__secondary-menu-search-input")[0].addEventListener("focus", function() {
    document.getElementsByClassName("header__secondary-menu-search-btn")[0].setAttribute("style", "visibility: visible");
});

document.getElementsByClassName("header__secondary-menu-search-input")[0].addEventListener("blur", function() {
    document.getElementsByClassName("header__secondary-menu-search-btn")[0].removeAttribute("style", "visibility: hidden");
});

document.querySelector(".header__main-menu-item--dropdown").addEventListener("click", function(e){
    e.preventDefault();
	document.querySelector(".header__main-menu-submenu").classList.toggle("header__main-menu-submenu--active");
});

// document.querySelector(".header__main-menu-item--dropdown").addEventListener("mouseout", function(){
// 	document.querySelector(".header__main-menu-submenu").classList.remove("header__main-menu-submenu--active");
// });