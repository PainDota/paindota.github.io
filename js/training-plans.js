
// Function to populate the entry plan
function populateTrainingEntry() {
    const entryColumn = document.getElementById('planning-entry');
    if (!entryColumn) return;

    const featuresList = entryPlan.features.map(feature => `<li>${feature}</li>`).join('');

    entryColumn.innerHTML = `
        <h6 class="tag">${entryPlan.tag}</h6>
        <div class="coaching-card">
            <div>
                <h4 class="inter-heading-bold">Entry</h4>
                <div class="coaching-card__price space-grotesk-notice">${entryPlan.price}</div>
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <div class="coaching-card__button-container">
                <button class="btn-custom">${entryPlan.buttonLabel}</button>
            </div>
        </div>
    `;
}

// Function to populate the basic plan
function populateTrainingBasic() {
    const basicColumn = document.getElementById('planning-basic');
    if (!basicColumn) return;

    const featuresList = basicPlan.features.map(feature => `<li>${feature}</li>`).join('');

    basicColumn.innerHTML = `
        <h6 class="tag basic-tag">${basicPlan.tag}</h6>
        <div class="coaching-card coaching-card--basic">
            <div>
                <h4 class="inter-heading-bold">Basic</h4>
                <div class="coaching-card__price space-grotesk-notice">${basicPlan.price}</div>
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <div class="coaching-card__button-container">
                <button class="btn-custom">${basicPlan.buttonLabel}</button>
            </div>
        </div>
    `;
}

// Function to populate the pro plan
function populateTrainingPro() {
    const proColumn = document.getElementById('planning-pro');
    if (!proColumn) return;

    const featuresList = proPlan.features.map(feature => `<li>${feature}</li>`).join('');

    proColumn.innerHTML = `
        <h6 class="tag pro-tag">${proPlan.tag}</h6>
        <div class="coaching-card coaching-card--pro">
            <div>
                <h4 class="inter-heading-bold">Pro</h4>
                <div class="coaching-card__price space-grotesk-notice">${proPlan.price}</div>
            </div>
            <ul class="inter-body-medium">
                ${featuresList}
            </ul>
            <div class="coaching-card__button-container">
                <button class="btn-custom">${proPlan.buttonLabel}</button>
            </div>
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
