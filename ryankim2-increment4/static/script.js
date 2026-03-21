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

activeNav();

function activeNav() {
  const navLinks = document.querySelectorAll("nav li a");

  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}

// When the "Read Less" button is clicked
$("#readLess").click(function () {
  $("#longText").hide(); // Hide the long introduction text
  $("#readLess").hide(); // Hide the "Read Less" button itself
  $("#readMore").show(); // Show the "Read More" button
});

// When the "Read More" button is clicked
$("#readMore").click(function () {
  $("#longText").show(); // Show the long introduction text
  $("#readLess").show(); // Show the "Read Less" button
  $("#readMore").hide(); // Hide the "Read More" button
});

function showCheckout() {
  document.getElementById("checkoutForm").style.display = "block";
}

function submitCheckout() {
  alert("redirceting to payment system...");
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
