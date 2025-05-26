// import * as THREE from 'three';

// const textureLoader = new THREE.TextureLoader();

// // Función para cargar texturas PBR
// const cargarTexturaPBR = (rutaBase) => {
//     return {
//         map: textureLoader.load(`${rutaBase}_color.jpg`),
//         normalMap: textureLoader.load(`${rutaBase}_normal.jpg`),
//         roughnessMap: textureLoader.load(`${rutaBase}_roughness.jpg`),
//         aoMap: textureLoader.load(`${rutaBase}_ambientOcclusion.jpg`),
//     };
// };

// // Generador de altura con noise básico
// const generarAltura = (x, z) => {
//     const scale = 0.1;
//     const noise = Math.sin(x * scale) * Math.cos(z * scale);
//     return Math.floor(noise * 4 + 5);
// };

// export function crearTerreno(ancho = 32, profundidad = 32) {
//     const grupoTerreno = new THREE.Group();
//     const mapaAlturas = [];
    
//     // Cargar materiales PBR (ajusta las rutas según tus archivos)
//     const materialHierba = new THREE.MeshStandardMaterial({
//         ...cargarTexturaPBR('./textures/grass/grass_01'),
//         metalness: 0.1,
//         roughness: 0.7,
//         side: THREE.DoubleSide
//     });

//     const materialTierra = new THREE.MeshStandardMaterial({
//         ...cargarTexturaPBR('./textures/dirt/dirt_01'),
//         metalness: 0.05,
//         roughness: 0.9,
//         side: THREE.DoubleSide
//     });

//     // Generar mapa de alturas
//     for(let x = 0; x < ancho; x++) {
//         mapaAlturas[x] = [];
//         for(let z = 0; z < profundidad; z++) {
//             mapaAlturas[x][z] = generarAltura(x, z);
//         }
//     }

//     // Crear bloques del terreno
//     for(let x = 0; x < ancho; x++) {
//         for(let z = 0; z < profundidad; z++) {
//             const alturaActual = mapaAlturas[x][z];
            
//             // Crear columnas verticales de bloques
//             for(let y = 0; y <= alturaActual; y++) {
//                 const bloque = new THREE.Mesh(
//                     new THREE.BoxGeometry(1, 1, 1),
//                     y === alturaActual ? materialHierba : materialTierra
//                 );
                
//                 // Posicionar y configurar sombras
//                 bloque.position.set(x, y, z);
//                 bloque.castShadow = true;
//                 bloque.receiveShadow = true;
                
//                 // Optimización: fusionar geometrías
//                 bloque.updateMatrix();
//                 grupoTerreno.add(bloque);
//             }
//         }
//     }

//     // Ajustar texturas
//     [materialHierba, materialTierra].forEach(material => {
//         material.map.wrapS = THREE.RepeatWrapping;
//         material.map.wrapT = THREE.RepeatWrapping;
//         material.map.repeat.set(0.25, 0.25);
//         material.normalMap.wrapS = THREE.RepeatWrapping;
//         material.normalMap.wrapT = THREE.RepeatWrapping;
//         material.normalMap.repeat.set(0.25, 0.25);
//     });

//     // Centrar el terreno
//     grupoTerreno.position.set(-ancho/2, -1, -profundidad/2);

//     return { 
//         terreno: grupoTerreno, 
//         mapaAlturas 
//     };
// }

import * as THREE from 'three';

export function crearTerreno(ancho = 32, profundidad = 32) {
    const grupoTerreno = new THREE.Group();
    const mapaAlturas = [];
    
    // Materiales simples con colores
    const materialHierba = new THREE.MeshStandardMaterial({
        color: 0x88ff55,  // Verde pastel
        roughness: 0.7,
        metalness: 0.1
    });

    const materialTierra = new THREE.MeshStandardMaterial({
        color: 0x775544,  // Marrón tierra
        roughness: 0.9,
        metalness: 0.05
    });

    // Generar alturas básicas
    const generarAltura = (x, z) => {
        return Math.floor(Math.sin(x * 0.1) * Math.cos(z * 0.1) * 3 + 4);
    };

    // Crear bloques
    for(let x = 0; x < ancho; x++) {
        for(let z = 0; z < profundidad; z++) {
            const altura = generarAltura(x, z);
            
            for(let y = 0; y <= altura; y++) {
                const bloque = new THREE.Mesh(
                    new THREE.BoxGeometry(1, 1, 1),
                    y === altura ? materialHierba : materialTierra
                );
                
                bloque.position.set(x, y, z);
                bloque.castShadow = true;
                bloque.receiveShadow = true;
                grupoTerreno.add(bloque);
            }
        }
    }

    // Centrar el terreno
    grupoTerreno.position.set(-ancho/2, -1, -profundidad/2);

    return { 
        terreno: grupoTerreno, 
        mapaAlturas 
    };
}