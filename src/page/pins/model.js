import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Sizes
const sizes = {
    width: 800,
    height: 600
}

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

const loader = new GLTFLoader();

// Model
loader.load('/models/pin/scene.gltf', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function ( error ) {
    console.error( error );
} )

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.x = 0
camera.position.z = 100;
scene.add(camera);

// spotLight
const spotLight = new THREE.PointLight(0xffffff, 5, 200, 0.01);
spotLight.position.set(50, 50, 50);
scene.add(spotLight);

const spotLight2 = new THREE.PointLight(0xffffff, 5, 200, 0.01);
spotLight2.position.set(0, 0, 0);
scene.add(spotLight2);

// Renderer
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

// Controls
const controls = new OrbitControls( camera, canvas )
controls.enableDamping = true

// Animate
const animate = () => {
    controls.update()

    renderer.render( scene, camera );

    window.requestAnimationFrame(animate)
}

animate()
