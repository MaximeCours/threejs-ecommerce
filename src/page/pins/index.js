import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Sizes
const sizes = {
  width: 800,
  height: 600
}

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load(
  '/models/pin/scene.gltf',
  function (gltf) {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    const center = new THREE.Vector3()
    box.getCenter(center)
    gltf.scene.position.sub(center) // center the model
    gltf.object.name = 'pins';
    scene.add(gltf.scene)
    const pinsObject = scene.getObjectByName('pins');
  },
  undefined,
  function (error) {
    console.error(error)
  }
)

// Camera
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 100
cameraGroup.add(camera)

// Ambiant Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// spotLight
const spotLight = new THREE.PointLight(0xffffff, 1);
spotLight.position.set(0, 0, 100);
scene.add(spotLight);

// Renderer
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

// Controls
const controls = new OrbitControls( camera, canvas )
controls.enableDamping = true

const cursor = {x: 0, y: 0}
const clock = new THREE.Clock()
let previousTime = 0

window.addEventListener('mousemove', (event) =>
{
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = event.clientY / sizes.height - 0.5
})

// Animate
const tick = () =>
{
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - previousTime
  previousTime = elapsedTime


  const parallaxX = cursor.x * 10
  const parallaxY = - cursor.y * 10

  pinsObject.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
  pinsObject.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
