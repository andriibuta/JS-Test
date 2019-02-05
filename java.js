window.onload = function fun1() {
  var x1 = Math.floor(Math.random() * 800 + 100);
  var x2 = Math.floor(Math.random() * 800 + 100);
  var x3 = Math.floor(Math.random() * 800 + 100);
  var x4 = Math.floor(Math.random() * 800 + 100);
  var x5 = Math.floor(Math.random() * 800 + 100);
  var x6 = Math.floor(Math.random() * 800 + 100);
  var x7 = Math.floor(Math.random() * 800 + 100);
  var x8 = Math.floor(Math.random() * 800 + 100);
  var x9 = Math.floor(Math.random() * 800 + 100);
  if (x1 != x2) {
    fun1;
  }
  document.getElementById("n1").innerHTML = x1;
  document.getElementById("n2").innerHTML = x2;
  document.getElementById("n3").innerHTML = x3;
  document.getElementById("n4").innerHTML = x4;
  document.getElementById("n5").innerHTML = x5;
  document.getElementById("n6").innerHTML = x6;
  document.getElementById("n7").innerHTML = x7;
  document.getElementById("n8").innerHTML = x8;
  document.getElementById("n9").innerHTML = x9;
  
};
function() {
    var a = document.getElementById("n1").innerHTML;
    var b = document.getElementById("n2").innerHTML;
    var c = document.getElementById("n3").innerHTML;
    var sum = a + b + c;
    document.getElementById("resultM1").innerHTML = sum;
  };