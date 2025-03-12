let inputPrix = document.querySelector("#inputPrix");

let buttonTip1 = document.querySelector("#Tip1");
let buttonTip2 = document.querySelector("#Tip2");
let buttonTip3 = document.querySelector("#Tip3");
let buttonTip4 = document.querySelector("#Tip4");
let buttonTip5 = document.querySelector("#Tip5");
let inputTip6 = document.querySelector("#Tip6");

let inputdvalue = document.querySelector("#inputdvalue");

let TipAmount1 = document.querySelector("#TipAmount1");
let TipAmount2 = document.querySelector("#TipAmount2");

let prix = 0;
let tip = 0;
let nombrePersonne = 0;

function calculerTipAmoutn(prix, tip, nbrPersonne) {
	let tipAmount = 0;

	tipAmount = (tip * prix) / nbrPersonne;

	return tipAmount;
}

function calculerTotal(prix, tip, nbrPersonne) {
	let total = 0;

	return total;
}

inputPrix.addEventListener("input", () => {
	prix = Number(inputPrix.value);

	if (prix < 0 || nombrePersonne <= 0 || tip < 0) return;

	const tipAmount = calculerTipAmoutn(prix, tip, nombrePersonne);

	TipAmount2.textContent = tipAmount;
});

buttonTip1.addEventListener("click", () => {
	tip = 5 / 100;

	console.log(prix, tip);
});

buttonTip2.addEventListener("click", () => {
	tip = 10 / 100;

	console.log(prix, tip);
});

buttonTip3.addEventListener("click", () => {
	tip = 15 / 100;

	console.log(prix, tip);
});

buttonTip4.addEventListener("click", () => {
	tip = 25 / 100;

	console.log(prix, tip);
});

buttonTip5.addEventListener("click", () => {
	tip = 50 / 100;

	console.log(prix, tip);
});

inputTip6.addEventListener("input", () => {
	let valeur = Number(inputTip6.value);

	if (valeur >= 100) {
		valeur = 100;
		inputTip6.value = valeur;
	}
	tip = valeur / 100;

	console.log(prix, tip);
});

inputdvalue.addEventListener("input", () => {
	nombrePersonne = Number(inputdvalue.value);
});
