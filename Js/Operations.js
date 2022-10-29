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
const weaponTypeBlock = document.querySelector('#weaponTypeBlock')
const weaponType = document.querySelector('#weaponType')
const weaponDamageBlock = document.querySelector('#weaponDamageBlock')
const weaponDamage = document.querySelector('#weaponDamage')
const reload = document.querySelector('.reload')
const dmgResultc = document.querySelector('#dmgResult')
const critBlock = document.querySelector('.textRed')
const addWeaponPanelButton = document.querySelector('.buttonaddPanel')


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


let weaponPanel = document.createElement('div')
function createWeaponPanel() {

weaponPanel.className = 'weaponPanel'
weaponPanel.innerHTML = '<div class="weaponBlockHead"> <div id="weaponName" class="text"> Оружие </div> <div id="inmag" class="text">6</div> <div class="text">из</div><div id="mag" class="text">6</div><div class="text">|</div><div id="all" class="text">6</div></div><div id="weaponTypeBlock" class="weaponBlock"><div class="textBlack">тип:&nbsp</div><div id="weaponType" class="textBlack">Длинноствольное</div></div><div id="weaponDamageBlock" class="weaponBlock"><div class="textBlack">урон:&nbsp</div><div id="weaponDamage" class="textBlack">0</div><div class="textBlack">*D6</div><div class="textBlack">=</div><div id="dmgResult" class="textBlack">0</div><div class="textRed">&nbsp Крит</div></div><div class="fire"><div class="firetext">ТЫЩ-ПЫЩ</div></div><div class="reload"><div class="firetext">Перезарядка</div></div>'
addWeaponPanelButton.before(weaponPanel)
}




let damage = 0
let hp = 0
let ar = 0
let dmg = 0
let inmagammo = 6
let magammo = 6
let allammo = 6
let weaponDamageNum = 0
let dmgSum
let rNum
let dmgResult = 0
let random = 0
let crit


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
       // critBlock.style.display = 'block'
        inmagammo--
        inmag.innerText = inmagammo
        dmgResult = 0
        crit = 0;
        if (crit === 0) {
            critBlock.style.display = 'none'

        }
        for (let i = 0; i < weaponDamageNum; i++) {
            random = getRandomInt(1, 6)
            dmgResult = dmgResult + random
            console.log(random)
         
            if (random === 6) {
                crit++;
                console.log('Крит' + crit)
            }
           
        }
        if (crit > 1) {
            critBlock.style.display = 'flex'
            


        }
        console.log('Итог: ' + dmgResult)
        dmgResultc.innerText = dmgResult
        
    }
    else {

        if (allammo < magammo) {
            while (allammo != 0) {
                allammo--
                inmagammo++
                            }
        }
        else {
            inmagammo = magammo
            allammo = allammo - magammo
            
        }
        all.innerText = allammo
        inmag.innerText = inmagammo

    }    

}
weaponTypeBlock.onclick = () => {
    weaponType.innerText = prompt('Введите тип оружия')
}

weaponDamageBlock.onclick = () => {
    weaponDamage.innerText = prompt('Введите количество D6')
    weaponDamageNum = Number(weaponDamage.innerText)
}

reload.onclick = () => {
    while (inmagammo < magammo && allammo > 0) {
        inmagammo++
        allammo--
    }
    all.innerText = allammo
    inmag.innerText = inmagammo
}

addWeaponPanelButton.onclick = () => {
    createWeaponPanel()
}








