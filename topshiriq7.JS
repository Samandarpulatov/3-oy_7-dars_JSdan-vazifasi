// 7-topshiriq!!!
let dollor = prompt("1$ dollarning so'm bahosi qancha?")
let euro = prompt("1€ Euroning so'm bahosi qancha?")
let eshmatni_pul_miqdori = prompt("Sizning sayohat uchun qancha so'mingiz mavjud?")

let ticket = 350 * dollor;
console.log("Chipta narxi " + ticket + " so'm!")
let living = 500 * dollor;
console.log("Europadagi sayohatlaringiz narxi " + living + " so'm!")
let picnic = 300 * euro;
console.log("Europadagi yeguliklaringiz narxi " + picnic + " so'm!")

let jami_harajat = ticket + living + picnic;
console.log("Europaning hohlagan davlatingizga 1haftalik sayohat narxi " + jami_harajat + " so'm!")

if (jami_harajat > eshmatni_pul_miqdori) {
    console.log("Kechirasiz. Sayohat uchun mablag'ingiz yetmas ekan. Bizning 1haftalik sayohat narxi " + jami_harajat + " so'm!")
} else {
    console.log("Bizning 1haftalik sayohat narhimiz " + jami_harajat + " so'm" + " tabriklaymiz sizning mablag'ingiz yetarli ekan. Qayerga sayohat qilishni hohlaysiz?")
}