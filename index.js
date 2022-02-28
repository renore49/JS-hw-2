// №1
let quiz = null
let bally = 0
function check() {
	quiz = prompt('солнце это звезда? варианты ответа "да" или "нет"')
	if (quiz == 'да') {
		bally++
		alert(`верно +1 балл,  ${bally}`)
	} else if (quiz == 'возможно') {
		alert('мне нужен точный ответ')
	} else {
		alert('неверно')
	}
	check2()
}
function name() {
	let name = prompt('Введите своё имя ...', '')
	alert(`привет, ${name}`)
	check()
}
name()

function check2() {
	quiz = prompt('самая заселенная планета')
	if (quiz == 'земля') {
		bally++
		alert(`верно +1 балл,  ${bally}`)
	} else if (quiz == 'Марс') {
		alert('думай дурак')
	} else {
		alert('неверно')
	}
	check3()
}
function check3() {
	quiz = prompt('спутник планеты Земля')
	if (quiz == 'луна') {
		bally++
		alert(`верно +1 балл,  ${bally}`)
	} else if (quiz == 'Солнце') {
		alert('подумай лучше')
	} else {
		alert('неверно')
	}
	check4()
}
function check4() {
	quiz = prompt(' планета похожая на Землю в нашей солнечной система')
	if (quiz == 'венера') {
		bally++
		alert(`верно +1 балл,  ${bally}`)

		check5()
	} else if (quiz == 'Марс') {
		alert('подумай лучше')
	} else {
		alert('неверно')
	}
	check5()
}
function check5() {
	quiz = prompt('сколько планет в нашей солнечной системе?')
	if (quiz == '8') {
		bally++
		alert(`верно +1 балл,  ${bally}`)

		check5()
	} else if (quiz == '7') {
		alert('подумай лучше')
	} else {
		alert('неверно')
	}
	check6()
}
function check6() {
	alert(`красавчик, итог баллов  ${bally}`)
}

// №2
let number = prompt('Введите число 0-9')
switch (number) {
	case '0':
		alert('ноль')
		break
	case '1':
		alert('один')
		break
	case '2':
		alert('два')
		break
	case '3':
		alert('три')
		break
	case '4':
		alert('четыре')
		break
	case '5':
		alert('пять')
		break
	case '6':
		alert('шесть')
		break
	case '7':
		alert('семь')
		break
	case '8':
		alert('восемь')
		break
	case '9':
		alert('девять')
		break
}
