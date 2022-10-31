const motherConatiner = document.querySelector('.motherContainer')
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
const closePanel = document.querySelector('.closePanel')
let weaponPanelc = document.querySelector('#protoPanel')
const addWeaponPanelButton = document.querySelector('.buttonaddPanel')

weaponPanelc.remove()



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*function iDcreate () {
let weaponPanelNodes = document.querySelectorAll('.weaponPanel')
for (let i = 0; i < weaponPanelNodes.length; i++) {
    weaponPanelNodes[i].addEventListener("click", myFunction);
} 
} */


function myFunction() {
    elementID = this.id
    //weaponNameonclick = weaponNameArray[elementID]
    console.log('ID CREATE: ' + elementID)
    //weaponNameArray[elementID].innerText = prompt ('Что это за оружие?')
}

function weaponNaming () {
    for (let i = 0; i < weaponNameArray.length; i++) {
        weaponNameArray[i].addEventListener("click", renaming);
        
    }
    console.dir (weaponNameArray)
    console.log('WN')
    
}

function renaming () {
    console.log('tick')
    this.innerText = prompt('Что это за оружие?')
} 

/*function NameClick_CLIK () {
let x = 0
    
   
    weaponNameArray[elementID].onclick = () => {




        weaponNameArray[elementID].innerText = prompt('Что это за оружие?')
        console.log('NameClick_CLIK')

    }
    


    console.log('NameClick')
} */

/*function NameClick () {
    for (let q = 0; q < weaponNameArray.length; q++) {
        weaponNameArray[q].addEventListener("click", renaming);
} 
function renaming () {
    elementID = this.id
    weaponNameArray[elementID].innerText = prompt('Что это за оружие?')
} 
*/


let elementID = 0
let arrayLength = 0
let weaponPanel = []
let weaponNameArray = []
let weaponNameNode
let inmagNode
let inmagArray = []
console.log(weaponPanel)


function createWeaponPanel() {
weaponPanel[arrayLength] = document.createElement('div')
weaponPanel[arrayLength].className = 'weaponPanel'
weaponPanel[arrayLength].id = arrayLength
addWeaponPanelButton.before(weaponPanel[arrayLength])
weaponPanel[arrayLength].innerHTML = weaponPanelc.innerHTML

testing = arrayLength + 1
weaponNameNode = document.querySelectorAll('#weaponName')
inmagNode = document.querySelectorAll('#inmag')
inmagArray[arrayLength] = inmagNode.item(arrayLength)
console.log('ar:' + arrayLength)
console.log('id:' + elementID)
weaponNameArray[arrayLength] = weaponNameNode.item(arrayLength)
console.dir(weaponPanel)
console.dir(weaponNameArray)
console.dir(inmagArray)
arrayLength++
//iDcreate()
weaponNaming()
}


let damage = 0
let hp = 0
let ar = 0
let dmg = 0
let inmagammo = []
let magammo = []
let allammo = []
let weaponDamageNum = []
let dmgSum = []
let dmgResult = []
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

/*weaponPanelc.onclick = () => {
    console.log('push')
}*/


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

closePanel.onclick = () => {
    weaponPanelc.remove()
    console.log(weaponPanelc)

}


addWeaponPanelButton.onclick = () => {
    createWeaponPanel()
}






