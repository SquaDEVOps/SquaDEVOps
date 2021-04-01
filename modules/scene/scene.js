const scene = new THREE.Scene();
const light = new THREE.DirectionalLight('#ffffff', 0.5);
light.position.set(-20, 0, 100);



scene.background = new THREE.Color( 0x2a2b2f );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 35, 25, 20 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth/2, window.innerHeight/2);
renderer.outputEncoding = THREE.sRGBEncoding;


document.querySelector('.smartcity').appendChild(renderer.domElement);

const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.5, 0 );
controls.update();
controls.enableZoom = false;
controls.enablePan = false;
controls.enableDamping = true;



const objLoader = new THREE.OBJLoader();
objLoader.setPath('/SquaDEVOps/smartCity/');

const mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('/SquaDEVOps/smartCity/');

new Promise((resolve) => {
    mtlLoader.load('smartCity.mtl', (materials) => {
        resolve(materials);
    });
})
.then((materials) => {
    materials.preload();
    objLoader.setMaterials(materials);
    objLoader.load('smartCity.obj', (object) => {
        object.position.set( 0, 5, 0);
        object.rotateY( .65 );
        object.scale.set(1, 1, 1);
        scene.add(object);
        scene.add( new THREE.HemisphereLight( 0xffffff, 0x000000, 0.25 ) );
        const dirLight = new THREE.DirectionalLight( 0xffffff, 2 );
        dirLight.position.set( 15, 2, 8 );

        scene.add( dirLight );
    })
})

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    render();

};

render();
