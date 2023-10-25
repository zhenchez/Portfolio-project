const links = document.querySelectorAll(".header-links");
const backToTop = document.querySelector(".to-top-btt");
const projects = document.querySelectorAll(".project-info");

projects.forEach((project, i) => {
  let name = document.getElementById(`project${i}`).getAttribute("name");
  project.addEventListener("click", () => {
    window.open(`./${name}/index.html`, "_blank");
  });
});

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.getAttribute("href").substring(1);

    const targetElement = document.getElementById(target);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 120,
      });
    }
  });
});

backToTop.addEventListener("click", e => {
  e.preventDefault();

  const target = backToTop.getAttribute("href").substring(1);

  const targetElement = document.getElementById(target);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 120,
    });
  }
});

function validatePhone(event, value, maxLength) {
  if (value != undefined && value.toString().length >= maxLength) {
    event.preventDefault();
  }
}

function resetInputs() {
  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("subject").value = "";
  document.querySelector(".message").value = "";
}

function submitAlert() {
  const alertName = document.getElementById("name").value;
  alert(`${alertName}, thanks for contacting me!`);
  resetInputs();
}
