# 📦 ALIMENTANDO-OVI

**ALIMENTANDO-OVI** es un sistema automatizado en Google Apps Script diseñado para alimentar, validar y procesar información en hojas de cálculo relacionadas con el modelo OVI (Optimización de Validaciones e Ingreso). Este proyecto mejora la eficiencia operativa y minimiza errores humanos al manejar múltiples criterios condicionales de rechazo, clasificación y procesamiento de datos.

---

## 🧠 Características principales

- Uso de multiples buscarV en una sola funcion
- Clasificacion de multiples condiciones, para diferentes tipos de agentes
- Alimenta una base de datos, para su posterior validacion manual
 

---

## 🗂️ Estructura de archivos (ordenada)

| Archivo                                 | Propósito                            |
|----------------------------------------|-----------------------------------------------------------|
| `variables reutilizables`              | Variables globales
| `menu.gs`                              | Control de interfaz                                       |
| `Cruce general.gs`                     | Módulo de alimentación en hoja facturacion                |
| `Alimentar validaciones rechazos`      | Modulo que aplica validaciones y alimenta la hoja rechazos|                                                      |
| `Funciones reutilizables-Genericas.gs` | Utilidades y lógica de apoyo         |
| `appsscript.json`                      | Configuración del proyecto           |

---


