const sliderItem = document.querySelectorAll(".slider__item");
const sliderBullets = document.querySelectorAll(".slider__bullets-btn");
    

function sliderTabClicks(tabClickEvent) {

		for (var i = 0; i < sliderBullets.length; i++) {
			sliderBullets[i].classList.remove("slider__bullets-btn--active");
		}

        const clickedSwitch = tabClickEvent.currentTarget;
        // console.log(clickedSwitch);
        clickedSwitch.classList.add("slider__bullets-btn--active");
        

		for (i = 0; i < sliderItem.length; i++) {
			sliderItem[i].classList.remove("slider__item--active");
		}

        const anchorReference = tabClickEvent.target;
        
        const activePaneId = anchorReference.getAttribute("data-slider-button");
        console.log(activePaneId);
        const activePane = document.querySelector(`[data-slider="${activePaneId}"]`);
		activePane.classList.add("slider__item--active");
	}

	for (i = 0; i < sliderBullets.length; i++) {
		sliderBullets[i].addEventListener("click", sliderTabClicks);
	}