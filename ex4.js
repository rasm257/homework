function randomColor(){
    let r,g,b;
    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)
    return [r,g,b];
}


document.querySelectorAll("ol li").forEach((li)=>{
    li.addEventListener("click",function(){
        const colorList=randomColor();
        this.style.color=`rgb(${colorList[0]},${colorList[1]},${colorList[2]})`;
    })
})