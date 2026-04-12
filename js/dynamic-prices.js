function toNumber(value) {
    return parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;
}

function interpolate(x, x1, y1, x2, y2) {
    const result = y1 + (y2 - y1) * ((x - x1) / (x2 - x1));
    console.log(`[INTERPOLATE] x=${x}`, { x1, y1, x2, y2, result });
    return result;
}

function calculateImmortalPrice(mmr, immortalPackage) {
    console.log("[IMMORTAL] input mmr:", mmr, immortalPackage);

    if (mmr == null || !immortalPackage) return 0;

    mmr = parseInt(mmr, 10);
    if (isNaN(mmr)) return 0;

    const basePrice =
        toNumber(immortalPackage.price) -
        toNumber(immortalPackage.discount);

    console.log("[IMMORTAL] basePrice:", basePrice);

    const curve = [
        { mmr: 0, ratio: 1.0 },
        { mmr: 3000, ratio: 2000 / 2300 },
        { mmr: 4000, ratio: 1500 / 2300 },
        { mmr: 4500, ratio: 1000 / 2300 },
        { mmr: 5000, ratio: 800 / 2300 }
    ];

    if (mmr < 3000) {
        let price = basePrice + 0.75 * (3000 - mmr);
        price = Math.max(price, 0);

        console.log("[IMMORTAL] <3000 branch price:", price);

        return Math.ceil(price / 10) * 10;
    }

    const minPrice = (800 / 2300) * basePrice;

    if (mmr >= 5000) {
        console.log("[IMMORTAL] >=5000 minPrice:", minPrice);
        return Math.ceil(minPrice / 10) * 10;
    }

    let i = 0;
    while (i < curve.length - 1 && mmr > curve[i + 1].mmr) i++;

    console.log("[IMMORTAL] curve segment index:", i);

    const a = curve[i];
    const b = curve[i + 1];

    const ratio =
        a.mmr === b.mmr
            ? a.ratio
            : interpolate(mmr, a.mmr, a.ratio, b.mmr, b.ratio);

    console.log("[IMMORTAL] ratio:", ratio);

    let price = basePrice * ratio;

    price = Math.max(price, minPrice);

    const finalPrice = Math.ceil(price / 10) * 10;

    console.log("[IMMORTAL] final price:", finalPrice);

    return finalPrice;
}

function calculateTenKPrice(mmr, tenKPackage) {
    console.log("[10K] input mmr:", mmr, tenKPackage);

    if (mmr == null) return 0;

    mmr = parseInt(mmr, 10);
    if (isNaN(mmr)) return 0;

    const basePrice =
        toNumber(tenKPackage.price) -
        toNumber(tenKPackage.discount);

    console.log("[10K] basePrice:", basePrice);

    const curve = [
        { mmr: 5620, ratio: 1.0 },
        { mmr: 6000, ratio: 1.0 },
        { mmr: 7000, ratio: 3000 / 4000 },
        { mmr: 8000, ratio: 2000 / 4000 },
        { mmr: 9000, ratio: 1000 / 4000 },
        { mmr: 10000, ratio: 1000 / 4000 }
    ];

    if (mmr <= 6000) {
        console.log("[10K] <=6000 full price");
        return Math.ceil(basePrice / 10) * 10;
    }

    const minPrice = 1000;

    if (mmr >= 9000) {
        console.log("[10K] >=9000 min price");
        return Math.ceil(minPrice / 10) * 10;
    }

    let i = 0;
    while (i < curve.length - 1 && mmr > curve[i + 1].mmr) i++;

    console.log("[10K] curve segment index:", i);

    const a = curve[i];
    const b = curve[i + 1];

    const ratio =
        a.mmr === b.mmr
            ? a.ratio
            : interpolate(mmr, a.mmr, a.ratio, b.mmr, b.ratio);

    console.log("[10K] ratio:", ratio);

    let price = basePrice * ratio;

    price = Math.max(price, minPrice);

    const finalPrice = Math.ceil(price / 10) * 10;

    console.log("[10K] final price:", finalPrice);

    return finalPrice;
}

