document.addEventListener("DOMContentLoaded", function () {
  // Function to scroll to the target section
  function scrollToSection() {
    document
      .getElementsByClassName("section2")
      .scrollIntoView({ behavior: "smooth" });
  }

  // Attach event listeners to the links
  document
    .getElementById("nav-about")
    .addEventListener("click", function (event) {
      event.preventDefault();
      scrollToSection();
    });

  document
    .getElementById("footer-about")
    .addEventListener("click", function (event) {
      event.preventDefault();
      scrollToSection();
    });
  document
    .getElementsById("get-started")
    .addEventListener("click", function (event) {
      event.preventDefault();
      scrollToSection();
    });
});
