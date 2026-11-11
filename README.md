# Möov Aerial Studio · Landing

Sitio estático (HTML, CSS y JS) listo para GitHub Pages.

## Estructura

```
index.html      Página principal
css/styles.css  Estilos (paleta y tipografía de la guía de marca)
js/main.js      Menú, pestañas de horarios, animaciones y WhatsApp
img/            Fotos, logos y patrón
.nojekyll       Le dice a GitHub Pages que sirva los archivos tal cual
```

## Antes de publicar

1. **WhatsApp:** en `js/main.js`, escribe el número en `const WHATSAPP = ""` con código de país y sin espacios (ej. `"5215512345678"`). Mientras esté vacío, los botones llevan a Instagram.
2. **Dirección:** en `index.html`, busca `TODO` en el footer y escribe la dirección del estudio.
3. **Tipografía:** la guía usa Contralto Small, que no está en Google Fonts. Se usa Marcellus como sustituto. Si tienes los archivos de Contralto (.woff2), ponlos en `fonts/`, agrega un `@font-face` en `css/styles.css` y cambia `--font-display`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube todo el contenido de esta carpeta (que `index.html` quede en la raíz).
2. En el repositorio ve a **Settings → Pages**.
3. En **Source** elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Para probarlo en tu computadora basta con abrir `index.html` en el navegador.
