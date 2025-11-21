// Smooth scroll from hero button to projects
const scrollBtn = document.getElementById("scrollBtn");

scrollBtn?.addEventListener("click", () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    // Scroll slightly above the section so the sticky navbar doesn't cover it
    const yOffset = -80; // adjust this based on navbar height
    const y =
      projectsSection.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
});

// Contact form handler
const form = document.getElementById("contactForm");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwrFGQs-TdTVPYhyH2t730YYR-kVJ3afRo9X70-TfKDfFmonIlB4bVghVqzVfOWtWGj/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    alert("Message sent! Check your Google Sheet.");
    form.reset();
  } catch (err) {
    alert("Something went wrong. Try again.");
  }
});
