const conditionTabsSwitch = document.querySelectorAll(".conditions__tabs-switch-item");
const conditionTabsContent = document.querySelectorAll(".conditions__tabs-content-list-item");
    

function conditionTabClicks(tabClickEvent) {

		for (var i = 0; i < conditionTabsSwitch.length; i++) {
			conditionTabsSwitch[i].classList.remove("conditions__tabs-switch-item--active");
		}

		const clickedSwitch = tabClickEvent.currentTarget; 
        clickedSwitch.classList.add("conditions__tabs-switch-item--active");
        

		for (i = 0; i < conditionTabsContent.length; i++) {
			conditionTabsContent[i].classList.remove("conditions__tabs-content-list-item--active");
		}

		const anchorReference = tabClickEvent.target;
        const activePaneId = anchorReference.getAttribute("data-switch");
        const activePane = document.querySelector(`li[data-tab="${activePaneId}"]`);
		activePane.classList.add("conditions__tabs-content-list-item--active");
	}

	for (i = 0; i < conditionTabsSwitch.length; i++) {
		conditionTabsSwitch[i].addEventListener("click", conditionTabClicks);
	}