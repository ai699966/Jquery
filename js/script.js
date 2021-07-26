$(".icon").click(function () {
    $('#sidebar').animate({left:"0px"});
    $('.icon').animate({left:$('#sidebar').innerWidth()})
})
$("#sidebar i").click(function () {
    $('#sidebar').animate({left:`-${$('#sidebar').innerWidth()}px`});
    $('.icon').animate({left:'20px'})
})
$('ul a').click(function (e) {
let sec = $(e.target).attr("href");
console.log($(sec).offset().top);
$("html,body").animate({scrollTop:$(sec).offset().top},1000);
})


let parag = $("#details h3");
console.log(parag);
$("#details h3").click(function (e) {
    $("#details h3").not($(e.target)).next().slideUp();
    $(e.target).siblings().slideToggle();

})
let sec = 15;
let minu = 30;
let hours = 5;
let days = 500;
setInterval( function () {
    $('#seconds').html(`0-${sec} s`);
    $('#minuts').html(`0-${minu} m`);
    $('#hours').html(`0-${hours} h`);
    $('#days').html(`-${days} D`);
    sec++;
    if ( sec == 60 ) {
        sec = 0 ;
        minu++; 
        if (minu == 60) {
            minu = 0 ;
            hours++;
            if (hours == 24) {
                hours == 0;
                days++;
            }
        }
    }

}, 1000)

let span = document.getElementById('textLength');
let textArea = document.querySelector('textarea');
textArea.addEventListener('input',function () {
    span.innerHTML = textArea.maxLength - textArea.textLength
    if ( span.innerHTML == 0) {
        span.innerHTML = 'your available character finished';
    }
})
