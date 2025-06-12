# Despliegue en GitHub Pages: Pasos a seguir

1. **Publicación de la rama:** Sube todo el código al repositorio de GitHub (`gordillollera/codex`). En la configuración del repositorio (Settings → Pages) selecciona la rama **main** y la carpeta raíz como fuente de publicación.
2. **Jekyll vs estático:** Como utilizamos Jekyll, no agregues un archivo `.nojekyll`. GitHub Pages detectará automáticamente el sitio y generará las páginas.
3. **Espera la construcción:** Tras guardar la configuración, GitHub Pages comenzará a compilar el sitio. En unos minutos tendrás las páginas generadas si no hay errores.
4. **URL del sitio:** La URL pública suele ser `https://<usuario>.github.io/<nombre-del-repo>/`. Para este proyecto será algo como `https://gordillollera.github.io/codex/`.
5. **Verificación:** Abre la URL publicada para comprobar que la página de inicio, la navegación y el widget de traducción funcionan correctamente. Navega por las categorías y reseñas para confirmar que se generaron bien.
6. **Actualizaciones futuras:** Cada vez que realices cambios y los subas al repositorio, GitHub Pages reconstruirá el sitio de forma automática. Solo espera unos minutos y recarga la página para ver los cambios.

*Consejo:* Si necesitaras funcionalidades de Jekyll no soportadas por Pages, podrías usar GitHub Actions para construir el sitio y desplegarlo en una rama `gh-pages`. En este proyecto no es necesario, ya que Pages maneja la generación de forma nativa.
