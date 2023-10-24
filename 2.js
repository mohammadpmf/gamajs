var audio = new Audio('1.mp3');
audio.currentTime = 12.75;
var answer = Math.random()*100;
answer = Math.ceil(answer);
console.log(answer);
var mistake = 0

function f(){
    audio.play()
    var guess = document.getElementById("number");
    var t = guess.value
    var text = document.getElementById("result_text");
    console.log(t);
    if (mistake<10){
        if (t==answer){
            text.innerHTML=`Right! The answer is ${t}`;
            text.style.backgroundColor='Green';
            text.style.fontSize=2+'em';
            text.style.width=40+'vw';
        }
        else if (t>answer){
            text.innerHTML=`Guess a number less than ${t}`;
            // text.innerHTML="Guess a number lower than " + t;
            mistake++;
        }
        else{
            text.innerHTML=`Guess a number more than ${t}`;
            mistake++;
        }
        console.log(mistake);
        if (mistake>=9){
            audio.pause()
        }
        else if (mistake>=7){
            text.style.backgroundColor='red';
        }
        else if (mistake>=5){
            text.style.backgroundColor='orange';
        }
    }
    else{
        text.innerHTML=`Guess is finished. You lost.`;
        audio.pause()
    }
}