const hpBlock = document.querySelector('.hpBlock')
const hpNumber = document.querySelector('.hpNumber')

hpBlock.onclick = () => {
    hpNumber.innerText = prompt ('Введите HP')
}

