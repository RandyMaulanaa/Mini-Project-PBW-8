// Dashboard Functionality
document.addEventListener('DOMContentLoaded', function() {
    // ===== Sidebar Toggle =====
    const layout = document.querySelector('.layout');
    const sidebarToggle = document.createElement('button');
    sidebarToggle.className = 'sidebar-toggle';
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
    layout.prepend(sidebarToggle);
    
    const sidebar = document.querySelector('.sidebar');
    
    // Toggle sidebar when button is clicked
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');

        if (sidebar.classList.contains('active')) {
            sidebarToggle.style.display = "none";
        } else {
            sidebarToggle.style.display = "block";
        }
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = sidebarToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggle && window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
    
    // Close sidebar when window is resized to larger screen
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // ===== Navigation Active State =====
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        // Set active class based on current page
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ===== Notification Handling =====
    const notificationIcon = document.querySelector('.notification-icon');
    
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function() {
            console.log('Notifications clicked');
            // document.querySelector('.notification-panel').classList.toggle('show');
        });
    }

    // ===== Add New Task Button Functionality =====
    const addTaskBtn = document.querySelector('.btn');
    
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', function() {
            console.log('Add task clicked');
            // document.querySelector('.task-form-modal').classList.add('show');
        });
    }

    // ===== Update Progress Bars =====
    function updateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-value');
        
        progressBars.forEach(bar => {
            const percentValue = bar.style.width;
            
            if (parseInt(percentValue) < 30) {
                bar.style.backgroundColor = '#dc3545'; // Danger/low progress
            } else if (parseInt(percentValue) < 70) {
                bar.style.backgroundColor = '#ffc107'; // Warning/medium progress
            } else {
                bar.style.backgroundColor = '#28a745'; // Success/high progress
            }
        });
    }

    updateProgressBars();
    
    // ===== Responsive Tables =====
    function makeTablesResponsive() {
        const tables = document.querySelectorAll('table');
        
        tables.forEach(table => {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            wrapper.style.overflowX = 'auto';
            
            // Replace the table with the wrapper containing the table
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }
    
    makeTablesResponsive();
    
    // ===== Add notification functionality similar to profile.js =====
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="close-notification">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add notification to DOM
        document.body.appendChild(notification);
        
        // Add styles dynamically
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        notification.style.display = 'flex';
        notification.style.alignItems = 'center';
        notification.style.justifyContent = 'space-between';
        notification.style.minWidth = '280px';
        notification.style.zIndex = '9999';
        notification.style.animation = 'slideIn 0.3s ease-out forwards';
        
        // Create animation if it doesn't exist
        if (!document.getElementById('notification-animations')) {
            const style = document.createElement('style');
            style.id = 'notification-animations';
            style.innerHTML = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Close notification on click
        const closeButton = notification.querySelector('.close-notification');
        closeButton.addEventListener('click', function() {
            notification.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.animation = 'slideOut 0.3s ease-in forwards';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }
    
    // Make showNotification available globally
    window.showNotification = showNotification;
});