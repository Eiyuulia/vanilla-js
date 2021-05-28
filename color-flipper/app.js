// tangkap variabel
const simple = document.getElementById('simple');
const hex = document.getElementById('hex');
const body = document.getElementsByTagName('body')[0];
const button = document.querySelector('#button');
const color = document.getElementById('color')

// variabel yg diperlukan
const colors = ["red", "green", "blue", "purple", "grey", "teal", "violet", "cyan", "pink","brown", "yellow"];
let iterasi = 0;
let simpleHex = false;
let colhex = "";

// function 
function simpleFunc(){
    iterasi++;
    if(iterasi == colors.length){
        iterasi = 0;
    }

    body.style.backgroundColor = colors[iterasi];
    color.textContent = colors[iterasi];
}

function hexFunc(){
    colhex = getHex();
    body.style.backgroundColor = colhex;
    color.textContent = colhex;
}

function getHex(){
    let sourcehex = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"];
    let hexstring = ["#","","","","","",""];
    for(let ind = 0; ind < 6; ind++){
        hexstring[ind+1] = sourcehex[Math.floor(Math.random()*sourcehex.length)];
    }

    let result = hexstring.toString();
    result = result.replace(/,/g, "");
    return result;
}

// event listener
button.addEventListener('click', function(){
    if(simpleHex){
        hexFunc();
    } else{
        simpleFunc();
    }
})

hex.addEventListener('click', function(){
    simpleHex = true;
})

simple.addEventListener('click', function(){
    simpleHex = false;
})