// Helper function to generate price HTML
function generatePriceHTML(price, discountedPrice) {
    if (discountedPrice) {
        return `
            <div class="coaching-card__price space-grotesk-notice">
                ${discountedPrice} 
                <div class= "original-price">${price}</div>
            </div>
        `;
    }
    return `<div class="coaching-card__price space-grotesk-notice">${price}</div>`;
}

// Function to populate the entry package
function populateCoachingEntry() {
    const entryColumn = document.getElementById('coaching-entry');
    if (!entryColumn) return;

    const featuresList = entryPackage.features.map(feature => `<li>${feature}</li>`).join('');

    entryColumn.innerHTML = `
        <h6 class="tag">${entryPackage.tag}</h6>
        <div class="coaching-card">
            <div>
                <h4 class="inter-heading-bold">Entry</h4>
                ${generatePriceHTML(entryPackage.price, entryPackage.discountedPrice)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${entryPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Function to populate the basic package
function populateCoachingBasic() {
    const basicColumn = document.getElementById('coaching-basic');
    if (!basicColumn) return;

    const featuresList = basicPackage.features.map(feature => `<li>${feature}</li>`).join('');

    basicColumn.innerHTML = `
        <h6 class="tag basic-tag">${basicPackage.tag}</h6>
        <div class="coaching-card coaching-card--basic">
            <div>
                <h4 class="inter-heading-bold">Basic</h4>
                ${generatePriceHTML(basicPackage.price, basicPackage.discountedPrice)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${basicPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Function to populate the pro package
function populateCoachingPro() {
    const proColumn = document.getElementById('coaching-pro');
    if (!proColumn) return;

    const featuresList = proPackage.features.map(feature => `<li>${feature}</li>`).join('');

    proColumn.innerHTML = `
        <h6 class="tag pro-tag">${proPackage.tag}</h6>
        <div class="coaching-card coaching-card--pro">
            <div>
                <h4 class="inter-heading-bold">Pro</h4>
                ${generatePriceHTML(proPackage.price, proPackage.discountedPrice)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${proPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Function to populate the immortal package
function populateCoachingImmortal() {
    const immortalColumn = document.getElementById('coaching-immortal');
    if (!immortalColumn) return;

    const featureColumns = immortalPackage.features.map(features => {
        const featuresList = features.map(feature => `<li>${feature}</li>`).join('');
        return `<div class="col-md-4"><ul class="inter-body-medium">${featuresList}</ul></div>`;
    }).join('');

    immortalColumn.innerHTML = `
        <h6 class="tag immortal-tag">${immortalPackage.tag}</h6>
        <div class="coaching-card immortal-card">
            <div>
                <h4 class="inter-heading-bold">Immortal</h4>
                ${generatePriceHTML(immortalPackage.price, immortalPackage.discountedPrice)}
            </div>
            <div class="row">
                ${featureColumns}
            </div>
            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${immortalPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Load all packages
function loadCoachingPackages() {
    populateCoachingEntry();
    populateCoachingBasic();
    populateCoachingPro();
    populateCoachingImmortal();
}

document.addEventListener('DOMContentLoaded', loadCoachingPackages);
