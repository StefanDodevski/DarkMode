const toggleBtn = document.getElementById("darkModeToggle");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", function () {
  console.log(toggleBtn.textContent);
  if (toggleBtn.textContent === "Dark Mode") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    navbar.style.backgroundColor = "black";
    navbar.style.boxShadow = "0px 5px 10px rgba(255, 255, 255,0.2)";
    toggleBtn.style.backgroundColor = "white";
    toggleBtn.style.color = "black";
    toggleBtn.innerHTML = "Light mode";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = " 0 5px 10px hsla(0, 0%, 0%, 0.2)";
    toggleBtn.style.backgroundColor = "#333";
    toggleBtn.style.color = "white";
    toggleBtn.innerHTML = "Dark Mode";
  }
});
