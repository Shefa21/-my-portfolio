document.addEventListener("DOMContentLoaded", function () {
    // Theme Switcher
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "🌙";
    themeToggle.classList.add("theme-toggle");
    document.body.appendChild(themeToggle);
    
    function setTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    
    themeToggle.addEventListener("click", () => {
        const newTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                document.querySelector("nav a.active")?.classList.remove("active");
                document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Back to top button
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
});
