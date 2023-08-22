var dx = 5;
var dy = 5;
var boxWidth;
var boxHeight;
var myInterval;

$(document).ready(function() {
    boxWidth = $('.box').width();
    boxHeight = $('.box').height();
    $('#start').click(function() {
        myInterval = setInterval(play, 50);
    })
    $('#stop').click(function() {
        clearInterval(myInterval);
    })
    $('.box-img').mouseover(function() {
        $(this).animate({
            width: '265px'
        }, 200)
    })
    .mouseout(function() {
        $(this).animate({
            width: '12.5%'
        }, 200)
    })

    $('#yes').click(function() {
        $('.box.color').css('background-color', '');
        $('.box').addClass('picture')
        $('.box').removeClass('color');
    })
    $('#no').click(function() {
        $('.box.picture').css({
            'background-image':"",
            'background-repeat':'',
            'background-size':''
        })
        $('.box').addClass('color')
        $('.box').removeClass('picture');
    })

    $(".pickColor div").click(function() {
        var color = $(this).css("background-color");
        var name;
        switch (color) {
            case "rgb(255, 0, 0)":
                name = "red"
                $('.color').css('background-color', 'red');
                break;
            case "rgb(0, 0, 255)":
                name = "blue"
                $('.color').css('background-color', 'blue');
                break;
            case "rgb(255, 255, 0)":
                name = "yellow"
                $('.color').css('background-color', 'yellow');
                break;
            case "rgb(0, 128, 0)":
                name = "green"
                $('.color').css('background-color', 'green');
                break;
            default:
                break;
        }
    })

    $(".img-flower").click(function() {
        var img = $(this).attr("src");
        $('.box.picture').css({
            'background-image':"url('" + img + "')",
            'background-repeat':'no-repeat',
            'background-size':'cover'
        })
    })
})

function play() {
    var moveBoxWidth = $('.moveBox').width();
    var moveBoxHeight = $('.moveBox').height();
    var boxTop = parseInt($('.box').css('top'));
    var boxLeft = parseInt($('.box').css('left'));
    if(boxLeft <= 0 || (boxLeft + boxWidth >= moveBoxWidth))
        dx = -dx;
    if(boxTop <= 0 || (boxTop + boxHeight >= moveBoxHeight))
        dy = -dy;
    $('.box').css('top', boxTop + dy + "px");
    $('.box').css('left', boxLeft + dx + "px");
}
