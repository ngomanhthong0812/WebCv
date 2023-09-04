// Đặt một biến để theo dõi trạng thái hiện tại của menu
let menuOpen = false;

function expandBox() {
    const menu = document.querySelector('.menu_scroll');
    const icon = document.querySelector('.icon');

    if (menuOpen) {
        // Nếu menu đã mở, thu gọn nó
        menu.style.height = '0px';
        setTimeout(() => {
            menu.style.opacity = '0'; // Thêm delay 0.5s trước khi thiết lập opacity thành 0
        }, 500);
        icon.style.transform = 'rotate(0deg)';
        menuOpen = false;
    } else {
        // Nếu menu đã đóng, mở nó
        menu.style.height = '377px';
        menu.style.opacity = '1'; // Khi mở menu, đặt opacity thành 1
        icon.style.transform = 'rotate(180deg)';
        menuOpen = true;
    }
}
