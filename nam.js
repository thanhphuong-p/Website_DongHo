// Đồng hồ bán chạy
const arrSp = [
    { hinh: "donghonam1.webp", ten: "Đồng Hồ Nam Lobinni No.15011-3 Automatic", gia: 12000000, link: "nu1.html" },
    { hinh: "donghonam3.webp", ten: "Đồng Hồ Nam Lobinni No.3603-3 Quartz", gia: 18000000},
    { hinh: "donghonam2.webp", ten: "Đồng Hồ Nam MOVADO Museum Classic 0607194 Dây Da - Case 40mm - Chống Nước", gia: 10000000},
    { hinh: "donghonam4.jpg", ten: "Đồng Hồ Patek Philippe Grand Complications 6002G-010", gia: 15000000},
    { hinh: "nam4.jpg", ten: "Đồng Hồ Nam Lobinni No.3603-3 Quartz", gia: 12000000 },
    { hinh: "nam5.webp", ten: "Đồng hồ Longines Présence", gia: 18000000},
    { hinh: "nam6.jpg", ten: "Đồng Hồ Nam Longines Chronograph Mặt Xanh", gia: 18908000},
    { hinh: "nam7.jpg", ten: "Longines Presence 34.5 Automatic Yellow", gia: 15000000},
];

// Load sản phẩm
let str = "";
for (let i = 0; i < arrSp.length; i++) {
  str += `
        <div class="sp">
            <img src="img/${arrSp[i].hinh}" alt="">
            <h4>${arrSp[i].ten}</h4>
            <h4>${arrSp[i].gia}</h4>
            <input type="number" min="1" value="1">
            <button onclick="addToCart(this)">Mua ngay</button>
        </div>
    `;
}
document.getElementById("list_sp").innerHTML = str;

const cart = [];

function addToCart(el) {
    let sp = el.parentElement.children;
    let hinh = sp[0].src;
    let ten = sp[1].innerHTML;
    let gia = sp[2].innerHTML;
    let soLuong = parseInt(sp[3].value, 10);
    const item = [hinh, ten, gia, soLuong];
    
    // Check trùng tên sp
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (ten === cart[i][1]) {
            cart[i][3] += soLuong;
            found = true;
            break;
        }
    }
    if (!found) cart.push(item);

    showCart();
    demsp();
}

function showCart() {
    let tt;
    let row = "";
    let tong = 0;
    
    if (cart.length === 0) {
      document.getElementById("row").style.display = "table-row";
    } else {
      document.getElementById("row").style.display = "none";
      for (let i = 0; i < cart.length; i++) {
        tt = cart[i][2] * cart[i][3];
        tong += tt;
        tt = tt.toLocaleString("de-DE");
        row += `
            <tr>
                <td>${i + 1}</td>
                <td><img src="${cart[i][0]}"></td>
                <td>${cart[i][1]}</td>
                <td>${cart[i][2]}</td>
                <td><input type="number" class="size" value="${cart[i][3]}" min="1" onchange="update(this, ${i})"></td>
                <td>${tt} VND</td>
                <td><i class="fa-solid fa-circle-minus" onclick="delcart(${i})"></i></td>
            </tr>
        `;
      }
    }
    
    document.getElementById("tb").innerHTML = row;
    document.getElementById('total').innerHTML = tong.toLocaleString("de-DE");
  }
  
  function demsp() {
    document.getElementById('item').innerHTML = cart.length;
  }
  
  function delcart(index) {
    cart.splice(index, 1); // Xóa sản phẩm từ mảng cart
    showCart(); // Cập nhật lại giỏ hàng
    demsp(); // Cập nhật số lượng sản phẩm
  }
  
  function update(input, index) {
    let soLuong_new = parseInt(input.value, 10);
    if (soLuong_new > 0) {
      cart[index][3] = soLuong_new;
      showCart();
      demsp();
    }
  }
  
  // Giỏ hàng
  document.querySelector('.fa-bag-shopping').addEventListener('click', function() {
    document.getElementById('cart').classList.toggle("active");
  });
  