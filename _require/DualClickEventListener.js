// handle single and double click
class DualClickEventListener {
	delay = 200;
	timer = null;
	isClicked = false;

	constructor(singleClickAction, doubleClickAction) {
		this.singleClickAction = singleClickAction;
		this.doubleClickAction = doubleClickAction || this.hideTarget;
	}

	handleEvent(event) {
		if (!this.isClicked) {
			// single click
			this.isClicked = true;
			this.timer = setTimeout(() => {
				this.isClicked = false;
				this.singleClickAction(event);
			}, this.delay);
		} else {
			// double click
			clearTimeout(this.timer);
			this.isClicked = false;
			this.doubleClickAction(event);
		}
	}

	hideTarget = (event) => {
		event.currentTarget.style.cssText = "display:none;";
	}
}
