// SELECT : ELEMENT

const jars = document.querySelectorAll(".jar");
const removeWater = document.querySelector(".full-water");
const addWater = document.querySelector(".empty-water");
const remVolumn = document.querySelector(".span-volumn");
const addVolumn = document.querySelector(".fill-span");

// Array
let set = new Set();

// VARIABLES
let toggle = false;
let remWaterHeight;
let waterRemain;
let WaterAdded;
let waterInd;

// FUCTIONS
function addBackEffect(ind) {
  // for add the class
  for (let i = 0; toggle ? i < ind : i <= ind; i++) {
    jars[i].classList.add("fill");
  }

  // for remove the fill class on remaining element
  for (let i = toggle ? ind : ind + 1; i < jars.length; i++) {
    jars[i].classList.remove("fill");
  }
}

// LOGIC
jars.forEach((jar, ind) => {
  jar.addEventListener("click", function () {
    // call to the function
    addBackEffect(ind);

    // set index of water level base on the toggle
    waterInd = toggle ? ind : ind + 1;
    remWaterHeight = 12.5 * waterInd;

    //give heigth and class to the big jar
    removeWater.style.height = `${100 - remWaterHeight}%`;
    addWater.style.height = `${remWaterHeight}%`;
    addWater.classList.add("fill");

    // SET VALUE

    waterRemain = (200 - 25 * waterInd) * 0.01;
    WaterAdded = 12.5 * waterInd;

    // change the text as per water
    remVolumn.textContent = `${waterRemain}L`;
    addVolumn.textContent = `${WaterAdded}%`;

    // toggle
    toggle = !toggle;
  });
});
