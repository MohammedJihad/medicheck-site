document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle Logic
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.menu li a');
    const collapseIcon = document.querySelector('.sidebar-logo');

    // Collapse Sidebar on Hover Out and Expand on Hover In
    sidebar.addEventListener('mouseover', () => {
        sidebar.classList.remove('collapsed');
    });

    sidebar.addEventListener('mouseout', () => {
        sidebar.classList.add('collapsed');
    });

    // Sidebar Navigation
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            sidebarLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');
            // Prevent sidebar from collapsing when a link is clicked
            sidebar.classList.remove('collapsed');
        });
    });

    // Form Submission Example (for Reminders or Health Profile)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted successfully!');
        });
    });

    // Search Bar Functionality (Home Page)
    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                searchResults.innerHTML = `<p>Searching for: <strong>${query}</strong></p>`;
            } else {
                searchResults.innerHTML = '<p>Please enter a valid search term.</p>';
            }
        });
    }

    // Collapsible Sections in Health Profile and History
    const collapsibleSections = document.querySelectorAll('.collapsible-section');
    collapsibleSections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content');

        header.addEventListener('click', () => {
            content.classList.toggle('hidden');
            header.querySelector('i').classList.toggle('rotate');
        });
    });

    // Timeline Expand/Collapse (History Page)
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const date = item.querySelector('.timeline-date');
        const content = item.querySelector('.timeline-content');

        date.addEventListener('click', () => {
            content.classList.toggle('hidden');
        });
    });

    // Navigation Between Pages
    const pageLinks = document.querySelectorAll('.menu li a');
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('href').replace('.html', '');
            window.location.href = `${targetPage}.html`;
        });
    });

    // Load Background Images Dynamically
    const pageClasses = [
        'home-page',
        'medications-page',
        'consultations-page',
        'reminders-page',
        'health-profile-page',
        'history-page',
    ];

    pageClasses.forEach(pageClass => {
        if (document.body.classList.contains(pageClass)) {
            document.body.style.backgroundImage = `url('assets/${pageClass}.jpg')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
        }
    });
});