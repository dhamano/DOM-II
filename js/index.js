// Your code goes here
let headerImage = document.querySelector("#fun-bus");
let containerDiv = document.querySelector(".container.home");
let inputEl = document.querySelector("#input");
let btnEl = document.querySelectorAll(".btn");
let aEl = document.querySelectorAll("a");
let counter = 0;

function rotate(el, time, degreeFrom) {
  TweenMax.to(el, time, {
    transform: "rotateY("+degreeFrom+"deg)"
  })
}

function createEl(msg) {
  console.log('counter',counter);
  let check = document.querySelectorAll('.temp-message');
  if(check.length === 0) {
    let newDiv = document.createElement('div');
  if (counter >= 40) {
    newDiv.textContent = "I'm watching you...";
    counter = 0;
  } else {
    newDiv.textContent = msg;
  }
    newDiv.setAttribute("class","temp-message");
    newDiv.setAttribute("style","background: white; border-radius: 10px; padding: 20px; box-shadow: 2px 2px 4px black; position: fixed; top: 100px; left: 100px;")
    containerDiv.appendChild(newDiv);
    setTimeout(fadeToDelete, 1000);
  }
}

function fadeToDelete() {
  TweenMax.to(document.querySelectorAll('.temp-message'), 0.75, {
    opacity: 0,
    onComplete: deleteOver
  })
}

function deleteOver() {
  let temp = document.querySelectorAll('.temp-message');
  temp[0].remove();
}


headerImage.addEventListener("mouseover", () => {
  counter++;
  rotate(headerImage, 1, 180);
})

headerImage.addEventListener("mouseout", () => {
  counter++;
  rotate(headerImage, 1, 0);
})

window.addEventListener("keydown", () => {
  counter++;
  createEl("you pressed a key!");
})

window.addEventListener('wheel', () => {
  counter++;
  createEl("you scrolled!");
})

window.addEventListener('drag', event => {
  counter++;
  createEl("No fair dragging!");
})

window.addEventListener('load', () => {
  counter++;
  createEl("the page has fully loaded!")
})

inputEl.addEventListener('focus', () => {
  counter++;
  createEl("You focused on an input field!");
})

window.addEventListener('resize', () => {
  counter++;
  createEl("Didn't like the size I was?")
})

window.addEventListener('scroll', () => {
  counter++;
  createEl("Scrolling, scrolling, scrolling!")
})

inputEl.addEventListener('select', () => {
  console.log('select!');
  counter++;
  createEl("I see you selecting things.")
})

window.addEventListener('dblclick', () => {
  counter++;
  createEl("There is no need for double clicking!")
})

window.addEventListener('click', () => {
  counter++;
  let bodyEl = document.querySelector('body')
  let bgColor = bodyEl.style.backgroundColor;
  console.log('color',bgColor);
  if(bgColor === "" || bgColor === "white") { bodyEl.style.backgroundColor = "cyan"; }
  if(bgColor === "cyan") { bodyEl.style.backgroundColor = "magenta"; }
  if(bgColor === "magenta") { bodyEl.style.backgroundColor = "white"; }
})

btnEl.forEach( item => {
  item.addEventListener('click', event => {
    counter++;
    createEl("Click!");
    event.stopPropagation();
  })
})

aEl.forEach( item => {
  item.addEventListener('click', event => {
    counter++;
    createEl("I'VE BORKEN THE LINKS!");
    event.preventDefault();
  })
})