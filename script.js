document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('side1');
    const toggleButton = document.getElementById('sidebar-toggle');

    toggleButton.addEventListener('click', function () {
        if (sidebar.style.transform === 'translateX(-100%)') {
            sidebar.style.transform = 'translateX(0)';
        } else {
            sidebar.style.transform = 'translateX(-100%)';
        }
    });
});
