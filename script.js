
// =================================
// MENU NAVIGASI
// =================================

const daffa_menu_button = document.getElementById(
    "daffa_menu_button"
);

const daffa_menu = document.getElementById(
    "daffa_menu"
);


// Membuka dan menutup menu
daffa_menu_button.addEventListener("click", function () {

    const daffa_is_open = daffa_menu.classList.toggle(
        "daffa_show"
    );

    daffa_menu_button.setAttribute(
        "aria-expanded",
        String(daffa_is_open)
    );

});


// Menutup menu setelah link diklik
document.querySelectorAll(".daffa_menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        daffa_menu.classList.remove("daffa_show");

        daffa_menu_button.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// =================================
// TAHUN OTOMATIS PADA FOOTER
// =================================

const daffa_year = document.getElementById("daffa_year");

daffa_year.textContent = new Date().getFullYear();


// =================================
// MENU AKTIF
// =================================

const daffa_nav_links = document.querySelectorAll(
    ".daffa_menu a"
);

daffa_nav_links.forEach(function (link) {

    link.addEventListener("click", function () {

        daffa_nav_links.forEach(function (item) {

            item.classList.remove("daffa_active");

        });

        link.classList.add("daffa_active");

    });

});
