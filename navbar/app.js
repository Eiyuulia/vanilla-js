// tangkap
const burger = document.querySelector('.burger');
const burgerdiv = document.querySelector('.burger > div');
const realnav = document.querySelector('.realnav');
const body = document.querySelector('body');

// event listener
burger.addEventListener('click', function(){
    realnav.classList.toggle('act');
    realnav.classList.toggle('realnav');
})
