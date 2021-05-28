// tangkap variabel
const simple = document.getElementById('simple');
const hex = document.getElementById('hex');
const body = document.getElementsByTagName('body')[0];
const button = document.querySelector('#button');
const color = document.getElementById('color')

// variabel yg diperlukan
const colors = ["red", "green", "blue"];
let iterasi = 0;

// function 

// event listener

button.addEventListener('click', function(){
    iterasi++;
    if(iterasi == 3){
        iterasi = 0;
    }

    body.style.backgroundColor = colors[iterasi];
    color.textContent = colors[iterasi];
})
