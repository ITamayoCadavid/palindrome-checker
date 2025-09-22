# Palindrome Checker

## 📌 Descripción
Este es un proyecto en **JavaScript, HTML y CSS** que permite comprobar si una palabra o frase es un **palíndromo** (se lee igual de izquierda a derecha que de derecha a izquierda).

Si el usuario no ingresa ningún valor y presiona el botón, aparece un mensaje de alerta:  
**"Please input a value."**

---

## ⚙️ Lógica usada

### 1. Capturar el input
- Se obtiene el valor del campo de texto con `document.getElementById("text-input").value`.

### 2. Validar que no esté vacío
- Si el input está vacío, se muestra un `alert("Please input a value.")`.

### 3. Limpiar el texto
- Se eliminan caracteres no alfanuméricos y espacios usando expresiones regulares (`replace(/[^A-Za-z0-9]/g, "")`).
- Se convierte todo a minúsculas con `.toLowerCase()` para evitar problemas de mayúsculas/minúsculas.

### 4. Verificar si es palíndromo
- Se compara el texto original con su versión invertida (`split("").reverse().join("")`).
- Si son iguales → es palíndromo.  
- Si no son iguales → no es palíndromo.

### 5. Mostrar resultado
- Se inserta el resultado dentro del `div` con id `result`.

---

## 🖥️ Explicación del HTML
El archivo `index.html` contiene:
- Un **input** (`#text-input`) donde el usuario escribe la palabra o frase.
- Un **botón** (`#check-btn`) que activa la validación al hacer clic.
- Un **div** (`#result`) donde aparece el mensaje indicando si es palíndromo o no.

Ejemplo:
```html
<input id="text-input" type="text" placeholder="Escribe una palabra">
<button id="check-btn">Check</button>
<div id="result"></div>

