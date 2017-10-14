var x = document.getElementById("x");
var y = document.getElementById("y");
var calculator = document.getElementById("select");
var result = document.getElementById("result");

var form = document.getElementById("calculators");

form.addEventListener('submit', function(event) {
if ( !x.value || !y.value ) {
    alert("Please enter a number for X and Y.");
} else {

var a = parseFloat(x.value);
var b = parseFloat(y.value);
var c = calculator.value;

calculation(a,b,c);
event.preventDefault();
}
})

