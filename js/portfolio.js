document.addEventListener('DOMContentLoaded', function() {
    
    initHeaderScroll();
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const filterValue = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            filterProjects(filterValue);
        });
    });
    
    // Function to filter projects based on the selected category
    function filterProjects(category) {
        projectItems.forEach(item => {
            
            const projectCategory = item.getAttribute('data-category');
            
            if (category === 'all' || category === projectCategory) {
                item.style.display = 'block';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);

            } else {
                
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
});

