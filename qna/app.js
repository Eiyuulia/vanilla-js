// Catch
const imgs = document.querySelectorAll(".img");
const sections = document.getElementsByTagName("section");

// Create Element

let texts = []; 

for (let i = 0; i<3; i++){
    texts[i] = document.createElement('div');
    texts[i].innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni error ex itaque eum facere iste quas, quia nobis, laborum fugiat quibusdam necessitatibus praesentium. Temporibus laudantium magni sunt, praesentium voluptatem, pariatur necessitatibus dicta officia iusto molestias perferendis voluptas alias, aliquam totam. Quisquam vero quis quibusdam itaque odio atque nihil rerum.';
    texts[i].style.cssText = 'margin-top: 20px; padding-right: 20px; font-size: 12px; font-weight: bold; text-align: justify;';
    texts[i].classList = 'noneDisplay';
    sections[i].appendChild(texts[i]);
}


// Function
for (let i = 0; i<3; i++){
    imgs[i].addEventListener('click', button =>{
        texts[i].classList.toggle('noneDisplay');
    })
}