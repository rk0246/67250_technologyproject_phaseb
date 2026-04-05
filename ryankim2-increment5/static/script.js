var now = new Date();
var hours = now.getHours();

if (document.getElementById("greeting") != null) {
  greeting(hours);
}

function greeting(x) {
  if (x <= 12) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
  } else if (x > 12) {
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
  }
}

addYear();

function addYear() {
  var year = new Date().getFullYear();
  document.getElementById("copyYear").innerHTML = year;
}

activeNav();

function activeNav() {
  const navLinks = document.querySelectorAll(".nav_bar a");
  const currentPage = window.location.pathname;

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    if (currentPage === "/" && linkPath.includes("index.html")) {
      link.classList.add("active");
    } else if (currentPage.includes(linkPath)) {
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

function toggleMenu() {
  const nav = document.getElementById("navbar");

  if (!nav) return; // prevents crash

  nav.classList.toggle("responsive");
}

let currentSlide = 0;
let slides;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".slide");
  showSlide(currentSlide);

  setInterval(nextSlide, 5000);
});

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

if (document.getElementById("map")) {
  var map = L.map("map").setView([34.0522, -118.2437], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([34.054466, -118.250565]).addTo(map);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkoutForm");
  const quantity = document.getElementById("quantity");
  const ticketType = document.getElementById("ticketType");
  const totalPrice = document.getElementById("totalPrice");
  const errorMsg = document.getElementById("errorMsg");

  if (!form || !quantity || !ticketType || !totalPrice) {
    console.log("Checkout elements not found");
    return;
  }

  function getPrice(type) {
    if (type === "adult") return 18;
    if (type === "student") return 10;
    if (type === "member") return 15;
    return 0;
  }

  function updateTotal() {
    const qty = parseInt(quantity.value) || 0;
    const type = ticketType.value;

    const total = qty * getPrice(type);
    totalPrice.textContent = total;
  }

  quantity.addEventListener("input", updateTotal);
  ticketType.addEventListener("change", updateTotal);

  updateTotal();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const type = ticketType.value;
    const qty = quantity.value;
    const zip = document.getElementById("zip").value;

    errorMsg.textContent = "";

    // Required fields
    if (!name || !email || !date || !type || !qty) {
      errorMsg.textContent = "Please fill out all required fields.";
      return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errorMsg.textContent = "Invalid email format.";
      return;
    }

    // Zip validation (optional)
    if (zip && !/^\d{5}$/.test(zip)) {
      errorMsg.textContent = "Zip code must be 5 digits.";
      return;
    }

    // ✅ SUCCESS
    const total = qty * getPrice(type);
    alert("Order placed! Total: $" + total);
  });
});

function initBorderTrace(btn) {
  const { width, height } = btn.getBoundingClientRect();
  const r = 16; // must match border-radius

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("border-svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "1");
  rect.setAttribute("y", "1");
  rect.setAttribute("width", width - 2);
  rect.setAttribute("height", height - 2);
  rect.setAttribute("rx", r);

  svg.appendChild(rect);
  btn.prepend(svg);

  // measure after it's in the DOM
  const perimeter = rect.getTotalLength();
  btn.style.setProperty("--perimeter", perimeter);
}

initBorderTrace(document.getElementById("cta"));
/*
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

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
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
