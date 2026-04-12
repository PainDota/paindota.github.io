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
    const mmr = parseInt(value.replace(/\D/g, ''));

    if (!mmr) return;

    const immortalTarget = 5620;
    const tenKTarget = 10000;

    const immortalPrice = calculatePrice(mmr, immortalTarget);
    const tenKPrice = calculatePrice(mmr, tenKTarget);

    immortalPackage.price = `$${immortalPrice}`;
    tenKPackage.price = `$${tenKPrice}`;

    populateCoachingImmortal();
    populateCoachingTenK();

    // OPTIONAL: store for button click use
    window.currentPrices = {
        immortal: immortalPrice,
        tenk: tenKPrice
    };
}

const immortalFormBase =
  "https://docs.google.com/forms/d/e/1FAIpQLSd5FBovMV2JSvDNEII7j1rMH2Z4pN8OT4HbQAzdpRT6BO78_g/viewform";

const tenKFormBase =
  "https://docs.google.com/forms/d/e/1FAIpQLSePPS_DAD5CJIrfKxLAQBRO86UrmACzB9vtonxmGBYt5wBlBw/viewform";

  function redirectToForm(type, price) {
    let baseURL = "";
    let param = "";

    if (type === "immortal") {
        baseURL = immortalFormBase;
        param = "entry.1913976198";
    } else {
        baseURL = tenKFormBase;
        param = "entry.2052071461";
    }

    const url = `${baseURL}?usp=pp_url&${param}=${encodeURIComponent(price)}`;

    window.location.href = url;
}

document.getElementById("immortalBtn").addEventListener("click", function () {
    redirectToForm("immortal", window.currentPrices.immortal);
});

document.getElementById("tenkBtn").addEventListener("click", function () {
    redirectToForm("tenk", window.currentPrices.tenk);
});