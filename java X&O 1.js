function firstfunc()
{
    alert("you have created your first function ")
}
function average(num1, num2)
{
    var avg =(num1 + num2)/2.0;
    alert("average ="+ avg);
}
 function  playXandO()
{
    var player1 =Math.ceil(Math.random()*3);
    var player2 =Math.ceil(Math.random()*3);
    var Ximage ="X_image.png.";
    var Oimage ="O_image.png.";
    document.getElementById("finalresult").innerHTML ="updates"

    if (player1 ==1)
    {
        document.getElementById("player1Img").src =Ximage;
    }
    else
    {
        document.getElementById("player1Img").src =Oimage;
    }
    if (player2 ==2)
    {
        document.getElementById("player2Img").src =Ximage;
    }
    else
    {
        document.getElementById("player2Img").src =Oimage;
    }
     if (player1 == player2)
     {
        document.getElementById("final result").innerHTML ="DRAW";
     }
     else if((player1 == 1 && player2 ==2)  (player1 = 3 && player2 ==1))
     {
        document.getElementById("final result").innerHTML = "player 1 losses";
     }




}

