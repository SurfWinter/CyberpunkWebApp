(function() {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	if (window.AudioContext) {
		window.audioContext = new window.AudioContext();
	}
	let fixAudioContext = function (e) {
		if (window.audioContext) {
			// Create empty buffer
			let buffer = window.audioContext.createBuffer(1, 1, 22050);
			let source = window.audioContext.createBufferSource();
			source.buffer = buffer;
			// Connect to output (speakers)
			source.connect(window.audioContext.destination);
			// Play sound
			if (source.start) {
				source.start(0);
			} else if (source.play) {
				source.play(0);
			} else if (source.noteOn) {
				source.noteOn(0);
			}
		}
		// Remove events
		document.removeEventListener('touchstart', fixAudioContext);
		document.removeEventListener('touchend', fixAudioContext);
	};
	// iOS 6-8
	document.addEventListener('touchstart', fixAudioContext);
	// iOS 9
	document.addEventListener('touchend', fixAudioContext);
})();

/* ----------------------аудиофикс------------------------------*/


const motherConatiner = document.querySelector('.motherContainer')
const hpBlock = document.querySelector('.hpBlock') 
const hpNumber = document.querySelector('.hpNumber') 
const armorBlock = document.querySelector('.armorBlock')
const armorNumber = document.querySelector('.armorNumber')
const meleeAttack = document.querySelector('.meleeAttack')
const rangeAttack = document.querySelector('.rangeAttack')
//const weaponName = document.querySelector('.weaponName')
//const inmag = document.querySelector('.inmag')
//const mag = document.querySelector('.mag')
//const all = document.querySelector('.all')
//const fire = document.querySelector('.fire')
//const weaponTypeBlock = document.querySelector('#weaponTypeBlock')
//const weaponType = document.querySelector('#weaponType')
//const weaponDamageBlock = document.querySelector('#weaponDamageBlock')
//const weaponDamage = document.querySelector('#weaponDamage')
//const reload = document.querySelector('.reload')
//const dmgResultc = document.querySelector('#dmgResult')
//const critBlock = document.querySelector('.textRed')
//const closePanel = document.querySelector('.closePanel')
let weaponPanelc = document.querySelector('#protoPanel')
const addWeaponPanelButton = document.querySelector('.buttonaddPanel')

weaponPanelc.remove()

//motherConatiner.addEventListener('touchstart', clickSound.play())

let clickSound = new Audio()
clickSound.src = 'audio/click.ogg'



let refuse

let weaponPanel = []
let arrayLength = weaponPanel.length
let weaponNameNode
let inmagNode
let magNode
let allNode
let weaponTypeNode
let closePanelNode
let damageNode
let damageNumNode
let fireNode
let reloadNode


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
    weaponNameNode = document.querySelectorAll('.weaponName')
    for (let i = 0; i < weaponNameNode.length; i++) {
        weaponNameNode[i].addEventListener("click", renaming);        
    }  
}

function renaming () {
    console.log('tick')
    clickSound.play()
    refuse = prompt('Что это за оружие?', 'Оружие')
    if (refuse) {
        this.innerText = refuse     
    }
}

function inmagCount () {
    inmagNode = document.querySelectorAll('.inmag')
    for (let i = 0; i < inmagNode.length; i++) {
        inmagNode[i].addEventListener("click", inmagChanger);
        inmagNode[i].id = i        
    }
}

function inmagChanger () {
    clickSound.play()
    refuse = prompt ('Сколько патронов заряжено?', '0')
    if (refuse != null) {
        this.innerText = refuse
        inmagammo[this.id] = Number(refuse)
        console.dir(inmagammo)
    }    
}

function magCount () {
    magNode = document.querySelectorAll('.mag')
    for (let i = 0; i < magNode.length; i++) {
        magNode[i].addEventListener("click", magChanger);
        magNode[i].id = i       
    }
}

function magChanger () {
    clickSound.play()
    refuse = prompt ('Введите размер магазина', '0')
    if (refuse != null) {
        this.innerText = refuse    
        magammo[this.id] = Number(refuse)
        console.log('magChanger')
    }
}

function allCount () {
    allNode = document.querySelectorAll('.all')
    for (let i = 0; i < allNode.length; i++) {
        allNode[i].addEventListener("click", allChanger);
        allNode[i].id = i        
    }    
}

function allChanger () {
    clickSound.play()
    refuse = prompt ('Сколько патронов в запасе?', '00')
    console.log(refuse)
    if (refuse != null) {   
        this.innerText = refuse    
        allammo[this.id] = Number(refuse)

    }
}

function weaponTypeNaming () {
    weaponTypeNode = document.querySelectorAll('.weaponType')
    for (let i = 0; i < weaponTypeNode.length; i++) {
        weaponTypeNode[i].addEventListener("click", typeRenaming);        
    }  
}

