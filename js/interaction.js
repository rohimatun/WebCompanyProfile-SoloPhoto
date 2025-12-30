// ===== BOOKING MODAL =====
const modal = document.getElementById("bookingModal");

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// ===== LIGHTBOX GALLERY =====
function openLightbox(src) {
  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 bg-black/80 flex items-center justify-center z-50";

  overlay.innerHTML = `
    <img src="${src}" class="max-w-[90%] max-h-[90%] rounded-lg shadow-lg">
  `;

  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}

// ===== ABOUT ANIMATIONS =====
document.body.classList.add("js-scroll");

function initAboutAnimation() {
  const elements = document.querySelectorAll(
    "#about .about-title, #about .about-desc, #about .about-card"
  );

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // repeat scroll
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* tunggu include selesai */
setTimeout(initAboutAnimation, 500);
