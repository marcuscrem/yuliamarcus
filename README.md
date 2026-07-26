# yuliamarcus
# 💍 Save the Date - Yulia & Marcus

¡Bienvenido a la página web de Save the Date de Yulia y Marcus!

## 📋 Información de la Boda

- **Fecha:** 4 de septiembre de 2027
- **Ceremonia:** Iglesia de Santa Faz, Alicante
- **Celebración:** Finca Torreta de Bayona, Mutxamel, Alicante

## 🚀 Despliegue en GitHub Pages

Sigue estos pasos para publicar tu página web:

### Paso 1: Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en **"New repository"** (Nuevo repositorio)
3. Nombre del repositorio: `yulia-marcus-boda` (o el que prefieras)
4. Selecciona **"Public"** (Público)
5. Haz clic en **"Create repository"**

### Paso 2: Subir los archivos

**Opción A: Usando GitHub Web Interface**

1. En tu nuevo repositorio, haz clic en **"Add file"** → **"Create new file"**
2. Crea un archivo llamado `index.html` y pega el contenido del archivo `index.html`
3. Crea un archivo llamado `style.css` y pega el contenido
4. Crea un archivo llamado `script.js` y pega el contenido
5. Haz clic en **"Commit changes"** para cada archivo

**Opción B: Usando Git en tu ordenador**

```bash
# Clonar el repositorio (después de crearlo en GitHub)
git clone https://github.com/TU_USUARIO/yulia-marcus-boda.git

# Entrar en la carpeta
cd yulia-marcus-boda

# Copiar los archivos del proyecto
# (asumo que los archivos están en /home/user/save-the-date/)
cp /home/user/save-the-date/* .

# Añadir archivos al staging
git add .

# Hacer commit
git commit -m "Initial commit - Save the Date page"

# Subir a GitHub
git push origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a la pestaña **"Settings"** (Configuración) de tu repositorio
2. Desplázate hasta la sección **"Pages"**
3. En **"Source"**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Haz clic en **"Save"**
5. Espera unos minutos y tu página estará disponible en:
   ```
   https://TU_USUARIO.github.io/yulia-marcus-boda/
   ```

## 📱 Compartir por WhatsApp

Una vez publicada, comparte el enlace con tus invitados:

- **Enlace directo:** `https://TU_USUARIO.github.io/yulia-marcus-boda/`
- **Mensaje sugerido:** "¡Guarda la fecha! 💍 Estamos muy felices de invitarte a nuestra boda. 4 de septiembre de 2027. Más detalles pronto en la invitación formal. #YuliaYMarcus2027"

## 🎨 Personalización

### Cambiar colores

Edita el archivo `style.css` y modifica las variables CSS en `:root`:

```css
:root {
    --deep-ocean: #0a2e4a;      /* Azul profundo del mar */
    --ocean-blue: #1a5276;       /* Azul océano */
    --seafoam: #48c1ce;          /* Espuma de mar */
    --palm-green: #2d6a4f;       /* Verde de palmeras */
    /* ... más colores */
}
```

### Cambiar textos

Edita el archivo `index.html` para modificar cualquier texto visible.

### Cambiar fecha de la boda

Edita el archivo `script.js` y modifica la línea:
```javascript
const weddingDate = new Date('2027-09-04T00:00:00').getTime();
```

## 📂 Estructura del Proyecto

```
yulia-marcus-boda/
├── index.html      # Estructura de la página
├── style.css       # Estilos visuales
├── script.js       # Lógica del countdown
└── README.md       # Este archivo
```

## ✨ Características

- ✅ Diseño responsive (móvil y escritorio)
- ✅ Countdown en tiempo real
- ✅ Colores inspirados en el mar Mediterráneo y Galicia
- ✅ Animaciones suaves
- ✅ Compatible con GitHub Pages
- ✅ Acceso universal desde cualquier navegador

## 💬 Soporte

Si tienes alguna pregunta sobre el despliegue, consulta la [documentación de GitHub Pages](https://docs.github.com/en/pages).

---

*Hecho con ❤️ para Yulia y Marcus*
