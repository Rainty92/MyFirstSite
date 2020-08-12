let randomNum,generatedNum, btn1, btn2;

randomNum = document.querySelector('.randomNum_game');
generatedNum = Math.floor((Math.random() * 10));
randomNum.textContent = generatedNum; /*если поменяться местами переменные перестанет работать*/
btn1 = document.querySelector('.btn_check_games');
btn2 = document.querySelector('.btn_new_games');

btn1.addEventListener('click', btn1Click);
let numBer, result, attempt;
numBer = document.querySelector('.numBer');
result = document.querySelector('.span_result');
attempt = document.querySelector('.span_attempt');

function btn1Click () {
	attempt.textContent++;
	if(numBer.value == randomNum.textContent) {
		result.textContent = 'ПРАВИЛЬНО! ты угадал с ' + attempt.textContent + 'ой попытки';
		btn2.classList.add('changeColor_game');
		result.classList.add('changeColor_result');
		attempt.classList.add('changeColor_result');
	} else if (numBer.value > randomNum.textContent) {
		result.textContent = 'МЕНЬШЕ';
		result.classList.remove('changeColor_result');
		attempt.classList.remove('changeColor_result');
	} else {
		result.textContent = 'БОЛЬШЕ';
		result.classList.remove('changeColor_result');
		attempt.classList.remove('changeColor_result');

}

}

btn2.addEventListener('click', btn2Click);

function btn2Click () {
	window.location.reload()
}

