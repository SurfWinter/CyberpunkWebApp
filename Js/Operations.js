const motherConatiner = document.querySelector('.motherContainer')
const hpBlock = document.querySelector('.hpBlock') 
const hpNumber = document.querySelector('.hpNumber') 
const armorBlock = document.querySelector('.armorBlock')
const armorNumber = document.querySelector('.armorNumber')
const meleeAttack = document.querySelector('.meleeAttack')
const rangeAttack = document.querySelector('.rangeAttack')
const weaponName = document.querySelector('.weaponName')
const inmag = document.querySelector('.inmag')
const mag = document.querySelector('.mag')
const all = document.querySelector('.all')
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
} 
function myFunction() {
    elementID = this.id
    console.log('ID CREATE: ' + elementID)
} */

function weaponNaming () {
    for (let i = 0; i < weaponNameArray.length; i++) {
        weaponNameArray[i].addEventListener("click", renaming);        
    }  
}

function renaming () {
    console.log('tick')
    this.innerText = prompt('Что это за оружие?')
}

function inmagCount () {
    for (let i = 0; i < inmagArray.length; i++) {
        inmagArray[i].addEventListener("click", inmagChanger);
        inmagArray[i].id = i        
    }
}

function inmagChanger () {
    this.innerText = prompt ('Сколько патронов заряжено?')
    inmagammo[this.id] = Number(this.innerText)
    console.dir(inmagammo)
}

function magCount () {
    for (let i = 0; i < magArray.length; i++) {
        magArray[i].addEventListener("click", magChanger);
        magArray[i].id = i       
    }
}

function magChanger () {
    this.innerText = prompt ('Введите размер магазина')
    magammo[this.id] = Number(this.innerText)
    console.log('magChanger')
}

function allCount () {
    for (let i = 0; i < allArray.length; i++) {
        allArray[i].addEventListener("click", allChanger);
        allArray[i].id = i        
    }    
}

function allChanger () {
    this.innerText = prompt ('Введите размер магазина')
    magammo[this.id] = Number(this.innerText)
    console.log('allChanger')
}

function weaponTypeNaming () {
    for (let i = 0; i < weaponTypeArray.length; i++) {
        weaponTypeArray[i].addEventListener("click", typeRenaming);        
    }  
}

function typeRenaming () {
    console.log('tick')
    this.innerText = prompt('Введите тип оружия')
}

function closePanelfunc () {
    for (let i = 0; i < closePanelArray.length; i++) {
        closePanelArray[i].addEventListener("click", closer);
        closePanelArray[i].id = i        
    }  
}

function closer () {
    console.log('tick')
    console.dir(this.parentElement.parentElement)
    this.parentElement.parentElement.remove()
    load()
/*  weaponPanel.splice(this.id, 1)
    weaponNameArray.splice(this.id, 1)
    inmagArray.splice(this.id, 1)
    magArray.splice(this.id, 1)
    allArray.splice(this.id, 1)
    weaponTypeArray.splice(this.id, 1)
*/
}
function load () {
    weaponNaming()
    inmagCount()
    magCount()
    allCount()
    weaponTypeNaming()
    closePanelfunc()
    console.log('weaponPanel:')
    console.dir(weaponPanel)
    console.log('weaponNameArray:')
    console.dir(weaponNameArray)
    console.log('inmagArray:')
    console.dir(inmagArray)
    console.log('magArray:')
    console.dir(magArray)
    console.log('allArray:')
    console.dir(allArray)
    console.log('weaponTypeArray:')
    console.dir(weaponTypeArray)
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


//let elementID = 0


let weaponPanel = []
let arrayLength = weaponPanel.length
console.log(weaponPanel.length)

//let weaponPanelNode
//let weaponPanelArray = []

let weaponNameArray = []
let weaponNameNode

let inmagNode
let inmagArray = []

let magNode
let magArray = []
console.log(weaponPanel)

let allNode
let allArray = []

let weaponTypeNode
let weaponTypeArray = []

let closePanelNode
let closePanelArray = []

function createWeaponPanel() {
weaponPanel[arrayLength] = document.createElement('div')
weaponPanel[arrayLength].className = 'weaponPanel'
weaponPanel[arrayLength].id = arrayLength
addWeaponPanelButton.before(weaponPanel[arrayLength])
weaponPanel[arrayLength].innerHTML = weaponPanelc.innerHTML

weaponNameNode = document.querySelectorAll('.weaponName')
weaponNameArray[arrayLength] = weaponNameNode.item(arrayLength)

inmagNode = document.querySelectorAll('.inmag')
inmagArray[arrayLength] = inmagNode.item(arrayLength)

magNode = document.querySelectorAll('.mag')
magArray[arrayLength] = magNode.item(arrayLength)

allNode = document.querySelectorAll('.all')
allArray[arrayLength] = allNode.item(arrayLength)

weaponTypeNode = document.querySelectorAll('.weaponType')
weaponTypeArray[arrayLength] = weaponTypeNode.item(arrayLength)

closePanelNode = document.querySelectorAll('.closePanel')
closePanelArray[arrayLength] = closePanelNode.item(arrayLength)

//console.dir(allNode)
//console.dir(allArray)

//console.dir(weaponPanel)
//console.dir(weaponNameArray)
//console.dir(inmagArray)
arrayLength = weaponPanel.length
//iDcreate()
load()
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


/*weaponName.onclick = () => {
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
*/

addWeaponPanelButton.onclick = () => {
    createWeaponPanel()
}






