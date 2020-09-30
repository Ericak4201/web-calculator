function addition() {
  var numOne = Number(document.getElementById("numOne").value);
  var numTwo = Number(document.getElementById("numTwo").value);
  var answer = numOne + numTwo;
  document.getElementById("answer").innerHTML = answer;
}
