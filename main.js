const form = document.querySelector("form");

const cardClientName = document.getElementById("card-client-name");

const cardClientDigits = document.getElementById("all-cards-digits");

const cardClientDateMM = document.getElementById("card-mm");
const cardClientDateYY = document.getElementById("card-yy");

const cardClientCVC = document.getElementById("card-cvc");

const resetCardName = () => {
	cardClientName.innerHTML = "CLIENT NAME HERE!";
};

const changeCardName = (event) => {
	if (event == "") {
		return resetCardName();
	}

	cardClientName.innerHTML = event;
};

const applyMaskDigits = (digits) => {
	let inputDigits = document.getElementsByName("input-card-number")[0];

	if (digits.length == 4) {
		inputDigits.value += " ";
	}

	if (digits.length == 9) {
		inputDigits.value += " ";
	}

	if (digits.length == 14) {
		inputDigits.value += " ";
	}
};

const changeCardDigits = (event) => {
	let digits = event;

	if (digits.length <= 4) {
		cardClientDigits.children[0].innerHTML = digits.slice(0, 4);

		applyMaskDigits(digits);
	} else if (digits.length <= 9) {
		cardClientDigits.children[1].innerHTML = digits.slice(5, 9);

		applyMaskDigits(digits);
	} else if (digits.length <= 15) {
		cardClientDigits.children[2].innerHTML = digits.slice(10, 15);

		applyMaskDigits(digits);
	} else if (digits.length <= 19) {
		cardClientDigits.children[3].innerHTML = digits.slice(15, 19);

		applyMaskDigits(digits);
	}
};

const changeCardMM = (value) => {
	cardClientDateMM.innerHTML = value;
};

const changeCardYY = (value) => {
	cardClientDateYY.innerHTML = value;
};

const changeCardCvc = (value) => {
	cardClientCVC.innerHTML = value;
};

/**
 * @modules
 */

/**
 * Regex String for special caracters validation, except space
 */
const regxStr = "/[^a-zA-Z 0-9]+/g";

function hasAnySpecialCrt(str) {
	let regx = new RegExp(regxStr);

	if (regx.test(str)) {
		return true;
	}

	return false;
}

function removeSpecialCrt(str) {
	str = str.replace(regxStr, "");

	return str;
}
