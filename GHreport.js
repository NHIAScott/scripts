window.GovHawk = window.GovHawk || {};
window.GovHawk.map_click = false;

window.addEventListener('chartLoaded', (event) => {
    document.getElementById('govhawk-filter-icon').click();
});
