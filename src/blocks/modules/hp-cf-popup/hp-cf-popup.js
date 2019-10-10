const overlay = document.querySelector(".popup-overlay");
const contactPopupCloseBtn = document.querySelector(".contact-popup__close-btn");
const mapPopupCloseBtn = document.querySelector(".map-popup__close-btn");
const contactPopup = document.querySelector(".contact-popup");
const contactForm = document.querySelector(".contact-popup form");
const contactUserName = document.querySelector("[name=contact-user-name]");
const contactUserEmail = document.querySelector("[name=contact-user-email]");
const contactUserText = document.querySelector("[name=contact-user-text]");
const mapPopup = document.querySelector(".map-popup");


if (contactPopupCloseBtn || mapPopupCloseBtn || contactForm || overlay) {

    // Close Contact PopUp button
    contactPopupCloseBtn.addEventListener("click", () => {
        contactPopup.classList.remove("popup-active");
        overlay.classList.add("hidden");
    });


    // Close Map PopUp button
    mapPopupCloseBtn.addEventListener("click", () => {
        mapPopup.classList.remove("popup-active");
        overlay.classList.add("hidden");
    });


    // Contact PopUp
    contactForm.addEventListener("submit", (e) => {
        if (!contactUserName.value || !contactUserEmail.value || !contactUserText.value) {
            contactPopup.classList.add("contact-popup--fill-error");
            setTimeout(function() {
                contactPopup.classList.remove("contact-popup--fill-error");
            }, 400)
            e.preventDefault();
        }
    });


    // Map PopUp

    // Close PopUp by clicking on overlay
    overlay.addEventListener("click", () => {

        if(contactPopup.className.indexOf("hidden") === -1) {
            contactPopup.classList.add("hidden");
        }

        if(mapPopup.className.indexOf("popup-active") !== -1) {
            mapPopup.classList.remove("popup-active");
        }
        overlay.classList.add("hidden");
    });
}

// Close PopUp by clicking on ESC button
window.addEventListener("keydown", (e) => {
    if(e.keyCode === 27) {
        if(contactPopup.className.indexOf("hidden") === -1) {
            contactPopup.classList.add("hidden");
        }

        if(mapPopup.className.indexOf("popup-active") === -1) {
            mapPopup.classList.remove("popup-active");
        }
        
        overlay.classList.add("hidden");
    }
});