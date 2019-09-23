document.getElementsByClassName("header__secondary-menu-search-input")[0].addEventListener("focus", function() {
    document.getElementsByClassName("header__secondary-menu-search-btn")[0].setAttribute("style", "visibility: visible");
});

document.getElementsByClassName("header__secondary-menu-search-input")[0].addEventListener("blur", function() {
    document.getElementsByClassName("header__secondary-menu-search-btn")[0].removeAttribute("style", "visibility: visible");
});