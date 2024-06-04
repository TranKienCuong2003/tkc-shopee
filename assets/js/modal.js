document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết từ DOM
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal__overlay');
    const modalBody = document.querySelector('.modal__body');

    // Kiểm tra sự tồn tại của các phần tử trước khi gán sự kiện
    if (modalOverlay && modalBody) {
        // Hàm để hiển thị modal
        function showModal() {
            modal.classList.add('active');
        }

        // Hàm để ẩn modal và chuyển về trang index.html
        function hideModal() {
            modal.classList.remove('active');
            window.location.href = '../index.html'; // Chuyển hướng về trang index.html
        }

        // Sự kiện nhấp vào overlay để ẩn modal và chuyển về trang index.html
        modalOverlay.addEventListener('click', function() {
            hideModal();
        });

        // Sự kiện nhấp vào bên trong modal__body sẽ không ẩn modal
        modalBody.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        // Ví dụ cách kích hoạt modal, bạn có thể sử dụng khi người dùng nhấp vào đăng nhập hoặc đăng ký
        document.querySelector('.header__navbar-item-link[href="./modal/login.html"]').addEventListener('click', function(event) {
            event.preventDefault();
            showModal();
        });

        document.querySelector('.header__navbar-item-link[href="./modal/regist.html"]').addEventListener('click', function(event) {
            event.preventDefault();
            showModal();
        });
    } else {
        console.error("Không tìm thấy phần tử .modal__overlay hoặc .modal__body trong DOM.");
    }
});
