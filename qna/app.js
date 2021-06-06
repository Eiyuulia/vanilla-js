// tangkap 
const imgs = document.querySelectorAll(".img");
const sections = document.getElementsByTagName("section");


// var
let arrp = [];

let arrt = [];
arrt[0] = document.createTextNode("paragraph 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt architecto molestiae fugit libero quod perferendis totam, quas numquam recusandae cumque rem obcaecati consequuntur quis quisquam incidunt neque doloribus ducimus.");
arrt[1] = document.createTextNode("paragraph 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt architecto molestiae fugit libero quod perferendis totam, quas numquam recusandae cumque rem obcaecati consequuntur quis quisquam incidunt neque doloribus ducimus.");
arrt[2] = document.createTextNode("paragraph 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt architecto molestiae fugit libero quod perferendis totam, quas numquam recusandae cumque rem obcaecati consequuntur quis quisquam incidunt neque doloribus ducimus.");


for(let i = 0; i < 3; i++){
    arrp[i] = document.createElement("p");
    arrp[i].appendChild(arrt[i]);
}


// event listener
for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click", function(){
        sections[i].appendChild(arrp[i]);
    })
}