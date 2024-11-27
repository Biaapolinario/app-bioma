const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');
const org = document.querySelectorAll('.org');

searchBtn.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase();

    org.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none'; 
        }
    });
});


searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});