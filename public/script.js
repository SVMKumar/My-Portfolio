var navLinks = $(".nav-link");

navLinks.on("click", function(event) {
    event.preventDefault();
    var destination = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $("#" + destination).offset().top
    }, 1000);
});