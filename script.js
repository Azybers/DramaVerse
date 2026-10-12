// ==========================================
// DRAMAVERSE — DATABASE (100 Items Total)
// ==========================================
let dramaList = [
    // ========== KOREAN DRAMAS — 25 ==========
    { id: 1, title: "Crash Landing on You", category: "korean-drama", year: 2019, rating: 8.8, link: "" },
    { id: 2, title: "Goblin (Guardian: The Lonely and Great God)", category: "korean-drama", year: 2016, rating: 8.9, link: "" },
    { id: 3, title: "Itaewon Class", category: "korean-drama", year: 2020, rating: 8.3, link: "" },
    { id: 4, title: "Descendants of the Sun", category: "korean-drama", year: 2016, rating: 8.2, link: "" },
    { id: 5, title: "Hotel del Luna", category: "korean-drama", year: 2019, rating: 8.4, link: "" },
    { id: 6, title: "The Glory", category: "korean-drama", year: 2022, rating: 8.6, link: "" },
    { id: 7, title: "Reply 1988", category: "korean-drama", year: 2015, rating: 9.2, link: "" },
    { id: 8, title: "My Mister", category: "korean-drama", year: 2018, rating: 9.1, link: "" },
    { id: 9, title: "Weightlifting Fairy Kim Bok-joo", category: "korean-drama", year: 2016, rating: 8.3, link: "" },
    { id: 10, title: "Strong Woman Do Bong-soon", category: "korean-drama", year: 2017, rating: 8.3, link: "" },
    { id: 11, title: "Hwarang: The Poet Warrior Youth", category: "korean-drama", year: 2016, rating: 7.8, link: "" },
    { id: 12, title: "What's Wrong with Secretary Kim", category: "korean-drama", year: 2018, rating: 8.1, link: "" },
    { id: 13, title: "True Beauty", category: "korean-drama", year: 2020, rating: 8.0, link: "" },
    { id: 14, title: "Business Proposal", category: "korean-drama", year: 2022, rating: 8.1, link: "" },
    { id: 15, title: "Kingdom", category: "korean-drama", year: 2019, rating: 8.5, link: "" },
    { id: 16, title: "Signal", category: "korean-drama", year: 2016, rating: 9.2, link: "" },
    { id: 17, title: "While You Were Sleeping", category: "korean-drama", year: 2017, rating: 8.4, link: "" },
    { id: 18, title: "Romance is a Bonus Book", category: "korean-drama", year: 2019, rating: 8.2, link: "" },
    { id: 19, title: "It's Okay to Not Be Okay", category: "korean-drama", year: 2020, rating: 8.7, link: "" },
    { id: 20, title: "Vincenzo", category: "korean-drama", year: 2021, rating: 8.5, link: "" },
    { id: 21, title: "Twenty-Five Twenty-One", category: "korean-drama", year: 2022, rating: 8.7, link: "" },
    { id: 22, title: "All of Us Are Dead", category: "korean-drama", year: 2022, rating: 8.1, link: "" },
    { id: 23, title: "Extraordinary Attorney Woo", category: "korean-drama", year: 2022, rating: 8.8, link: "" },
    { id: 24, title: "Doctor Slump", category: "korean-drama", year: 2024, rating: 8.0, link: "" },
    { id: 25, title: "Queen of Tears", category: "korean-drama", year: 2024, rating: 8.6, link: "" },

    // ========== KOREAN MOVIES — 25 ==========
    { id: 26, title: "Parasite", category: "korean-movie", year: 2019, rating: 8.5, link: "" },
    { id: 27, title: "Train to Busan", category: "korean-movie", year: 2016, rating: 8.5, link: "" },
    { id: 28, title: "Squid Game: The Challenge", category: "korean-movie", year: 2024, rating: 6.3, link: "" },
    { id: 29, title: "Oldboy", category: "korean-movie", year: 2003, rating: 8.4, link: "" },
    { id: 30, title: "The Handmaiden", category: "korean-movie", year: 2016, rating: 8.5, link: "" },
    { id: 31, title: "Snow on the Blades", category: "korean-movie", year: 2024, rating: 7.2, link: "" },
    { id: 32, title: "Extreme Job", category: "korean-movie", year: 2019, rating: 8.3, link: "" },
    { id: 33, title: "Miracle in Cell No. 7", category: "korean-movie", year: 2013, rating: 8.6, link: "" },
    { id: 34, title: "Along with the Gods: The Two Worlds", category: "korean-movie", year: 2017, rating: 8.2, link: "" },
    { id: 35, title: "The Wailing", category: "korean-movie", year: 2016, rating: 8.3, link: "" },
    { id: 36, title: "Burning", category: "korean-movie", year: 2018, rating: 7.5, link: "" },
    { id: 37, title: "1987: When the Day Comes", category: "korean-movie", year: 2017, rating: 8.2, link: "" },
    { id: 38, title: "The Attorney", category: "korean-movie", year: 2013, rating: 8.2, link: "" },
    { id: 39, title: "A Taxi Driver", category: "korean-movie", year: 2017, rating: 8.4, link: "" },
    { id: 40, title: "Little Forest", category: "korean-movie", year: 2018, rating: 7.6, link: "" },
    { id: 41, title: "Peninsula", category: "korean-movie", year: 2020, rating: 5.5, link: "" },
    { id: 42, title: "Space Sweepers", category: "korean-movie", year: 2021, rating: 6.6, link: "" },
    { id: 43, title: "The Call", category: "korean-movie", year: 2020, rating: 7.1, link: "" },
    { id: 44, title: "Alive", category: "korean-movie", year: 2020, rating: 6.3, link: "" },
    { id: 45, title: "#Alive", category: "korean-movie", year: 2020, rating: 6.3, link: "" },
    { id: 46, title: "Cobweb", category: "korean-movie", year: 2023, rating: 6.6, link: "" },
    { id: 47, title: "Exhuma", category: "korean-movie", year: 2024, rating: 7.3, link: "" },
    { id: 48, title: "The Roundup", category: "korean-movie", year: 2022, rating: 7.1, link: "" },
    { id: 49, title: "Decision to Leave", category: "korean-movie", year: 2022, rating: 7.3, link: "" },
    { id: 50, title: "Broker", category: "korean-movie", year: 2022, rating: 7.1, link: "" },

    // ========== CHINESE DRAMAS — 25 ==========
    { id: 51, title: "The Untamed", category: "chinese-drama", year: 2019, rating: 8.9, link: "" },
    { id: 52, title: "Eternal Love", category: "chinese-drama", year: 2017, rating: 8.3, link: "" },
    { id: 53, title: "Love Between Fairy and Devil", category: "chinese-drama", year: 2022, rating: 8.4, link: "" },
    { id: 54, title: "The Story of Yanxi Palace", category: "chinese-drama", year: 2018, rating: 7.8, link: "" },
    { id: 55, title: "Nirvana in Fire", category: "chinese-drama", year: 2015, rating: 9.4, link: "" },
    { id: 56, title: "A Love So Beautiful", category: "chinese-drama", year: 2017, rating: 8.1, link: "" },
    { id: 57, title: "Put Your Head on My Shoulder", category: "chinese-drama", year: 2019, rating: 8.2, link: "" },
    { id: 58, title: "The Longest Day in Chang'an", category: "chinese-drama", year: 2019, rating: 8.5, link: "" },
    { id: 59, title: "Go Go Squid!", category: "chinese-drama", year: 2019, rating: 7.6, link: "" },
    { id: 60, title: "The Legend of Shen Li", category: "chinese-drama", year: 2024, rating: 7.7, link: "" },
    { id: 61, title: "Who Rules the World", category: "chinese-drama", year: 2022, rating: 7.8, link: "" },
    { id: 62, title: "Love O2O", category: "chinese-drama", year: 2016, rating: 7.7, link: "" },
    { id: 63, title: "Meteor Garden", category: "chinese-drama", year: 2018, rating: 7.4, link: "" },
    { id: 64, title: "Scarlet Heart", category: "chinese-drama", year: 2011, rating: 8.4, link: "" },
    { id: 65, title: "The Rise of Phoenixes", category: "chinese-drama", year: 2018, rating: 8.5, link: "" },
    { id: 66, title: "Story of Kunning Palace", category: "chinese-drama", year: 2023, rating: 8.0, link: "" },
    { id: 67, title: "The Legend of Fei", category: "chinese-drama", year: 2020, rating: 7.6, link: "" },
    { id: 68, title: "One and Only", category: "chinese-drama", year: 2021, rating: 8.3, link: "" },
    { id: 69, title: "The Blue Whisper", category: "chinese-drama", year: 2023, rating: 7.8, link: "" },
    { id: 70, title: "Destined", category: "chinese-drama", year: 2023, rating: 8.1, link: "" },
    { id: 71, title: "The Long Ballad", category: "chinese-drama", year: 2021, rating: 8.4, link: "" },
    { id: 72, title: "Dance of the Phoenix", category: "chinese-drama", year: 2020, rating: 7.3, link: "" },
    { id: 73, title: "My Uncanny Destiny", category: "chinese-drama", year: 2023, rating: 7.5, link: "" },
    { id: 74, title: "The Legend of Zhuohua", category: "chinese-drama", year: 2023, rating: 7.6, link: "" },
    { id: 75, title: "Blossoms in Adversity", category: "chinese-drama", year: 2024, rating: 8.0, link: "" },

    // ========== CHINESE MOVIES — 25 ==========
    { id: 76, title: "Crouching Tiger, Hidden Dragon", category: "chinese-movie", year: 2000, rating: 7.9, link: "" },
    { id: 77, title: "The Wandering Earth", category: "chinese-movie", year: 2019, rating: 7.3, link: "" },
    { id: 78, title: "Wolf Warrior 2", category: "chinese-movie", year: 2017, rating: 6.9, link: "" },
    { id: 79, title: "Ne Zha", category: "chinese-movie", year: 2019, rating: 7.4, link: "" },
    { id: 80, title: "The Mermaid", category: "chinese-movie", year: 2016, rating: 6.3, link: "" },
    { id: 81, title: "Operation Red Sea", category: "chinese-movie", year: 2018, rating: 6.9, link: "" },
    { id: 82, title: "Dying to Survive", category: "chinese-movie", year: 2018, rating: 7.8, link: "" },
    { id: 83, title: "The Eight Hundred", category: "chinese-movie", year: 2020, rating: 7.6, link: "" },
    { id: 84, title: "Hi, Mom", category: "chinese-movie", year: 2021, rating: 7.2, link: "" },
    { id: 85, title: "Shadow", category: "chinese-movie", year: 2018, rating: 7.3, link: "" },
    { id: 86, title: "Hero", category: "chinese-movie", year: 2002, rating: 7.9, link: "" },
    { id: 87, title: "House of Flying Daggers", category: "chinese-movie", year: 2004, rating: 7.5, link: "" },
    { id: 88, title: "Rise of the Legend", category: "chinese-movie", year: 2014, rating: 6.5, link: "" },
    { id: 89, title: "Detective Chinatown", category: "chinese-movie", year: 2015, rating: 6.7, link: "" },
    { id: 90, title: "Better Days", category: "chinese-movie", year: 2019, rating: 7.4, link: "" },
    { id: 91, title: "Soul Mate", category: "chinese-movie", year: 2016, rating: 7.4, link: "" },
    { id: 92, title: "The Flowers of War", category: "chinese-movie", year: 2011, rating: 7.6, link: "" },
    { id: 93, title: "Monster Hunt", category: "chinese-movie", year: 2015, rating: 6.2, link: "" },
    { id: 94, title: "Kung Fu Hustle", category: "chinese-movie", year: 2004, rating: 7.7, link: "" },
    { id: 95, title: "Shaolin Soccer", category: "chinese-movie", year: 2001, rating: 7.6, link: "" },
    { id: 96, title: "The Wandering Earth II", category: "chinese-movie", year: 2023, rating: 8.3, link: "" },
    { id: 97, title: "Creation of the Gods I", category: "chinese-movie", year: 2023, rating: 7.6, link: "" },
    { id: 98, title: "Never Say Die", category: "chinese-movie", year: 2017, rating: 6.5, link: "" },
    { id: 99, title: "My People, My Homeland", category: "chinese-movie", year: 2020, rating: 6.7, link: "" },
    { id: 100, title: "Man Jiang Hong", category: "chinese-movie", year: 2023, rating: 7.0, link: "" }
];

