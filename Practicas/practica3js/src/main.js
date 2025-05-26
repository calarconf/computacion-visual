// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { crearLuces } from './luces.js';
// import { crearTerreno } from './terreno.js';
// import { crearObjeto, crearArbol, crearCriatura, materiales } from './entidades.js';


// class VoxelWorld {
//     constructor() {
//         this.init();
//     }

//     init() {
//         // Escena
//         this.scene = new THREE.Scene();
//         this.scene.background = new THREE.Color(0x87CEEB);

//         // Cámara
//         this.camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000
//         );
//         this.camera.position.set(25, 25, 25);

//         // Renderer
//         this.renderer = new THREE.WebGLRenderer({ antialias: true });
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//         this.renderer.shadowMap.enabled = true;
//         this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//         document.body.appendChild(this.renderer.domElement);

//         // Controles
//         this.controls = new OrbitControls(this.camera, this.renderer.domElement);
//         this.controls.enableDamping = true;
//         this.controls.dampingFactor = 0.05;

//         // Luces
//         this.scene.add(crearLuces());

//         // Terreno
//         const { terreno } = crearTerreno(32, 32);
//         this.scene.add(terreno);
        

//         // Eventos
//         window.addEventListener('resize', this.onWindowResize.bind(this));
//         this.animate();
//     }

//     onWindowResize() {
//         this.camera.aspect = window.innerWidth / window.innerHeight;
//         this.camera.updateProjectionMatrix();
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     animate() {
//         requestAnimationFrame(this.animate.bind(this));
//         this.controls.update();
//         this.renderer.render(this.scene, this.camera);
//     }
// }

// // Iniciar la aplicación
// new VoxelWorld();

// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { crearLuces } from './luces.js';
// import { crearTerreno } from './terreno.js';
// import { crearArbol, crearCriatura, materiales } from './entidades.js';

// class VoxelWorld {
//     constructor() {
//         this.init();
//     }

//     init() {
//         // 1. Configuración básica
//         this.scene = new THREE.Scene();
//         this.scene.background = new THREE.Color(0x87CEEB);

//         this.camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000
//         );
//         this.camera.position.set(35, 35, 35);

//         this.renderer = new THREE.WebGLRenderer({ antialias: true });
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//         this.renderer.shadowMap.enabled = true;
//         this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//         document.body.appendChild(this.renderer.domElement);

//         // 2. Controles
//         this.controls = new OrbitControls(this.camera, this.renderer.domElement);
//         this.controls.enableDamping = true;
//         this.controls.dampingFactor = 0.05;

//         // 3. Sistema de iluminación
//         this.scene.add(crearLuces());

//         // 4. Generar terreno
//         const { terreno } = crearTerreno(32, 32);
//         this.scene.add(terreno);

//         // 5. Añadir objetos decorativos
//         this.agregarEntidades();
        
//         // 6. Eventos y animación
//         window.addEventListener('resize', this.onWindowResize.bind(this));
//         this.animate();
//     }

//     agregarEntidades() {
//         // Árboles
//         this.scene.add(crearArbol(new THREE.Vector3(5, 0, 5)));
//         this.scene.add(crearArbol(new THREE.Vector3(-3, 0, 8)));
//         this.scene.add(crearArbol(new THREE.Vector3(10, 0, -2)));

//         // Criaturas
//         this.scene.add(crearCriatura(new THREE.Vector3(8, 1, 3)));
//         this.scene.add(crearCriatura(new THREE.Vector3(-5, 1, -4)));

//         // Montaña
//         const montaña = new THREE.Mesh(
//             new THREE.ConeGeometry(4, 8, 32),
//             materiales.roca
//         );
//         montaña.position.set(-10, 4, -10);
//         montaña.castShadow = true;
//         this.scene.add(montaña);

//         // Fruta flotante
//         const fruta = new THREE.Mesh(
//             new THREE.SphereGeometry(0.5),
//             materiales.fruta
//         );
//         fruta.position.set(0, 6, 0);
//         this.scene.add(fruta);
//     }

//     onWindowResize() {
//         this.camera.aspect = window.innerWidth / window.innerHeight;
//         this.camera.updateProjectionMatrix();
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     animate() {
//         requestAnimationFrame(this.animate.bind(this));
//         this.controls.update();
//         this.renderer.render(this.scene, this.camera);
//     }
// }

// // Iniciar el mundo
// new VoxelWorld();




import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { crearLuces } from './luces.js';
import { crearTerreno } from './terreno.js';
import { generarNaturaleza, materiales } from './entidades.js';

class VoxelWorld {
    constructor() {
        this.TAMANO_TERRENO = 32;
        this.init();
    }

    init() {
        // 1. Configuración básica de Three.js
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB);
        
        // 2. Configurar cámara
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(40, 40, 40);
        
        // 3. Configurar renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(this.renderer.domElement);

        // 4. Configurar controles de cámara
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 15;
        this.controls.maxDistance = 100;
        this.controls.maxPolarAngle = Math.PI/2;

        // 5. Añadir iluminación
        this.scene.add(crearLuces());

        // 6. Generar terreno
        this.generarTerreno();

        // 7. Generar elementos naturales
        this.agregarEntidades();

        // 8. Configurar eventos
        window.addEventListener('resize', this.actualizarVentana.bind(this));
        this.animate();
    }

    generarTerreno() {
        const { terreno } = crearTerreno(this.TAMANO_TERRENO, this.TAMANO_TERRENO);
        this.scene.add(terreno);
    }

    agregarEntidades() {
        // Generar elementos naturales
        const elementos = generarNaturaleza(this.TAMANO_TERRENO, 200);
        this.scene.add(elementos);

        // Añadir montaña central
        const montaña = new THREE.Mesh(
            new THREE.ConeGeometry(12, 25, 32),
            materiales.roca
        );
        montaña.position.y = 12.5;
        montaña.castShadow = true;
        this.scene.add(montaña);

        // Añadir lago
        const aguaGeometry = new THREE.CircleGeometry(8, 32);
        const aguaMaterial = new THREE.MeshStandardMaterial({
            color: 0x0099FF,
            transparent: true,
            opacity: 0.7,
            roughness: 0.1,
            metalness: 0.9
        });
        const agua = new THREE.Mesh(aguaGeometry, aguaMaterial);
        agua.rotation.x = -Math.PI / 2;
        agua.position.set(-10, 0.1, -10);
        agua.receiveShadow = true;
        this.scene.add(agua);
    }

    actualizarVentana() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        // Actualizar controles
        this.controls.update();
        
        // Rotación básica de la escena (opcional)
        // this.scene.rotation.y += 0.001;
        
        // Renderizar
        this.renderer.render(this.scene, this.camera);
    }
}

// Iniciar la aplicación
new VoxelWorld();