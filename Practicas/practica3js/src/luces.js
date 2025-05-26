// import * as THREE from 'three';

// export function crearLuces() {
//     const grupoLuces = new THREE.Group();

//     // Luz ambiental general
//     const luzAmbiental = new THREE.AmbientLight(0xffffff, 0.3);
//     grupoLuces.add(luzAmbiental);

//     // Luz direccional principal (sol)
//     const luzSolar = new THREE.DirectionalLight(0xfff4e6, 1.2);
//     luzSolar.position.set(50, 100, 50);
//     luzSolar.castShadow = true;
    
//     // Configuración de sombras
//     luzSolar.shadow.mapSize.width = 2048;
//     luzSolar.shadow.mapSize.height = 2048;
//     luzSolar.shadow.camera.near = 0.5;
//     luzSolar.shadow.camera.far = 150;
//     luzSolar.shadow.camera.left = -50;
//     luzSolar.shadow.camera.right = 50;
//     luzSolar.shadow.camera.top = 50;
//     luzSolar.shadow.camera.bottom = -50;
//     luzSolar.shadow.radius = 2;
    
//     grupoLuces.add(luzSolar);

//     // Luz de relleno (hemisferio)
//     const luzHemisferio = new THREE.HemisphereLight(
//         0xffffbb, // color cielo
//         0x080820, // color tierra
//         0.4 // intensidad
//     );
//     grupoLuces.add(luzHemisferio);

//     // Luz puntual adicional
//     const luzPuntual = new THREE.PointLight(0xffaa33, 0.5, 50);
//     luzPuntual.position.set(-20, 15, -10);
//     luzPuntual.decay = 2;
//     grupoLuces.add(luzPuntual);

//     // Configurar ayuda visual para debug (opcional)
//     if (false) { // Cambiar a true para ver ayudas
//         const helperSolar = new THREE.DirectionalLightHelper(luzSolar, 5);
//         grupoLuces.add(helperSolar);
        
//         const helperHemisferio = new THREE.HemisphereLightHelper(luzHemisferio, 3);
//         grupoLuces.add(helperHemisferio);
//     }

//     return grupoLuces;
// }

import * as THREE from 'three';

export function crearLuces() {
    const grupoLuces = new THREE.Group();

    // 1. Luz direccional (sol)
    const luzSolar = new THREE.DirectionalLight(0xffffff, 1.2);
    luzSolar.position.set(50, 100, 50); // Posición del "sol"
    luzSolar.castShadow = true; // Activar sombras
    
    // Configuración de sombras
    luzSolar.shadow.mapSize.width = 2048;
    luzSolar.shadow.mapSize.height = 2048;
    luzSolar.shadow.camera.near = 0.5;
    luzSolar.shadow.camera.far = 150;
    luzSolar.shadow.camera.left = -50;
    luzSolar.shadow.camera.right = 50;
    luzSolar.shadow.camera.top = 50;
    luzSolar.shadow.camera.bottom = -50;
    
    grupoLuces.add(luzSolar);

    // 2. Luz ambiental
    const luzAmbiental = new THREE.AmbientLight(0x404040, 0.5); // Color tenue
    grupoLuces.add(luzAmbiental);

    return grupoLuces;
}