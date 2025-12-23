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
