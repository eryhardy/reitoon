// =====================================
// REITOON APP JAVASCRIPT
// =====================================


// SEARCH BUTTON

const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");

if (searchButton) {

  searchButton.addEventListener("click", function () {

    searchBar.classList.toggle("show");

    if (searchBar.classList.contains("show")) {
      searchInput.focus();
    }

  });

}


// NOTIFICATION BUTTON

const notificationButton =
  document.getElementById("notificationButton");

const notificationPopup =
  document.getElementById("notificationPopup");

if (notificationButton) {

  notificationButton.addEventListener("click", function () {

    notificationPopup.classList.toggle("show");

  });

}


// CREATE FILM BUTTON

const createFilmButton =
  document.getElementById("createFilmButton");

const startCreatingButton =
  document.getElementById("startCreatingButton");

function openCreatePage() {

  alert(
    "🎬 Creator Studio\n\n" +
    "Fitur Create Film akan segera tersedia.\n\n" +
    "Di sini pengguna nantinya dapat membuat film sendiri."
  );

}

if (createFilmButton) {
  createFilmButton.addEventListener(
    "click",
    openCreatePage
  );
}

if (startCreatingButton) {
  startCreatingButton.addEventListener(
    "click",
    openCreatePage
  );
}


// EARN BUTTON

const earnButton =
  document.getElementById("earnButton");

if (earnButton) {

  earnButton.addEventListener("click", function () {

    alert(
      "💰 Reitoon Creator Program\n\n" +
      "Creator dapat memperoleh penghasilan dari karya yang mereka buat."
    );

  });

}


// NAVIGATION

const navItems =
  document.querySelectorAll(".nav-item");

navItems.forEach(function (item) {

  item.addEventListener("click", function () {

    navItems.forEach(function (nav) {

      nav.classList.remove("active");

    });

    this.classList.add("active");

    const page =
      this.getAttribute("data-page");

    handleNavigation(page);

  });

});


// QUICK MENU

const quickItems =
  document.querySelectorAll(".quick-item");

quickItems.forEach(function (item) {

  item.addEventListener("click", function () {

    const page =
      this.getAttribute("data-page");

    handleNavigation(page);

  });

});


// NAVIGATION HANDLER

function handleNavigation(page) {

  switch (page) {

    case "home":

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      break;


    case "watch":

      alert(
        "▶ Watch\n\n" +
        "Di sini pengguna dapat menonton film dan drama."
      );

      break;


    case "create":

      openCreatePage();

      break;


    case "earn":

      alert(
        "💰 Earn\n\n" +
        "Creator dapat melihat penghasilan mereka di sini."
      );

      break;


    case "trending":

      alert(
        "🔥 Trending\n\n" +
        "Menampilkan film yang sedang populer."
      );

      break;


    case "new-release":

      alert(
        "🆕 New Release\n\n" +
        "Menampilkan film terbaru."
      );

      break;


    case "studio":

      alert(
        "🎞️ Creator Studio\n\n" +
        "Tempat creator mengelola film dan karya mereka."
      );

      break;


    case "profile":

      alert(
        "👤 Profile\n\n" +
        "Halaman profil pengguna Reitoon."
      );

      break;

  }

}


// MOVIE CARD

const movieCards =
  document.querySelectorAll(".movie-card");

movieCards.forEach(function (card) {

  card.addEventListener("click", function () {

    const title =
      card.querySelector("h3").textContent;

    alert(
      "🎬 " + title + "\n\n" +
      "Halaman detail film akan segera dibuat."
    );

  });

});


// SEARCH FUNCTION

if (searchInput) {

  searchInput.addEventListener(
    "input",
    function () {

      const keyword =
        this.value.toLowerCase();

      movieCards.forEach(function (card) {

        const title =
          card.querySelector("h3")
          .textContent
          .toLowerCase();

        if (title.includes(keyword)) {

          card.style.display = "block";

        } else {

          card.style.display = "none";

        }

      });

    }
  );

}


// WELCOME MESSAGE

console.log(
  "🎬 Welcome to Reitoon - Create Your Story"
);