function typeRenaming () {
    clickSound.play()
    console.log('tick')
    refuse = prompt('Введите тип оружия', 'длинноствольное')
    if (refuse != null) {
        this.innerText = refuse
    }  
}
function closePanelfunc () {
    closePanelNode = document.querySelectorAll('.closePanel')
    for (let i = 0; i < closePanelNode.length; i++) {
        closePanelNode[i].addEventListener("click", closer);
        closePanelNode[i].id = i        
    }  
}

function closer () {
    clickSound.play()
    this.parentElement.parentElement.remove()
    load()
}

function damageCount () {
    damageNode = document.querySelectorAll('.weaponDamageBlock')
    for (let i = 0; i < damageNode.length; i++) {
        damageNode[i].addEventListener("click", damageNumChanger)
        damageNode[i].id = i
    }
}

function damageNumChanger () {
    clickSound.play()
    refuse = prompt('Введите количество D6', '0')
    if (refuse != null) {
        this.childNodes[3].innerText = refuse
        weaponDamageNum[this.id] = Number(refuse)
    }
    console.dir(weaponDamageNum)

}

function fireCount () {
    fireNode = document.querySelectorAll('.fire')
    for (let i = 0; i < closePanelNode.length; i++) {
        fireNode[i].addEventListener("click", fireFunc);
        fireNode[i].id = i        
    }  

}

function fireFunc () {
    clickSound.play()
    if (inmagammo[this.id] > 0) {
    inmagammo[this.id]--
    inmagNode[this.id].innerText = inmagammo[this.id]
    dmgResult = 0
    crit = 0
    if (crit === 0) {
        this.parentElement.childNodes[5].childNodes[11].style.display = 'none'
    }
    for (let i = 0; i < weaponDamageNum[this.id];i++) {
        random = getRandomInt(1, 6)
        console.log(random)
        dmgResult = dmgResult + random
        if (random === 6) {
            crit++
        }
        if (crit > 1) {
            this.parentElement.childNodes[5].childNodes[11].style.display = 'flex'
            }
        
            this.parentElement.childNodes[5].childNodes[9].innerText = dmgResult
        
        }
    }   
}
function reloadCount () {
    reloadNode = document.querySelectorAll('.reload')
    for (let i = 0; i < reloadNode.length; i++ ) {
        reloadNode[i].addEventListener("click", reloadFunc)
        reloadNode[i].id = i
    }
}
function reloadFunc () {
    clickSound.play()
    if (inmagammo[this.id] != undefined || magammo[this.id] != undefined || allammo[this.id] != undefined) { 
    while (inmagammo[this.id] < magammo[this.id] && allammo[this.id] > 0) {   
        inmagammo[this.id]++
        allammo[this.id]--
    }
    console.log(this.id)
    inmagNode[this.id].innerText = inmagammo[this.id]
    allNode[this.id].innerText = allammo[this.id]
    }
}

function load () {
    weaponNaming()
    inmagCount()
    magCount()
    allCount()
    weaponTypeNaming()
    closePanelfunc()
    damageCount()
    fireCount()
    reloadCount()
}

function createWeaponPanel() {
    clickSound.play()
    weaponPanel[arrayLength] = document.createElement('div')
    weaponPanel[arrayLength].className = 'weaponPanel'
    weaponPanel[arrayLength].id = arrayLength
    addWeaponPanelButton.before(weaponPanel[arrayLength])
    weaponPanel[arrayLength].innerHTML = weaponPanelc.innerHTML
    weaponPanel[arrayLength].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
    arrayLength = weaponPanel.length
    //iDcreate()
    load()
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







let damage = 0
let hp = 0
let ar = 0
let dmg = 0
let inmagammo = []
let magammo = []
let allammo = []
let weaponDamageNum = []
let dmgSum = 0
let dmgResult = 0
let random = 0
let crit = 0


hpBlock.onclick = () => {
    clickSound.play()
    refuse = prompt ('Введите HP', '0')
    if (refuse != null) {
        hp = Number(refuse) 
    if (hp < 0) {
        hp = 0
        }
    hpNumber.innerText = hp
    }
} 

armorBlock.onclick = () => {
    clickSound.play()
    refuse = prompt ('Введите очки брони', '0')
    if (refuse != null) {
        ar = Number(refuse)    
    if (ar < 0) {
        ar = 0
    }
}
    armorNumber.innerText = ar
}

meleeAttack.onclick = () => {
    clickSound.play()
    damage = prompt('Введите урон')
    dmg = Number(damage)
    if (dmg > Math.round(ar/2)) {
        hp = hp - (dmg - Math.round(ar/2))
        ar--
        if (ar < 0) {
            ar = 0
        }
        armorNumber.innerText = ar
        hpNumber.innerText = hp

    }
     
}

rangeAttack.onclick = () => {
    clickSound.play()
    damage = prompt('Введите урон')
    dmg = Number(damage)
    if (dmg > ar) {
        hp = hp - (dmg - ar)
        ar--
        if (ar < 0) {
            ar = 0
        }
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






