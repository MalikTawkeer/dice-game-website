

var player_1 = Math.floor(Math.random() * 6) + 1;
var player_2 = Math.floor(Math.random() * 6) + 1;

// var won_count_1 =0;
// var won_count_2 =0;

updatePlayer1_dice(player_1);
updatePlayer2_dice(player_2);

if(player_1 == player_2){
    document.getElementById("show-result").textContent = "DRAW!!!!!";
    document.getElementById("show-result").style.backgroundColor = "red";
    document.getElementById("show-result").style.color = "white";
    document.getElementById("show-result").style.fontSize = "30px";
}else if(player_1 > player_2){
    document.getElementById("show-result").textContent = "PLAYER-1 WON";
    document.getElementById("show-result").style.color = "white";
    document.getElementById("show-result").style.backgroundColor = "green";
    document.getElementById("player-1-heading").style.backgroundColor = "green";
    
}else{
    document.getElementById("show-result").textContent = "PLAYER-2 WON";
    document.getElementById("show-result").style.color = "white";
    document.getElementById("show-result").style.backgroundColor = "green";
    document.getElementById("player-2-heading").style.backgroundColor = "green";
}






function updatePlayer1_dice(randomNumber)
{
    if (randomNumber == 1) {
        document.getElementById("player-1-img").setAttribute("src", "./assets/1.png")
    } else if (randomNumber == 2) {
        // document.getElementsByClassName("player-1-img").setAttribute("src","assets/3.png");
        document.getElementById("player-1-img").setAttribute("src", "./assets/2.png")
    } else if (randomNumber == 3) {
        document.getElementById("player-1-img").setAttribute("src", "./assets/3.png")
    } else if (randomNumber == 4) {
        document.getElementById("player-1-img").setAttribute("src", "./assets/4.png")
    } else if (randomNumber == 5) {
        document.getElementById("player-1-img").setAttribute("src", "./assets/5.png")
    } else {
        document.getElementById("player-1-img").setAttribute("src", "./assets/6.png")
    }
}

function updatePlayer2_dice(randomNumber)
{
    if (randomNumber == 1) {
        document.getElementById("player-2-img").setAttribute("src", "./assets/1.png")
    } else if (randomNumber == 2) {
        // document.getElementsByClassName("player-1-img").setAttribute("src","assets/3.png");
        document.getElementById("player-2-img").setAttribute("src", "./assets/2.png")
    } else if (randomNumber == 3) {
        document.getElementById("player-2-img").setAttribute("src", "./assets/3.png")
    } else if (randomNumber == 4) {
        document.getElementById("player-2-img").setAttribute("src", "./assets/4.png")
    } else if (randomNumber == 5) {
        document.getElementById("player-2-img").setAttribute("src", "./assets/5.png")
    } else {
        document.getElementById("player-2-img").setAttribute("src", "./assets/6.png")
    }
}
