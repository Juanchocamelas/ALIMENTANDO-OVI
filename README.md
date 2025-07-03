# 📦 ALIMENTANDO-OVI

**ALIMENTANDO-OVI** es un sistema automatizado en Google Apps Script diseñado para alimentar, validar y procesar información en hojas de cálculo relacionadas con el modelo OVI (Optimización de Validaciones e Ingreso). Este proyecto mejora la eficiencia operativa y minimiza errores humanos al manejar múltiples criterios condicionales de rechazo, clasificación y procesamiento de datos.

---

## 🧠 Características principales

- ✅ Validación dinámica por tipo de comprobante (`NOTA CREDITO`, `RECIBO DE CAJA`, etc.)
- 🧪 Evaluación cruzada de llaves de rechazo
- 🧩 Construcción modular con funciones reutilizables y auxiliares
- 🧹 Limpieza automática de datos inconsistentes
- 🚀 Integración con otros módulos del sistema OVI
- 💬 Estructura escalable para nuevas reglas de negocio

---

## 🗂️ Estructura de archivos

| Archivo                                 | Propósito                            |
|----------------------------------------|--------------------------------------|
| `menu.gs`                               | Control de interfaz                  |
| `Cruce general.gs`                      | Módulo principal de alimentación     |
| `Validaciones auxiliares.gs`           | Reglas por tipo y comprobante        |
| `Variables reutilizables.gs`           | Identificadores compartidos          |
| `Funciones reutilizables-Genericas.gs` | Utilidades y lógica de apoyo         |
| `appsscript.json`                      | Configuración del proyecto           |

---

## ⚙️ Cómo clonar y desplegar el proyecto

```bash
npm install -g @google/clasp
clasp login
clasp clone 1Q37kP5E1TiGxFhNSwwR4kaGmTKrbjINEoSK45b2bpfpM9HExFJ-hxOCy
