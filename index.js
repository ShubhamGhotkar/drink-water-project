// SELECT : ELEMENT

const jars = document.querySelectorAll(".jar");
const removeWater = document.querySelector(".full-water");
const addWater = document.querySelector(".empty-water");
const remVolumn = document.querySelector(".span-volumn");
const addVolumn = document.querySelector(".fill-span");

// VARIABLES
let toggle = false;
let remWaterHeight;
let waterRemain;
let WaterAdded;

// FUCTIONS
function addBackEffect(ind) {
  for (let i = 0; i <= ind; i++) {
    jars[i].classList.add("fill");
  }
  for (let i = ind + 1; i < jars.length; i++) {
    jars[i].classList.remove("fill");
  }
}

// LOGIC
jars.forEach((jar, ind) => {
  jar.addEventListener("click", function () {
    //
    addBackEffect(ind);

    remWaterHeight = 12.8 * (ind + 1);

    //
    removeWater.style.height = `${100 - remWaterHeight}%`;
    addWater.style.height = `${remWaterHeight}%`;
    addWater.classList.add("fill");

    // SET VALUE
    waterRemain = (200 - 25 * (ind + 1)) * 0.01;
    WaterAdded = 12.5 * (ind + 1);
    remVolumn.textContent = `${waterRemain}L`;
    addVolumn.textContent = `${WaterAdded}%`;
  });
});
