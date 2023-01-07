let wickedCss = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "heartBeat", "pulse", "rotation",
    "sideToSide", "zoomer", "zoomOut", "spinner", "wiggle", "shake", "pound", "slideUp", "slideDown",
    "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateInLeft", "rotateIn", "bounceIn"];

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

//chanetitle
btn6.addEventListener("click", function () {
    changetitle.className = "changetitle"
    document.getElementById("btn3").style.color = "red";
})

console.log(wickedCss);
//change text
btn1.addEventListener("click", function () {
    changetext.innerText = "you  have changed the text!!";
     
 })
//lorem
let lorem = document.getElementById("lorem");
btn2.addEventListener("click", function () {
    lorem.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quasi pariatur dicta necessitatibus veritatis exercitationem vero ipsa debitis consequuntur aliquid maxime officiis ex eligendi qui blanditiis repellendus sint! Fugiat, doloribus!";
    document.getElementById("lorem").style.color = "red";
})


//change the color
let color = document.getElementById("color");
function myFunction() {
    document.getElementById("btn3").style.color = "blue";
}


//alert

const button5 = document.createElement('button')
btn5.innerText = 'Im the lost button click me?'
btn5.id = 'mainButton'
btn5.addEventListener('click', () => {
    alert('Oh, you clicked me your done!')
})

document.body.appendChild(btn5)


//changelorem
btn4.addEventListener("click", function () {
    changelorem.className = "changelorem"
   
})
//bounceInnumber
btn7.addEventListener("click", function () {
    bounceIn.className = "bounceIn"
    document.getElementById("textcolor").style.color = "red";
    
})

btn7.addEventListener("click", function () {
    bounceIn.className = "bounceIn"
    
})
btn7.addEventListener("click", function () {
    bounceIn.className = "bounceIn"
    
})
btn7.addEventListener("click", function () {
    bounceIn.className = "bounceIn"
    
})

//count 
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0 

function buttonn(){

    count = count + 1

    countEl.innerText = count 
   
}

//card
let card = document.getElementById("card");
btn9.addEventListener("click", function () {
    card.innerText = "Hello there this is my card";
    document.getElementById("card").style.color = "black";
})


btn10.addEventListener("click", function () {
    rotation.className = "rotation"
    document.getElementById("rotation").style.color = "pink";
})