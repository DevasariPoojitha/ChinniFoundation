// ---------------- NAVIGATION CODE ----------------
const sections = document.querySelectorAll("section.hidden");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // Active button
        navLinks.forEach(l => l.classList.remove("active"));
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

// ---------------- DONATION FORM → EMAIL ----------------
document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;

    const message =
        "New Food Donation Details\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Location: " + location + "\n" +
        "Food Details: " + food + "\n" +
        "Quantity: " + quantity + " plates";

    window.location.href =
        "mailto:chinnifoundation1@gmail.com" +
        "?subject=New Food Donation" +
        "&body=" + encodeURIComponent(message);

    this.reset();
});

