import "./css/style.css";
import "./css/desktop.css";

const getStarted = document.getElementById("btn-start");

getStarted.addEventListener("click", (e) => {
  e.preventDefault();
  const start = document.querySelector(".block-container");
  start.classList.add("none");
  const dashboard = document.querySelector(".dashboard");
  dashboard.classList.remove("none");
  const particles = document.querySelector(".particles");
  particles.classList.add("none");
  const sideBar = document.querySelector("aside");
  sideBar.style.display = "block";
  const main = document.querySelector("main");
  main.style.display = "flex";
});
