# 🧪 Escenas Paramétricas: Creación de Objetos desde Datos

## 📅 Fecha
`2025-05-13` – Fecha de entrega 
---

## 🎯 Objetivo del Taller

El objetivo de este taller es generar objetos 3D de manera programada a partir de listas de coordenadas o datos estructurados. El objetivo es crear geometría en tiempo real y de forma flexible.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [x] Transformaciones geométricas (escala, rotación, traslación)
- [x] Estructuras adaptativas
- [x] Parametrización dinámica

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`vedo`, `trimesh`, `open3d`, `numpy`.)
- Three.js / React Three Fiber
-  Google Colab

link colab:
https://colab.research.google.com/drive/171FtgAH0S4gOUHKsThCPBEMVeRPw9qaJ?usp=sharing
---

## 📁 Estructura del Proyecto

```
2025-05-13_taller_escenas_parametricas/
├── python/               # python/
    ├── Taller9.ipynb       #colab
    ├──DemostraciónEscenaParametricaPy.gif  #gif
├── threejs/
    ├── taller9Three
        ├──node_modules       # threejs
        ├──public             # gif
        ├──src                # codigo fuente
├── README.md
```


---

## 🧪 Implementación

Explica el proceso python:

### 🔹 Etapas realizadas
1. Instalar todas las dependencias.
2. Crear figuras 3D en la malla.
3. Variar parametros de las figuras.
4. Exportar los objetos generados.

Explica el proceso threejs:

### 🔹 Etapas realizadas
1. Crear proyecto en threejs.
2. Crear componentes Scene.jsx y Shapes.jsx.
3. Crear el componente AdaptativeStructures.jsx e implemntar leva.
4. Aplicar la lógica en App.jsx.
### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```python
# Exportar escena completa como GLTF (corregido)
escena_completa = merge(vedo_objects)  # Combinar todos los objetos
write(escena_completa, f"{export_dir}escena_completa.gltf")

# Visualización
show(escena_completa,
     axes=14,
     viewup='z',
     title="Escena Exportada",
     bg="white",
     bg2="lightblue",
     interactive=True)
```
``` js
const AdaptiveStructures = memo(({
  gridSize,
  scaleFactor,
  noiseIntensity,
  colorA,
  colorB,
  structureType
}) => {
  const noise = new Noise(Math.random())
  
  return (
    <group>
      {Array.from({ length: gridSize * gridSize }).map((_, i) => {
        // Calcular posición en grid
        const x = (i % gridSize) - gridSize/2
        const z = Math.floor(i / gridSize) - gridSize/2
        
        // Generar altura con noise
        const height = noise.simplex2(x * 0.5, z * 0.5) * noiseIntensity
        
        // Determinar tipo de estructura
        const isCube = structureType === 'mixed' 
          ? Math.random() > 0.5 
          : structureType === 'cubes'
        
        // Color interpolado
        const colorMix = `hsl(${
          (Math.abs(height) * 30 + 180) % 360
        }, 70%, 60%)`

        return (
          <mesh
            key={i}
            position={[
              x * 2.5, 
              Math.max(0, height), 
              z * 2.5
            ]}
            scale={[
              scaleFactor,
              scaleFactor + Math.abs(height),
              scaleFactor
            ]}
          >
            {isCube ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : (
              <sphereGeometry args={[0.5, 16, 16]} />
            )}
            
            <meshStandardMaterial 
              color={height > 0 ? colorA : colorB}
              metalness={height * 0.2}
              roughness={1 - Math.abs(height) * 0.3}
            />
          </mesh>
        )
      })}
    </group>
  )
})
```

---

## 📊 Resultados Visuales

### 📌 GIF animado sobre demostración en Colab:


![deteccion](./python/DemostracionEscenaParametricaPy.gif)

### 📌 GIF animado sobre demostración en Threejs:


![deteccion](./threejs/taller9Three/public/DemostracionEscenaParametricaThree.gif)


---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Crear una lista de coordenas para definir puntos 3D en el espacio y crea figuras primitivas ahí"
"Usa bucles y condicionales para variar los parametrios de esas figuras"
"Exportas estas figuras como archivos .OBJ, .STL o .GLTF"
"Crea una escena y crea un array de objetos 3D"
"Parametriza su posición, escala, color y rotación"
"Con map representa estructuras adaptativas"
```


---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- ¿Qué aprendiste o reforzaste con este taller? A crear estructuras adaptativas
- ¿Qué parte fue más compleja o interesante? No saber porque tenía problemas con las dependencias en python
- ¿Qué mejorarías o qué aplicarías en futuros proyectos? Poder modificar la entrada sobre que figuras mostrar

---

## 👥 Contribuciones Grupales (si aplica)

Describe exactamente lo que hiciste tú:

```markdown
- Solucioné diferentes bugs que se presentaron en el desarrollo
- Generé los GIFs y documentación
- Integré el código generado con modelos de IA
```

---

## ✅ Checklist de Entrega

- [x] Carpeta `YYYY-MM-DD_nombre_taller`
- [x] Código limpio y funcional
- [x] GIF incluido con nombre descriptivo (si el taller lo requiere)
- [x] Visualizaciones o métricas exportadas
- [x] README completo y claro
- [x] Commits descriptivos en inglés

---