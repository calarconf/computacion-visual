# 🧪 Construyendo el Mundo 3D: Vértices, Aristas y Caras

## 📅 Fecha
`2025-05-11` – Fecha de realización

---

## 🎯 Objetivo del Taller
Comprender las estructuras gráficas básicas que forman los modelos 3D y visualizar su estructura en distintas plataformas como Colab y Three js.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [x] Transformaciones geométricas (escala, rotación, traslación)
- [x] Shaders y efectos visuales
- [x] Estructuras gráficas básicas
---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`numpy`, `trimesh`, `vedo`, `matplotlib`.)
- Three.js / React Three Fiber (`Edges`, `OrbitControls`, `drei`)
- Google Colab

---

## 📁 Estructura del Proyecto

```
2025-05-11_taller_estructuras_3d/
├── python/               # python/ 
    colab/
    DemostracionModelo3D.gif/     # gifs
├── threejs/                 # threejs/, imágenes, audio, modelos, video
  | node_modules
  | public
      Scene.gltf                  #Modelo 3D
      DemostracionModelo3d.gif/            # gifs
  | src                   # Código fuente
├── README.md
```

---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Descargar modelo 3D de sketchfab y ubicarlo en la carpeta Public.
2. Crear carpeta components y crear el componente Model.jsx y controls.jsx.
3. Modificar archivo App.jsx para llamar el modelo 3D y visualizarlo correctamente.
4. Modificar App.css para resaltar vertices y aristas.

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:
Código threejs
```js
function App() {
  const [showEdges, setShowEdges] = useState(true)
  const [showVertices, setShowVertices] = useState(true)

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      {/* Controles de UI */}
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={showEdges}
            onChange={(e) => setShowEdges(e.target.checked)}
          />
          Mostrar aristas
        </label>
        <label>
          <input
            type="checkbox"
            checked={showVertices}
            onChange={(e) => setShowVertices(e.target.checked)}
          />
          Mostrar vértices
        </label>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: '#1a1a1a' }}
      >
        <Environment preset="studio" />
        <OrbitControls
          minDistance={3}
          maxDistance={15}
          enablePan={true}
        />
        <Model showEdges={showEdges} showVertices={showVertices} />
      </Canvas>
    </div>
  )
}
```
Código Colab
``` python
# 3. Crear traza para las ARISTAS (color azul)
# Generar coordenadas para todas las aristas
edge_x = []
edge_y = []
edge_z = []
for edge in edges:
    for vertex in edge:
        edge_x.append(vertices[vertex][0])
        edge_y.append(vertices[vertex][1])
        edge_z.append(vertices[vertex][2])
    edge_x.append(None)
    edge_y.append(None)
    edge_z.append(None)

edge_trace = go.Scatter3d(
    x=edge_x,
    y=edge_y,
    z=edge_z,
    mode='lines',
    line=dict(
        color='blue',
        width=2
    ),
    name='Aristas'
)
``` 
```

---

## 📊 Resultados Visuales


```markdown
![Demostración modelo 3D en three js resaltando principalmente las aristas y vertices](./threejs/public/DemostracionDodecaedroModelo3D.gif)

![Demostración modelo 3D en Colab resaltando principalmente las aristas y los vertices](./python/DemostracionDodecaedroModelo3DPython.gif)
```


---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Como cargar un modelo 3D con threejs fiber"
"Como cargar un modelo 3D en colab"
"Como resalto vertices y aristas en este modelo 3D en colab"
"Como resalto vertices y aristas en este modelo 3D en threejs"
```


---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- ¿Qué aprendiste o reforzaste con este taller? Como cargar un modelo 3D en varios lenguajes
- ¿Qué parte fue más compleja o interesante? Visualizar el modelo correctamente, se veía negro y diminuto
- ¿Qué mejorarías o qué aplicarías en futuros proyectos? UTilizar modelos 3D más complejos

---

## 👥 Contribuciones Grupales (si aplica)

Describe exactamente lo que hiciste tú:

```markdown
- Programé los archivos para cargar los modelos y visualizarlos correctamente
- Generé los GIFs y documentación
- Integré el código suministrado por el modelo de IA para resaltar vertices y aristas
```

---

## ✅ Checklist de Entrega

- [x] Carpeta `2025-05-11_taller_estructuras_3d`
- [x] Código limpio y funcional
- [x] GIF incluido con nombre descriptivo (si el taller lo requiere)
- [x] Visualizaciones o métricas exportadas
- [x] README completo y claro
- [x] Commits descriptivos en inglés

---