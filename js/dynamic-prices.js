function toNumber(value) {
    return parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;
}

document.addEventListener('DOMContentLoaded', function () {
    const mmrInput = document.getElementById("mmrInput");
    if (!mmrInput) return;

    mmrInput.addEventListener("input", function () {
        console.log("[MMR INPUT]", this.value);
        handleMMRChange(this.value);
    });
});

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

    console.log("[HANDLE MMR]", { raw: value, parsed: mmr });

    if (value.trim() === "" || isNaN(mmr)) {
        console.log("[RESET MODE]");

        mutatedImmortalPackage = null;
        mutatedTenKPackage = null;

        renderPackages();
        return;
    }

    const { immortal, tenK, mode } = getCurrentPrices(mmr);

    console.log("[MODE]", mode);
    console.log("[PRICES]", { immortal, tenK });

    if (mmr < 5620) {
        mutatedImmortalPackage = {
            ...immortalPackage,
            price: `$${immortal}`
        };
        mutatedTenKPackage = null;
    } else {
        mutatedTenKPackage = {
            ...tenKPackage,
            price: `$${tenK}`
        };
        mutatedImmortalPackage = null;
    }

    renderPackages();
}

function renderPackages() {
    populateCoachingImmortal();
    populateCoachingTenK();
}