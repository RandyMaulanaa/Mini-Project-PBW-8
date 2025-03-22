document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#scrollButton").addEventListener("click", function() {
        document.querySelector("#second-section").scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener("wheel", function(event) {
    if (window.scrollY < 100 && event.deltaY > 0) { 
        event.preventDefault(); 
        document.querySelector("#second-section").scrollIntoView({ behavior: "smooth" });
    }
}, { passive: false });


//mobile scroll
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0; 
    let threshold = 50; 

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        // Jika pengguna scroll ke bawah melewati threshold
        if (currentScroll > lastScrollTop && currentScroll < threshold) {
            window.scrollTo({
                top: document.querySelector("#second-section").offsetTop,
                behavior: "smooth",
            });
        }

        lastScrollTop = currentScroll; 
    });
});

