// SELECT : ELEMENT

const jars = [...document.querySelectorAll(".jar")];
const removeWater = document.querySelector(".full-water");
const addWater = document.querySelector(".empty-water");
const remVolumn = document.querySelector(".span-volumn");
const addVolumn = document.querySelector(".fill-span");

// VARIABLES
let remWaterHeight;
let waterRemain;
let WaterAdded;

// LOGIC
jars.forEach((jar, ind) => {
  jar.addEventListener("click", function () {
    //for index
    let index = jar.classList.contains("fill") ? 0 : 1;

    remWaterHeight = 12.5 * index;

    //give heigth and class to the big jar
    removeWater.style.height = `${100 - remWaterHeight}%`;
    addWater.style.height = `${remWaterHeight}%`;
    addWater.classList.add("fill");
    jar.classList.toggle("fill");

    // SET VALUE

    waterRemain = (200 - 25 * index) * 0.01;
    WaterAdded = 12.5 * index;

    // change the text as per water
    remVolumn.textContent = `${waterRemain}L`;
    addVolumn.textContent = `${WaterAdded}%`;
  });
});
