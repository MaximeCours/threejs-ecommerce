import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { allShoes } from "./allShoes.js";

for (let shoe of allShoes) {
  shoes(
    shoe.querySelector,
    shoe.model,
    shoe.scale,
    shoe.rotate,
    shoe.haveSpotLight
  )
}

function shoes(
  querySelector,
  model,
  scale = 1,
  rotate = 0,
  haveSpotLight = true
) {
  // Sizes
  const sizes = {
    width: 270,
    height: 270,
  }

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

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

  if (haveSpotLight) {
    const spotLight = new THREE.PointLight(0xffffff, 1)
    spotLight.position.set(0, 1, 30)
    scene.add(spotLight)
  }

  // Camera
  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
  camera.position.x = 0
  camera.position.z = 18
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
    const shoeToRotate = scene.getObjectByName('shoe')

    if (shoeToRotate) {
      shoeToRotate.rotation.y += 0.003
    }

    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
  }

  animate()
}
