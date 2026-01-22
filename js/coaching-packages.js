// Helper function to generate price HTML
function generatePriceHTML(price, discountedPrice, installmentPlan, upfrontPayment) {
    const installmentText = installmentPlan ? `<span class="badge bg-warning ms-2">Installments Available</span>` : '';
    const upfrontText = upfrontPayment ? `<span class="badge bg-primary ms-2">Flat $300 Off on Upfront Applied</span>` : '';
    if (discountedPrice) {
        return `
        ${installmentText}
        ${upfrontText}
            <div class="coaching-card__price space-grotesk-notice">
                ${discountedPrice} 
                <div class="original-price">${price}</div>
            </div>
        `;
    }
    return `
        ${installmentText} 
        ${upfrontText} 
        <div class="coaching-card__price space-grotesk-notice">
            ${price}
        </div>
    `;
}

// Function to populate the entry package
function populateCoachingEntry() {
    const entryColumn = document.getElementById('coaching-entry');
    if (!entryColumn) return;

    const featuresList = entryPackage.features.map(feature => `<li>${feature}</li>`).join('');

    entryColumn.innerHTML = `
        <h6 class="entry-tag">${entryPackage.tag}</h6>
        <div class="coaching-card">
            <div>
                <h4 class="inter-heading-bold">Entry
                ${entryPackage.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${entryPackage.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(entryPackage.price, entryPackage.discountedPrice, entryPackage.installmentPlan, entryPackage.upfrontPayment, entryPackage.lastSlot)}
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
                <h4 class="inter-heading-bold">Basic
                ${basicPackage.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${basicPackage.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(basicPackage.price, basicPackage.discountedPrice, basicPackage.installmentPlan, basicPackage.upfrontPayment, basicPackage.lastSlot)}
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
                <h4 class="inter-heading-bold">Pro 
                ${proPackage.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${proPackage.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(proPackage.price, proPackage.discountedPrice, proPackage.installmentPlan, proPackage.upfrontPayment, proPackage.lastSlot)}
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

    const featuresList = immortalPackage.features.map(feature => `<li>${feature}</li>`).join('');

    immortalColumn.innerHTML = `
        <img src="images/icons/heroicons_fire-20-solid.svg" alt="Teach Icon" style="position: absolute; top: -30px; left: -15px; width: 60px; height: auto;">
        <h6 class="tag immortal-tag">${immortalPackage.tag}</h6>
        <div class="coaching-card immortal-card">
            <div>
                <h4 class="inter-heading-bold">Immortal
                ${immortalPackage.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${immortalPackage.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(immortalPackage.price, immortalPackage.discountedPrice, immortalPackage.installmentPlan, immortalPackage.upfrontPayment, immortalPackage.lastSlot)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${immortalPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

function populateCoachingTenK() {
    const tenKColumn = document.getElementById('coaching-ten-k');
    if (!tenKColumn) return;

    const featuresList = tenKPackage.features.map(feature => `<li>${feature}</li>`).join('');

    tenKColumn.innerHTML = `
        <h6 class="tag immortal-plus-tag">${tenKPackage.tag}</h6>
        <div class="coaching-card immortal-plus-card">
            <div>
                <h4 class="inter-heading-bold">Beyond Immortal
                ${tenKPackage.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${tenKPackage.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(tenKPackage.price, tenKPackage.discountedPrice, tenKPackage.installmentPlan, tenKPackage.upfrontPayment, tenKPackage.lastSlot)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${tenKPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

function populateCoachingImmortalPlus() {
    const immortalColumn = document.getElementById('coaching-immortal-plus');
    if (!immortalColumn) return;

    const featuresList = plusPackage.features.map(feature => `<li>${feature}</li>`).join('');
    const requirementsList = plusPackage.requirements.map(requirement => `<li>${requirement}</li>`).join('');

    immortalColumn.innerHTML = `
        <h6 class="tag immortal-plus-tag">${plusPackage.tag}</h6>
        <div class="coaching-card immortal-plus-card">
            <div>
                <h4 class="inter-heading-bold">
                    Immortal Plus
                    ${plusPackage.priceOff ?
            `<span class="badge bg-danger ms-2">SAVE ${plusPackage.priceOff}</span>`
            : ''}
                </h4>
                ${generatePriceHTML(plusPackage.price, plusPackage.discountedPrice, plusPackage.installmentPlan, plusPackage.upfrontPayment, plusPackage.lastSlot)}
            </div>

            <ul class="inter-body-medium">
                ${featuresList}
                <div class="procedure">
                <!-- Collapsible button with info icon -->
                <button class="btn btn-link collapsible" data-bs-toggle="collapse" data-bs-target="#requirements" aria-expanded="false" aria-controls="requirements">
                    <i class="fas fa-info-circle"></i> Requirements
                </button>
                <ul id="requirements" class="collapse">
                    ${requirementsList}
                </ul>
            </div>
            </ul>

            

            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${plusPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Function to populate the mini packages
function populateCoachingMini() {
    const miniColumn = document.getElementById('coaching-mini-basic');
    if (!miniColumn) return;

    const basicFeaturesList = miniPackage.basicFeatures.map(feature => `<li>${feature}</li>`).join('');
    const proFeaturesList = miniPackage.proFeatures.map(feature => `<li>${feature}</li>`).join('');

    miniColumn.innerHTML = `
        <h6 class="entry-tag">${miniPackage.tag}</h6>
        <div class="coaching-card">
            <div>
                <h4 class="inter-heading-bold">Basic</h4>
                <div class="coaching-card__price space-grotesk-notice">
                    <div class="mb-3">
                        ${miniPackage.basicPrice}
                    </div>
                </div>
                <div class="mb-4">
                    <ul class="inter-body-medium">
                        ${basicFeaturesList}
                    </ul>
                </div>
                <h4 class="inter-heading-bold">Pro</h4>
                <div class="coaching-card__price space-grotesk-notice">
                    <div class="mb-3">
                        ${miniPackage.proPrice}
                    </div>
                </div>
                <div class="mb-4">
                    <ul class="inter-body-medium">
                        ${proFeaturesList}
                    </ul>
                </div>
            </div>
            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${miniPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Load all packages
function loadCoachingPackages() {
    // populateCoachingMini();
    populateCoachingEntry();
    populateCoachingBasic();
    populateCoachingPro();
    populateCoachingImmortal();
    populateCoachingTenK();
    // populateCoachingImmortalPlus();
}

document.addEventListener('DOMContentLoaded', loadCoachingPackages);
