function maHoa() {
    var text1 = new String(document.getElementById('text1').value);
    arr = text1.split("");
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] != ' ') {
            var x = text1.charCodeAt(i) + 1;
            if(x === 58) {
                x = 48
            }
            else if(x === 91) {
                x = 65
            }
            else if(x === 123) {
                x = 97
            }
            newArr[i] = String.fromCharCode(x);
        }
        else {
            newArr[i] = arr[i];
        }
    }
    document.getElementById('text2').value = newArr.join("");
}

function giaiMa() {
    var text2 = new String(document.getElementById('text2').value);
    console.log(text2);
    arr = text2.split("");
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] != ' ') {
            var x = text2.charCodeAt(i) - 1;
            if(x === 47) {
                x = 57
            }
            else if(x === 64) {
                x = 90
            }
            else if(x === 96) {
                x = 122
            }
            newArr[i] = String.fromCharCode(x);
        }
        else {
            newArr[i] = arr[i];
        }
    }
    document.getElementById('text1').value = newArr.join("");
}