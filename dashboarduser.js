// Dashboard Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Toggle active class for navigation items
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Notification handling
    const notificationIcon = document.querySelector('.notification-icon');
    
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function() {
            // In a real app, this would show a notification dropdown
            console.log('Notifications clicked');
            
            // Example: toggle a notification panel
            // document.querySelector('.notification-panel').classList.toggle('show');
        });
    }
    
    // Add new task button functionality
    const addTaskBtn = document.querySelector('.btn');
    
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', function() {
            // In a real app, this would open a modal to add a new task
            console.log('Add task clicked');
            
            // Example: show a task form modal
            // document.querySelector('.task-form-modal').classList.add('show');
        });
    }
    
    // Example function to update progress bars dynamically
    function updateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-value');
        
        progressBars.forEach(bar => {
            const percentValue = bar.style.width;
            
            // Change color based on progress percentage
            if (parseInt(percentValue) < 30) {
                bar.style.backgroundColor = '#dc3545'; // Danger/low progress
            } else if (parseInt(percentValue) < 70) {
                bar.style.backgroundColor = '#ffc107'; // Warning/medium progress
            } else {
                bar.style.backgroundColor = '#28a745'; // Success/high progress
            }
        });
    }
    
    // Call the function to update progress bars
    updateProgressBars();
});