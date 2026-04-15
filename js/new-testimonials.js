function openImage(src) {
    const imgEl = document.getElementById("modalImage");
    const modalEl = document.getElementById("imageModal");

    if (!imgEl || !modalEl) return;

    imgEl.src = src;

    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
}

window.openImage = openImage;

let testimonialsList = [];
let currentIndex = 0; // 👉 PAGE index now
let cardsPerView = 1;

/* =========================
   RESPONSIVE CARDS
   ========================= */
function getCardsPerView() {
    return window.innerWidth >= 992 ? 2 : 1;
}

/* =========================
   RENDER TESTIMONIALS (FIXED PAGINATION)
   ========================= */
function renderTestimonials() {
    const container = document.getElementById("testimonialContainer");
    if (!container || !testimonialsList.length) return;

    const newCardsPerView = getCardsPerView();
    const startIndex = currentIndex * newCardsPerView;

    let html = "";

    for (let i = 0; i < newCardsPerView; i++) {
        const index = startIndex + i;

        if (index >= testimonialsList.length) break;

        const t = testimonialsList[index];
        const mmrGain = t.ending_mmr - t.starting_mmr;

        html += `
        <div class="d-flex" style="flex: 1; min-width: 0;">

            <div class="rank-card w-100">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-2">
                        <img src="images/reviews/pfp/${t.pfp}" class="pfp">

                        <div>
                            <div class="name-text">${t.username}</div>
                            <div class="text-accent sub-text">
                                ${t.roles.map(r => `
                                    ${capitalize(r)}
                                    <img src="images/badges/roles/${r}.svg" class="role-icon">
                                `).join(" / ")}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="soft-divider mt-1 mt-md-2 mt-lg-3"></div>

                <!-- RANK -->
                <div class="d-flex justify-content-center align-items-center gap-2">

                    <div class="text-center">
                        <div class="sub-text">Starting Rank</div>
                        <div class="rank-text">${capitalize(t.starting_medal)}</div>
                    </div>

                    <img src="images/badges/ranks/${t.starting_medal}.svg" class="rank-icon">

                    <div class="arrow">→</div>

                    <img src="images/badges/ranks/${t.ending_medal}.svg" class="rank-icon">

                    <div class="text-center">
                        <div class="sub-text">Current Rank</div>
                        <div class="rank-text">${capitalize(t.ending_medal)} (${t["current MMR"]})</div>
                    </div>

                </div>

                <div class="soft-divider mt-1 mt-md-2 mt-lg-3"></div>

                <!-- STATS -->
                <div class="stats-wrapper">
                    <div class="stats-block">
                        <div class="sub-text fw-bold">MMR Gained</div>
                        <div class="fw-bold">+${mmrGain}</div>
                    </div>

                    <div class="stats-block">
                        <div class="sub-text fw-bold">Time Taken</div>
                        <div class="fw-bold">${t.time_taken}</div>
                    </div>
                </div>

                <!-- QUOTE -->
                <div class="quote-text text-center mt-1 mt-md-2 mt-lg-3">
                    <span class="text-accent fs-3">“</span>
                    ${t.review}
                </div>

                <!-- IMAGE -->
                <div class="text-center mt-1 mt-md-2 mt-lg-3">
                    <div class="preview-wrapper">
                        <img src="images/reviews/ss/${t.screenshot}"
                             class="preview-img"
                             onclick="openImage(this.src)">
                        <img src="images/icons/uil_focus.svg" class="zoom-overlay">
                    </div>
                </div>

            </div>

        </div>
        `;
    }

    container.innerHTML = html;

    cardsPerView = newCardsPerView;
}

/* =========================
   PAGINATION CONTROLS (FIXED)
   ========================= */
function nextTestimonial() {
    const totalPages = Math.ceil(testimonialsList.length / cardsPerView);
    currentIndex = (currentIndex + 1) % totalPages;
    renderTestimonials();
}

function prevTestimonial() {
    const totalPages = Math.ceil(testimonialsList.length / cardsPerView);
    currentIndex = (currentIndex - 1 + totalPages) % totalPages;
    renderTestimonials();
}

/* =========================
   UTILITY
   ========================= */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/* =========================
   RESIZE HANDLING (SAFE)
   ========================= */
let resizeTimeout;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        const newVal = getCardsPerView();

        if (newVal !== cardsPerView) {
            cardsPerView = newVal;
            currentIndex = 0; // reset page
            renderTestimonials();
        }
    }, 150);
});

/* =========================
   INIT
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
    testimonialsList = window.newTestimonials || [];
    cardsPerView = getCardsPerView();
    currentIndex = 0;
    renderTestimonials();
});