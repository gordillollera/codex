Implementación de un Sitio Web de Nicho de
 Afiliación en GitHub Pages
 1. Elección de un nicho rentable en 2025 (España)
 1
 Seleccionar un nicho adecuado es el primer paso crítico. En 2025, algunos nichos de afiliación
 especialmente rentables en España incluyen tecnología (gadgets y electrónica), salud y bienestar,
 productos digitales (cursos, software) y finanzas personales . Por ejemplo, el nicho de
 tecnología sigue al alza: muchas empresas tecnológicas ofrecen buenas comisiones en sus programas
 de afiliados y se espera que el mercado tecnológico continúe creciendo . Cualquier nicho elegido
 debe equilibrar demanda de mercado y posibilidades de monetización, además de alinearse con los
 conocimientos o intereses del creador (para generar contenido de calidad). 
2
 2
 Es importante especializarse en un nicho concreto en lugar de abarcar demasiados temas. Un enfoque
 especializado ayuda a crear autoridad y confianza: los motores de búsqueda y los lectores tienden a
 confiar más en un sitio con conocimientos profundos en un área específica . Por ejemplo, si se elige
 comparativas de gadgets, el contenido girará únicamente en torno a dispositivos electrónicos (móviles,
 portátiles, wearables, etc.), evitando mezclar temas no relacionados como recetas o moda. Esta claridad
 temática facilita atraer a una audiencia interesada y conectar con marcas relevantes del sector .
 Una vez definido el nicho, se puede proceder a diseñar el sitio enfocado en ese tema.
 3
 2. Estructura del sitio: landing page y páginas de reseñas
 4
 5
 Una vez escogido el nicho, se diseña la estructura del sitio web para ofrecer una navegación clara y
 escalable. Se recomienda una arquitectura jerárquica sencilla, por ejemplo en un sitio de gadgets :
 6
 • 
• 
• 
Página de inicio (Landing Page): será la entrada principal donde se presenta el sitio, con un
 diseño atractivo que resalte el valor ofrecido. Aquí se pueden mostrar contenidos destacados (ej.
 mejores gadgets del año, ofertas destacadas) y enlaces hacia las principales categorías o reseñas
 recientes. La landing debe tener un mensaje claro (por ejemplo, una breve introducción al nicho: 
"Encuentra las mejores comparativas y ofertas de gadgets en 2025"), llamado a la acción si aplica
 (como "Ver comparativa de Smartphones top 2025"), y quizás un apartado de boletín o contacto
 para fidelizar usuarios.
 Categorías o secciones principales: si el nicho lo permite, organiza el contenido en categorías
 lógicas. Siguiendo el ejemplo de gadgets, podrían existir secciones como Smartphones, Portátiles/
 Tablets y Wearables, cada una con su propia página índice
 7
 . Dentro de cada categoría puede
 haber subcategorías o filtros (p. ej., en Smartphones: gama alta, gama media, accesorios), aunque
 inicialmente bastará con pocas categorías bien definidas.
 Páginas de contenido o reseñas: son páginas individuales dedicadas a un producto o a una
 comparativa. Por ejemplo: "Review del Smartphone XYZ 2025" o "Los 5 mejores Smartwatches para
 f
 itness". Cada página de reseña debe tener una estructura consistente: título con la palabra clave
 (producto o comparativa), imágenes del producto, descripción y especificaciones, pros y contras,
 y un enlace de afiliado hacia la compra. Es útil incluir también una breve conclusión o
 recomendación. Estas páginas pueden crearse como archivos HTML o Markdown individuales (si
 se usa Jekyll) para facilitar añadir nuevas reseñas sin alterar la estructura existente.
 1
