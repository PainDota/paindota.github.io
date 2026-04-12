// ===============================
// HELPER: PRICE HTML (FIXED DISCOUNT)
// ===============================
function generatePriceHTML(price, discount = 0, installmentPlan, upfrontPayment) {
    const installmentText = installmentPlan ? `<span class="badge bg-warning ms-2">Installments Available</span>` : '';
    const upfrontText = upfrontPayment ? `<span class="badge bg-primary ms-2">Additional $300 Off on Upfront Payment</span>` : '';

    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    const finalPrice = discount > 0 ? numericPrice - discount : numericPrice;

    const formattedFinal = `$${finalPrice.toFixed(0)}`;

    return `
        ${installmentText}
        ${upfrontText}
        <div class="coaching-card__price space-grotesk-notice">
            ${discount > 0 ? formattedFinal : price}
            ${discount > 0 ? `<div class="original-price">${price}</div>` : ''}
        </div>
    `;
}

// ===============================
// HELPER: DISCOUNT BADGE
// ===============================
function getDiscountBadge(discount) {
    return discount > 0
        ? `<span class="badge bg-danger ms-2">SAVE $${discount}</span>`
        : '';
}

// ===============================
// ENTRY PACKAGE
// ===============================
function populateCoachingEntry() {
    const el = document.getElementById('coaching-entry');
    if (!el) return;

    const features = entryPackage.features.map(f => `<li>${f}</li>`).join('');

    el.innerHTML = `
        <h6 class="entry-tag">${entryPackage.tag}</h6>
        <div class="coaching-card">
            <div>
                <h4 class="inter-heading-bold">
                    Entry
                    ${getDiscountBadge(entryPackage.discount)}
                </h4>

                ${generatePriceHTML(
                    entryPackage.price,
                    entryPackage.discount,
                    entryPackage.installmentPlan,
                    entryPackage.upfrontPayment
                )}
            </div>

            <ul class="inter-body-medium">${features}</ul>

            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${entryPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// ===============================
// BASIC PACKAGE
// ===============================
function populateCoachingBasic() {
    const el = document.getElementById('coaching-basic');
    if (!el) return;

    const features = basicPackage.features.map(f => `<li>${f}</li>`).join('');

    el.innerHTML = `
        <h6 class="tag basic-tag">${basicPackage.tag}</h6>
        <div class="coaching-card coaching-card--basic">
            <div>
                <h4 class="inter-heading-bold">
                    Basic
                    ${getDiscountBadge(basicPackage.discount)}
                </h4>

                ${generatePriceHTML(
                    basicPackage.price,
                    basicPackage.discount,
                    basicPackage.installmentPlan,
                    basicPackage.upfrontPayment
                )}
            </div>

            <ul class="inter-body-medium">${features}</ul>

            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${basicPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// ===============================
// PRO PACKAGE
// ===============================
function populateCoachingPro() {
    const el = document.getElementById('coaching-pro');
    if (!el) return;

    const features = proPackage.features.map(f => `<li>${f}</li>`).join('');

    el.innerHTML = `
        <h6 class="tag pro-tag">${proPackage.tag}</h6>
        <div class="coaching-card coaching-card--pro">
            <div>
                <h4 class="inter-heading-bold">
                    Pro
                    ${getDiscountBadge(proPackage.discount)}
                </h4>

                ${generatePriceHTML(
                    proPackage.price,
                    proPackage.discount,
                    proPackage.installmentPlan,
                    proPackage.upfrontPayment
                )}
            </div>

            <ul class="inter-body-medium">${features}</ul>

            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank" class="text-decoration-none">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${proPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// ===============================
// IMMORTAL PACKAGE
// ===============================
function populateCoachingImmortal() {
    const el = document.getElementById('coaching-immortal');
    if (!el) return;

    const features = immortalPackage.features.map(f => `<li>${f}</li>`).join('');

    el.innerHTML = `
        <img src="images/icons/heroicons_fire-20-solid.svg" style="position:absolute;top:-30px;left:-15px;width:60px;">
        <h6 class="tag immortal-tag">${immortalPackage.tag}</h6>
        <div class="coaching-card immortal-card">
            <div>
                <h4 class="inter-heading-bold">
                    Immortal
                    ${getDiscountBadge(immortalPackage.discount)}
                </h4>

                ${generatePriceHTML(
                    immortalPackage.price,
                    immortalPackage.discount,
                    immortalPackage.installmentPlan,
                    immortalPackage.upfrontPayment
                )}
            </div>

            <ul class="inter-body-medium">${features}</ul>

            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${immortalPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// ===============================
// TEN K PACKAGE
// ===============================
function populateCoachingTenK() {
    const el = document.getElementById('coaching-ten-k');
    if (!el) return;

    const features = tenKPackage.features.map(f => `<li>${f}</li>`).join('');

    el.innerHTML = `
        <h6 class="tag immortal-plus-tag">${tenKPackage.tag}</h6>
        <div class="coaching-card immortal-plus-card">
            <div>
                <h4 class="inter-heading-bold">
                    Beyond Immortal
                    ${getDiscountBadge(tenKPackage.discount)}
                </h4>

                ${generatePriceHTML(
                    tenKPackage.price,
                    tenKPackage.discount,
                    tenKPackage.installmentPlan,
                    tenKPackage.upfrontPayment
                )}
            </div>

            <ul class="inter-body-medium">${features}</ul>

            <a href="https://forms.gle/hvKt8N4WvEE1pvF27" target="_blank">
                <div class="coaching-card__button-container">
                    <button class="btn-custom">${tenKPackage.buttonLabel}</button>
                </div>
            </a>
        </div>
    `;
}

// ===============================
// LOAD ALL
// ===============================
function loadCoachingPackages() {
    populateCoachingEntry();
    populateCoachingBasic();
    populateCoachingPro();
    populateCoachingImmortal();
    populateCoachingTenK();
}

document.addEventListener('DOMContentLoaded', loadCoachingPackages);