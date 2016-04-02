var txt = document.querySelector("[data-action=input-list]")

if ( localStorage.getItem("alphabetize")) {
  txt.value = localStorage.getItem("alphabetize");
}

document.querySelector("[data-action=alphabetize]").onclick = function() {
  txt.value = (txt.value.split("\n").sort(caseInsensitive).join("\n"))

  function caseInsensitive(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  }
  localStorage.setItem("alphabetize", txt.value);
}
