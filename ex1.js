let numberAttempt=0;
let randInt;
let guessedInt;

while(true){
let diff = parseInt(prompt("choose ur difficulty vro : 1(easy), 2(medium) or 3(hard)"));
switch (diff){
    case 1:
        numberAttempt=10;
        break;
    case 2:
        numberAttempt=5;
        break;
    case 3:
        numberAttempt=3;
        break;
    default:
        alert("cant do that vro........");
        break;
}

randInt=Math.floor(Math.random()*10);
while(numberAttempt!=0){
    guessedInt=parseInt(prompt("Enter your guessed number here gangy : "));
    if(guessedInt==randInt){
        alert("dang u goated for real");
        break;
    }else if(guessedInt>randInt){
        alert("nah too high");
    }else{
        alert("nah too low");
    }
    numberAttempt--;
}
if(numberAttempt==0&&guessedInt!=randInt)
    alert("give it up vro.........");
}
