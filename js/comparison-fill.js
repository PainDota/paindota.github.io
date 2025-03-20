document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Initializing grid...");

    // Ensure comparisonData is available
    if (typeof comparisonData === 'undefined') {
        console.error("comparisonData is not defined!");
        return;
    }

    renderHeaderRow();
    renderFeatureRows();

    const planSelector = document.getElementById('plan-selector');
    if (planSelector) {
        planSelector.addEventListener('change', (event) => {
            const selectedPlan = event.target.value;
            //add here
            const planClasses = ["coaching-card--entry","coaching-card--basic", "coaching-card--pro", "coaching-card--immortal"];

            // Hide all plans
            planClasses.forEach(planClass => {
                document.querySelectorAll(`.${planClass}`).forEach(elem => {
                    elem.style.display = 'none';
                });
            });

            // Show the selected plan
            document.querySelectorAll(`.${selectedPlan}`).forEach(elem => {
                elem.style.display = 'block';
            });
        });
    } else {
        console.error('Plan selector element not found');
    }
});

function renderHeaderRow() {
    const headerRow = document.getElementById('header-row');
    if (!headerRow) {
        console.error('header-row element not found');
        return;
    }

    const headerData = comparisonData.header;
    let headerHTML = '<div class="col p-3"></div>'; // Empty cell for feature column

    headerData.slice(1).forEach(plan => {
        headerHTML += `<div class="col p-3 coaching-card--${plan.toLowerCase().replace(/\s+/g, '-')}">
                        <h4 class="inter-heading-bold">${plan}</h4>
                        <button class="btn-custom">Avail ${plan}</button>
                      </div>`;
    });

    headerRow.innerHTML = headerHTML;
}

function renderFeatureRows() {
    const featureRows = document.getElementById('feature-rows');
    if (!featureRows) {
        console.error('feature-rows element not found');
        return;
    }

    const rowData = comparisonData.rows;
    let featureHTML = '';

    rowData.forEach(row => {
        featureHTML += `<div class="row d-flex justify-content-between text-center">
                        <div class="col p-3">${row.feature}</div>`;

        comparisonData.header.slice(1).forEach(plan => {
            const featureValue = row[plan];
            let cellContent = '';
            if (featureValue === '✔') {
                cellContent = `<img src="images/icons/simple-icons_ticktick.svg" alt="Tick Icon">`;
            } else if (featureValue === '✘') {
                cellContent = '';
            } else {
                cellContent = featureValue;
            }

            featureHTML += `<div class="col p-3 coaching-card--${plan.toLowerCase().replace(/\s+/g, '-')}">${cellContent}</div>`;
        });

        featureHTML += `</div>`;
    });

    featureRows.innerHTML = featureHTML;
}
