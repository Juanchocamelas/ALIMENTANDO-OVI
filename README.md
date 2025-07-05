
---
# 🧠 ALIMENTANDO-OVI

El proposito de este proyecto, es realizar multiples cruces y validaciones, para alimentar una base de datos, de personas que necesitan ser validadas posteriormente

---

## 📌 Funcionalidades principales

- Funciones encargadas de ejecutar cruces
- Funciones encargadas de cambiar el formato para la comparacion de data
- Funciones que alimentan base de datos


---


## 🗂️ Estructura de archivos (ordenada)

| Archivo                                 | Propósito                            |
|----------------------------------------|-----------------------------------------------------------|
| `variables reutilizables`              | Variables globales
| `menu.gs`                              | Control de interfaz                                       |
| `Cruce general.gs`                     | Módulo de alimentación en hoja facturacion                |
| `Alimentar validaciones rechazos`      | Modulo que aplica validaciones y alimenta la hoja rechazos|                                                      |
| `Funciones reutilizables-Genericas.gs` | Utilidades y lógica de apoyo         |
---

## 🛠️ Tecnologías utilizadas

- **Google Apps Script**
- **Google Sheets**

---

## ▶️ Cómo usar este proyecto

1. Abre tu hoja de cálculo en Google Sheets  
2. Abre el editor de Apps Script  
3. Copia los archivos de este repositorio al editor  
4. Ejecuta las funciones desde el menú personalizado o directamente desde el editor  
5. Verifica que los nombres de las hojas de cálculo sean coherentes con los usados en el proyecto:
   - `Facturación - Administración de facturación`
   - `Copia de VALIDACION RECHAZOS`
   - `Copia de MAESTRA`
   - `Copia de Directorio MultiClaves - Corred`
   - `Copia de Lista Fact Voluntarios`
---

## 📅 Estado del proyecto

✅ Funcional y en uso
🚀 Mejora futura sugerida: optimizar el rendimiento usando batch de escritura aún más potente en ciertas funciones.

🧠 Tal vez en algunas funciones, si las miramos detalladamente podria haber mas modularidad; en el pegado de fechas, se podria crear el buscarV desde codigo, en vez de usar un VLOOKUP, aunque, recibiriamos rendimiento por recalculo automatico

💡 Ventaja: mejora notable en velocidad y eficiencia, especialmente en hojas grandes.

---

## ✍️ Autor

- **Juan Camilo Salgado Acosta**  
  Técnico en Programación de Software – SENA  
  GitHub: [Juanchocamelas](https://github.com/Juanchocamelas)

---

## 💬 Licencia

Este proyecto está disponible para fines educativos y puede adaptarse a otros proyectos internos. No tiene licencia oficial aún.

