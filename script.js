// ---------------- NAVIGATION CODE ----------------
// NAVIGATION
const sections = document.querySelectorAll("section.hidden");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");

        sections.forEach(section => section.style.display = "none");

        const target = document.getElementById(this.getAttribute("href").substring(1));
        if (target) target.style.display = "block";
    });
});

// DONATION FORM → EMAIL
document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const message =
        `New Food Donation\n\nName: ${name.value}
Phone: ${phone.value}
Location: ${location.value}
Food: ${food.value}
Quantity: ${quantity.value}`;

    window.location.href =
        "mailto:chinnifoundation1@gmail.com" +
        "?subject=New Food Donation" +
        "&body=" + encodeURIComponent(message);
});
