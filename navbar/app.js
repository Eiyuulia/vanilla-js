// catch
const hamburger = document.getElementById('hamburger');
const th2divbur = document.getElementById('th2divbur');
const navSlide = document.querySelector('nav ul');

// event listener
hamburger.addEventListener('click', ()=>{
    hamburger.firstElementChild.classList.toggle('hama');
    th2divbur.classList.toggle('hamb');
    hamburger.lastElementChild.classList.toggle('hamc');
    navSlide.classList.toggle('slide');
})