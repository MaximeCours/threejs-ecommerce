import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
const loader = new GLTFLoader();

// BOX MINECRAFT

// Scene
const scene = new THREE.Scene();

// Box
const textureLoader = new THREE.TextureLoader();
const object = new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 1 ), [
    new THREE.MeshLambertMaterial({
        color: 0xde9ba3
    }),new THREE.MeshLambertMaterial({
        color: 0xde9ba3
    }),new THREE.MeshLambertMaterial({
        color: 0xde9ba3
    }),new THREE.MeshLambertMaterial({
        color: 0xde9ba3
    }),new THREE.MeshLambertMaterial({
        map: textureLoader.load('src/page/pins/textures/cochon.png')
    }),new THREE.MeshLambertMaterial({
        color: 0xde9ba3
    })
]);

scene.add( object );

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add( ambientLight );


// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 4)
scene.add( camera );

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize( sizes.width, sizes.height );

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