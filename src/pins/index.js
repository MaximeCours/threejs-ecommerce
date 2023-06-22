import './style.scss'
import './pins'
import './bigPins'

const pigPinContainer = document.getElementById("pigPinContainer")
const pigButton = document.getElementById('pigButton')
pigPinContainer.addEventListener('mouseenter', function() {
    pigButton.classList.toggle('hidden')
})
pigPinContainer.addEventListener('mouseleave', function() {
    pigButton.classList.toggle('hidden')
})
const pigPinDetails = document.getElementById("pigPinDetails")
const pigPinInfo = document.getElementById("pigPinInfo")
const pigPinBack = document.getElementById("pigPinBack")
const createCanvas = document.createElement(canvas)
createCanvas.classList.add('pig-big')
createCanvas.style.width = '450px'
createCanvas.style.height = '450px'
pigButton.addEventListener('click', function() {
    pigPinInfo.append(createCanvas)
    pigPinDetails.remove('hidden')
})
pigPinBack.addEventListener('click', function() {
    pigPinDetails.classList.add('hidden')
    createCanvas.remove()
})


const humanPinContainer = document.getElementById("humanPinContainer")
const humanButton = document.getElementById('humanButton')
humanPinContainer.addEventListener('mouseenter', function() {
    humanButton.classList.toggle('hidden')
})
humanPinContainer.addEventListener('mouseleave', function() {
    humanButton.classList.toggle('hidden')
})
const humanPinDetails = document.getElementById("humanPinDetails")
const humanPinBack = document.getElementById("humanPinBack")
humanButton.addEventListener('click', function() {
    humanPinDetails.classList.remove('hidden')
})
humanPinBack.addEventListener('click', function() {
    humanPinDetails.classList.add('hidden')
})


const screamerPinContainer = document.getElementById("screamerPinContainer")
const screamerButton = document.getElementById('screamerButton')
screamerPinContainer.addEventListener('mouseenter', function() {
    screamerButton.classList.toggle('hidden')
})
screamerPinContainer.addEventListener('mouseleave', function() {
    screamerButton.classList.toggle('hidden')
})
const screamerPinDetails = document.getElementById("screamerPinDetails")
const screamerPinBack = document.getElementById("screamerPinBack")
screamerButton.addEventListener('click', function() {
    screamerPinDetails.classList.remove('hidden')
})
screamerPinBack.addEventListener('click', function() {
    screamerPinDetails.classList.add('hidden')
})


const personPinContainer = document.getElementById("personPinContainer")
const personButton = document.getElementById('personButton')
personPinContainer.addEventListener('mouseenter', function() {
    personButton.classList.toggle('hidden')
})
personPinContainer.addEventListener('mouseleave', function() {
    personButton.classList.toggle('hidden')
})
const personPinDetails = document.getElementById("personPinDetails")
const personPinBack = document.getElementById("personPinBack")
personButton.addEventListener('click', function() {
    personPinDetails.classList.remove('hidden')
})
personPinBack.addEventListener('click', function() {
    personPinDetails.classList.add('hidden')
})


const monsterPinContainer = document.getElementById("monsterPinContainer")
const monsterButton = document.getElementById('monsterButton')
monsterPinContainer.addEventListener('mouseenter', function() {
    monsterButton.classList.toggle('hidden')
})
monsterPinContainer.addEventListener('mouseleave', function() {
    monsterButton.classList.toggle('hidden')
})
const monsterPinDetails = document.getElementById("monsterPinDetails")
const monsterPinBack = document.getElementById("monsterPinBack")
monsterButton.addEventListener('click', function() {
    monsterPinDetails.classList.remove('hidden')
})
monsterPinBack.addEventListener('click', function() {
    monsterPinDetails.classList.add('hidden')
})


const flowerPinContainer = document.getElementById("flowerPinContainer")
const flowerButton = document.getElementById('flowerButton')
flowerPinContainer.addEventListener('mouseenter', function() {
    flowerButton.classList.toggle('hidden')
})
flowerPinContainer.addEventListener('mouseleave', function() {
    flowerButton.classList.toggle('hidden')
})
const flowerPinDetails = document.getElementById("flowerPinDetails")
const flowerPinBack = document.getElementById("flowerPinBack")
flowerButton.addEventListener('click', function() {
    flowerPinDetails.classList.remove('hidden')
})
flowerPinBack.addEventListener('click', function() {
    flowerPinDetails.classList.add('hidden')
})


