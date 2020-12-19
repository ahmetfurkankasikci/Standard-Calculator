var dizi = new Array("+", "-", "x", "÷");

const sayi = document.querySelector('.sayi');
const yazi = document.getElementById("in");
const kutu = document.getElementById("kutu");



kutu.addEventListener("click", event => {

    if (event.target.id == "sil") {
        yazi.innerText = " ";
    }
    else if (event.target.classList.contains("buton")) {
        yazi.innerText += `${event.target.innerText}`;
    }

    else if (event.target.classList.contains("sonuc")) {

        var numbers = yazi.innerText.split(/\+|\-|\x|\÷/g).map(Number);
        var operators = yazi.innerText.replace(/[0-9]|\./g, " ").split(" ");

        var bolme = operators.indexOf("÷");
        while (bolme != -1) {
            let yedek = numbers[bolme - 1] / numbers[bolme];

            operators.splice(bolme, 1);
            numbers.splice(bolme - 1, 2, yedek);

            bolme = operators.indexOf("÷");
        }

        var carpma = operators.indexOf("x");
        while (carpma != -1) {
            let yedek = numbers[carpma - 1] * numbers[carpma];

            operators.splice(carpma, 1);
            numbers.splice(carpma - 1, 2, yedek);

            carpma = operators.indexOf("x");

        }

        var toplama = operators.indexOf("+");
        while (toplama != -1) {
            let yedek = numbers[toplama - 1] + numbers[toplama];

            operators.splice(toplama, 1);
            numbers.splice(toplama - 1, 2, yedek);

            toplama = operators.indexOf("+");

        }

        var cikarma = operators.indexOf("-");
        while (cikarma != -1) {
            let yedek = numbers[cikarma - 1] - numbers[cikarma];

            operators.splice(cikarma, 1);
            numbers.splice(cikarma - 1, 2, yedek);

            cikarma = operators.indexOf("-");

        }
        
        if (event.target.id == "esit") {
            yazi.innerText = numbers[0];
        }

        else if (event.target.id == "kare") {
            yazi.innerText = Math.pow(numbers[0], 2);
        }
        else if (event.target.id == "kok") {
            yazi.innerText = Math.sqrt(numbers[0]);


        }


    }








})