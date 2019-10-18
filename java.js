var player1 = Math.floor((Math.random() * 6) + 1);
var RandomImage = "d" + player1 + ".PNG" ;

var ImageSource = "images/" + RandomImage;

var image = document.querySelectorAll('img')[0];

image.setAttribute("src", ImageSource);


var player2 = Math.floor((Math.random() * 6) + 1);

var RandomImage2 = "d" + player2 + ".PNG" ;

var ImageSource2 = "images/" + RandomImage2;

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", ImageSource2);


if(player1 > player2){
  document.querySelector('main').innerHTML = " 🎉player 1 Win🎊";
}else if(player1 < player2){
    document.querySelector('main').innerHTML = " 🎉player 2 Win🎊";
}else {
    document.querySelector('main').innerHTML = "😢 Game Over";
}
