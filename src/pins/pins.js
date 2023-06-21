import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const allPins = [
  {
    querySelector: '.pig',
    color: 0xde9ba3,
    texture: 'pig.png',
  },
  {
    querySelector: '.human',
    color: 0xcd9971,
    texture: 'human.png',
  },
  {
    querySelector: '.monster',
    color: 0x2d2a2d,
    texture: 'monster.png',
  },
  {
    querySelector: '.person',
    color: 0xeccda8,
    texture: 'person.png',
  },
  {
    querySelector: '.screamer',
    color: 0x4ca15f,
    texture: 'screamer.png',
  },
  {
    querySelector: '.flower',
    color: 0xffffff,
    texture: 'flower.jpg',
  },
  {
    querySelector: '.fish',
    color: 0xffffff,
    texture: 'fish.jpg',
  },
  {
    querySelector: '.clover',
    color: 0xffffff,
    texture: 'clover.jpg',
  },
  {
    querySelector: '.ladybug',
    color: 0xffffff,
    texture: 'ladybug.jpg',
  },
  {
    querySelector: '.cat',
    color: 0xffffff,
    texture: 'cat.jpg',
  },
  {
    querySelector: '.strawberry',
    color: 0xffffff,
    texture: 'strawberry.jpg',
  },
  {
    querySelector: '.donut',
    color: 0xffffff,
    texture: 'donut.jpg',
  },
]

for (let pin of allPins) {
  pins(pin.querySelector, pin.color, pin.texture)
}

function pins(querySelector, color = 0x000000, texture) {
  // Sizes
  const sizes = {
    width: 120,
    height: 120,
  }

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  const loader = new GLTFLoader()

  loader.load(
    '/models/pin/scene.gltf',
    function (gltf) {
      const box = new THREE.Box3().setFromObject(gltf.scene)
      const center = new THREE.Vector3()
      box.getCenter(center)
      gltf.scene.position.sub(center) // center the model
      scene.add(gltf.scene)
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )

  // Pins
  const textureLoader = new THREE.TextureLoader()
  const materials = [
    new THREE.MeshLambertMaterial({
      color: color,
    }),
    new THREE.MeshLambertMaterial({
      color: color,
    }),
    new THREE.MeshLambertMaterial({
      color: color,
    }),
    new THREE.MeshLambertMaterial({
      color: color,
    }),
    new THREE.MeshLambertMaterial({
      map: textureLoader.load(`/pins/textures/${texture}`),
    }),
    new THREE.MeshLambertMaterial({
      color: color,
    }),
  ]

  const object = new THREE.Mesh(new THREE.BoxGeometry(28, 28, 1), materials)
  object.position.set(0, 0, 4.5)
  object.rotation.set(-0.2, 0, 0)
  scene.add(object)

  // Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  const spotLight = new THREE.PointLight(0xffffff, 2)
  spotLight.position.set(0, 1, -20)
  scene.add(spotLight)

  // Camera
  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
  camera.position.x = 0
  camera.position.z = 50
  scene.add(camera)

  // Renderer
  const canvas = document.querySelector(querySelector)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })

  renderer.setSize(sizes.width, sizes.height)

  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true

  // Animate
  const animate = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
  }

  animate()
}