// ==========================================
// APP LOGIC
// ==========================================
const playlistGrid = document.getElementById('playlist-grid');
const searchInput = document.getElementById('search-input');
const navButtons = document.querySelectorAll('.nav-btn');
const sectionTitle = document.getElementById('section-title');
const totalCountSpan = document.querySelector('#total-count span');
const addModal = document.getElementById('add-modal');
const openAddBtn = document.getElementById('open-add-modal');
const closeBtn = document.querySelector('.close-btn');
const addForm = document.getElementById('add-form');

let currentCategory = 'all';
let nextId = 101;

// Category display names
const categoryNames = {
    'all': 'All Collection',
    'korean-drama': '🎭 Korean Dramas',
    'korean-movie': '🎬 Korean Movies',
    'chinese-drama': '🏮 Chinese Dramas',
    'chinese-movie': '🎥 Chinese Movies'
};

const badgeColors = {
    'korean-drama': '#ff9f43',
    'korean-movie': '#ee5a24',
    'chinese-drama': '#e84393',
    'chinese-movie': '#00b894'
};

const badgeLabels = {
    'korean-drama': 'K-Drama',
    'korean-movie': 'K-Movie',
    'chinese-drama': 'C-Drama',
    'chinese-movie': 'C-Movie'
};

// Render items
function renderItems() {
    let filtered = dramaList;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }
    
    // Filter by search
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(searchTerm)
        );
    }
    
    // Update total count
    totalCountSpan.textContent = filtered.length;
    
    // Clear grid
    playlistGrid.innerHTML = '';
    
    if (filtered.length === 0) {
        playlistGrid.innerHTML = `<p class="empty-message">No items found 😔</p>`;
        return;
    }
    
    // Render each item
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-card-body">
                <span class="item-badge" style="background: ${badgeColors[item.category]}">${badgeLabels[item.category]}</span>
                <h3 class="item-title">${escapeHtml(item.title)}</h3>
                <p class="item-meta">
                    ${item.year || 'N/A'} ${item.rating ? `★ ${item.rating}` : ''}
                </p>
                <div class="item-actions">
                    ${item.link ? `<a href="${escapeHtml(item.link)}" target="_blank" class="watch-link">Watch</a>` : ''}
                    <button class="delete-btn" data-id="${item.id}">Delete</button>
                </div>
            </div>
        `;
        playlistGrid.appendChild(card);
    });
    
    // Attach delete listeners
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            if (confirm('Remove this item from your playlist?')) {
                dramaList = dramaList.filter(item => item.id !== id);
                renderItems();
            }
        });
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Category navigation
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        sectionTitle.textContent = categoryNames[currentCategory];
        searchInput.value = '';
        renderItems();
    });
});

// Search
searchInput.addEventListener('input', renderItems);

// Modal controls
openAddBtn.addEventListener('click', () => {
    addModal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    addModal.classList.remove('show');
    addForm.reset();
});

addModal.addEventListener('click', (e) => {
    if (e.target === addModal) {
        addModal.classList.remove('show');
        addForm.reset();
    }
});

// Add new item
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newItem = {
        id: nextId++,
        title: document.getElementById('item-title').value.trim(),
        category: document.getElementById('item-category').value,
        year: document.getElementById('item-year').value ? parseInt(document.getElementById('item-year').value) : null,
        rating: document.getElementById('item-rating').value ? parseFloat(document.getElementById('item-rating').value) : null,
        link: document.getElementById('item-link').value.trim() || ''
    };
    
    dramaList.unshift(newItem); // Add to top
    renderItems();
    
    // Close modal & reset
    addModal.classList.remove('show');
    addForm.reset();
    
    // Show success feedback
    alert(`✅ "${newItem.title}" added successfully!`);
});

// Initial render
renderItems();
