const colorInput=document.getElementById("colorbar");
const textOutput=document.getElementById("rgbvalue");
let fontOutput=document.getElementById("fontPlace")
let fontSelec=document.getElementById("fontSelector")
colorInput.addEventListener("input",() => {
    const selectedCol=colorInput.value;
    textOutput.style.color=selectedCol;
})
fontOutput.addEventListener("input",() => {
    textOutput.style.fontSize=fontOutput.value+"px";
})
fontSelec.addEventListener("change",() => {
    textOutput.style.fontFamily=fontSelec.value;
})