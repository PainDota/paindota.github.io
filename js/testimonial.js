// Function to dynamically create carousel items
function loadCarouselItems() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Clear existing items

    const isSmallScreen = window.innerWidth < 768; // Define breakpoint
    const items = [];

    // Group testimonials into pairs for medium and large screens, or singles for small screens
    testimonials.forEach((testimonial, index) => {
        if (isSmallScreen) {
            // Create a single testimonial item for small screens
            items.push(createCarouselItem([testimonial]));
        } else {
            // Pair testimonials for medium and large screens
            if (index % 2 === 0) { // Start of a new pair
                items.push(createCarouselItem([testimonial, testimonials[index + 1]]));
            }
        }
    });

    // Add all items to the carousel inner
    items.forEach((item, index) => {
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');
        carouselInner.appendChild(item);
    });
}

// Helper function to create a carousel item with given testimonials
function createCarouselItem(testimonials) {
    const itemDiv = document.createElement('div');
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    testimonials.forEach(testimonial => {
        if (!testimonial) return; // Skip if testimonial is undefined (e.g., odd number of total items)
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-md-6'; // Full width on small, half on medium and above
        colDiv.innerHTML = `
            <div class="carousel-card">
                <div class="carousel-card__header">
                    <img src="${testimonial.img}" alt="${testimonial.title}">
                    <div class="carousel-card__titles">
                        <h4 class="inter-subtitle-medium">${testimonial.title}</h4>
                        <p class="montserrat-bold mmr">${testimonial.subtitle}</p>
                    </div>
                </div>
                <div class="carousel-card__testimonial">
                    <p class="inter-medium-italic">${testimonial.description}</p>
                </div>
            </div>
        `;
        rowDiv.appendChild(colDiv);
    });

    itemDiv.appendChild(rowDiv);
    return itemDiv;
}

// Load items and adjust on window resize
window.addEventListener('load', loadCarouselItems);
window.addEventListener('resize', loadCarouselItems);
