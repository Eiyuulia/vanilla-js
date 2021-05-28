// tangkap
const angka = document.getElementsByTagName('h2')[0];
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

// variable
let isiAngka = 0;

// event listener
increase.addEventListener('click', function(){
    isiAngka++;
    angka.innerHTML = isiAngka;
    angkaColor();
})

decrease.addEventListener('click', function(){
    isiAngka--;
    angka.innerHTML = isiAngka;
    angkaColor();
})

reset.addEventListener('click', function(){
    isiAngka = 0;
    angka.innerHTML = isiAngka;
    angkaColor();
})

// function
function angkaColor(){
    if(isiAngka > 0){
        angka.style.color = "green";
    } else if(isiAngka < 0){
        angka.style.color = "red";
    } else{
        angka.style.color = "black";
    }
}