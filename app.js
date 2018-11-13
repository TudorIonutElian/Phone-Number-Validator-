var phoneNumber           = document.querySelector('.phoneNumber');
var validateNumber        = document.querySelector('#validateNumber');
var rezultat              = document.querySelector('#result');
var boxForNumbers         = document.getElementById('numbersInput');
var viewNumber            = document.querySelector('#viewNumber');
var numereDeTelefonValide = [];


rezultat.addEventListener("click", stergeRezultat);
validateNumber.addEventListener("click", valideazaNumarTelefon);
viewNumber.addEventListener("click", showAllNumbers);

function valideazaNumarTelefon(){
        var newPhoneNumber = phoneNumber.value;
        if(newPhoneNumber.match(/[a-z]/i)) {
            rezultat.classList.remove('result-valid');
            rezultat.innerHTML = "Numarul este invalid, ati introdus litere!";
            rezultat.classList.add('result-invalid');
        }else if(newPhoneNumber.length < 10){
            rezultat.classList.remove('result-valid');
            rezultat.innerHTML = "<p>Ati introdus " +  newPhoneNumber.length + " cifre." + "</p><p>Numarul introdus nu are suficiente cifre, aveti nevoie de minim 10!</p>";
            rezultat.classList.add('result-invalid');
        }else if(newPhoneNumber.length > 10){
            rezultat.classList.remove('result-valid');
            rezultat.innerHTML = "<p>Ati introdus " + newPhoneNumber.length + " cifre"+ " </p><p>Numarul maxim de cifre pentru un numar valid este 10.</p>";
            rezultat.classList.add('result-invalid');
        }else if(newPhoneNumber.length == 10) {
            rezultat.classList.remove('result-invalid');
            rezultat.innerHTML = "Numarul introdus este valid! Felicitari";
            rezultat.classList.add('result-valid');      
            numereDeTelefonValide.push(newPhoneNumber);
            phoneNumber.value = "";
            console.log(numereDeTelefonValide);
        }
}
function showAllNumbers(){
    for(var i = 1; i < numereDeTelefonValide.length; i++){
        var newInput        = document.createElement('input');
        newInput.setAttribute("class", "phoneNumber");
        newInput.setAttribute("value", numereDeTelefonValide[i]);
        boxForNumbers.appendChild(newInput);
    }
}

//Sterge rezultatul intors indiferent daca este valid sau nu
function stergeRezultat(rezultat){
    if(this.classList.contains('result-invalid')){
        this.classList.remove('result-invalid');
    }else if(this.classList.contains('result-valid')){
        this.classList.remove('result-valid');
    }
}