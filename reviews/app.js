// tangkap 
const section = document.getElementsByTagName('section')[0];
const image = document.getElementsByTagName('img')[0];
const namee = document.querySelector('.name');
const job = document.querySelector('.job');
const p = document.getElementsByTagName('p')[0];
const left = document.getElementById('left');
const right = document.getElementById('right');
const button = document.getElementsByTagName('button')[0];

// class n objeck
class classReviewer {
    constructor(imagep, namep, jobp, pp) {
        this.namep = namep;
        this.imagep = imagep;
        this.jobp = jobp;
        this.pp = pp;
    }
}

let reviewer1 = new classReviewer("/reviews/image/sistine fibel.jpeg", "Sistine Fibel", "Mage Student (Class Leader)", "Sistine maintains a hostile and no-nonsense demeanor and often scolds Glenn Radars due to his lackadaisical attitude; she was at her meanest in Episode 1, when Lynn Titis asked Glenn a question, and when he (Glenn) didn't answer, Sistine had to angrily confront him, causing Rumia Tingel to calm her down.");
let reviewer2 = new classReviewer("/reviews/image/rumia tingel.jpg", "Rumia Tingel", "Mage Student (Class Vice Leader)", "Rumia has been shown to be simple, wise and very considerate of her friends, especially Sistine. She is always happy with people and almost never angry with others, including Glenn. Because of that personality, she was extremely dangerous, because no one knew what she was thinking. Women's hunches are often never wrong.");
let reviewer3 = new classReviewer("/reviews/image/saika totsuka.jpg", "Saika Totsuka", "Cute Student", "Saika has a soft and kind demeanor, as well as a feminine appearance, which causes Hachiman on multiple occasions to 'forget' Saika is a boy. Because of his feminine characteristics, most girls in the school call him 'prince'. This personality often causes his comrades and teammates to pursue victory in athletics or tennis.");
let reviewer4 = new classReviewer("/reviews/image/kei shirogane.jpg", "Kei Shirogane", "Normal Student", "Kei seems to share many of the same characteristics as her older brother, being a hard worker and unwaveringly kind and self-sacrificial. Being from a low-income family, she places a heavy emphasis on money and goes through great lengths to not spend much.");

// variable pembantu
let now = 0;
let reviewer = [reviewer1,reviewer2,reviewer3,reviewer4];

// function
function edit(){
    image.src = reviewer[now].imagep;
    namee.textContent = reviewer[now].namep;
    job.textContent = reviewer[now].jobp;
    p.textContent = reviewer[now].pp;
}

// event listener
right.addEventListener('click', function(){
    now++;
    if(now == reviewer.length){
        now = 0;
    }
    edit();
})

left.addEventListener('click', function(){
    now--;
    if(now == -1){
        now = reviewer.length - 1;
    }
    edit();
})

button.addEventListener('click', function(){
    now = Math.floor(Math.random()*reviewer.length);
    edit();
})