getTempature()
function getTempature() {
    var input;
    while (input == null || input == "") {
		input = prompt('請輸入攝氏溫度');
    }
	alert('Debug : '+input);
	var tempature = input*9/5+32;
	alert('華氏溫度 : '+tempature);
}
