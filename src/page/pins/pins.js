import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const allPins = [
    {
        querySelector: '.pig',
        form: 'square',
        color: 0xde9ba3,
        texture: 'pig.png',
    },
    {
        querySelector: '.human',
        form: 'square',
        color: 0xCD9971,
        texture: 'human.png',
    },
    {
        querySelector: '.monster',
        form: 'square',
        color: 0x2D2A2D,
        texture: 'monster.png',
    },
    {
        querySelector: '.person',
        form: 'square',
        color: 0xECCDA8,
        texture: 'person.png',
    },
    {
        querySelector: '.screamer',
        form: 'square',
        color: 0x4CA15F,
        texture: 'screamer.png',
    }
]

for (let pin of allPins){
    pins(pin.querySelector, pin.form, pin.color, pin.texture)
}

function pins(querySelector, form = 'square', color = 0x000000, texture){
    // Sizes
    const sizes = {
        width: 300,
        height: 300
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
    const materials = [
        new THREE.MeshLambertMaterial({
            color: color
        }),new THREE.MeshLambertMaterial({
            color: color
        }),new THREE.MeshLambertMaterial({
            color: color
        }),new THREE.MeshLambertMaterial({
            color: color
        }),new THREE.MeshLambertMaterial({
            map: textureLoader.load(`src/page/pins/textures/${texture}`)
        }),new THREE.MeshLambertMaterial({
            color: color
        })
    ];
    let object;
    if(form == 'square'){
        object = new THREE.Mesh(
            new THREE.BoxGeometry( 28, 28, 1 ), materials
        )
    }else{
        object = new THREE.Mesh(
            new THREE.CircleGeometry( 28, 28, 1 ), materials
        )
    }

    object.position.set(15, 19, 11);
    object.rotation.set(-0.2, 0, 0);
    scene.add( object );

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add( ambientLight );

    const spotLight = new THREE.PointLight(0xffffff, 2, 200, 0.01);
    spotLight.position.set(0, 0, 0);
    scene.add(spotLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
    camera.position.x = 0
    camera.position.z = 100;
    scene.add(camera)



    // Renderer
    const canvas = document.querySelector(querySelector);

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
}

