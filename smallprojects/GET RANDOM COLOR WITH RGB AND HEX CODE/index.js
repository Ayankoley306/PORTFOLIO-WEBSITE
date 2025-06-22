// Dom variables
let color = document.querySelector(".color");
let genBtn = document.querySelector(".gen-btn")
let rgb = document.querySelector(".rgb");
let hex =document.querySelector(".hex");
let searchRGB = document.querySelector(".search-rgb");
let searchHEX = document.querySelector(".search-hex");






// ramdom color genettor
genBtn.addEventListener("click", () => {
    let num1 = Math.floor(Math.random()*255);
    let num2 = Math.floor(Math.random()*255);
    let num3 = Math.floor(Math.random()*255);
    console.log(num1, num2, num3);
    color.style.backgroundColor =`rgb(${num1}, ${num2}, ${num3})`;
    rgb.value = `${num1}, ${num2}, ${num3}`;
    rgbToHex(num1, num2, num3);
});
// convert rgb to hex
function rgbToHex(num1, num2, num3) {
    const toHex = (num) => {
        let hex = num.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const hexColor = `#${toHex(num1)}${toHex(num2)}${toHex(num3)}`;
    hex.value = hexColor.toUpperCase();
}
// search color by rgb and hex
