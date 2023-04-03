const numberone = document.querySelector("#numberone");
const numbertwo = document.querySelector("#numbertwo");
const toplama = document.querySelector("#toplama");
const cikarma = document.querySelector("#cikarma");
const carpma = document.querySelector("#carpma");
const bolme = document.querySelector("#bolme");
const sonuc = document.querySelector("#sonuc");

function toplam() {
    if (numberone.value !== "" && numbertwo !== "") {
        let islem = Number(numberone.value) + Number(numbertwo.value);
        sonuc.textContent = islem;
    } else {
        sonuc.textContent = "Boş bırakılamaz";
    }

}
function cikarmak() {
    if (numberone.value !== "" && numbertwo !== "") {
        let islem = Number(numberone.value) - Number(numbertwo.value);
        sonuc.textContent = islem;
    } else {
        sonuc.textContent = "Boş bırakılamaz";
    }
}
function carpmak() {
    if (numberone.value !== "" && numbertwo !== "") {
        let islem = Number(numberone.value) * Number(numbertwo.value);
        sonuc.textContent = islem;
    } else {
        sonuc.textContent = "Boş bırakılamaz";
    }
}
function bolmek() {
    if (numberone.value !== "" && numbertwo !== "") {
        let islem = Number(numberone.value) / Number(numbertwo.value);
        sonuc.textContent = islem;
    } else {
        sonuc.textContent = "Boş bırakılamaz";
    }
}



toplama.addEventListener("click", toplam);
cikarma.addEventListener("click", cikarmak);
carpma.addEventListener("click", carpmak);
bolme.addEventListener("click", bolmek);


