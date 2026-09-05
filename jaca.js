function openTab(evt, tabName) {
  const contents = document.getElementsByClassName("tab-content");
  for (let content of contents) {
    content.classList.remove("active");
  }

  const buttons = document.getElementsByClassName("tab-btn");
  for (let button of buttons) {
    button.classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}