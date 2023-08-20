function sub() {
    var user = document.forms.myForm['user'].value;
    var soLuong = document.forms.myForm['soLuong'].value;
    var d = document.forms.myForm['date'].value;
    var kq = ""
    var ck = document.forms.myForm['ck'];
    var tt = document.forms.myForm['tt'];
    var chuyenKhoan = ck.checked;
    var trucTiep = tt.checked;
    if(user == "" || soLuong == "" || d == "" || (chuyenKhoan == false && trucTiep == false)) {
        if(user == "") {
            kq += "Họ không được để trống" + "<br>"
        }
        if(soLuong == "") {
            kq += "Số lượng không được để trống và phải lớn hơn 0" + "<br>"
        }
        if(d == "") {
            kq += "Ngày không được để trống" + "<br>"
        }
        if(chuyenKhoan == false && trucTiep == false) {
            kq += "Bạn phải chọn điều kiện thanh toán" + "<br>"
        }
        document.getElementById('desc').innerHTML = kq;
        return false;
    }
    return true;
}

$(document).ready(function() {
    $('#quay').click(function() {
        random();
    })
})

function random() {
    var x1, x2, x3;
    a = [];
    for(var i = 0; i < 3; i++) {
        a[i] = Math.floor(Math.random() * 10);
    }
    x1 = a[0];
    x2 = a[1];
    x3 = a[2];
    kq = x1 + x2 + x3;
    $('#so1').text(x1);
    $('#so2').text(x2);
    $('#so3').text(x3);
    $('#kq').text(kq);
}