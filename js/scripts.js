// https://api.jquery.com/
//FOLDER

$(function(){
  $(".imgbox").click(function(){
      $(this).toggleClass("js-click");
      $(".card").toggleClass("js-click2");
  });
})

//COPYRIGHT

let date = new Date();
let currentYear = date.getFullYear(); 

console.log( currentYear );
console.log( date);
$('p span').text(currentYear)

//Random Number

const limit = 2;
const randNum = Math.floor(Math.random() * limit);

console.log(randNum);

//Set Background Color

$( 'body' ).addClass( 'bg' + randNum );

//PLYR

const player = new Plyr('#player' , {

controls : ['play', 'progress'] 

});