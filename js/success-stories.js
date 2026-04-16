const gallery = document.getElementById("testimonialsGallery");
const fullGallery = document.getElementById("fullGallery");

// show only first row (6 items)
const previewLimit = 6;

/* =======================
   PREVIEW GALLERY
======================= */
successStories.slice(0, previewLimit).forEach((img) => {

    const col = document.createElement("div");
    col.className = "col-6 col-md-2";

    col.innerHTML = `
        <div class="preview-wrapper position-relative">

            <img 
                src="images/reviews/sss/${img}"
                class="preview-img-2"
                loading="lazy"
                onclick="openImage('images/reviews/sss/${img}')"
            >

            <img 
                src="images/icons/uil_focus.svg"
                class="zoom-overlay"
            >

        </div>
    `;

    gallery.appendChild(col);
});


/* =======================
   FULL MODAL GALLERY
======================= */
successStories.forEach((img) => {

    const col = document.createElement("div");
    col.className = "col-6 col-md-2";

    col.innerHTML = `
        <div class="preview-wrapper position-relative">

            <img 
                src="images/reviews/sss/${img}"
                class="preview-img-2"
                loading="lazy"
                onclick="openImage('images/reviews/sss/${img}')"
            >

            <img 
                src="images/icons/uil_focus.svg"
                class="zoom-overlay"
            >

        </div>
    `;

    fullGallery.appendChild(col);
});

function openGalleryModal() {
    bootstrap.Modal.getOrCreateInstance(
        document.getElementById("galleryModal")
    ).show();
}