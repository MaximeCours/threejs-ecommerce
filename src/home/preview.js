import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const model = 'footwear-crocs'
const scale = 50
const rotate = 2

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
    model.name = 'shoe'
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
camera.position.z = 18
scene.add(camera)

// Renderer
const canvas = document.querySelector('.preview')

canvas.addEventListener('mousemove', onMouseMove);
const shoe = scene.getObjectByName('shoe')
function onMouseMove(event) {
    // Récupérer les coordonnées de la souris
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Convertir les coordonnées de la souris en valeurs normalisées entre -1 et 1
    const normalizedMouseX = (mouseX / window.innerWidth) * 2 - 1;
    const normalizedMouseY = -(mouseY / window.innerHeight) * 2 + 1;

    // Mettre à jour la position de la chaussure en fonction des coordonnées normalisées
    shoe.position.set(normalizedMouseX, normalizedMouseY);
}

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

    // if (shoeToRotate) {
    //     shoeToRotate.rotation.y += 0.003
    // }
  // controls.enableZoom = false;
  // controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate()
