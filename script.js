const sections = document.querySelectorAll("section.hidden");
const landing = document.querySelector(".landing");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all buttons
        navLinks.forEach(l => l.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

      
        // Hide all sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Show selected section
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = "block";
        }
    });
});
