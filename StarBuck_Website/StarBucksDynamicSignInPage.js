// ========== SIGN IN FORM VALIDATION ========== //
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (event) => {
        const email = form.email.value;
        const password = form.password.value;

        if (!email.includes("@")) {
            alert("❌ Please Enter a Valid Email Address");
            event.preventDefault();
        }

        if (password.length < 8) {
            alert("❌ Password must be at least 8 Characters long");
            event.preventDefault();
        }
    });
}

// ========== BUTTON HOVER EFFECT ==========
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.1)";
        btn.style.transition = "0.2s ease-out";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});



// ===== DARK MODE / LIGHT MODE =====
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "🌙 Dark Mode";

    // Base styles
    toggleBtn.style.position = "fixed";
    toggleBtn.style.bottom = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "12px 24px";
    toggleBtn.style.borderRadius = "30px";
    toggleBtn.style.border = "none";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.zIndex = "999";
    toggleBtn.style.fontWeight = "bold";
    toggleBtn.style.fontSize = "14px";
    toggleBtn.style.transition = "transform 0.1s ease"; // Shorter transition for active feedback
    toggleBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
    toggleBtn.style.transform = "scale(1)";

    document.body.appendChild(toggleBtn);

    // Hover (simulate :hover)
    toggleBtn.addEventListener("mouseenter", () => {
        toggleBtn.style.transform = "scale(1.1)";
    });

    toggleBtn.addEventListener("mouseleave", () => {
        toggleBtn.style.transform = "scale(1)";
    });

    // Active (simulate :active)
    toggleBtn.addEventListener("mousedown", () => {
        toggleBtn.style.transform = "scale(1.3)"; // Slightly smaller than hover to simulate press
    });

    toggleBtn.addEventListener("mouseup", () => {
        toggleBtn.style.transform = "scale(1.1)"; // Back to hover scale
    });
    // Restore theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
        toggleBtn.style.backgroundColor = "#ffffc7"; // pale yellow
        toggleBtn.style.color = "#000000";           // black text
    }



    // Toggle theme
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "☀️ Light Mode";
            toggleBtn.style.backgroundColor = "#ffffc7"; // pale yellow
            toggleBtn.style.color = "#000000";           // black text
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "🌙 Dark Mode";
            toggleBtn.style.backgroundColor = "#000000ff"; // dark gray
            toggleBtn.style.color = "#ffffffff";           // white text
        }
    });
});

// ===== GREETING MESSAGE (corrected) =====
document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "☀️ Good Morning!";
        localStorage.setItem("theme", "light");
    } else if (hour >= 12 && hour < 18) {
        greeting = "🌤️ Good Afternoon!";
        localStorage.setItem("theme", "light");
    } else {
        greeting = "🌙 Good Evening!";
        localStorage.setItem("theme", "dark");
    }

    const greetBox = document.createElement("div");

    const style = document.createElement("style");
    style.textContent = `
        @keyframes greetanim {
            from {
                transform: translateY(-500px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .animate-greet {
            animation: greetanim 3s linear forwards;
        }
    `;
    document.head.appendChild(style);

    greetBox.textContent = greeting + " Welcome to Starbucks.";
    greetBox.style.textAlign = "center";
    greetBox.style.padding = "12px";
    greetBox.style.fontSize = "80px";
    greetBox.style.width = "1352px";
    greetBox.style.height = "255px";
    greetBox.style.borderRadius = "75px";
    greetBox.style.display = "flex";
    greetBox.style.justifyContent = "center";
    greetBox.style.alignItems = "center";
    greetBox.style.fontWeight = "bold";
    greetBox.style.backgroundColor = "#f9cbf6ff";
    greetBox.style.color = "#225547ff";
    greetBox.style.position = "absolute";
    greetBox.style.top = "205px";
    greetBox.style.left = "85px";
    greetBox.style.zIndex = "999";
    greetBox.style.transition = "opacity 1s cubic-bezier(0.1, 0.9, 0.9, 0.1)";
    greetBox.style.opacity = "1";

    if (!document.querySelector(".greet-box")) {
        greetBox.classList.add("greet-box", "animate-greet");
        document.body.insertBefore(greetBox, document.body.firstChild);

        setTimeout(() => {
            greetBox.style.opacity = "0";
            setTimeout(() => {
                greetBox.remove()
            }, 3500);
        }, 1500);
    }
});



