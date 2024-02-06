// Modalni aniqlash
var modal = document.getElementById("myModal");

// Tugmalarni aniqlash
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Yopish tugmasini aniqlash
var span = document.getElementsByClassName("close")[0];

// Tugma voqea ishlovchilarini o'rnatish
btn1.onclick = function() {
    openNav('myModal');
}

btn2.onclick = function() {
    openNav('myModal');
}

// btn3 uchun maxsus openNav funksiyasini chaqirish
btn3.onclick = function() {
    openNav('myModal');
}

// openNav funksiyasi
function openNav(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

// Yopish (close) tugmasi uchun voqea ishlovchisi
span.onclick = function() {
    modal.style.display = "none";
}

// Modalning tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
