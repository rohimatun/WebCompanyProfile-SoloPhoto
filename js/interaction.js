// ===== HERO ANIMATION =====
function initHeroAnimation() {
  const hero = document.querySelector(".hero-anim");
  if (!hero) return;

  hero.classList.add("show");
}

/* tunggu include hero selesai */
setTimeout(initHeroAnimation, 500);

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
// ===== GALLERY CAROUSEL SCROLL (LEFT - RIGHT) =====
function initGalleryCarousel() {
  const items = document.querySelectorAll(".gallery-item");
  if (!items.length) return;

  // kasih class kiri / kanan otomatis
  items.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("gallery-left");
    } else {
      item.classList.add("gallery-right");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 120); // efek carousel berurutan
        } else {
          entry.target.classList.remove("show"); // animasi ulang saat scroll balik
        }
      });
    },
    { threshold: 0.25 }
  );

  items.forEach((item) => observer.observe(item));
}

/* tunggu semua include & layout */
setTimeout(initGalleryCarousel, 500);

// ===== SERVICES ANIMATION =====
function initServicesAnimation() {
  const elements = document.querySelectorAll(
    "#services .services-title, #services .services-desc, #services .service-card, #services .addon-card"
  );

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // repeat animation
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* tunggu include services selesai */
setTimeout(initServicesAnimation, 500);
