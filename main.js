const form = document.querySelector("form");

const cardClientName = document.getElementById("cardClientName");

const resetCardName = () => {
	cardClientName.innerHTML = "CLIENT NAME HERE!";
};

const changeCardName = (event) => {
	if (event == "") {
		return resetCardName();
	}

	cardClientName.innerHTML = event;
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
