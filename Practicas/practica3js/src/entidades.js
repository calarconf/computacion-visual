// import * as THREE from 'three';

// export function crearObjeto(tipo, posicion, material) {
//     let geometria;

//     switch(tipo.toLowerCase()) {
//         case 'esfera':
//             geometria = new THREE.SphereGeometry(0.5, 32, 32);
//             break;
//         case 'cilindro':
//             geometria = new THREE.CylinderGeometry(0.3, 0.3, 2, 8);
//             break;
//         case 'cono':
//             geometria = new THREE.ConeGeometry(0.4, 1.5, 32);
//             break;
//         case 'toro':
//             geometria = new THREE.TorusGeometry(0.6, 0.2, 16, 100);
//             break;
//         default:
//             geometria = new THREE.BoxGeometry(1, 1, 1);
//     }

//     const objeto = new THREE.Mesh(geometria, material);
//     objeto.position.copy(posicion);
//     objeto.castShadow = true;
//     objeto.receiveShadow = true;
    
//     return objeto;
// }

// // Materiales base (puedes personalizar los colores)
// export const materiales = {
//     madera: new THREE.MeshStandardMaterial({
//         color: 0x8B4513,
//         roughness: 0.7,
//         metalness: 0.1
//     }),
//     hojas: new THREE.MeshStandardMaterial({
//         color: 0x228B22,
//         roughness: 0.8,
//         metalness: 0.05
//     }),
//     roca: new THREE.MeshStandardMaterial({
//         color: 0x808080,
//         roughness: 0.9,
//         metalness: 0.3
//     }),
//     fruta: new THREE.MeshStandardMaterial({
//         color: 0xFF4500,
//         roughness: 0.4,
//         metalness: 0.1
//     })
// };

// // Función para crear elementos compuestos
// export function crearArbol(posicionBase) {
//     const arbol = new THREE.Group();

//     // Tronco
//     const tronco = crearObjeto('cilindro', new THREE.Vector3(0, 1, 0), materiales.madera);
//     tronco.rotation.x = Math.PI/2;

//     // Copa
//     const copa = crearObjeto('cono', new THREE.Vector3(0, 2.5, 0), materiales.hojas);
    
//     arbol.add(tronco);
//     arbol.add(copa);
//     arbol.position.copy(posicionBase);

//     return arbol;
// }

// export function crearCriatura(posicionBase) {
//     const criatura = new THREE.Group();

//     // Cuerpo
//     const cuerpo = crearObjeto('esfera', new THREE.Vector3(0, 0.5, 0), materiales.fruta);
    
//     // Ojos
//     const ojoIzq = crearObjeto('esfera', new THREE.Vector3(-0.2, 0.7, 0.4), new THREE.MeshStandardMaterial({color: 0xFFFFFF}));
//     ojoIzq.scale.set(0.15, 0.15, 0.15);
    
//     const ojoDer = crearObjeto('esfera', new THREE.Vector3(0.2, 0.7, 0.4), new THREE.MeshStandardMaterial({color: 0xFFFFFF}));
//     ojoDer.scale.set(0.15, 0.15, 0.15);

//     criatura.add(cuerpo);
//     criatura.add(ojoIzq);
//     criatura.add(ojoDer);
//     criatura.position.copy(posicionBase);
//     criatura.scale.set(0.7, 0.7, 0.7);

//     return criatura;
// }

import * as THREE from 'three';

// Materiales base
export const materiales = {
    madera: new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.7 }),
    hojas: new THREE.MeshStandardMaterial({ color: 0x228B22, roughness: 0.8 }),
    roca: new THREE.MeshStandardMaterial({ color: 0x6C6C6C, roughness: 0.9 }),
    piel: new THREE.MeshStandardMaterial({ color: 0xFFD700, roughness: 0.6 }),
    flor: new THREE.MeshStandardMaterial({ color: 0xFF69B4, roughness: 0.5 }),
    ojo: new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.1 })
};

// Funciones de generación
export function crearArbol(x = 0, y = 0, z = 0) {
    const arbol = new THREE.Group();
    
    // Tronco (altura aleatoria)
    const alturaTronco = 2 + Math.random() * 2;
    const tronco = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.4, alturaTronco, 8),
        materiales.madera
    );
    tronco.position.set(0, alturaTronco/2, 0);
    
    // Copa (tamaño y posición variable)
    const copa = new THREE.Mesh(
        new THREE.SphereGeometry(1.2 + Math.random() * 0.5, 16, 16),
        materiales.hojas
    );
    copa.position.set(0, alturaTronco + 0.5, 0);
    
    arbol.add(tronco);
    arbol.add(copa);
    arbol.position.set(x, y, z);
    arbol.userData = { tipo: 'arbol', vida: 100 };
    
    return arbol;
}

export function crearAnimal(x = 0, y = 0, z = 0) {
    const animal = new THREE.Group();
    
    // Cuerpo
    const cuerpo = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 16, 16),
        materiales.piel
    );
    
    // Cabeza
    const cabeza = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        materiales.piel
    );
    cabeza.position.set(0, 0.5, 0.6);
    
    // Ojos
    const ojoDerecho = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8, 8),
        materiales.ojo
    );
    ojoDerecho.position.set(0.15, 0.55, 0.8);
    
    const ojoIzquierdo = ojoDerecho.clone();
    ojoIzquierdo.position.x = -0.15;
    
    animal.add(cuerpo);
    animal.add(cabeza);
    animal.add(ojoDerecho);
    animal.add(ojoIzquierdo);
    animal.position.set(x, y, z);
    animal.scale.set(0.8, 0.8, 0.8);
    animal.userData = { tipo: 'animal', vida: 50 };
    
    return animal;
}

export function crearPlanta(x = 0, y = 0, z = 0) {
    const planta = new THREE.Group();
    
    // Tallo
    const tallo = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8),
        materiales.hojas
    );
    tallo.position.y = 0.25;
    
    // Flor
    const flor = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        materiales.flor
    );
    flor.position.y = 0.5;
    
    planta.add(tallo);
    planta.add(flor);
    planta.position.set(x, y, z);
    planta.userData = { tipo: 'planta', vida: 30 };
    
    return planta;
}

export function crearRoca(x = 0, y = 0, z = 0) {
    const roca = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.4 + Math.random() * 0.3, 1),
        materiales.roca
    );
    roca.position.set(x, y, z);
    roca.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    );
    roca.userData = { tipo: 'roca', vida: 75 };
    return roca;
}

// Función para generar naturaleza automáticamente
export function generarNaturaleza(terrenoSize, cantidad = 50) {
    const naturaleza = new THREE.Group();
    const tipos = ['arbol', 'animal', 'planta', 'roca'];
    
    for(let i = 0; i < cantidad; i++) {
        const tipo = tipos[Math.floor(Math.random() * tipos.length)];
        const posX = Math.random() * terrenoSize - terrenoSize/2;
        const posZ = Math.random() * terrenoSize - terrenoSize/2;
        
        let elemento;
        switch(tipo) {
            case 'arbol':
                elemento = crearArbol(posX, 0, posZ);
                break;
            case 'animal':
                elemento = crearAnimal(posX, 0.5, posZ);
                break;
            case 'planta':
                elemento = crearPlanta(posX, 0.1, posZ);
                break;
            case 'roca':
                elemento = crearRoca(posX, 0.3, posZ);
                break;
        }
        
        naturaleza.add(elemento);
    }
    
    return naturaleza;
}