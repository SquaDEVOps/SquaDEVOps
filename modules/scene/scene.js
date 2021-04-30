import { Scene, DirectionalLight, Color, PerspectiveCamera, WebGL1Renderer, sRGBEncoding, HemisphereLight, Matrix4, CubeTextureLoader, AnimationMixer, Clock, CanvasRenderer} from '../../build/three.module.js';
import { GLTFLoader } from '../gltloader/GLTFLoader.module.js';
import { OrbitControls } from '../orbitcontrols/OrbitControls.module.js';

function detectWebGLContext () {
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gl && gl instanceof WebGLRenderingContext) {
        console.log("Congratulations! Your browser supports WebGL.");
        return true;
    } else {
        console.log("Failed to get WebGL context. Your browser or device may not support WebGL.");
        return false;
    }
  }

  let detect = detectWebGLContext ();


let xScene = (() => {
    const scene = new Scene();
    const light = new DirectionalLight('#ffffff', 0.5);
    light.position.set(20, 0, 100);
    let mixer;

    const clock = new Clock();


    scene.background = new Color( 0x2a2b2f );

    const camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

    if(window.innerWidth <= 768){
        camera.position.set( 85, 15, 20 );
    }else {
        camera.position.set( 35, 15, 20 );
    }


    const renderer =  detect ? new WebGL1Renderer({ antialias: true }) : new CanvasRenderer({ alpha: true });
    renderer.setPixelRatio( window.devicePixelRatio );

    if(window.innerWidth <= 768){
        renderer.context.getExtension('OES_standard_derivatives');
        renderer.setSize(window.innerWidth, window.innerHeight);
    }else {
        renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    }

    renderer.outputEncoding = sRGBEncoding;

    var controls = new OrbitControls( camera, renderer.domElement );

    if(window.innerWidth <= 768){
        controls.autoRotate = true;
    }else{
        controls.autoRotate = true;
        controls.target.set( 0, 0.5, 0 );
        controls.update();

        controls.enableDamping = true;
    }

    controls.enableZoom = false;
    controls.enablePan = false;
 


    
        let zoomInput = document.querySelector('.zoom-input');

        zoomInput.addEventListener('click', e => {
            if(controls.enableZoom == false){
                controls.enableZoom = true;
                zoomInput.classList.remove('inactive');
                zoomInput.classList.add('active');
                
            } else if (controls.enableZoom == true) {
                controls.enableZoom = false
                zoomInput.classList.remove('active');
                zoomInput.classList.add('inactive');
            }
        });


    scene.add( new HemisphereLight( 0xffffff, 0x000000, 0.4 ) );

    const dirLight = new DirectionalLight( 0xffffff, 1 );
    dirLight.position.set( 5, 2, 8 );
    scene.add( dirLight );

    // envmap
    const path = './smartCity/textures/';
    const format = '.jpg';
    const envMap = new CubeTextureLoader().load( [
        path + 'Texture-base-gloss-jpg_baseColor' + format
    ] );


    const loader = new GLTFLoader();
    loader.load( './smartCity/scene.gltf', function ( gltf ) {

        let model = gltf.scene;
        const matrix = new Matrix4();

        model.position.set( 0, 2, 0 );
        model.scale.set( .35, .35, .35 );
        model.rotateY(165);

        scene.add( model );

        mixer = new AnimationMixer( model );
        mixer.clipAction( gltf.animations[ 0 ] ).play();

        animate();

    }, undefined, function ( e ) {

        console.error( e );

    });

    function render() {
        //requestAnimationFrame(render);
        document.querySelector('.smartcity').appendChild(renderer.domElement);
        renderer.render(scene, camera);
    }

    function destroy(){
        document.querySelector('.smartcity').innerHTML = ' ';
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

        if(window.innerWidth <= 768){
            renderer.setSize(window.innerWidth, window.innerHeight);
        }else {
            renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
        }


        render();

    };

    //render();

    return {
        init:render,
        stop:destroy
    }

})();

export {
    xScene
}