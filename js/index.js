const slider = [
    "img/05022023_MFonline_watchTet20249.jpeg", 
    "img/dong_ho_rolex_datejust_(2).jpg", 
    "img/giamgianu2.webp",
    "img/introll.webp",
    "img/introll1.webp",
    "img/nu1.webp",
    "img/nu2.webp",
    "img/nu3.webp",
];

let i = 0;
function prev() {
    i--;
    if (i < 0) {
        i = slider.length - 1;
    }
    document.getElementById("imgslider").src = slider[i];
}
function next() {
    i++;
    if (i == slider.length) {
        i = 0;
    }
    document.getElementById("imgslider").src = slider[i];
}

setInterval(next, 3000);

const slider1 = [
    "img/ronaldo3.webp",
    "img/ronaldo.jpg",
    "img/ronaldo2.jpg"
    
];

let j = 0;

function prev1() {
    j--;
    if (j < 0) {
        j = slider1.length - 1;
    }
    document.getElementById("imgslider1").src = slider1[j];
}

function next1() {
    j++;
    if (j == slider1.length) {
        j = 0;
    }
    document.getElementById("imgslider1").src = slider1[j];
}

setInterval(next1, 8000);

