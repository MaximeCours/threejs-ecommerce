import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { allShoes } from "../shoes/allShoes.js";

const model = 'footwear-crocs'
const scale = 50
const rotate = -2.5

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

// Sizes
const sizes = {
  width: 700,
  height: 500,
}

const scene = new THREE.Scene()
scene.background = null

const loader = new GLTFLoader()

loader.load(
  `/assets/models/shoes/${model}/scene.gltf`,
  function (gltf) {
    const model = gltf.scene
    model.scale.set(scale, scale, scale)
      model.rotation.y = rotate
      model.rotation.x = 0.5
      model.name = "shoe"
    const box = new THREE.Box3().setFromObject(model)
    const center = new THREE.Vector3()
    box.getCenter(center)
    model.position.sub(center) // center the model
    scene.add(model)
  },
  undefined,
  function (error) {
    console.error(error)
  }
)

export function updateShoeColor() {
    const shoe = scene.getObjectByName( "shoe", true )

    shoe.traverse(function(node) {
        if (node instanceof THREE.Mesh) {
            node.material = new THREE.MeshLambertMaterial({
                color: 0xff0000,
            })
        }
    });
}

let currentModelIndex = 0;

export function updateShoe() {
    scene.remove(scene.getObjectByName( "shoe", true ))
    const shoe = allShoes[currentModelIndex]
    loader.load(
      `/assets/models/shoes/${shoe.model}/scene.gltf`,
      function (gltf) {
          const model = gltf.scene
          model.scale.set(shoe.scale, shoe.scale, shoe.scale)
          model.rotation.y = shoe.rotate
          model.rotation.x = 0.5
          model.name = "shoe"
          const box = new THREE.Box3().setFromObject(model)
          const center = new THREE.Vector3()
          box.getCenter(center)
          model.position.sub(center) // center the model
          scene.add(model)
      },
      undefined,
      function (error) {
          console.error(error)
      }
    )
    currentModelIndex = currentModelIndex+1%allShoes.length
}

for (let pin of pins) {
    addPins(pin.querySelector, pin.color, pin.texture, pin.positionX, pin.positionY, pin.positionZ, pin.rotationX, pin.rotationY, pin.rotationZ)
}

function addPins(querySelector, color = 0x000000, texture, positionX, positionY, positionZ, rotationX = 0, rotationY= 0, rotationZ= 0){
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
            map: textureLoader.load(`/personalize-it/textures/${texture}`),
        }),
        new THREE.MeshLambertMaterial({
            color: color,
        }),
    ]

    const object = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.4), materials)
    object.position.set(positionX, positionY, positionZ)
    object.rotation.set(rotationX, rotationY, rotationZ)
    scene.add(object)
}

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.x = 0
camera.position.z = 20
scene.add(camera)

// Renderer
const canvas = document.querySelector('.preview')

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
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

animate();
