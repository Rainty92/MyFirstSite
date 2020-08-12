let btnLeft = document.querySelector('.left');
let string = document.querySelector('.string');
let btnRight = document.querySelector('.right');
btnRight.onclick = sliderRight;
let left = 0;


let timer;

function autoSlider () {
	timer = setTimeout(autoSliderRight, 3000);
}


function autoSliderRight () {
	if(left < -640) {
		left = 180;
	}
	left -= 180;
	string.style.left = left + 'px';
	autoSlider ();
}


function sliderRight () {
	if(left < -640) {
		left = 180;
	}
	left -= 180;
	string.style.left = left + 'px';
}


btnLeft.onclick = function sliderLeft () {
		if(left > -180) {
		left = -180;
	}
	left += 180;
	string.style.left = left + 'px';
}

autoSlider ();