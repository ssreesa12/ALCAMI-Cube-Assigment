
    document.getElementById("search-toggle").addEventListener("click", function () {
        let searchContainer = document.getElementById("search-container");
        searchContainer.classList.toggle("hidden"); // Toggle visibility
        document.getElementById("search-input").focus(); // Focus input when shown
    });

    document.getElementById("search-toggle-overlay").addEventListener("click", function () {
        let searchContainer = document.getElementById("search-container");
        searchContainer.classList.toggle("hidden"); // Toggle visibility
    });

    document.getElementById("mobile-menu-toggle").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.toggle("hidden");
    });
