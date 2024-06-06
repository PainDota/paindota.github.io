// Function to update the stats on the webpage
function updateStats() {
    // Get each element by its ID and update its content
    document.getElementById('mmr').textContent = statsValues.mmr;
    document.getElementById('students').textContent = statsValues.students;
    document.getElementById('coaching-hrs').textContent = statsValues.coachingHrs;
    document.getElementById('views').textContent = statsValues.views;
}

window.addEventListener('load', updateStats);