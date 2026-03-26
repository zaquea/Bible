
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getVersion() {
  const urlVersion = getParam("v");
  const savedVersion = localStorage.getItem("selectedVersion");

  return urlVersion || savedVersion || "nvi";
}

function save(key, value) {
  localStorage.setItem(key, value);
}

function load(key) {
  return localStorage.getItem(key);
}