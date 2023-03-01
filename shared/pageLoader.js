function addPageLoadListeners() {
  var links = document.querySelectorAll("[data-page]");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", loadPage);
  }
}

function loadPage(event) {
  event.preventDefault();
  var page = this.getAttribute("data-page");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", "file://" + page + ".html", true);
  xhr.send();
}
