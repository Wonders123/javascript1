var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentageOfY");

form.addEventListener('submit', function() {
    if (!numField1.value || !numField2.value) {
        alert("please Enter Values in the Fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var result = x/y;
        var percent = result*100;

        resultField.innerText  = "Answer: " + percent + "%";
        event.preventDefault();
    }
});
