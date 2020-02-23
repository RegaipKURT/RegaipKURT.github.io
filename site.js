function showError(params) {
    alert("Sayfamız yapım aşamasındadır!")
}

function iletisimError(params) {
    alert("Bu form şu anda kullanılamıyor.\n"+
    "Lütfen sosyal medya hesaplarından iletişime geçmeyi deneyiniz!")
}

document.oncontextmenu = new Function("return false;");