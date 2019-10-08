const companyBtn = document.querySelector(".company__contacts-btn");
const mapBtn = document.querySelector(".company__contacts-map-btn");
const contactUserFocus = document.querySelector("[name=contact-user-name]");

companyBtn.addEventListener("click", () => {
    document.querySelector(".contact-popup").classList.add("popup-active");
    document.querySelector(".popup-overlay").classList.remove("hidden");
    contactUserFocus.focus();
});

mapBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".map-popup").classList.add("popup-active");
    document.querySelector(".popup-overlay").classList.remove("hidden");
});
