import { addPins } from './preview'
const icons = document.querySelectorAll('.icons > button')

// Pins
const pins = [
  {
    querySelector: '.pig',
    color: 0xde9ba3,
    texture: 'pig.png',
    positionX: 0.7,
    positionY: -1.8,
    positionZ: 3.5,
    rotationX: -0.8,
    rotationY: -0.3,
  },
  {
    querySelector: '.human',
    color: 0xcd9971,
    texture: 'human.png',
    positionX: 2.4,
    positionY: 0.8,
    positionZ: 0.8,
    rotationX: -1.2,
    rotationY: 0.8,
    rotationZ: 1,
  },
  {
    querySelector: '.monster',
    color: 0x2d2a2d,
    texture: 'monster.png',
    positionX: 4,
    positionY: -1.5,
    positionZ: 4,
    rotationX: -1.2,
    rotationY: -0.2,
    rotationZ: 1,
  },
]

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const image = icon.querySelector('img')
    if (icon.classList.contains('btnPins')) {
      if (icon.classList.contains('active')) {
        image.src = '/assets/icons/no-pins.svg'
        // Retire pins
        for (let pin of pins) {
          addPins(
            pin.querySelector,
            pin.color,
            pin.texture,
            pin.positionX,
            pin.positionY,
            pin.positionZ,
            pin.rotationX,
            pin.rotationY,
            pin.rotationZ,
            'remove'
          )
        }
        icon.classList.remove('active')
      } else {
        image.src = '/assets/icons/with-pins.svg'
        // Affiche les pins
        for (let pin of pins) {
          addPins(
            pin.querySelector,
            pin.color,
            pin.texture,
            pin.positionX,
            pin.positionY,
            pin.positionZ,
            pin.rotationX,
            pin.rotationY,
            pin.rotationZ,
            'add'
          )
        }
        icon.classList.add('active')
      }
    }
  })
})
