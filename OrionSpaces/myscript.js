let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let header = documen.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-container", { origin: "right" });
ScrollReveal().reveal(".home-container h3, .home-img", { origin: "top" });
ScrollReveal().reveal(".home-container h1", { origin: "left" });

ScrollReveal().reveal(".about-container", { origin: "right" });
ScrollReveal().reveal(".about-container h2, .about-img", { origin: "top" });
ScrollReveal().reveal(".about-container h1", { origin: "left" });

function register() {
  let userReg = document.getElementById("user").value;
  let mailReg = document.getElementById("mail").value;
  let passReg = document.getElementById("pass").value;

  if (
    userReg == localStorage.getItem("user") ||
    mailReg == localStorage.getItem("mail")
  ) {
    alert("This mail is already in use");
  } else {
    localStorage.setItem("user", userReg);
    localStorage.setItem("mail", mailReg);
    localStorage.setItem("pass", passReg);

    window.open("login.html", "_self");
  }
}

function login() {
  let userLog = localStorage.getItem("user");
  let passLog = localStorage.getItem("pass");

  if (userLog != null && passLog != null) {
    let userReg = document.getElementById("user").value;
    let passReg = document.getElementById("pass").value;

    if (userLog == userReg && passLog == passReg) {
      alert("Welcome back! " + userReg);
      window.open("index.html", "_self");
    } else {
      alert("Wrong User or Password");
    }
  } else {
    alert("There's no data found");
  }
}

/* function enableHome() {
   let homee = document.getElementById("home");

   if(homee.style.display == "none"){
      homee.style.display = "flex";
   }
   else {
      homee.style.display = "none";
   }
}

function enableAbout() {
   let aboutt = document.getElementById("about");

   if(aboutt.style.display == "none"){
      aboutt.style.display = "flex";
   }
   else {
      aboutt.style.display = "none";
   }
}

function enableContact() {
   let contactt = document.getElementById("contact");

   if(contactt.style.display == "none"){
      contactt.style.display = "block";
   }
   else {
      contactt.style.display = "none";
   }
} */

function submitMsg() {
  let fullname = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let msg = document.getElementById("msg").value;

  alert(
    "Name: " +
      fullname +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Subject: " +
      subject +
      "\n" +
      "Message: " +
      msg
  );

  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("msg").value = "";
}
