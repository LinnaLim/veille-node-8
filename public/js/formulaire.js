(function (){
	let btnsModif = document.querySelectorAll('.modifier');
	console.log(btnsModif)
	//let formModif = document.getElementById('formModif');
	for(let btn of btnsModif){
		btn.addEventListener('click', (evt) =>{
			evt.preventDefault();
			//formModif.style.display = "flex";

			// Extraction des donnés
			let parent = btn.parentNode.parentNode;
			console.log(parent);
			let id = parent.querySelector("._id").innerText;
			console.log(id);
			let prenom = parent.querySelector(".prenom").innerText;
			let nom = parent.querySelector(".nom").innerText;
			let telephone = parent.querySelector(".telephone").innerText;
			let courriel = parent.querySelector(".courriel").innerText;
			//console.log(id,prenom,nom,telephone,courriel);

			// Détection du formulaire
			let elmForm = document.getElementById('mon_formulaire');
			//console.log(elmForm);
			let idInput = elmForm.querySelector("#inputId");
			let prenomInput = elmForm.querySelector("#inputPrenom");
			let nomInput = elmForm.querySelector("#inputNom");
			let telephoneInput = elmForm.querySelector("#inputTelephone");
			let courrielInput = elmForm.querySelector("#inputCourriel");
			// Mettre l'information pour le formulaire
			idInput.value = id;
			prenomInput.value = prenom;
			nomInput.value = nom;
			telephoneInput.value = telephone;
			courrielInput.value = courriel;

			elmForm.submit();
		});
	}
});
