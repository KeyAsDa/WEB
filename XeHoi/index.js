arrHonda = ["Red", "Blue", "Yellow", "White"];
arrKia = ["Red1", "Blue1", "Yellow1", "White1"];


$(document).ready(function() {
    mouseHandle();

    $('#car').change(function() {
        var car = $('#car').val();
        if(car == "Kia") {
            showImg(arrKia);
            $('#img-product').attr("src", "./anhBlue1.jfif");
        }
        else if(car == "Honda") {
            showImg(arrHonda)
            $('#img-product').attr("src", "./anhBlue.jfif");
        }
    })

    $(".box-color").click(function() {
        var color = $(this).css("background-color");
        var carType = $('#car').val();
        var car;
        if(carType === "Honda")
            car = "";
        else
            car = "1";
        changeColor(car, color);
    }) 

    $('.btn').click(function() {
        var count = $('#count').val();
        var carType = $('#car').val();
        $('#desc').text("Bạn đã đặt mua " + count + " xe " + carType);
    })
})

function changeColor(car, color) {
    var colorName;
    switch (color) {
        case "rgb(255, 0, 0)":
            colorName = "Red"
            $('#img-product').attr("src", "./anh" + colorName + car + ".jfif");
            break;
        case "rgb(, 0, 255)":
            colorName = "Blue"
            $('#img-product').attr("src", "./anh" + colorName + car + ".jfif");
            break;
        case "rgb(255, 255, 0)":
            colorName = "Yellow"
            $('#img-product').attr("src", "./anh" + colorName + car + ".jfif");
            break;
        case "rgb(255, 255, 255)":
            colorName = "White"
            $('#img-product').attr("src", "./anh" + colorName + car + ".jfif");
            break;
        default:
            break;
    }
}

function mouseHandle() {
    $('.img').mouseover(function() {
        $(this).animate({
            height: '180px'
        })
    })
    .mouseout(function() {
        $(this).animate({
            height: '140px'
        })
    })
}

function showImg(arr) {
    $(".list-cars").empty();
    for(var i = 0; i < 4; i++) {
        $(".list-cars").append('<img src="./anh' + arr[i] + '.jfif" class="img">');
    }
    mouseHandle();
}