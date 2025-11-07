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

// Function to populate the entry plan
function populateTrainingEntry() {
    const entryColumn = document.getElementById('planning-entry');
    if (!entryColumn) return;

    const featuresList = entryPlan.features.map(feature => `<li>${feature}</li>`).join('');

    entryColumn.innerHTML = `
        <h6 class="tag basic-tag">${entryPlan.tag}</h6>
        <div class="coaching-card coaching-card--basic">
            <div>
                <h4 class="inter-heading-bold">Entry
                ${entryPlan.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${entryPlan.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(entryPlan.price, entryPlan.discountedPrice, entryPlan.installmentPlan, entryPlan.upfrontPayment)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/iq4x6Nha6vUYMXeR8" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${entryPlan.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Function to populate the basic plan
function populateTrainingBasic() {
    const basicColumn = document.getElementById('planning-basic');
    if (!basicColumn) return;

    const featuresList = basicPlan.features.map(feature => `<li>${feature}</li>`).join('');

    basicColumn.innerHTML = `
        <h6 class="tag pro-tag">${basicPlan.tag}</h6>
        <div class="coaching-card coaching-card--pro">
            <div>
                <h4 class="inter-heading-bold">Basic
                ${basicPlan.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${basicPlan.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(basicPlan.price, basicPlan.discountedPrice, basicPlan.installmentPlan, basicPlan.upfrontPayment)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/iq4x6Nha6vUYMXeR8" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${basicPlan.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Function to populate the pro plan
function populateTrainingPro() {
    const proColumn = document.getElementById('planning-pro');
    if (!proColumn) return;

    const featuresList = proPlan.features.map(feature => `<li>${feature}</li>`).join('');

    proColumn.innerHTML = `
        <h6 class="tag accent-tag">${proPlan.tag}</h6>
        <div class="coaching-card coaching-card--accent">
            <div>
                <h4 class="inter-heading-bold">Pro
                ${proPlan.priceOff ? `<span class="badge bg-danger ms-2">SAVE ${proPlan.priceOff}</span>` : ''}
                </h4>
                ${generatePriceHTML(proPlan.price, proPlan.discountedPrice, proPlan.installmentPlan, proPlan.upfrontPayment)}
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <a href="https://forms.gle/iq4x6Nha6vUYMXeR8" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${proPlan.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// Load all plans
function loadTrainingPlans() {
    populateTrainingEntry();
    populateTrainingBasic();
    populateTrainingPro();
}

document.addEventListener('DOMContentLoaded', loadTrainingPlans);
