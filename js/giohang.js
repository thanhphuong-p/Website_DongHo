const arrSp = [
    { hinh: "donghonam1.webp", ten: "Lobinni No.15011-3 Automatic", gia: 12000000 },
    { hinh: "donghonam3.webp", ten: "Lobinni No.3603-3 Quartz", gia: 18000000 },
    { hinh: "donghonam2.webp", ten: "MOVADO Museum Classic", gia: 10000000 },
    { hinh: "donghonam4.jpg", ten: "Patek Philippe Grand Complications", gia: 15000000 },
    { hinh: "8.jpg.webp", ten: "Citizen-Nữ GA1058-16E", gia: 1650000 },
    { hinh: "nu3.webp", ten: "Nữ CASIO LTP-VT01GL-4B", gia: 2000000 },
    { hinh: "nu2.webp", ten: "Casio-Nữ 1BUDF", gia: 8000000 },
    { hinh: "nu1.webp", ten: "Nữ CASIO VT01GL-1B", gia: 6000000 },
    { hinh: "nam4.jpg", ten: "Đồng Hồ Nam Lobinni No.3603-3 Quartz", gia: 12000000 },
    { hinh: "nam5.webp", ten: "Đồng hồ Longines Présence", gia: 18000000},
    { hinh: "nam6.jpg", ten: "Đồng Hồ Nam Longines Chronograph Mặt Xanh", gia: 18908000},
    { hinh: "nam7.jpg", ten: "Longines Presence 34.5 Automatic Yellow", gia: 15000000},
];


function loadProducts() {
    const listSp = document.getElementById("list_sp");
    listSp.innerHTML = arrSp.map((sp, index) => `
        <div class="sp">
            <img src="img/${sp.hinh}" alt="${sp.ten}" onclick="showDetail(${index})" style="cursor: pointer;">
            <h4>${sp.ten}</h4>
            <h4>${sp.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h4>
            <input type="number" min="1" value="1">
            <button onclick="addToCart(this)">Mua ngay</button>
            
        </div>
    `).join('');
}

function showDetail(index) {
    localStorage.setItem('product', JSON.stringify(arrSp[index]));
    window.location.href = 'detail.html';
}



const cart = [];

function addToCart(el) {
    const sp = el.parentElement.children;
    const hinh = sp[0].src;
    const ten = sp[1].textContent;
    const gia = parseFloat(sp[2].textContent.replace(/[^\d]/g, ''));
    const soLuong = parseInt(sp[3].value, 10);
    
    const item = { hinh, ten, gia, soLuong };

    const existingItem = cart.find(c => c.ten === ten);
    if (existingItem) {
        existingItem.soLuong += soLuong;
    } else {
        cart.push(item);
    }

    showCart();
    updateCartCount();
}

function showCart() {
    const cartTable = document.getElementById("tb");
    const row = document.getElementById("row");
    let html = '';
    let tong = 0;

    if (cart.length === 0) {
        row.style.display = "table-row";
    } else {
        row.style.display = "none";
        cart.forEach((item, index) => {
            const totalPrice = item.gia * item.soLuong;
            tong += totalPrice;
            html += `
                <tr>
                    <td>${index + 1}</td>
                    <td><img src="${item.hinh}" alt="${item.ten}"></td>
                    <td>${item.ten}</td>
                    <td>${item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                    <td><input type="number" class="size" value="${item.soLuong}" min="1" onchange="update(this, ${index})"></td>
                    <td>${totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                    <td><i class="fa-solid fa-circle-minus" onclick="delCart(${index})"></i></td>
                </tr>
            `;
        });
    }

    cartTable.innerHTML = html;
    document.getElementById('total').innerText = tong.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function update(input, index) {
    const soLuongNew = parseInt(input.value, 10);
    if (soLuongNew > 0) {
        cart[index].soLuong = soLuongNew;
        showCart();
        updateCartCount();
    }
}

function delCart(index) {
    cart.splice(index, 1);
    showCart();
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('item').innerText = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert("Chưa có sản phẩm trong giỏ hàng");
    } else {
        // Hiển thị popup chọn phương thức thanh toán
        document.getElementById('payment-method').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
}

function closePayment() {
    // Đóng popup
    document.getElementById('payment-method').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function confirmPayment() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (paymentMethod === 'online') {
        alert("Bạn đã chọn thanh toán online. Vui lòng cung cấp thông tin thanh toán.");
    } else if (paymentMethod === 'cod') {
        alert("Bạn đã chọn thanh toán khi nhận hàng. Đơn hàng của bạn sẽ được giao đến địa chỉ đã cung cấp.");
    }

    // Đóng popup và reset giỏ hàng
    closePayment();
    cart.length = 0;
    showCart();
    updateCartCount();
}



function confirmPayment() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (paymentMethod === 'online') {
        alert("Bạn đã chọn thanh toán online. Vui lòng cung cấp thông tin thanh toán.");
        closePayment();
        cart.length = 0;
        showCart();
        updateCartCount();
    } else if (paymentMethod === 'cod') {
        // Hiển thị form nhập thông tin giao hàng
        document.getElementById('cod-form').style.display = 'block';
    }
}

