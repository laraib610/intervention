let slideIndex = [1]; // Use array in case you add more slideshows later
let slideId = ["mySlides1"]; // Array of class names for each slideshow

document.addEventListener("DOMContentLoaded", function () {
  showSlides(1, 0); // Ensure DOM is loaded before calling
});

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let x = document.getElementsByClassName(slideId[no]);
  if (!x || x.length === 0) return; // Prevent errors if slides not found

  if (n > x.length) { slideIndex[no] = 1; }
  if (n < 1) { slideIndex[no] = x.length; }

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Show current slide if exists
  if (x[slideIndex[no] - 1]) {
    x[slideIndex[no] - 1].style.display = "block";

  }
}
