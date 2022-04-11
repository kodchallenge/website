String.prototype.turkishToEnglish = function() {
    return this.replace(/Ğ/g, 'G')
        .replace(/ğ/g, "g")
        .replace(/Ü/g, "U")
        .replace(/ü/g, "u")
        .replace(/İ/g, "I")
        .replace(/ı/g, "i")
        .replace(/Ş/g, "S")
        .replace(/ş/g, "s")
        .replace(/Ç/g, "C")
        .replace(/ç/g, "c")
        .replace(/Ö/g, "O")
        .replace(/ö/g, "o")
}