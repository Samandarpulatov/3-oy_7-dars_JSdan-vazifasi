// 3-topshiriq!!!
let moshinlar_royhati = ["BMW", "Mercedes", "Toyoto", "Lexus", "Ferrari", "Tesla", "Chevrolet"];

let savol = prompt("Moshin nomini kirgizing!")

moshinlar_royhati.includes(savol)
console.log(moshinlar_royhati.includes(savol)) 


if (moshinlar_royhati.includes(savol)) {
    console.log("Bu moshina mavjud!")
} else if (moshinlar_royhati.push(savol)) {
    console.log("Siz kirgizgan moshinani nomi ro'yhatga qo'shildi!")
}


console.log(moshinlar_royhati)