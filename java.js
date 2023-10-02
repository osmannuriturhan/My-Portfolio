// JavaScript for dropdown menu
document.getElementById("menu-icon").addEventListener("click", function () {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

// Yeniden yapılandırılmış JavaScript kodu
document.querySelectorAll("#myDropdown a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Bağlantının varsayılan davranışını engelle

    var targetPage = event.target.textContent.toLowerCase(); // Tıklanan bağlantının metnini al ve küçük harfe çevir

    // Yönlendirme işlemi
    if (targetPage === "home") {
      window.location.href = "index.html"; // Home sayfasına yönlendir
    } else if (targetPage === "about") {
      window.open("about.html", "_blank"); // About sayfasına yönlendir
    } else if (targetPage === "skills") {
      window.open("skills.html", "_blank");
    } else if (targetPage === "projects") {
      window.open("projects.html", "_blank");
    } else if (targetPage === "contact") {
      window.open("contact.html", "_blank");
    }
    // Diğer sayfaları eklemek için benzer şekilde devam edebilirsiniz

    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = "none"; // Menüyü gizle
  });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches("#menu-icon")) {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
});
