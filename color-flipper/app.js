// tangkap variabel
const simple = document.getElementById('simple');
const hex = document.getElementById('hex');
const body = document.getElementsByTagName('body')[0];
const button = document.querySelector('#button');

// function 

function clickMe(){
    let color = 'red';
    let curColor = body.style.backgroundColor;

    switch(curColor){
        case 'red':
            color = 'blue';
            break;
        case 'blue':
            color = 'green';
            break;
        case 'green':
            color = 'red';
            break;
    }

    curColor = color;
}

// event listener

button.addEventListener('onclick', clickMe())
