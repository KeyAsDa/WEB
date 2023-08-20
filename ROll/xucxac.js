$(document).ready(function() {
    $('#quay').click(function() {
        random();
    })
})

function random() {
    var x1, x2, x3;
    a = [];
    for(var i = 0; i < 3; i++) {
        a[i] = Math.floor(Math.random() * 5) + 1;
    }
    x1 = a[0];
    x2 = a[1];
    x3 = a[2];
    kq = x1 + x2 + x3;
    $('#anh1').attr("src", "./anh/anh" + x1 + ".jpg");
    $('#anh2').attr("src", "./anh/anh" + x2 + ".jpg");
    $('#anh3').attr("src", "./anh/anh" + x3 + ".jpg");
    $('#kq').text(kq);
}