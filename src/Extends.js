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
    let date = this
    if(this.includes('T')) {
        date = this.split('T')[0]
    }
    const d = new Date(date)//date= yyyy-MM-dd
    if (d instanceof Date && !isNaN(d)) {
        const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"]
        let dateValues = date.split('-')
        return (dateValues[2] + " " + months[parseInt(dateValues[1])] + " " + dateValues[0])
    }
    return date
}

Array.prototype.groupBy = function(keyGetter) {
    const map = new Map();
    this.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}