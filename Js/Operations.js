const hpBlock = document.querySelector('.hpBlock') 
const hpNumber = document.querySelector('.hpNumber') 
const armorBlock = document.querySelector('.armorBlock')
const armorNumber = document.querySelector('.armorNumber')
const meleeAttack = document.querySelector('.meleeAttack')
const rangeAttack = document.querySelector('.rangeAttack')
const weaponName = document.querySelector('#weaponName')
const inmag = document.querySelector('#inmag')
const mag = document.querySelector('#mag')
const all = document.querySelector('#all')
const fire = document.querySelector('.fire')

let damage = 0
let hp = 0
let ar = 0
let dmg = 0
let inmagammo = 0
let magammo = 0
let allammo = 0 

console.log(inmagammo)

hpBlock.onclick = () => {
    hpNumber.innerText = prompt ('Введите HP')
    hp = Number(hpNumber.innerText)
} 

armorBlock.onclick = () => {
    armorNumber.innerText = prompt ('Введите очки брони')
    ar = Number(armorNumber.innerText)
}

meleeAttack.onclick = () => {
    damage = prompt('Введите урон')
    dmg = Number(damage)
    if (dmg > Math.round(ar/2)) {
        hp = hp - (dmg - Math.round(ar/2))
        ar--
        armorNumber.innerText = ar
        hpNumber.innerText = hp

    }
     
}

rangeAttack.onclick = () => {
    damage = prompt('Введите урон')
    dmg = Number(damage)
    if (dmg > ar) {
        hp = hp - (dmg - ar)
        ar--
        armorNumber.innerText = ar
        hpNumber.innerText = hp

    } 
}

weaponName.onclick = () => {
    weaponName.innerText = prompt ('Что это за оружие?')
}

inmag.onclick = () => {
    inmag.innerText = prompt('Сколько патронов в магазине?')
    inmagammo = Number(inmag.innerText)
    console.log(typeof(inmagammo))
}

mag.onclick = () => {
    mag.innerText = prompt('Сколько патронов вмещает в себя магазин?')
    magammo = Number(mag.innerText)
}

all.onclick = () => {
    all.innerText = prompt('Сколько патронов у тебя в запасе?')
    allammo = Number(all.innerText)
}
fire.onclick = () => {
    if (inmagammo > 0) {
        inmagammo--
        inmag.innerText = inmagammo
    }
    else {
        inmagammo = magammo
        allammo = allammo - magammo
        all.innerText = allammo
        inmag.innerText = inmagammo

    }

}



