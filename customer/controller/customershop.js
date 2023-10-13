document.querySelector(".fa-sun").onclick = function () {
  document.querySelector(".fa-sun").style.display = "none";
  document.querySelector(".fa-moon").style.display = "block";

  // đưa một class dark vào body
  document.querySelector("body").classList.toggle("dark");
};

document.querySelector(".fa-moon").onclick = function () {
  document.querySelector(".fa-moon").style.display = "none";
  document.querySelector(".fa-sun").style.display = "block";

  document.querySelector("body").classList.toggle("dark");
};
