# 🧪 Importando el Mundo: Visualización y Conversión de Formatos 3D

## 📅 Fecha
`2025-05-14` – Fecha de realización

---

## 🎯 Objetivo del Taller

El objetivo del taller fue la de comparar y convertir entre distintos formatos de modelos 3D: .OBJ, .STL y .GLTF, y visualizar sus diferencias en geometría y materiales. Este también tiene como objetivo el entender la estructura interna de los archivos 3D, su compatibilidad entre entornos, y cómo se interpretan en distintas plataformas de visualización.
---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [x] Transformaciones geométricas (escala, rotación, traslación)
- [x] Shaders y efectos visuales

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`trimesh`, `open3d`, `assimp`, `numpy`.)
- Three.js / React Three Fiber
- Google Colab
link colab: https://colab.research.google.com/drive/1ybMNndirIsuIkvCpj8TnzJQLVzzOAVRv?usp=sharing

---

## 📁 Estructura del Proyecto

```
2025-05-14_taller_conversion_formatos_3d/
├── python/               # python/  
    ├── taller8.ipynb/     # colab/
├── threejs/                 # threejs/, 
    ├── node_modules        # librerias
    ├── public               # modelos 3D y gif
    ├── src                 # código fuente
        ├── components      # Los componentes donde se manipulan los modelos
├── README.md
```


---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas en colab
1. Descargar modelos 3D y cargarlos al colab.
2. Revisar sus propiedades y visualizarlos.
3. Convertir a otros formatos y exportalos.
4. Revisar resultados en content de colab y grabar gif.

### 🔹 Etapas realizadas en threejs
1. Descargar modelos 3D y cargarlos al proyecto en threejs.
2. Crear cada componente para el modelo.
3. Crear la lógica en app.jsx para llamar los tres modelos.
4. Aplicar orbit controls a cada modelo y un selector para cambiar entre ellos.

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```python
# Exportar STL → OBJ
mesh_stl.export('dode_converted.obj')

# Exportar OBJ → GLB
# Si mesh_obj es Trimesh:
mesh_obj.export('barrel_converted.glb', file_type='glb')

# Si tienes una escena:
from trimesh.exchange.gltf import export_glb
glb_bytes = export_glb(mesh_gltf)
with open('scene_converted.glb', 'wb') as f:
    f.write(glb_bytes)

# Exportar GLTF → PLY
from trimesh.exchange.ply import export_ply
ply_bytes = export_ply(mesh_gltf, encoding='ascii')
with open('scene_converted.ply', 'wb') as f:
    f.write(ply_bytes)
```
``` js
<Bounds ref={boundsRef}>
          {/* Modelo GLTF */}
          {(selectedModel === 'all' || selectedModel === 'gltf') && (
            <Model 
              showEdges={showEdges}
              showVertices={showVertices}
              position={[5, 0, 0]}
              scale={1.5}
            />
          )}

          {/* Modelo STL */}
          {(selectedModel === 'all' || selectedModel === 'stl') && (
            <STLModel 
              position={[5, 0, 0]}
              scale={0.2}
            />
          )}

          {/* Modelo OBJ */}
          {(selectedModel === 'all' || selectedModel === 'obj') && (
            <OBJModel 
              position={[0, 0, 5]}
              scale={10.2}
            />
          )}
        </Bounds>
```
---

## 📊 Resultados Visuales

### 📌 GIF animado del taller 8 en colab:

![Demostración de los resultados del taller 8 en colab](./2025-05-14_taller_conversion_formatos_3d/threejs/taller8/public/DemostracionTaller8Colab.gif)


### 📌 GIF animado del taller 8 en colab:

![Demostración de los resultados del taller 8 en threejs](./2025-05-14_taller_conversion_formatos_3d/threejs/taller8/public/DemostracionTaller8Threejs.gif)

---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Como cargar 3 modelos en diferentes formatos en colab"
"Realizar conversiones entre los formatos de los modelos con trimesh.exchange"
"Crea un selector para alternar entre los modelos"
"Como cargar 3 modelos en diferentes formatos en threejs"

```

---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- ¿Qué aprendiste o reforzaste con este taller? Las diferencias en los formatos de los modelos 3D
- ¿Qué parte fue más compleja o interesante? Encontrar un modelo en formato obj
- ¿Qué mejorarías o qué aplicarías en futuros proyectos? Usar el mismo modelo en los tres formatos y un modelo más complejo

---

## 👥 Contribuciones Grupales (si aplica)

Describe exactamente lo que hiciste tú:

```markdown
- Programé la forma para cargar los modelos en threejs y en colab
- Generé los GIFs y documentación
- Integré el código generado por modelos de IA para algunas funcionalidades
```

---

## ✅ Checklist de Entrega

- [x] Carpeta `2025-05-14_taller_conversion_formatos_3d`
- [x] Código limpio y funcional
- [x] GIF incluido con nombre descriptivo (si el taller lo requiere)
- [x] Visualizaciones o métricas exportadas
- [x] README completo y claro
- [x] Commits descriptivos en inglés

---