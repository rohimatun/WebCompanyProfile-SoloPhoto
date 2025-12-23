const sections = [
  "navbar",
  "hero",
  "about",
  "services",
  "gallery",
  "contact"
];

sections.forEach(section => {
  fetch(`sections/${section}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById(section).innerHTML = data;
    });
});
