const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (event) => {
        const email = form.email.value;
        const password = form.password.value;

        if (!email.includes("@")) {
            alert("❌ Email Address does not exist");
            event.preventDefault();
        }
        if (password.length < 8) {
            alert("❌ Wrong Password");
            event.preventDefault();
        }
    });
}


// ========== BUTTON HOVER EFFECT ==========

const allbuttons = document.querySelectorAll("button");

allbuttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.1)"
        btn.style.transition = "0.2 ease-in-out"
    })
})