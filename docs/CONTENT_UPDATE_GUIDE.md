# Manual de Actualización y Despliegue de Contenido - NowBit.co

Este manual describe el proceso paso a paso para actualizar **Vacantes** y **Blogs** en la página web de NowBit, así como el procedimiento para desplegar los cambios a producción.

---

## 🏗️ 1. Arquitectura del Despliegue

Para entender cómo llegan los cambios a la web, este es el flujo de componentes que intervienen:

1.  **Repositorio de Código Fuente** (`nowbit-ai-website`): Contiene los archivos de programación y contenido original. **Es aquí donde se deben hacer los cambios.**
    *   URL: `https://github.com/NowBit-Ops/nowbit-ai-website` (branch: `main`).
2.  **Repositorio de Despliegue** (`Frontend-Nowbit-Webpage`): Contiene los archivos ya compilados (dist) que AWS lee para publicar.
    *   URL: `https://github.com/NowBit-Ops/Frontend-Nowbit-Webpage` (branch: `main`).
3.  **AWS CodePipeline**: Servicio que detecta automáticamente cuando subes cambios al **Repositorio de Despliegue**.
4.  **AWS S3**: Bucket (`www.nowbit.co`) donde se almacenan los archivos finales.
5.  **AWS CloudFront**: CDN que gestiona los dominios (`nowbit.co`, `nowbit.mx`, `nowbit.ai`).

---

## 🔑 1.5. Configuración Inicial (Solo la primera vez)

Para poder realizar actualizaciones, debes tener ambos repositorios en tu equipo local:

```powershell
# Clonar el código fuente (Donde trabajarás)
git clone https://github.com/NowBit-Ops/nowbit-ai-website.git

# Clonar el repositorio de despliegue (Donde publicarás)
git clone https://github.com/NowBit-Ops/Frontend-Nowbit-Webpage.git
```


---

## 💼 2. Cómo actualizar Vacantes

Las vacantes se gestionan en un archivo de configuración centralizado.

**Ruta del archivo:** `src/data/vacancies.ts`

### Pasos:
1.  Abre el archivo `vacancies.ts`.
2.  **Para agregar una vacante**: Copia el formato existente y completa los campos:
    *   `id`: Un identificador único (ej: `analista-datos-col`).
    *   `title`: Nombre del cargo.
    *   `location`: Ciudad o "Remoto".
    *   `description`: Breve resumen del rol.
    *   `responsibilities`: Lista de tareas (entre corchetes y comillas).
    *   `requirements`: Perfil buscado.
3.  **Para quitar una vacante**: Puedes eliminar el objeto del array o comentarlo usando `/* ... */` para guardarlo para el futuro.
4.  Guarda el archivo.

---

## 📝 3. Cómo actualizar el Blog

El contenido del blog se divide en dos partes: el listado (índice) y el contenido detallado (si es un artículo propio).

### A. Actualizar el Listado de Blogs (Tarjetas)
**Ruta del archivo:** `public/blog/data.json`

Este archivo contiene la información que aparece en la grilla de `/blog`.
*   Añade un nuevo objeto al inicio del array `posts`.
*   Asegúrate de asignar un `id` único consecutivo.
*   Si el blog es externo (ej: LinkedIn), usa el campo `externalUrl`.
*   Si el blog es interno, el campo `slug` debe coincidir con el nombre del archivo `.html` que crees (ver punto B).

### B. Crear un nuevo Artículo (Interno)
**Ruta de la carpeta:** `public/blog/posts/`

1.  Crea un nuevo archivo `.html` dentro de esa carpeta.
2.  Usa un archivo existente como plantilla para mantener el estilo y la estructura de NowBit.
3.  Asegúrate de que el nombre del archivo sea igual al `slug` definido en el `data.json`.

---

## 🚀 4. Proceso de Despliegue (Producción)

Dado que la página usa **React (Vite)**, el código debe "compilarse" antes de subirse.

### Paso 1: Compilar localmente
Desde la terminal en la carpeta raíz del proyecto (`nowbit-ai-website`):
```powershell
npm run build
```
Esto generará (o actualizará) una carpeta llamada `dist/` con los archivos listos para la web.

### Paso 2: Sincronizar con el repositorio oficial
Los archivos de la carpeta `dist/` deben copiarse a la carpeta que tienes vinculada con el repositorio de producción (normalmente llamada `deploy-nowbit`).

1.  Limpia la carpeta de despliegue (excepto la carpeta `.git`).
2.  Copia todo el contenido de `nowbit-ai-website/dist/` hacia la carpeta de despliegue.

### Paso 3: Subir a GitHub
Desde la terminal dentro de la carpeta de despliegue:
```powershell
git add .
git commit -m "feat: actualización de contenido (vacantes/blog)"
git push origin main
```

### Paso 4: Limpiar Caché (AWS CloudFront)
Una vez que el Pipeline de AWS termine (tarda ~1-2 min), es necesario avisar a los servidores globales que hay una nueva versión:

1.  Entra a la **Consola de AWS** -> **CloudFront**.
2.  Selecciona la distribución correspondiente (ej: la de `nowbit.co`).
3.  Ve a la pestaña **Invalidations**.
4.  Haz clic en **Create Invalidation**.
5.  En Object Paths escribe `/*` y dale a **Create**.

---

## ✅ Checklist de Verificación
*   [ ] ¿Las imágenes nuevas están en la carpeta `public/images/`?
*   [ ] ¿El `data.json` tiene el formato correcto (comas, llaves)?
*   [ ] ¿Ejecutaste `npm run build` antes de subir?
*   [ ] ¿Hiciste la invalidación en CloudFront?
