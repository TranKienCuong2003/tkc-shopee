document.addEventListener('DOMContentLoaded', function() {
    // Phần quản lý lịch sử tìm kiếm
    const searchInput = document.querySelector('.header__search-input');
    const searchHistory = document.querySelector('.header__search-history');
    const searchHistoryList = document.querySelector('.header__search-history-list');
    const searchBtn = document.querySelector('.header__search-btn');
    const clearBtn = document.querySelector('.header__search-clear-btn');

    const suggestions = [
        "BÀN ỦI HƠI NƯỚC",
        "BÀN ĂN GỖ",
        "BÀN LÀM VIỆC",
        "BÀN PHÍM MECHANICAL",
        "BÁNH KẸO NGON",
        "BÁN PHÍM MECHANICAL",
        "BÀN QUẦN ÁO GỖ",
        "BÁNH KẸO NGON",
        "BIA CRAFT BEER",
        "CHUỘT GAMING",
        "DỤNG CỤ NHÀ BẾP",
        "DỤNG CỤ THỂ THAO",
        "DỤNG CỤ TRẺ EM",
        "DƯỠNG CHẤT TÓC",
        "DƯỠNG DA CAO CẤP",
        "ĐÈN BÀN CẦM TAY",
        "ĐÈN CHÙM PHA LÊ",
        "ĐÈN LED TRANG TRÍ",
        "ĐỒ CHƠI ĐIỀU KHIỂN",
        "ĐỒ CHƠI TRẺ EM",
        "ĐỒ DÙNG GIA ĐÌNH",
        "ĐỒ DÙNG TRẺ EM",
        "ĐỒ ĐIỆN TỬ",
        "ĐỒNG HỒ THỜI TRANG",
        "GHẾ SOFA",
        "GƯƠNG SOI",
        "GỐM SỨ CAO CẤP",
        "GIÀY BÓNG RỔ",
        "GIÀY BÓNG ĐÁ",
        "GIÀY DÉP NAM",
        "GIÀY DÉP NỮ",
        "GIÀY THỂ THAO",
        "GIÀY VANS",
        "GIẢM GIÁ 30%",
        "KHUYẾN MÃI HOT",
        "KHUYẾN MÃI 50%",
        "KEM CHỐNG NẮNG",
        "LOA BLUETOOTH",
        "LOA SOUND BAR",
        "LOA VI TÍNH",
        "LAPTOP GAMING",
        "MÁY ẢNH CANON",
        "MÁY ẢNH NIKON",
        "MÁY ẢNH SONY",
        "MÁY GIẶT CÔNG NGHIỆP",
        "MÁY HÚT BỤI ROBOT",
        "MÁY IN CHẤT LƯỢNG",
        "MÁY IN MÀU",
        "MÁY IN PHUN MÀU",
        "MÁY IN PHUN ĐEN TRẮNG",
        "MÁY IN LASER",
        "MÁY QUAY PHIM",
        "MÁY TÍNH BẢNG",
        "MÁY TÍNH CÁ NHÂN",
        "MÁY TÍNH DỰ ÁN",
        "MÁY TÍNH XÁCH TAY",
        "MỸ PHẨM CHĂM SÓC DA",
        "MỸ PHẨM HANDMADE",
        "NƯỚC HOA NAM",
        "NƯỚC HOA NỮ",
        "NƯỚC HOA HÀNG HIỆU",
        "NƯỚC HOA THÁI LAN",
        "NƯỚC HOA CHÍNH HÃNG",
        "NƯỚC SUỐI ĐÓNG CHAI",
        "NƯỚC SUỐI BẢO QUẢN",
        "NƯỚC SUỐI HẠN DÙNG",
        "NƯỚC SUỐI CHAI LỌ",
        "NƯỚC SUỐI NÚI",
        "NƯỚC SUỐI THANH TRÀ",
        "NƯỚC SUỐI CÓ GAS",
        "PHỤ KIỆN ĐIỆN THOẠI",
        "PHỤ KIỆN MÁY TÍNH",
        "PHỤ KIỆN THỜI TRANG",
        "PHỤ KIỆN ĐỒ CHƠI",
        "QUẦN ÁO CÔNG SỞ",
        "QUẦN ÁO THỜI TRANG",
        "QUẦN ÁO THỂ THAO",
        "QUẦN ÁO TRẺ EM",
        "QUẦN ÁO TRẺ EM",
        "QUẠT ĐIỆN CÁ NHÂN",
        "QUẠT ĐIỆN PHÒNG KHÁCH",
        "QUẠT ĐIỆN DÂN DỤNG",
        "QUẠT ĐIỆN GIÁ RẺ",
        "RƯỢU VANG CHILE",
        "RƯỢU VANG PHÁP",
        "RƯỢU VANG Ý",
        "RƯỢU VANG ÚC",
        "RƯỢU VANG MỸ",
        "RƯỢU VANG CHILE",
        "RƯỢU VANG PHÁP",
        "RƯỢU VANG"
    ]
    

    function showSearchHistory() {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistoryList.innerHTML = history.map(item => `
            <li class="header__search-history-item">
                <a href="#">${item}</a>
            </li>
        `).join('');
        searchHistory.style.display = 'block';
    }

    function hideSearchHistory() {
        searchHistory.style.display = 'none';
    }

    function saveSearchHistory(value) {
        let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!history.includes(value)) {
            history.push(value);
            localStorage.setItem('searchHistory', JSON.stringify(history));
        }
    }

    function clearSearchHistory() {
        localStorage.removeItem('searchHistory');
        searchHistoryList.innerHTML = '';
        hideSearchHistory();
    }

    function showSuggestions(value) {
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        );
        searchHistoryList.innerHTML = filteredSuggestions.map(suggestion => `
            <li class="header__search-history-item">
                <a href="#">${suggestion}</a>
            </li>
        `).join('');
        searchHistory.style.display = 'block';
    }

    function performSearch() {
        const value = searchInput.value.trim();
        if (value) {
            saveSearchHistory(value);
            console.log('Tìm kiếm:', value);
            searchInput.value = '';
            hideSearchHistory();
        }
    }

    searchInput.addEventListener('focus', showSearchHistory);

    searchInput.addEventListener('input', function() {
        const value = searchInput.value.trim();
        if (value.length >= 2) {
            showSuggestions(value);
        } else {
            showSearchHistory();
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchHistory.contains(event.target)) {
            hideSearchHistory();
        }
    });

    searchBtn.addEventListener('click', performSearch);

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    clearBtn.addEventListener('click', clearSearchHistory);

    document.querySelector('.header__search').addEventListener('submit', function(event) {
        event.preventDefault();
        performSearch();
    });

    searchHistoryList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            searchInput.value = event.target.textContent;
            hideSearchHistory();
        }
    });
    
    // Phần quản lý nút like
    const likeButtons = document.querySelectorAll('.home-product-item__like');
    likeButtons.forEach(likeButton => {
        likeButton.addEventListener('click', function(event) {
            event.preventDefault();
            this.classList.toggle('home-product-item__like--liked');
        });
    });

    // Phần quản lý đánh giá sao
    const productItems = document.querySelectorAll('.home-product-item');
    productItems.forEach(item => {
        const stars = item.querySelectorAll('.home-product-item__rating i');
        stars.forEach((star, index) => {
            star.addEventListener('click', function(event) {
                event.preventDefault();
                resetStars(stars);
                highlightStars(stars, index);
            });
        });
    });

    function resetStars(stars) {
        if (stars) {
            stars.forEach(star => {
                star.classList.remove('home-product-item__star--gold');
            });
        }
    }

    function highlightStars(stars, index) {
        if (stars) {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('home-product-item__star--gold');
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var chatButton = document.getElementById('chat-button');
    var chatBox = document.getElementById('chat-box');
    var chatBoxClose = document.getElementById('chat-box-close');
    var sendButton = document.getElementById('send-button');
    var userInput = document.getElementById('user-input');
    var chatBoxBody = document.querySelector('.chat-box-body');

    chatButton.addEventListener('click', function() {
        chatBox.style.display = 'flex';
        chatButton.style.opacity = '0';
    });

    chatBoxClose.addEventListener('click', function() {
        chatBox.style.display = 'none';
        chatButton.style.opacity = '1';
    });

    sendButton.addEventListener('click', function() {
        var message = userInput.value.trim();
        if (message) {
            var userMessage = document.createElement('div');
            userMessage.classList.add('chat-message', 'user');
            userMessage.innerHTML = `<p>${message}</p>`;
            chatBoxBody.appendChild(userMessage);
            userInput.value = '';
            chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
        }
    });

    // Add this to prevent pointer cursor on chat-box
    chatBox.addEventListener('mousemove', function(e) {
        if (e.target === chatBox) {
            chatBox.style.cursor = 'default';
        }
    });
});
