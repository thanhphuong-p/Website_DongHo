const sp = [
    {
        hinh: ["donghonam1.webp", "donghonam2.webp", "donghonam3.webp"],
        ten: "Lobinni No.15011-3 Automatic",
        gia: 12000000,
        desc: "Lobinni No.15011-3 Automatic - Mẫu đồng hồ cơ tự động với thiết kế hiện đại, mặt kính sapphire chống trầy xước và khả năng chống nước tuyệt vời. Lý tưởng cho các quý ông yêu thích phong cách lịch lãm.",
        details: {
            thuongHieu: "Lobinni",
            soHieuSanPham: "15011-3",
            boSuuTap: "Lobinni Classic",
            xuatXu: "Thụy Sỹ",
            gioiTinh: "Nam",
            kinh: "Sapphire (Kính chống trầy)",
            may: "Automatic (Tự động lên dây cót)",
            thoiGianTruCoc: "40 giờ",
            chanKinh: "21 chân kính",
            chongNuoc: "5 ATM (50m)",
            chatLieuDay: "Thép không gỉ cao cấp",
        },
    },
    {
        hinh: ["donghonam3.webp", "donghonam1.webp", "donghonam4.jpg"],
        ten: "Lobinni No.3603-3 Quartz",
        gia: 18000000,
        desc: "Lobinni No.3603-3 Quartz - Mẫu đồng hồ sử dụng bộ máy Quartz chính xác cao, thiết kế dây đeo thép không gỉ, tạo nên vẻ ngoài sang trọng và mạnh mẽ. Phù hợp với doanh nhân thành đạt.",
        details: {
            thuongHieu: "Lobinni",
            soHieuSanPham: "3603-3",
            boSuuTap: "Lobinni Quartz",
            xuatXu: "Thụy Sỹ",
            gioiTinh: "Nam",
            kinh: "Sapphire (Kính chống trầy)",
            may: "Quartz (Chạy bằng pin)",
            chongNuoc: "3 ATM (30m)",
            chatLieuDay: "Thép không gỉ",
            kichThuocMat: "40mm",
        },
    },
    {
        hinh: ["donghonam2.webp", "donghonam4.jpg", "donghonam1.webp"],
        ten: "MOVADO Museum Classic",
        gia: 10000000,
        desc: "MOVADO Museum Classic - Dòng đồng hồ với thiết kế tối giản, biểu tượng chấm tròn nổi bật. Đây là sự kết hợp hoàn hảo giữa nghệ thuật và sự tinh tế trong từng chi tiết.",
        details: {
            thuongHieu: "MOVADO",
            soHieuSanPham: "Museum-Classic",
            boSuuTap: "Museum",
            xuatXu: "Mỹ",
            gioiTinh: "Nam",
            kinh: "Sapphire",
            may: "Quartz (Chạy bằng pin)",
            chongNuoc: "3 ATM (30m)",
            chatLieuDay: "Da bò cao cấp",
        },
    },
    {
        hinh: ["donghonam4.jpg", "donghonam3.webp", "donghonam2.webp"],
        ten: "Patek Philippe Grand Complications",
        gia: 15000000,
        desc: "Patek Philippe Grand Complications - Mẫu đồng hồ cao cấp với thiết kế phức tạp, kết hợp các chức năng đỉnh cao như lịch vạn niên và bấm giờ. Biểu tượng của đẳng cấp và sự tinh xảo.",
        details: {
            thuongHieu: "Patek Philippe",
            soHieuSanPham: "Grand-Complications",
            boSuuTap: "Complications",
            xuatXu: "Thụy Sỹ",
            gioiTinh: "Nam",
            kinh: "Sapphire (Kính chống trầy)",
            may: "Automatic (Máy cơ tự động)",
            chongNuoc: "3 ATM (30m)",
            chatLieuDay: "Vàng 18K",
        },
    },
    {
        hinh: ["8.jpg.webp", "nu2.webp", "nu3.webp"],
        ten: "Citizen-Nữ GA1058-16E",
        gia: 1650000,
        desc: "Citizen-Nữ GA1058-16E - Đồng hồ nữ thanh lịch với dây da cao cấp, mặt kính chống xước và khả năng chống nước tốt. Một phụ kiện hoàn hảo cho mọi dịp.",
        details: {
            thuongHieu: "Citizen",
            soHieuSanPham: "GA1058-16E",
            boSuuTap: "Classic Women",
            xuatXu: "Nhật Bản",
            gioiTinh: "Nữ",
            kinh: "Kính cứng (Mineral Glass)",
            may: "Quartz (Chạy bằng pin)",
            chongNuoc: "3 ATM (30m)",
            chatLieuDay: "Da tổng hợp",
        },
    },
    {
        hinh: ["nu3.webp", "nu1.webp", "nu2.webp"],
        ten: "Nữ CASIO LTP-VT01GL-4B",
        gia: 2000000,
        desc: "Nữ CASIO LTP-VT01GL-4B - Mẫu đồng hồ nữ trẻ trung, năng động với dây đeo da thời trang và bộ máy Quartz chính xác. Phù hợp với các cô gái hiện đại.",
        details: {
            thuongHieu: "Casio",
            soHieuSanPham: "LTP-VT01GL-4B",
            boSuuTap: "Vintage Women",
            xuatXu: "Nhật Bản",
            gioiTinh: "Nữ",
            kinh: "Kính cứng",
            may: "Quartz (Chạy bằng pin)",
            chongNuoc: "3 ATM (30m)",
            chatLieuDay: "Da PU",
        },
    },
    {
        hinh: ["nu2.webp", "nu3.webp", "nu1.webp"],
        ten: "Casio-Nữ 1BUDF",
        gia: 8000000,
        desc: "Casio-Nữ 1BUDF - Đồng hồ nữ cao cấp với thiết kế hiện đại, mặt kính chống trầy và khả năng chống nước vượt trội. Lựa chọn hoàn hảo cho các dịp đặc biệt.",
        details: {
            thuongHieu: "Casio",
            soHieuSanPham: "1BUDF",
            boSuuTap: "Premium Women",
            xuatXu: "Nhật Bản",
            gioiTinh: "Nữ",
            kinh: "Kính cứng",
            may: "Quartz (Chạy bằng pin)",
            chongNuoc: "5 ATM (50m)",
            chatLieuDay: "Thép không gỉ",
        },
    },
    {
        hinh: ["nu1.webp", "nu3.webp", "nu2.webp"],
        ten: "Nữ CASIO VT01GL-1B",
        gia: 6000000,
        desc: "Nữ CASIO VT01GL-1B - Đồng hồ nữ mang phong cách cổ điển với dây đeo da thanh lịch, mặt kính chống xước và bộ máy Quartz chính xác cao. Phù hợp với mọi phong cách.",
        details: {
            thuongHieu: "Casio",
            soHieuSanPham: "VT01GL-1B",
            boSuuTap: "Vintage Women",
            xuatXu: "Nhật Bản",
            gioiTinh: "Nữ",
            kinh: "Kính cứng",
            may: "Quartz (Chạy bằng pin)",
            chongNuoc: "3 ATM (30m)",
            chatLieuDay: "Da PU",
        },
    },
];


// Hiển thị danh sách sản phẩm
let str = '';
for (let i = 0; i < sp.length; i++) {
    str += `
        <div class="col_3">
            <img src="img/${sp[i].hinh[0]}" alt="${sp[i].ten}" onclick="showDetail(${i})">
            <h4>${sp[i].ten}</h4>
            <h5>${sp[i].gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
            <button onclick="addToCart(this)">Mua ngay</button>
            <button onclick="showDetail(${i})">Xem chi tiết</button>
        </div>
    `;
}
document.getElementById('list_pro').innerHTML = str;

// Hàm hiển thị chi tiết sản phẩm
function showDetail(index) {
    localStorage.setItem('product', JSON.stringify(sp[index]));
    window.location.href = 'detail.html';
}