6
 Esta estructura modular facilita la escalabilidad del contenido. Agregar una nueva reseña implica
 simplemente crear una nueva página en la categoría correspondiente y enlazarla donde corresponda
 (por ejemplo, actualizar la página de categoría o la lista de últimas reseñas en la portada). Gracias a la
 navegación clara (inicio → categorías → páginas), los usuarios y los robots de búsqueda entienden
 fácilmente la organización del sitio . Además, esto mejora la experiencia de usuario al permitirles
 encontrar contenido relacionado (por ejemplo, desde la página de un móvil podrían navegar a otras
 reseñas de smartphones en la misma categoría).
 3. Integración de enlaces de afiliado simulados (monetización)
 Para monetizar el sitio, cada página de producto o comparativa incluirá enlaces de afiliación. Un
 enlace de afiliado es simplemente una URL única y rastreable que identifica al afiliado (en este caso,
 nuestro sitio) ante el vendedor . Por ejemplo, un enlace a un producto de Amazon España podría
 8
 tener un formato: 
https://www.amazon.es/dp/ASIN/?tag=tu-afiliado-21 , donde 
tu
afiliado-21 sería el ID de seguimiento del afiliado en Amazon. Del mismo modo, con Awin u otras
 redes, el enlace incluirá parámetros o redirecciones que la plataforma reconoce como provenientes de
 nuestro sitio.
 Dado que se trata de un desarrollo inicial, usaremos enlaces simulados para pruebas en lugar de IDs
 de afiliado reales. Esto significa que podemos poner enlaces con un formato válido pero con
 identificadores ficticios o genéricos. Por ejemplo: utilizar 
?tag=AFILIADO-PRUEBA como parámetro
 de Amazon, o un enlace Awin de demostración. Estos enlaces no generarán comisiones reales pero
 permiten comprobar que la estructura funciona (es decir, que al hacer clic llevan al producto correcto
 con el código adjunto). Más adelante, cuando se obtengan las credenciales reales de programas de
 afiliados (Amazon Afiliados, Awin, u otros), simplemente se sustituirán los códigos en estos enlaces. 
Al implementar los enlaces de afiliado, tener en cuenta: - Transparencia y llamado a la acción: junto al
 enlace, es útil añadir un texto claro como "Comprar en Amazon" o "Ver mejor precio", para que el usuario
 sepa que al hacer clic irá a la tienda. Se puede incluso estilizar como botón para mayor visibilidad. 
Comportamiento del enlace: conviene que los enlaces se abran en una pestaña nueva
 (target="_blank") para que el usuario no pierda la página de nuestro sitio. - Divulgación: en una
 página del sitio (por ejemplo, en el pie o en la sección "Sobre nosotros"), añadir una breve nota
 indicando que el sitio utiliza enlaces de afiliación (esto es requerido por las políticas de Amazon y otras
 plataformas). - Tracking opcional: aunque inicialmente son enlaces simulados, más adelante se puede
 incorporar Google Analytics o herramientas de tracking para medir clics en los enlaces de afiliado. Por
 ahora, lo importante es que el código de afiliado único esté presente en la URL para que, en un entorno
 real, la venta pueda ser atribuida correctamente al sitio . (Por ejemplo, Amazon/Awin reconocerán el
 código único en el enlace y registrarán la comisión al afiliado correspondiente ).
 9
 Implementar los enlaces es tan sencillo como usar la etiqueta 
8
 <a> de HTML apuntando a la URL de
 producto con el tag. En el código, se comentará claramente estas secciones para que otros
 desarrolladores o colaboradores puedan identificar y actualizar fácilmente los IDs de afiliado cuando
 sea necesario.
 4. Diseño responsive y optimización SEO básica
 10
 Dado que más del 60% del tráfico web proviene de móviles, es fundamental que el sitio tenga un
 diseño responsive (adaptativo a distintos tamaños de pantalla) . Esto se logrará de varias formas: 
Utilizando un enfoque mobile-first en las hojas de estilo CSS. Si empleamos un framework CSS como
 Bootstrap, obtendremos de entrada una base mobile-first: Bootstrap está diseñado para desarrollo
 2
