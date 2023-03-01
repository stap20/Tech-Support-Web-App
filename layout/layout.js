function loadSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("sidebar-container").innerHTML =
        this.responseText;
      addPageLoadListeners();
    }
  };
  xhr.open("GET", "sidebar.html", true);
  xhr.send();
}

loadSidebar();
