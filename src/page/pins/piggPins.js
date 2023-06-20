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

loader.load('/models/pin/scene.gltf', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function ( error ) {
    console.error( error );
})

// Pins
const textureLoader = new THREE.TextureLoader();
const object = new THREE.Mesh(new THREE.BoxGeometry( 28, 28, 1 ), [
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
object.position.set(15, 19, 11);
object.rotation.set(-0.2, 0, 0);
scene.add( object );

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add( ambientLight );

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.x = 0
camera.position.z = 100;
scene.add(camera)

const spotLight = new THREE.PointLight(0xffffff, 5, 200, 0.01);
spotLight.position.set(0, 0, 0);
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

// Animate
const animate = () => {
    controls.update()

    renderer.render( scene, camera );

    window.requestAnimationFrame(animate)
}

animate()
