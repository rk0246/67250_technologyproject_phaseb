var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello ";
var B = "World";
var C = A + B;
console.log(C);

sumnPrint(x, y);
sumnPrint(A, B);

function sumnPrint(x1, x2) {
  var sum = x1 + x2;
  console.log(sum);
}

if (C.length > z) {
  console.log(C);
  if (C.length < z) {
    console.log(z);
  }
} else {
  console.log("good job!");
}

var now = new Date();
var hours = now.getHours();

if (document.getElementById("greeting") != null) {
  greeting(hours);
}

function greeting(x) {
  if (x >= 20 || x > 5) {
    document.getElementById("greeting").innerHTML = "Good Night";
  } else if (x < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning";
  } else if (x < 18 && x >= 12) {
    document.getElementById("greeting").innerHTML = "Good Afternoon";
  } else if (x < 20 && x >= 18) {
    document.getElementById("greeting").innerHTML = "Good Evening";
  }
}

addYear();

function addYear() {
  var year = new Date().getFullYear();
  document.getElementById("copyYear").innerHTML = year;
}

/*L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
  for (var i = 0; i < loop.length; i++) {
    if (loop[i] === "Banana") {
      alert("Found the Banana!");
    }
  }
}

function findTheBanana2(array) {
  array.forEach((element) => {
    if (element === "Banana") {
      alert("Found the Banana!");
    }
  });
}

findTheBanana2(L1);*/
