$(document).ready(function() {
    // Smooth scroll effect for navigation links
    $("nav a").click(function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        var target = $(this).attr("href"); // Get the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50 // Adjust scrolling position for fixed header
        }, 800); // Duration of scroll effect
    });
});
