import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const model = 'footwear-crocs'
const scale = 50
const rotate = -2.5

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

export function addPins(
  querySelector,
  color = 0x000000,
  texture,
  positionX,
  positionY,
  positionZ,
  rotationX = 0,
  rotationY = 0,
  rotationZ = 0,
  mode = 'add'
) {
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

  let object

  if (mode === 'remove') {
    object = scene.getObjectByName(querySelector)

    if (object) {
      scene.remove(object)
    }
  } else {
    object = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.4), materials)
    object.position.set(positionX, positionY, positionZ)
    object.rotation.set(rotationX, rotationY, rotationZ)
    object.name = querySelector

    scene.add(object)
  }
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
  alpha: true,
})

renderer.setSize(sizes.width, sizes.height)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Animate
const animate = () => {
  controls.minDistance = 5
  controls.maxDistance = 20
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate()