11
 responsivo, con un sistema de grid fluido y componentes que se adaptan desde dispositivos pequeños
 hacia arriba . Por ejemplo, se puede comenzar la maquetación pensando en la versión móvil
 (colocando los elementos en una sola columna vertical) y luego, mediante clases del grid de Bootstrap,
 hacer que en pantallas más grandes se dispongan en varias columnas. - Asegurando que el 
<meta 
name="viewport" content="width=device-width, initial-scale=1.0"> esté presente en el
 <head> de todas las páginas para que los navegadores móviles muestren correctamente el contenido
 escalado. - Probando manualmente el sitio en dispositivos móviles o usando herramientas de
 emulación para verificar que no haya elementos desbordados, textos demasiado pequeños o imágenes
 que rompan el diseño. Cualquier problema de usabilidad móvil (como botones muy juntos o contenido
 que obliga a hacer scroll horizontal) debe corregirse de inmediato , ya que impacta negativamente la
 experiencia de usuario y el SEO.
 12
 En cuanto al SEO on-page básico, aunque GitHub Pages es un sitio estático, podemos optimizar varias
 cosas: - Metadatos HTML: incluir en cada página etiquetas 
<title> descriptivas y únicas, así como
 meta descripción (
 <meta name="description" ...> ) relevantes para el contenido. Por ejemplo, en
 la página de inicio un 
<title>Comparativas de Gadgets 2025 - [Nombre del Sitio]</
 title> y una meta descripción que resuma la propuesta de valor. En las páginas de reseña, el título
 puede incluir el nombre del producto y quizás "opiniones" o "review 2025", con su correspondiente
 meta descripción mencionando puntos clave. Estas meta etiquetas ayudan a los buscadores a entender
 y mostrar mejor nuestras páginas . - Estructura de encabezados: usar correctamente los 
13
 <h1>, 
