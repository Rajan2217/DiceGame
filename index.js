var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

function changeHeading(){
    if (randomNumber1>randomNumber2){
        var win1 = "Player 1 Wins!";
        return win1;
    }
    else if (randomNumber1<randomNumber2){
        var win2 = "Player 2 Wins!";
        return win2;
    }
    else{
        var noWin = "Draw!"
        return noWin;
    }
}
document.querySelector("h1").textContent = changeHeading();
