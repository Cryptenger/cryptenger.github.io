$(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
    
    if(!$("#mainNavbar").hasClass("active")) {
        $("#mainNavbar").toggleClass("active").animate({opacity: 1}, 400);
    } else {
        $("#mainNavbar").animate({opacity: 0}, 400, "linear", function () { $(this).toggleClass("active"); });
    }
});