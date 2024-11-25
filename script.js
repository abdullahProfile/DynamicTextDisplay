var para = "";
var i=0;
function addtext() {
  var readvalue = document.getElementById('txt').value;

  if (readvalue) {
    para = document.createElement("p");
    para.innerText = readvalue;
    i++;
    document.getElementById('txt').value = '';
  }
}

function displayitem() {
  if (para) {
    var paraWithIndex = document.createElement("p");
          paraWithIndex.innerText = i + ": " + para.innerText;
          document.getElementById('addtxt').appendChild(paraWithIndex);
          para = "";
  } else {
    alert('Please add some text first!');
  }
}