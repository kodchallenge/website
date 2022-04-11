String.prototype.turkishToEnglish = function () {
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

String.prototype.toLongDate = function () {
    const d = new Date(this)//date= yyyy-MM-dd
    if (d instanceof Date && !isNaN(d)) {
        const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"]
        let dateValues = this.split('-')
        return (dateValues[2] + " " + months[parseInt(dateValues[1])] + " " + dateValues[0])
    }
    return this
}