function submitCOD() {
    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    // Kiểm tra thông tin hợp lệ
    if (!fullname || !phone || !address) {
        alert("Vui lòng nhập đầy đủ thông tin giao hàng.");
        return;
    }

    // Kiểm tra định dạng số điện thoại (VD: chỉ cho phép số, từ 9-11 ký tự)
    const phoneRegex = /^[0-9]{9,11}$/;
    if (!phoneRegex.test(phone)) {
        alert("Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.");
        return;
    }

    alert(`
        Đơn hàng của bạn đã được xác nhận!
        Họ và tên: ${fullname}
        Số điện thoại: ${phone}
        Địa chỉ: ${address}
        Phương thức thanh toán: Thanh toán khi nhận hàng.
    `);

    // Đóng popup và reset giỏ hàng
    closePayment();
    cart.length = 0;
    showCart();
    updateCartCount();
}

document.querySelector('.fa-bag-shopping').addEventListener('click', () => {
    document.getElementById('cart').classList.toggle("active");
});

loadProducts();
// Hàm tìm kiếm sản phẩm theo tên hoặc theo giá
function searchProducts() {
    const searchInput = document.querySelector('.search input').value.trim().toLowerCase();
    const isPriceSearch = !isNaN(searchInput) && searchInput !== '';  // Kiểm tra nếu người dùng nhập vào giá
    const filteredProducts = arrSp.filter(sp => {
        // Tìm theo tên
        const matchesName = sp.ten.toLowerCase().includes(searchInput);

        // Tìm theo giá nếu nhập vào giá hợp lệ
        if (isPriceSearch) {
            const price = parseInt(searchInput);
            const minPrice = price - 1000000; // ±1 triệu đồng
            const maxPrice = price + 1000000;
            return sp.gia >= minPrice && sp.gia <= maxPrice;
        }

        return matchesName;  // Nếu không nhập giá, tìm theo tên
    });

    // Hiển thị kết quả tìm kiếm hoặc thông báo không có sản phẩm
    if (filteredProducts.length > 0) {
        displayProducts(filteredProducts);
    } else {
        document.getElementById("list_sp").innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
    }
}

// Hiển thị danh sách sản phẩm
function displayProducts(products) {
    const listSp = document.getElementById("list_sp");
    listSp.innerHTML = products.map((sp, index) => `
        <div class="sp">
            <img src="img/${sp.hinh}" alt="${sp.ten}" onclick="showDetail(${index})" style="cursor: pointer;">
            <h4>${sp.ten}</h4>
            <h4>${sp.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h4>
            <input type="number" min="1" value="1">
            <button onclick="addToCart(this)">Mua ngay</button>
        </div>
    `).join('');
}

// Gọi hàm khi nhấn nút tìm kiếm
document.querySelector('.search input').addEventListener('keyup', searchProducts);

// Load toàn bộ sản phẩm khi trang được tải
loadProducts();
