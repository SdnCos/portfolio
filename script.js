function openTab(evt, tabName) {
  // Hide all tab contents
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => {
    content.classList.remove("active");
  });

  // Remove active class from all tab buttons
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(button => {
    button.classList.remove("active");
  });

  // Show the specific tab and mark button as active
  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add("active");
  }
  evt.currentTarget.classList.add("active");
}
