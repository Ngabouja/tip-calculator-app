let inputPrix = document.querySelector("#inputPrix");

let inputTip6 = document.querySelector("#Tip6");

let inputdvalue = document.querySelector("#inputdvalue");

let TipAmount1 = document.querySelector("#TipAmount1");
let TipAmount2 = document.querySelector("#TipAmount2");

let resetBtn = document.querySelector(".reste");

let tipValues = [5, 10, 15, 25, 50];
let tipButtons = [];
for (let i = 0; i < tipValues.length; i++) {
	tipButtons[i] = document.querySelector("#Tip" + (i + 1));
}

let prix = 0;
let tip = 0;
let nombrePersonne = 0;

function calculerTipAmount(prix, tip, nbrPersonne) {
	return (prix * tip) / nbrPersonne;
}

function calculerTotal(prix, tip, nbrPersonne) {
	return (prix + prix * tip) / nbrPersonne;
}

function mettreAJourAffichage() {
	if (prix <= 0 || nombrePersonne <= 0 || tip < 0) {
		TipAmount2.textContent = "$0.00";
		TipAmount1.textContent = "$0.00";
		return;
	}

	const tipAmount = calculerTipAmount(prix, tip, nombrePersonne);
	const total = calculerTotal(prix, tip, nombrePersonne);

	TipAmount2.textContent = "$" + tipAmount.toFixed(2);
	TipAmount1.textContent = "$" + total.toFixed(2);
}

function activerBouton(index) {
	for (let i = 0; i < tipButtons.length; i++) {
		tipButtons[i].classList.remove("active");
		tipButtons[i].classList.remove("btn-color");
	}
	if (index !== -1) {
		tipButtons[index].classList.add("active");
		tipButtons[index].classList.add("btn-color");
	}
}

for (let i = 0; i < tipButtons.length; i++) {
	(function (index) {
		tipButtons[index].addEventListener("click", () => {
			tip = tipValues[index] / 100;
			inputTip6.value = "";
			activerBouton(index);
			mettreAJourAffichage();
		});
	})(i);
}

inputTip6.addEventListener("input", () => {
	let valeur = Number(inputTip6.value);

	if (valeur >= 100) {
		valeur = 100;
		inputTip6.value = valeur;
	}

	tip = valeur / 100;
	activerBouton(-1);
	mettreAJourAffichage();
});

inputPrix.addEventListener("input", () => {
	prix = Number(inputPrix.value);
	mettreAJourAffichage();
});

inputdvalue.addEventListener("input", () => {
	nombrePersonne = Number(inputdvalue.value);

	const errorMsg = document.querySelector("#errorPersonne");
	const inputDiv = inputdvalue.closest(".input");
	if (nombrePersonne === 0 && inputdvalue.value !== "") {
		errorMsg.style.visibility = "visible";
		inputDiv.classList.add("input-error");
	} else {
		errorMsg.style.visibility = "hidden";
		inputDiv.classList.remove("input-error");
	}
	mettreAJourAffichage();
});

resetBtn.addEventListener("click", () => {
	prix = 0;
	tip = 0;
	nombrePersonne = 0;

	inputPrix.value = "";
	inputdvalue.value = "";
	inputTip6.value = "";

	activerBouton(-1);

	TipAmount2.textContent = "$0.00";
	TipAmount1.textContent = "$0.00";
});

inputdvalue.addEventListener("change", () => {
	resetBtn.removeAttribute("disabled");

	resetBtn.classList.add("reste-color");
});
