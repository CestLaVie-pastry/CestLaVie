document.addEventListener('DOMContentLoaded', function() {
    const tortMenu = document.getElementById('tortMenu');
    const submenu = document.getElementById('submenu');

    tortMenu.addEventListener('click', function(e) {
        e.preventDefault(); // Чтобы не происходил переход по ссылке
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });

    // Закрытие подменю, если клик был вне меню
    document.addEventListener('click', function(e) {
        if (!submenu.contains(e.target) && !tortMenu.contains(e.target)) {
            submenu.style.display = 'none';
        }
    });
});
