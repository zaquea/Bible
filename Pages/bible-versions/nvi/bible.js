let bible = [];

const bookSelect = document.getElementById("book");
const chapterSelect = document.getElementById("chapter");
const versesContainer = document.getElementById("verses");



async function loadBible() {
  const response = await fetch("../../../Json/nvi.json");
  bible = await response.json();

  loadBooks();
}



function loadBooks() {
  bookSelect.innerHTML = "";

  bible.forEach((book, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = book.name || book.abbrev;

    bookSelect.appendChild(option);
  });

  loadChapters();
}



function loadChapters() {
  const bookIndex = bookSelect.value;
  const book = bible[bookIndex];

  chapterSelect.innerHTML = "";

  book.chapters.forEach((_, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = index + 1;

    chapterSelect.appendChild(option);
  });

  showVerses();
}



function showVerses() {
  const bookIndex = bookSelect.value;
  const chapterIndex = chapterSelect.value;

  const verses = bible[bookIndex].chapters[chapterIndex];

  versesContainer.innerHTML = "";

  verses.forEach((verse, index) => {
    const verseElement = document.createElement("p");

    verseElement.innerHTML = `<span class="verse-number">${index + 1}</span> ${verse}`;

    versesContainer.appendChild(verseElement);
  });
}



bookSelect.addEventListener("change", loadChapters);
chapterSelect.addEventListener("change", showVerses);



loadBible();

function toggleDarkLightMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("button")
    .textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    document.body.classList.toggle("light-mode");
}
