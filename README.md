# Gradebook App (JavaScript)

## 📌 Descripción
Esta es una aplicación simple hecha en **JavaScript puro** que calcula:
- El promedio de notas de la clase.
- La calificación de un estudiante en formato de letra.
- Si el estudiante aprobó o no.

El objetivo es practicar estructuras de control, funciones y arreglos en JavaScript.

---

## ⚙️ Lógica usada

### 1. Cálculo del promedio (`getAverage`)
- Se recorre el arreglo de notas (`studentScores`) con un ciclo `for`.
- Se suman todos los valores.
- Se divide entre la cantidad de estudiantes para obtener el promedio.
- Se redondea a un decimal con `toFixed(1)`.

👉 Ejemplo:  
`[92, 88, 12, 77]` → promedio = `(92 + 88 + 12 + 77) / 4 = 67.25`

---

### 2. Conversión de nota numérica a letra (`getGrade`)
- Se usa una estructura `if - else if` para convertir el puntaje en letras:  
  - `100 → A++`
  - `90 a 99 → A`
  - `80 a 89 → B`
  - `70 a 79 → C`
  - `60 a 69 → D`
  - `< 60 → F`

👉 Ejemplo:  
`77 → C`  
`100 → A++`

---

### 3. Verificar si aprueba (`hasPassingGrade`)
- Se obtiene la nota en letra del estudiante.
- Si es diferente de `"F"`, significa que aprobó.
- Devuelve un valor booleano (`true` o `false`).

👉 Ejemplo:  
`77 → C → true`  
`50 → F → false`

---

### 4. Mensaje final (`studentMsg`)
- Se calcula el **promedio de la clase**.
- Se convierte la nota del estudiante a letra.
- Se valida si aprobó o no.
- Se construye un mensaje concatenando los resultados.

👉 Ejemplo:  
`studentMsg(studentScores, 77)` →  
**"Promedio de la clase: 71.7. Tu nota: C. Has aprobado el curso."**

---

## 🖥️ Explicación del HTML y CSS usados
En el proyecto relacionado con el **validador de texto** (cuando pedías que saliera un `alert` al no escribir nada):

- **HTML (`index.html`):**
  - Se utilizó un `input` de texto con `id="text-input"` para que el usuario escriba.
  - Se creó un botón con `id="check-btn"` que activa la validación.
  - Se agregó un contenedor (`div`) para mostrar mensajes o resultados.

- **CSS (`style.css`):**
  - Se aplicó un diseño sencillo para centrar el contenido en pantalla.
  - El botón se estilizó con bordes redondeados, colores y `hover` para interacción.
  - Se usó `flexbox` para organizar los elementos en columna.

Esto hace que el usuario tenga una interfaz básica donde puede interactuar y probar la lógica.

---

## 🚀 Uso
1. Copia el archivo `script.js`.
2. Ábrelo en un navegador (consola) o en Node.js.
3. Ejecuta los ejemplos y revisa los resultados en la consola.

---

## 🛠️ Tecnologías
- JavaScript (puro)
- HTML y CSS (para la parte visual del
