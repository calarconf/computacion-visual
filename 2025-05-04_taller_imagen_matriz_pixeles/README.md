# 🧪 De Pixels a Coordenadas: Explorando la Imagen como Matriz

## 📅 Fecha
`2025-05-04` – Fecha de realización

---

## 🎯 Objetivo del Taller
El objetivo del taller es explorar como se represante y maneja una imagén como una matríz.
---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [x] RGB y HSV
- [x] Slicing

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`opencv-python`, `numpy`, `matplotlib`.)
- Google Colab
Link colab: https://colab.research.google.com/drive/1ZuP8ly4AaryMKOUTfnd-QGqPfjSvroUm?usp=sharing
---

## 📁 Estructura del Proyecto

```
2025-05-04_taller_imagen_matriz_pixeles/
├── python/               # python/
    ├── colab/
    ├── Image-3.png         # imagen
    ├── Image-2.png         # imagen
    ├── Image-1.png         # imagen
    ├── Image.png         # imagen
├── DemostracionTallerImagenMatriz/                 # imágenes
├── README.md
```

---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Cargar imagen y convertir BGR a RGB, luego separa canales y posteriormente convertir BGR a HSV.
2. Definir área rectangular a modificar y ubicarla en otra ubicación.
3. Crear histogramas para cada canal, para escala de grises y combinado.
4. Comparativa al cambiar brillo y contraste.

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```python
# 1. Cambiar color de área rectangular
# ---------------------------
img_modificada = img_original.copy()

# Definir región rectangular (y1:y2, x1:x2)
roi = img_modificada[100:300, 200:400]  # Ajusta estas coordenadas según tu imagen

# Cambiar color a rojo (en RGB)
roi[:] = [255, 0, 0]  # Formato RGB (rojo completo)

# ---------------------------
# 2. Sustituir región por otra parte de la imagen
# ---------------------------
img_intercambio = img_original.copy()

# Función para ajuste manual de brillo y contraste
def adjust_manual(img, alpha=1.0, beta=0):
    # alpha: factor de contraste, beta: suma de brillo
    new_img = cv2.convertScaleAbs(img * alpha + beta)
    return new_img

```

---

## 📊 Resultados Visuales
![alt text](/2025-05-04_taller_imagen_matriz_pixeles/python/image-1.png)
![alt text](/2025-05-04_taller_imagen_matriz_pixeles/python/image-2.png)
![alt text](/2025-05-04_taller_imagen_matriz_pixeles/python/image-3.png)
![alt text](/2025-05-04_taller_imagen_matriz_pixeles/python/image.png)

### 📌 GIF animado sobre demostración en Colab:


![Demotración taller](./DemostracionTallerImagenMatriz.gif)
---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Como separar los canales RBG y HSV por separado"
"Como aplico slicing para modificar areás de una imagen"
"Como puedo ajustar el brillo y contraste por medio de una ecuación"
```


---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- ¿Qué aprendiste o reforzaste con este taller? Como manipular una imagén y como se compone de varios canales
- ¿Qué parte fue más compleja o interesante? La parte de modicar una parte de la imagén
- ¿Qué mejorarías o qué aplicarías en futuros proyectos? Intentar hacer algun tipo de photoshop

---


Describe exactamente lo que hiciste tú:

```markdown
- Programé los gráficos
- Definí las áreas a modificar
- Generé documentación
- Integré el código suministrado por el modelo IA
```

---

## ✅ Checklist de Entrega

- [x] Carpeta `2025-05-04_taller_imagen_matriz_pixeles`
- [x] Código limpio y funcional
- [x] Visualizaciones de métricas 
- [x] README completo y claro
- [x] Commits descriptivos en inglés

---