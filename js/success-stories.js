document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // STATE
    // ==============================
    let currentImageIndex = 0;

    // ==============================
    // ELEMENTS
    // ==============================
    const gallery = document.getElementById("testimonialsGallery");
    const fullGallery = document.getElementById("fullGallery");

    const galleryModal = document.getElementById("galleryModal");
    const imageModalEl = document.getElementById("galleryImageModal");
    const modalImg = document.getElementById("modalGalleryImage");
    const thumbnailStrip = document.getElementById("thumbnailStrip");

    const previewLimit = 6;

    if (!gallery || !fullGallery || !imageModalEl || !modalImg) {
        console.error("Missing DOM elements");
        return;
    }

    // ==============================
    // PREVIEW GALLERY
    // ==============================
    successStories.slice(0, previewLimit).forEach((img, index) => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-2";

        col.innerHTML = `
            <div class="preview-wrapper position-relative">
                <img 
                    src="images/reviews/sss/${img}"
                    class="preview-img-2"
                    loading="lazy"
                    onclick="openGalleryImage(${index})"
                >
                <img src="images/icons/uil_focus.svg" class="zoom-overlay">
            </div>
        `;

        gallery.appendChild(col);
    });

    // ==============================
    // FULL GALLERY
    // ==============================
    successStories.forEach((img, index) => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-2";

        col.innerHTML = `
            <div class="preview-wrapper position-relative">
                <img 
                    src="images/reviews/sss/${img}"
                    class="preview-img-2"
                    loading="lazy"
                    onclick="openGalleryImage(${index})"
                >
                <img src="images/icons/uil_focus.svg" class="zoom-overlay">
            </div>
        `;

        fullGallery.appendChild(col);
    });

    // ==============================
    // OPEN IMAGE MODAL
    // ==============================
    function openGalleryImage(index) {
        currentImageIndex = index;

        updateModalImage();
        renderThumbnails();

        // 🔥 BLUR GALLERY MODAL (KEY FIX)
        if (galleryModal) {
            galleryModal.classList.add("blurred");
        }

        const modal = new bootstrap.Modal(imageModalEl);
        modal.show();
    }

    // ==============================
    // CLOSE IMAGE MODAL CLEANUP
    // ==============================
    imageModalEl.addEventListener("hidden.bs.modal", () => {
        if (galleryModal) {
            galleryModal.classList.remove("blurred");
        }
    });

    // ==============================
    // NAVIGATION
    // ==============================
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % successStories.length;
        updateModalImage();
    }

    function showPrevImage() {
        currentImageIndex =
            (currentImageIndex - 1 + successStories.length) % successStories.length;
        updateModalImage();
    }

    function updateModalImage() {
        modalImg.src = `images/reviews/sss/${successStories[currentImageIndex]}`;
        updateActiveThumbnail();
    }

    // ==============================
    // THUMBNAILS
    // ==============================
    function renderThumbnails() {
        if (!thumbnailStrip) return;

        thumbnailStrip.innerHTML = "";

        successStories.forEach((img, index) => {
            const thumb = document.createElement("img");

            thumb.src = `images/reviews/sss/${img}`;
            thumb.className = "thumb";
            thumb.onclick = () => openGalleryImage(index);

            thumbnailStrip.appendChild(thumb);
        });

        updateActiveThumbnail();
    }

    function updateActiveThumbnail() {
        const thumbs = document.querySelectorAll(".thumb");

        thumbs.forEach((thumb, index) => {
            thumb.classList.toggle("active", index === currentImageIndex);
        });

        const activeThumb = document.querySelector(".thumb.active");

        if (activeThumb) {
            activeThumb.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });
        }
    }

    // ==============================
    // KEYBOARD SUPPORT
    // ==============================
    document.addEventListener("keydown", (e) => {
        if (!imageModalEl.classList.contains("show")) return;

        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "Escape") {
            bootstrap.Modal.getInstance(imageModalEl)?.hide();
        }
    });

    // ==============================
    // SWIPE SUPPORT
    // ==============================
    let touchStartX = 0;

    imageModalEl.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    imageModalEl.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) showNextImage();
        if (diff < -50) showPrevImage();
    });

    // ==============================
    // OPEN GALLERY MODAL
    // ==============================
    function openGalleryModal() {
        bootstrap.Modal.getOrCreateInstance(galleryModal).show();
    }

    // ==============================
    // GLOBAL EXPORTS
    // ==============================
    window.openGalleryImage = openGalleryImage;
    window.openGalleryModal = openGalleryModal;
    window.showNextImage = showNextImage;
    window.showPrevImage = showPrevImage;

});