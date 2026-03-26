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
