const scene = new THREE.Scene();
const light = new THREE.DirectionalLight('#ffffff', 0.5);
light.position.set(20, 0, 100);

const clock = new THREE.Clock();


scene.background = new THREE.Color( 0x2a2b2f );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 35, 15, 20 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth/2, window.innerHeight/2);
renderer.outputEncoding = THREE.sRGBEncoding;


document.querySelector('.smartcity').appendChild(renderer.domElement);

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.5, 0 );
controls.update();
controls.enableZoom = false;
controls.enablePan = false;
controls.enableDamping = true;

function zoom(){
    let zoomInput = document.querySelector('.zoom-input');

    if(controls.enableZoom == false){
        controls.enableZoom = true;
        zoomInput.classList.remove('inactive');
        zoomInput.classList.add('active');
        
    } else if (controls.enableZoom == true) {
        controls.enableZoom = false
        zoomInput.classList.remove('active');
        zoomInput.classList.add('inactive');
    }

}


scene.add( new THREE.HemisphereLight( 0xffffff, 0x000000, 0.4 ) );

const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight.position.set( 5, 2, 8 );
scene.add( dirLight );

// envmap
const path = './smartCity/textures/';
const format = '.jpg';
const envMap = new THREE.CubeTextureLoader().load( [
    path + 'Texture-base-gloss-jpg_baseColor' + format
] );

const loader = new THREE.GLTFLoader();
loader.load( './smartCity/scene.gltf', function ( gltf ) {

    const model = gltf.scene;
    const matrix = new THREE.Matrix4();
    
    model.position.set( 0, 2, 0 );
    model.scale.set( .35, .35, .35 );
    model.rotateY(165);

    scene.add( model );

    mixer = new THREE.AnimationMixer( model );
    mixer.clipAction( gltf.animations[ 0 ] ).play();

    animate();

}, undefined, function ( e ) {

    console.error( e );

});

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


function animate() {

    requestAnimationFrame( animate );

    const delta = clock.getDelta();

    mixer.update( delta );

    controls.update();

    renderer.render( scene, camera );

}

window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    render();

};

render();