const fishPinContainer = document.getElementById("fishPinContainer")
const fishButton = document.getElementById('fishButton')
fishPinContainer.addEventListener('mouseenter', function() {
    fishButton.classList.toggle('hidden')
})
fishPinContainer.addEventListener('mouseleave', function() {
    fishButton.classList.toggle('hidden')
})
const fishPinDetails = document.getElementById("fishPinDetails")
const fishPinBack = document.getElementById("fishPinBack")
fishButton.addEventListener('click', function() {
    fishPinDetails.classList.remove('hidden')
})
fishPinBack.addEventListener('click', function() {
    fishPinDetails.classList.add('hidden')
})


const cloverPinContainer = document.getElementById("cloverPinContainer")
const cloverButton = document.getElementById('cloverButton')
cloverPinContainer.addEventListener('mouseenter', function() {
    cloverButton.classList.toggle('hidden')
})
cloverPinContainer.addEventListener('mouseleave', function() {
    cloverButton.classList.toggle('hidden')
})
const cloverPinDetails = document.getElementById("cloverPinDetails")
const cloverPinBack = document.getElementById("cloverPinBack")
cloverButton.addEventListener('click', function() {
    cloverPinDetails.classList.remove('hidden')
})
cloverPinBack.addEventListener('click', function() {
    cloverPinDetails.classList.add('hidden')
})


const ladybugPinContainer = document.getElementById("ladybugPinContainer")
const ladybugButton = document.getElementById('ladybugButton')
ladybugPinContainer.addEventListener('mouseenter', function() {
    ladybugButton.classList.toggle('hidden')
})
ladybugPinContainer.addEventListener('mouseleave', function() {
    ladybugButton.classList.toggle('hidden')
})
const ladybugPinDetails = document.getElementById("ladybugPinDetails")
const ladybugPinBack = document.getElementById("ladybugPinBack")
ladybugButton.addEventListener('click', function() {
    ladybugPinDetails.classList.remove('hidden')
})
ladybugPinBack.addEventListener('click', function() {
    ladybugPinDetails.classList.add('hidden')
})


const catPinContainer = document.getElementById("catPinContainer")
const catButton = document.getElementById('catButton')
catPinContainer.addEventListener('mouseenter', function() {
    catButton.classList.toggle('hidden')
})
catPinContainer.addEventListener('mouseleave', function() {
    catButton.classList.toggle('hidden')
})
const catPinDetails = document.getElementById("catPinDetails")
const catPinBack = document.getElementById("catPinBack")
catButton.addEventListener('click', function() {
    catPinDetails.classList.remove('hidden')
})
catPinBack.addEventListener('click', function() {
    catPinDetails.classList.add('hidden')
})


const strawberryPinContainer = document.getElementById("strawberryPinContainer")
const strawberryButton = document.getElementById('strawberryButton')
strawberryPinContainer.addEventListener('mouseenter', function() {
    strawberryButton.classList.toggle('hidden')
})
strawberryPinContainer.addEventListener('mouseleave', function() {
    strawberryButton.classList.toggle('hidden')
})
const strawberryPinDetails = document.getElementById("strawberryPinDetails")
const strawberryPinBack = document.getElementById("strawberryPinBack")
strawberryButton.addEventListener('click', function() {
    strawberryPinDetails.classList.remove('hidden')
})
strawberryPinBack.addEventListener('click', function() {
    strawberryPinDetails.classList.add('hidden')
})


const donutPinContainer = document.getElementById("donutPinContainer")
const donutButton = document.getElementById('donutButton')
donutPinContainer.addEventListener('mouseenter', function() {
    donutButton.classList.toggle('hidden')
})
donutPinContainer.addEventListener('mouseleave', function() {
    donutButton.classList.toggle('hidden')
})
const donutPinDetails = document.getElementById("donutPinDetails")
const donutPinBack = document.getElementById("donutPinBack")
donutButton.addEventListener('click', function() {
    donutPinDetails.classList.remove('hidden')
})
donutPinBack.addEventListener('click', function() {
    donutPinDetails.classList.add('hidden')
})
