// 6-topshiriq!!!
random = Math.random() * 10 + 1
taxmin = parseInt(random)
console.log("Random soni" + taxmin)

let sizningSon = +prompt("Son kirgizing!")
console.log("Siz kirgizgan son " + sizningSon)

if (taxmin === sizningSon) {
    console.log("Tabriklaymiz to'g'ri topdingniz!")
} else {
    console.log("Noto'g'ri! Qaytadan urunib ko'ring!")
}