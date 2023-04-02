function calculate(calculatorNum) {
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var age = document.getElementById("age").value;
	var result = 0;

	switch(calculatorNum) {
		case 1:
			result = 10 * weight + 6.25 * height - 5 * age + 5;
			document.getElementById("result-1").innerHTML = result;
			break;
		case 2:
			result = 4.536 * weight + 15.88 * height - 5 * age + 5;
			document.getElementById("result-2").innerHTML = result;
			break;
		case 3:
			result = 10 * weight + 6.25 * height - 5 * age - 161;
			document.getElementById("result-3").innerHTML = result;
			break;
		case 4:
			result = 4.536 * weight + 15.88 * height - 5 * age - 161;
			document.getElementById("result-4").innerHTML = result;
			break;
		case 5:
			result = 10 * weight + 6.25 * height - 5 * age;
			document.getElementById("result-5").innerHTML = result;
			break;
		case 6:
			result = 4.536 * weight + 15.88 * height - 5 * age;
			document.getElementById("result-6").innerHTML = result;
			break;
		default:
			break;
	}
}