<h2>, <h3> para jerarquizar el contenido. Cada página debería tener un único H1 (por ejemplo, el
 título de la reseña o del artículo), y luego subtítulos H2 para secciones (como "Características", "Pros y
 Contras", "Conclusión"), etc. Esto mejora la legibilidad y la indexación. - Texto y contenido de calidad:
 evitar contenido escaso o solo publicitario. Google penaliza los sitios de baja calidad o spam. Es
 preferible escribir reseñas detalladas, con información útil y veraz, proporcionando valor genuino al
 lector (consejos de uso, comparativas honestas, etc.) . Cada artículo debe aportar información
 original y bien documentada, evitando prácticas negativas como el keyword stuffing (repetir
 excesivamente palabras clave) . La prioridad es escribir para humanos, no para bots de
 búsqueda. - Imágenes optimizadas: incluir imágenes de los productos (por ejemplo, fotos oficiales o
 14
 16
 17
 de stock) para enriquecer las reseñas. Cada 
15
 <img> debe tener un atributo 
alt descriptivo (ayuda al
 SEO y a accesibilidad). Comprimir las imágenes a tamaños adecuados para que el sitio cargue rápido. 
Enlaces internos: aprovechar para enlazar contenido relacionado dentro del sitio. Por ejemplo, si en
 una reseña de un smartphone se menciona "smartwatch", se puede enlazar a la categoría de Wearables
 o a otra reseña relevante. Esto mejora la navegabilidad y mantiene a los usuarios más tiempo en el sitio,
 además de ayudar al rastreo de Google. - SEO técnico básico: GitHub Pages permite añadir un archivo
 sitemap.xml y 
robots.txt si se desea, aunque no es obligatorio en esta fase inicial. Si usamos
 Jekyll, existen plugins o gemas como jekyll-sitemap que generan el sitemap automáticamente, y jekyll
seo-tag que ayuda a rellenar metaetiquetas SEO fácilmente. En todo caso, mantener URLs limpias y
 descriptivas (por ejemplo, 
.../smartphones/mejor-smartphone-2025/ en lugar de IDs
 numéricos) es beneficioso para posicionamiento.
 Aplicando estas prácticas, el sitio estará optimizado para buscadores y usuarios desde el comienzo.
 Un buen SEO on-page sumado a contenido enfocado en el nicho debería ayudar a atraer tráfico
 orgánico relevante con el tiempo, lo que a su vez incrementa las posibilidades de conversiones en los
 enlaces de afiliado .
 18
 19
 5. Despliegue automatizado en GitHub Pages desde el repositorio
 El proyecto se alojará en GitHub bajo el repositorio 
gordillollera/codex y se desplegará usando
 GitHub Pages, para estar públicamente accesible. GitHub Pages permite hostear sitios estáticos
 3
directamente desde un repositorio, integrándose muy bien con Jekyll si se utiliza. Los pasos para
 conseguir un despliegue automatizado son:
 • 
• 
• 
• 
• 
• 
Estructura del código para Pages: Decidir si el sitio se publicará desde la rama principal (por
 ejemplo, 
main ) o desde una rama dedicada (
 gh-pages ). GitHub Pages ofrece ambas
 opciones. Para simplicidad, podemos publicar desde 
main (ajustando en Settings -> Pages la
 fuente de publicación). En ese caso, nos aseguraremos de tener el contenido web en la raíz del
 repositorio o en la carpeta 
/docs según la configuración elegida.
 Uso de Jekyll o sitio estático puro: Si optamos por usar Jekyll, GitHub Pages automáticamente
 detectará el sitio (al ver un 
_config.yml , etc.) y lanzará una acción interna para construirlo. 
Desde 2023, GitHub Pages utiliza GitHub Actions internamente para compilar los sitios Jekyll en la
 rama de origen seleccionada
 20
 . Por lo tanto, es necesario que GitHub Actions esté habilitado en
 el repositorio (generalmente lo está por defecto en repos públicos). No hará falta configurar
 nada especial: con cada push, GitHub generará el sitio y lo publicará. Si en lugar de Jekyll usamos
 solo HTML/CSS/JS estáticos, podemos deshabilitar la fase de build creando un archivo vacío
 llamado 
.nojekyll en la raíz
 20
 – esto le indica a Pages que simplemente sirva los archivos
 tal cual, sin intentar procesar Jekyll.
 Dominio de publicación: Por defecto, el sitio quedará en 
https://
 gordillollera.github.io/codex/ al usar Pages de un repositorio de proyecto. (A menos
 que se configure un dominio personalizado, lo cual es opcional y puede hacerse más adelante
 en DNS).
 Automatización continua: Cada cambio que se pushee al branch configurado desencadenará
 una nueva publicación. Es decir, el flujo de trabajo será git push y tras unos segundos/minutos,
 los cambios estarán reflejados en la URL pública. Esto nos da un ciclo de despliegue continuo sin
 intervención manual. En caso de usar Jekyll con plugins no soportados nativamente por Pages,
 se podría configurar un flujo personalizado con GitHub Actions para construir el sitio y
 desplegarlo, pero en este proyecto se priorizarán herramientas soportadas de forma nativa para
 evitar complejidad.
 Verificación post-despliegue: Tras habilitar GitHub Pages, conviene visitar la URL pública para
 comprobar que todo cargue bien (HTML, CSS, imágenes, enlaces). Si hay errores 404 u otros
 problemas, revisaremos la estructura de archivos y las rutas. Un error común es referenciar
 recursos con rutas relativas incorrectas, lo cual se puede corregir ajustando enlaces o usando el
 base URL del sitio en caso de Jekyll (e.g., 
{{ site.baseurl }} ).
 Protección del branch de despliegue: Dado que la página estará pública, es buena práctica
 proteger la rama (por ejemplo, 
main ) para que los cambios pasen por revisión o para evitar
 borrados accidentales. Asimismo, utilizar versionado mediante git nos permitirá revertir
 cambios si algo rompe el sitio.
 En resumen, GitHub Pages nos brinda un despliegue automatizado y gratuito. Una vez configurado,
 no tendremos que "subir archivos por FTP" ni nada similar; simplemente con integrar los cambios en el
 repositorio, la página pública se actualizará. Esto facilita mantener el sitio actualizado con nuevas
 reseñas o mejoras de diseño de forma ágil.
 6. Código limpio, uso de frameworks ligeros y facilidad de
 escalado
 En la implementación técnica, se hará hincapié en producir un código claro, comentado y mantenible.
 Esto implica: - HTML estructurado y semántico: utilizando etiquetas apropiadas (
 <nav> , 
<section> , 
<article> , 
<header> , 
<footer> , etc.) para que el código sea fácil de leer y
 beneficioso para SEO/accesibilidad. Se añadirá comentarios en secciones clave del HTML, por ejemplo,
 4
11
 <!-- Inicio de sección de lista de productos destacados --> , para que cualquier
 colaborador identifique rápidamente bloques de código. - CSS optimizado: si usamos un framework
 CSS, incluiremos solo lo necesario. Por ejemplo, con Bootstrap podemos aprovechar su CDN e importar
 la hoja minificada completa, o bien compilar una versión personalizada si quisiéramos eliminar partes
 no usadas. Bootstrap es ampliamente conocido por ser mobile-first y facilitar un desarrollo responsivo
 rápido , con componentes ya estilizados (botones, grids, columnas) que nos ahorran escribir CSS
 desde cero. Alternativamente, Tailwind CSS podría usarse para un enfoque utilitario; sin embargo, su
 integración en GitHub Pages requeriría precompilación (ya que es un framework CSS de utilidad que
 típicamente se construye con Node). Dado que queremos simplicidad, probablemente Bootstrap 5 sea
 la opción más directa: se enlaza vía 
<link> CDN en el 
<head> y ya se puede usar su sistema de
 rejilla y clases responsivas. Esto aporta valor sin recargar demasiado el proyecto, ya que evitamos
 reinventar la rueda para el diseño básico. - JavaScript ligero: el sitio de nicho principalmente será
 contenido estático; cualquier JS será para mejoras de interfaz (por ejemplo, un carrusel de imágenes de
 producto, un menú responsive colapsable, o alguna funcionalidad menor). Si usamos Bootstrap,
 podemos incluir su bundle JS para componentes interactivos como el navbar colapsable en móvil.
 Evitaremos librerías pesadas o frameworks JS complejos (no es necesario un SPA para un blog/review
 estático). Un JS propio podría incorporarse para, por ejemplo, algún efecto en enlaces de afiliado o
 seguimiento de eventos (en el futuro). - Plantillas y reutilización (si Jekyll): Para facilitar agregar
 contenido sin reescribir código, podemos aprovechar Jekyll (u otro generador estático) para crear
 plantillas. Por ejemplo, crear un 
_layout para "pagina de reseña" que contenga la estructura HTML
 común (header, footer, diseño general), de modo que cada nueva reseña solo contenga el contenido
 específico (quizás escrito en Markdown con front-matter YAML para título, fecha, etc.). Jekyll
 automáticamente combinará el contenido con el layout, generando páginas consistentes. También
 podríamos usar includes (fragmentos reutilizables) para cosas como la cabecera de navegación o el pie
 de página. Así, si hay que modificar el menú o el footer, se hace en un solo archivo en vez de en decenas
 de páginas. - Facilidad de agregar entradas: Con el enfoque anterior, escalabilidad significa que para
 añadir una nueva review, bastará con crear un nuevo archivo (p. ej., 
una carpeta de 
_posts o 
review-smartwatch-x.md en
 _reviews ) y escribir el contenido, sin tocar el resto del sitio. El índice de
 categorías podría generarse automáticamente listando archivos, o manualmente agregando un enlace.
 Lo importante es que la estructura no se rompe al crecer: está pensada para seguir sumando páginas.
 Si no se usa Jekyll, igualmente podemos estructurar el proyecto con subcarpetas por categoría y quizás
 un pequeño script o proceso manual para actualizar listados de contenidos. El README del proyecto
 incluirá instrucciones de cómo hacer esto (ver siguiente sección). - Rendimiento y limpieza: Mantener
 el código limpio también implica no sobrecargarlo. Eliminaremos cualquier rastro de código o
 contenido que venía en el repositorio original codex si no aporta al nuevo modelo de negocio. Por
 ejemplo, si el repositorio tenía páginas o scripts no relacionados con marketing de afiliados, se
 reemplazarán con nuestro nuevo código. Cada commit debe describir claramente qué se añade o
 cambia, para tener historial entendible.
 En definitiva, el objetivo es que el proyecto tenga una base de código sencilla de entender y modificar.
 Cualquier desarrollador que lo revise debe poder localizar rápidamente dónde editar para agregar una
 reseña, cambiar un estilo o modificar un enlace de afiliado. Esto sienta bases sólidas para que el sitio
 pueda evolucionar y escalar sin grandes refactorizaciones a futuro.
 7. Adaptación del repositorio y documentación (README)
 Por último, integraremos todo lo anterior en el repositorio GitHub proporcionado, adaptando o
 sobrescribiendo el contenido existente según convenga. Si el repositorio 
gordillollera/codex ya
 contenía algún proyecto previo, evaluaremos si algo es reutilizable. Por ejemplo, quizá haya recursos
 5
(imágenes, CSS) que se puedan aprovechar. De lo contrario, se hará una limpieza para evitar confusión,
 asegurando que la rama principal refleje únicamente la nueva estructura del sitio de nicho.
 Se creará un archivo README.md claro y completo, que servirá como documentación para el proyecto.
 En el README incluiremos: - Descripción general: Explicación del propósito del sitio (nicho elegido,
 público objetivo, cómo se monetiza con afiliación). - Estructura del proyecto: Detalle de cómo están
 organizados los archivos y carpetas (por ejemplo: 
/index.html para la landing, 
/assets/ para
 CSS/JS/imagenes, 
_layouts/ y 
_posts/ en caso de Jekyll, etc.). Incluir un esquema de la jerarquía
 de páginas (como la estructura de categorías y ejemplos de URL). - Pasos para desarrollo y
 despliegue: Cómo instalar dependencias si las hubiera (p.ej. Jekyll requiere Ruby/Bundler localmente),
 cómo ejecutar un servidor local de pruebas (por ejemplo, 
bundle exec jekyll serve o
 simplemente abrir el 
index.html en un navegador si es solo HTML). También instrucciones sobre
 cómo se realiza el despliegue en GitHub Pages y cualquier configuración especial (notar que GitHub
 Pages autocompila Jekyll en cada push, por lo que no se subirá la carpeta 
_site generada, etc.). 
Guía para añadir contenido (futuras expansiones): Esto es clave para la escalabilidad:
 documentaremos el procedimiento para agregar una nueva reseña o entrada. Por ejemplo: "Para
 añadir una nueva review, crear un archivo en 
_posts con el formato 
YYYY-MM-DD-nombre.md con
 el siguiente front matter... luego commit y push." Si no usamos Jekyll, indicar "duplicar una página de
 ejemplo, modificar el contenido y enlaces, y agregar un link en la página de categoría X". La idea es que
 alguien nuevo pueda seguir estos pasos y extender el sitio fácilmente. - Personalización y estilo: Notas
 sobre cómo ajustar el diseño. Si usamos Bootstrap, mencionar que la mayor parte del estilo proviene de
 Bootstrap 5 vía CDN, pero que tenemos un archivo CSS propio (por ejemplo 
assets/css/style.css )
 donde se pueden agregar overrides o estilos adicionales. Si se quiere cambiar la paleta de colores o
 tipografías, explicar dónde hacerlo. - Enlaces de afiliado: Una sección explicando cómo configurar los
 códigos de afiliado cuando se pase a producción. Ejemplo: "Actualmente los enlaces de compra utilizan
 un tag ficticio 
afiliado-XX para Amazon. Reemplazarlo por su ID de Amazon Afiliados en todo el
 proyecto (buscar 
?tag=afiliado-XX ). Igual con cualquier enlace de Awin u otras plataformas." E
 incluso sugerir el uso de variables si fuera el caso (en Jekyll podríamos centralizar el ID de afiliado en un
 archivo de configuración para cambiarlo fácilmente). - Licencia y atribuciones: Aclarar la licencia del
 código (si es abierto) y mencionar si se usó algún componente de terceros (por ejemplo, "Este proyecto
 utiliza Bootstrap 5 (licencia MIT)"). Esto da transparencia y crédito, aunque sea un proyecto propio
 conviene incluirlo.
 Toda esta documentación garantiza que el proyecto no solo funcione, sino que pueda ser mantenido a
 largo plazo. Un colaborador o el futuro yo del desarrollador podrán entender la lógica del sitio sin
 tener que leer todo el código fuente. Además, un buen README transmite profesionalidad en GitHub, lo
 cual es importante si el proyecto es público y se quiere mostrar como ejemplo de trabajo.
 Siguiendo estos lineamientos, el resultado será un sitio web de nicho de afiliación plenamente
 funcional, responsive y optimizado, publicado vía GitHub Pages. Tendrá una landing page atractiva,
 contenido inicial de calidad (unas cuantas reseñas básicas en el nicho elegido) y los enlaces de afiliado
 simulados listos para ser activados con IDs reales. El código será limpio y preparado para crecimiento, y
 la documentación permitirá continuar la expansión del sitio (añadiendo más reviews, categorías o
 funcionalidades) de forma organizada. En definitiva, el repositorio codex evolucionará para albergar un
 proyecto de marketing de afiliación profesional, listo para monetizar mediante las correspondientes
 plataformas de afiliados cuando esté en producción. Con el tiempo, se podrá seguir añadiendo
 contenido y refinando el SEO para atraer tráfico y maximizar ingresos, apoyándose en esta sólida base
 inicial. 
6
8
 6
 9
 10
 2
 Fuentes consultadas: Shopify – Nichos de marketing de afiliados (2025) , Hostinger – Estrategias
 SEO afiliados 2025 , ThirstyAffiliates – creación de sitios nicho , Awin – guía marketing
 afiliación , Bootstrap docs – mobile-first , GitHub Docs – Pages/Jekyll deployment . 
14
 11
 21
 20
 1
 2
 4
 5
 8
 Los 10 mejores nichos de marketing de afiliados en 2025 - Shopify
 https://www.shopify.com/es/blog/nichos-de-marketing-de-afiliados
 3
 6
 7
 10
 12
 15
 16
 17
 18
 19
 10 estrategias SEO efectivas para afiliados en 2025
 https://www.hostinger.com/es/tutoriales/seo-para-marketing-de-afiliados
 9
 Cómo comenzar a ganar dinero con el marketing de afiliación
 https://www.awin.com/es/marketing-de-afiliacion/marketing-de-afiliacion-guia
 11
 Approach · Bootstrap
 https://getbootstrap.com/docs/4.1/extend/approach/
 13
 Meta Tags For SEO: A Simple Guide For Beginners - HigherVisibility
 https://www.highervisibility.com/seo/learn/meta-tags/
 14
 21
 Cómo crear sitios nicho de marketing de afiliación (en 5 sencillos pasos) | ThirstyAffiliates
 https://thirstyaffiliates.com/es/blog/build-niche-site-quickly-affiliate-marketing
 20
 Creating a GitHub Pages site with Jekyll - GitHub Docs
 https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
 7
