// interaction 1 //
const button1 = document.getElementById("interactbutton1");
const sections = document.querySelectorAll(".section");

const targetSection = document.querySelector(".section:nth-child(3)");

button1.addEventListener("click", () => {
    button1.style.backgroundColor = "pink";
    button1.style.color = "white";


    sections.forEach(section => {
        section.style.display = "none";
    });


    targetSection.style.display = "block";
});

// interaction 2 //
const likeButtons = document.querySelectorAll(".like-btn");

const fullHeart = 'https://www.svgrepo.com/show/525369/heart.svg' 

likeButtons.forEach(image => {
    image.addEventListener("click", () => {
        image.src = fullHeart;
    });
});
  