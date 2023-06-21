import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const model = 'footwear-crocs'
const scale = 2

// Sizes
const sizes = {
  width: 700,
  height: 500,
}

const scene = new THREE.Scene()
scene.background = null

const loader = new GLTFLoader()

loader.load(
  `/models/shoes/${model}/scene.gltf`,
  function (gltf) {
    const model = gltf.scene
    model.scale.set(scale, scale, scale)
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

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.x = 0
camera.position.z = 7
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
