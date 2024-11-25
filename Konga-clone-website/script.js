document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const categoryDropdown = document.querySelector(".category-dropdown");

  hamburgerBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    categoryDropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!categoryDropdown.contains(e.target)) {
      categoryDropdown.classList.remove("active");
    }
  });

  const subcategoryLinks = document.querySelectorAll(".subcategory-content a");
  subcategoryLinks.forEach((link) => {
    link.addEventListener("click", function () {
      categoryDropdown.classList.remove("active");
    });
  });
});