function getCurrentPrices(mmr) {
    if (mmr == null || isNaN(mmr)) {
        return {
            immortal: null,
            tenK: null,
            mode: "idle"
        };
    }

    if (mmr < 5620) {
        return {
            immortal: calculateImmortalPrice(mmr, immortalPackage),
            tenK: 0,
            mode: "immortal"
        };
    }

    return {
        immortal: 0,
        tenK: calculateTenKPrice(mmr, tenKPackage),
        mode: "tenk"
    };
}

function handleMMRChange(value) {
    const mmr = parseInt(value, 10);

    if (value.trim() === "" || isNaN(mmr)) {
        mutatedImmortalPackage = null;
        mutatedTenKPackage = null;

        populateCoachingImmortal();
        populateCoachingTenK();
        updateButtonStates(mmr);
        return;
    }

    const { immortal, tenK } = getCurrentPrices(mmr);

    if (mmr < 5620) {
        mutatedImmortalPackage = {
            ...immortalPackage,
            price: `$${immortal}`,
            buttonLabel: "Avail Immortal"
        };

        mutatedTenKPackage = {
            ...tenKPackage,
            buttonLabel: "Requires 5620+ MMR"
        };
    } else {
        mutatedTenKPackage = {
            ...tenKPackage,
            price: `$${tenK}`,
            buttonLabel: "Avail Beyond Immortal"
        };

        mutatedImmortalPackage = {
            ...immortalPackage,
            buttonLabel: "Immortals not Eligible"
        };
    }

    populateCoachingImmortal();
    populateCoachingTenK();
    updateButtonStates(mmr);
    updateFormLinks(mmr);
}

function setLinkDisabled(id, disabled, message) {
    const el = document.getElementById(id);
    if (!el) return;

    if (disabled) {
        el.style.pointerEvents = "none";
        el.style.opacity = "0.5";
        el.title = message;
    } else {
        el.style.pointerEvents = "auto";
        el.style.opacity = "1";
        el.title = "";
    }
}

function updateButtonStates(mmr) {
    const immortalBtn = document.getElementById("avail-immortal");
    const tenKBtn = document.getElementById("avail-ten-k");

    if (!immortalBtn || !tenKBtn) return;

    if (!mmr || isNaN(mmr) || mmr <= 0) {
        setLinkDisabled("avail-immortal", true, "Enter MMR to unlock");
        setLinkDisabled("avail-ten-k", true, "Enter MMR to unlock");
        return;
    }

    // IMMORTAL MODE
    if (mmr <= 5620) {
        setLinkDisabled("avail-immortal", false, "Eligible for Immortal Coaching");
        setLinkDisabled("avail-ten-k", true, "Minimum MMR Required is Immortal 5620");
        return;
    }

    // TENK MODE
    setLinkDisabled("avail-immortal", true, "Minimum MMR Acceptable is Divine <5620");
    setLinkDisabled("avail-ten-k", false, "Eligible for Beyond Immortal Coaching");
}

function updateFormLinks(mmr) {
    const immortalLink = document.getElementById("avail-immortal");
    const tenKLink = document.getElementById("avail-ten-k");

    if (!immortalLink || !tenKLink) return;

    const { immortal, tenK, mode } = getCurrentPrices(mmr);

    const finalImmortal = immortal
        ? immortal - toNumber(immortalPackage.discount)
        : 0;

    const finalTenK = tenK
        ? tenK - toNumber(tenKPackage.discount)
        : 0;

    // Reset state
    if (!mmr || isNaN(mmr)) {
        immortalLink.href = "#";
        tenKLink.href = "#";
        return;
    }

    if (mode === "immortal") {
        immortalLink.href = IMMORTAL_FORM_URL + finalImmortal;
        tenKLink.href = "#";
    } else {
        tenKLink.href = TENK_FORM_URL + finalTenK;
        immortalLink.href = "#";
    }
}

function renderPackages() {
    populateCoachingImmortal();
    populateCoachingTenK();
}

document.addEventListener("DOMContentLoaded", function () {
    const mmrInput = document.getElementById("mmrInput");

    if (!mmrInput) return;

    // FORCE INITIAL LOCK STATE
    updateButtonStates(0);

    mmrInput.addEventListener("input", function () {
        handleMMRChange(this.value);
    });
});