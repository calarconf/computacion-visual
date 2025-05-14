# 🧪 Jerarquías y Transformaciones: El Árbol del Movimiento

## 📅 Fecha
`2025-05-01` – Fecha de realización

---

## 🎯 Objetivo del Taller

Usar estructuras jerárquicas y árboles de transformación para organizar escenas y simular movimientos relativos entre objetos

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [x] Transformaciones geométricas (escala, rotación, traslación)
- [x] Estructura padre-hijo

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:


- Three.js / React Three Fiber
- Visual studio code


---

## 📁 Estructura del Proyecto

```
2025-05-01_taller_jerarquias_transformaciones/
├── threejs/               # threejs/, 
  ├── node_modules/        #Importaciones 
  ├── public/            # gifs
  ├── src/                  # código fuente
├── README.md
```

---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Crear un proyecto con Vite y React Three Fiber.
2. Crear carpeta components y crear el componente Scene.jsx.
3. Dentro del componente crear la estructura padre-hijo usnado group y mesh.
4. Llamar este componente en App.jsx y luego correr el programa con npm run dev.

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```react
function IntermediateGroup() {
  const ref = useRef()
  const { rotationSpeed } = useControls('Nivel Intermedio', {
    rotationSpeed: { value: 0.5, min: 0, max: 2 }
  })

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * rotationSpeed
  })

  return (
    <group ref={ref} position={[1, 0, 0]}>
      <ChildMesh position={[0, 0.75, 0]} color="orange" />
      <ChildMesh position={[0, -0.75, 0]} color="cyan" />
    </group>
  )
}

```

---

## 📊 Resultados Visuales

### 📌  GIF animado:

![Demostación funcionamiento de estructura padre hijo y uso de leva para controlar rotación y traslación](/2025-05-01_taller_jerarquias_transformaciones/threejs/taller2_threejs/public/movimiento_figuras_jerarquias.gif)


---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Como creo una estructura padre-hijo en react three fiber"
"Como puedo usar leva para controlar la rotación y traslación en react three fiber"
```


---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- ¿Qué aprendiste o reforzaste con este taller? Usar group y mesh
- ¿Qué parte fue más compleja o interesante? crear la función para el grupo intermedio
- ¿Qué mejorarías o qué aplicarías en futuros proyectos?
Una tercer nivel de jerarquía 
---

## 👥 Contribuciones Grupales (si aplica)

Describe exactamente lo que hiciste tú:

```markdown
- Configure el entorno para react three fiber
- Generé los GIFs y documentación
- Integré el código generado por el modelo de IA

```

---

## ✅ Checklist de Entrega

- [x] Carpeta   `2025-05-01_taller_jerarquias_transformaciones`
- [x] Código limpio y funcional
- [x] GIF incluido con nombre descriptivo (si el taller lo requiere)
- [x] README completo y claro
- [x] Commits descriptivos en inglés

---