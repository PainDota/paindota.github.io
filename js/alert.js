function initializeAlertBox(config) {
    const alertBox = document.getElementById('dynamicAlert');
    const alertTitle = document.getElementById('dynamicAlertTitle');
    const alertMessage = document.getElementById('dynamicAlertMessage');

    // Update the title and message
    if (config.title) alertTitle.textContent = config.title;
    if (config.message) alertMessage.textContent = config.message;

    // Update the theme class if provided
    if (config.theme) {
        // Remove existing theme classes (e.g., alert-primary, alert-success, etc.)
        alertBox.className = 'alert alert-dismissible fade show sale-alert';
        alertBox.classList.add(config.theme);
    }

    // Show or hide the alert box based on the 'visible' property
    alertBox.style.display = config.visible ? 'block' : 'none';
}

// Initialize alert box on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAlertBox(alertConfig.alert);
});
