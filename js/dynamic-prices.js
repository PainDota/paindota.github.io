const mmrInput = document.getElementById("mmrInput");

document.addEventListener('DOMContentLoaded', function () {
    const mmrInput = document.getElementById("mmrInput");

    if (!mmrInput) return;

    mmrInput.addEventListener("input", function () {
        handleMMRChange(this.value);
    });
});

function calculatePrice(mmr, targetMMR) {
    if (!mmr || mmr >= targetMMR) return 0;

    let price = 0;

    // Part 1: from current MMR → 3000
    if (mmr < 3000) {
        const end = Math.min(3000, targetMMR);
        price += (end - mmr) * 0.75;
        mmr = end;
    }

    // Part 2: from 3000 → target
    if (targetMMR > 3000 && mmr < targetMMR) {
        price += (targetMMR - mmr) * 1;
    }

    return Math.round(price);
}

function handleMMRChange(value) {
    const mmr = parseInt(value.replace(/\D/g, '')); // only numbers

    if (!mmr) return;

    // Targets
    const immortalTarget = 5620;
    const tenKTarget = 10000;

    const immortalPrice = calculatePrice(mmr, immortalTarget);
    const tenKPrice = calculatePrice(mmr, tenKTarget);

    // Update package prices
    immortalPackage.price = `$${immortalPrice}`;
    tenKPackage.price = `$${tenKPrice}`;

    // Re-render ONLY affected cards
    populateCoachingImmortal();
    populateCoachingTenK();
}