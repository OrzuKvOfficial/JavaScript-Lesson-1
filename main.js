function soatKorsatish() {
    var sanasi = new Date(); // Joriy sana va vaqt
    var soat = sanasi.getHours(); // Soatni olish (0-23)
    var minut = sanasi.getMinutes(); // Daqiqani olish (0-59)
    var sekund = sanasi.getSeconds(); // Sekundni olish (0-59)
    
    // Soat, minut va sekundni ikki belgilik ravishda ko'rsatish uchun kerakli tekshiruvlar
    soat = (soat < 10) ? "0" + soat : soat;
    minut = (minut < 10) ? "0" + minut : minut;
    sekund = (sekund < 10) ? "0" + sekund : sekund;
    
    // Soatni HTML'da div ichiga chiqarish
    document.getElementById("soat").innerHTML = soat + ":" + minut + ":" + sekund;
    
    // Har bir sekundda, soatni yangilash uchun funksiyani chaqirish
    setTimeout(soatKorsatish, 1000);
}

// Sahifani yuklandiqda soatKorsatish funksiyasini chaqirish
window.onload = function() {
    soatKorsatish();
};
