function chooseVersion() {
  const select = document.getElementById("version-select");
  const error = document.getElementById("error-message");
  const version = select.value;

  if (version === "") {
    error.textContent = "Escolha uma versão da Bíblia";

    setTimeout(function () {
      error.textContent = "";
    }, 5000);

    return;
  }

  error.textContent = "";

  localStorage.setItem("selectedVersion", version);
  window.location.href = `../../pages/bible/bible.html?v=${version}`;
}

const button = document.querySelector(".btn-ham");
const menu = document.querySelector(".nav-links");

button.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = menu.classList.toggle("active");

  menu.classList.toggle("open");
  document.body.classList.toggle("active");

  button.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.remove("active", "open");
    document.body.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
  }
});
