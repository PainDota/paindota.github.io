document.addEventListener("DOMContentLoaded", function () {
    const planSelector = document.getElementById("plan-selector");
    const allColumns = document.querySelectorAll("#comparison-grid .comparison-grid .col");
    const featureColumns = document.querySelectorAll("#comparison-grid .comparison-grid .col:first-child");

    // Show only the selected plan column
    function showSelectedPlan(selectedClass) {
        // Hide all plan columns (exclude the first column)
        allColumns.forEach((col, index) => {
            if (index !== 0) {
                col.classList.remove("active");
            }
        });

        // Always show the feature column
        featureColumns.forEach((col) => {
            col.classList.add("active");
        });

        // Show the selected column
        const selectedColumns = document.querySelectorAll(`.${selectedClass}`);
        selectedColumns.forEach((col) => {
            col.classList.add("active");
        });
    }

    // Default: Show "Entry" column
    showSelectedPlan("coaching-card--entry");

    // Handle dropdown changes
    planSelector.addEventListener("change", function () {
        showSelectedPlan(planSelector.value);
    });
});
