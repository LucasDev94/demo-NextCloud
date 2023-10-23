# Aprendizaje, Generalidades, Practicas y Curiosidades

Hola mi nombre es Luis Carlos, y este proyecto lo e denominado demo-NextCloud, el cual trata de imitar un poco la funcionalidad de Nextcloud, el proyecto esta construido en html, css y js.

- Repositorio: [https://github.com/LucasDev94/demo-NextCloud.git](https://github.com/LucasDev94/demo-NextCloud.git "https://github.com/LucasDev94/demo-NextCloud.git")
- Readme.md: [https://lucasdev94.github.io/demo-NextCloud/](https://lucasdev94.github.io/demo-NextCloud/ "https://lucasdev94.github.io/demo-NextCloud/")
- Publicación web: https://lucasdev94.github.io/demo-NextCloud/login.html

Por mi parte informo que este proyecto hace parte de mi proceso de aprendizaje de programación, específicamente en JavaScript. Actualmente estoy estudiando en Platzi y ya había conseguido algunos certificados mediante un examen, pero esta vez quise hacer algo diferente, construí un pequeño proyecto para practicar todo lo aprendido y asi obtener el certificado del **"Curso Práctico de JavaScript"**

------------

### ¿Porque hice este demo? 
Los contextualizo un poco, [donde yo trabajo](https://www.pcmsolinfo.com/ "donde yo trabajo") hacemos instalación e implementación de [Nextcloud](https://nextcloud.com/es/ "Nextcloud") el cual es un servicio de Nube en servidores privados y a su vez tambien brindamos el servicio de soporte.

He visto la necesidad que se tiene de crear nuevas funcionalidades demasiado especificas que satisfagan necesidades también demasiado especificas, por ello quise ponerme en el papel de los desarrolladores y tratar de copiar a mi manera el comportamiento de Nextcloud y paso a paso ir entendiendo la dinámica de la app y en un futuro crear los módulos o complementos que se necesiten.

Aclaro que en este momento aun soy novato y estoy aprendiendo, por tanto lo que pueden ver en este pequeño proyecto solo **funciona en la vista del cliente, es decir, no tiene un backend,** no hay envió de datos a ningún lado, tampoco se hace captura de información, esto aun es demasiado básico.

------------

### ¿Como fue construido?
Cuando empece a construir el proyecto pensé que iba a ser algo rápido, que un par de días iba a tenerlo listo, pero me doy cuenta que fue algo diferente.

El proyecto inicio desde cero, en github se creo el repositorio inicial y luego se clono en mi repositorio local para así evitar conflictos desde el inicio, en el primer commit se inicio con algo demasiado básico que fue la construcción de la estructura html y así se avanzo construyendo por partes el proyecto hasta finalizarlo.

En git se inicio con la rama principal "main" de ahí se creo la rama "interfaz" y "form", en form se construyo el formulario de inicio de sesion, en interfaz se construyo la vista principal del programa, luego de terminada la maquetación en html y css se hizo un merge desde "interfaz" y "form" hacia "main".

Luego se creo la rama "implementacionJS" ahí se dio toda la funcionalidad en JavaScript para el aplicativo, también se modifico bastante la estructura html y css para que JS pueda trabajar de la mejor manera.

------------

### ¿Con que retos me encontré?
- Para los estilos de la maquetación en html se uso "Sass", es un pre procesador de CSS, ahí me di cuenta que cuando en html se tienen demasiados elementos anidados el dar clases a cada elemento es necesario pero a su vez a medida que se avanza se vuelve un poco más dispendioso por la extension del nombre de la clase que se le da a las etiquetas en html, por otra parte a algunos elementos se les coloco clases especificas las cuales no derivaban del contenedor padre y al implementar esto con "Sass" me di cuenta que las clases con sus rutas se vuelven demasiado especificas y a veces causa problemas de especificidad sobre todo cuando se implemente media querys. Los inconvenientes fueron identificados y resueltos, y se aprendió de dicha experiencia.

- Aprendí a manejar de mejor forma CSS Grid, sobre todo para tablas `<table>` `<thead>` `<tbody>`, lo cual no lo había practicado mucho pero aprendí su importancia y ámbito de aplicación.

- Quise nombrar todas las clases de css y los selectores de js en ingles y me di cuenta que cuando ya se tiene demasiados elementos es más difícil nombrarlos sin de pronto repetir el nombre del selector o clase, mi ingles aun no es muy bueno.

- En git en un momento hice un "merge" lo cual causo un conflicto pero con vscode se logro solucionar.

------------

### ¿Que tanto se uso?
- Editor de texto "VS Code" con extensiones "Live server", y "Live Sass Compiler".
- Se hizo uso de html, Sass, CSS, JS.
- Se hizo uso de git y github.
- se habilito github pages para publicar el proyecto y ver su funcionamiento.
- Un poquito de photoshop.
- Se utilizo bastante el inspector de elementos y la consola.
- Como herramienta de estudio se utilizo ChatGPT.
- [Libreria de iconos de google](https://fonts.google.com/icons "Libreria de iconos de google").

------------

### ¿Que se aprendió?

- Mejore mi capacidad de maquetación en html y css.
- Construcción de formularios en html.
- Manejo de clases, id, y selectores en css (nth-child:).
- manejo de `<table>` en html y sus estilos en css.
- Selectores en JS a partir de clases, id, etiquetas y atributos.
- En JS se aprendió delegación de eventos a contenedores para que las funciones se apliquen a lo elementos existentes y a los que se creen diatónicamente desde JS.
- Se aprendió a verificar si los elementos existen o no para que no generen errores en la consola (uso del símbolo ?).
- Se aprendió el uso del evento como argumento para navegar en sus propiedades y así obtener o desplazarse hacia otros elementos, esto también apoyado de console.dir.
- Se aprendió a capturar elementos con el mismo atributo (construcción de array) y luego aplicarle propiedades a cada elemento con el método .forEach.
- Se aprendió a validar media Query desde JS para que cierta función se aplique a cierto tamaño de pantalla. En este caso se uso para desaparecer elementos y mejorar la visualización en pantalla.
- Se aprendió a validar credenciales para re direccionar a otras paginas.
- Se aprendió y uso eventos, tales como: "click", "change", "submit".
- Se aprendió a capturar la opción seleccionada dentro de un grupo de inputs tipo radio.
- Se aprendió a cambiar el estado de un input tipo checked de input.checked = false a input.checked = true, y así mismo validarlo.
- Se aprendió y practico arrow functions.
- Se practico mucho con condicionales tipo "if" y capturar elementos desde un objeto segun la validación correspondiente.
- Se aprendió que console.log y console.dir sirven muchísimo.
- Se aprendió un poquito a ordenar codigo en JS.
- Se aprendió el correcto uso de la rama "main" o principal, la cual solo debe ser usada para codigo en producción.

------------

# demo-Nextcloud

A continuación se describen las funcionalidades del proyecto:

### Formulario de inicio de sesión
Se empieza por login.html que es el formulario de inicio de sesión para luego ser redirigido a interfaz.html, ahí las únicas credenciales aceptadas son:

- Usuario: luisc@example.com
- Contraseña: 123

Pero de igual manera los errores son validados y obtendrá su respectivo mensaje de error.

[![](https://cloud.pcmsolinfo.com/apps/files_sharing/publicpreview/y2fCaXA4Wbn8spb?file=/tuto.jpg&fileId=1292160&x=1366&y=768&a=true)](https://cloud.pcmsolinfo.com/apps/files_sharing/publicpreview/y2fCaXA4Wbn8spb?file=/tuto.jpg&fileId=1292160&x=1366&y=768&a=true)

------------

### Interfaz
La interfaz se construyo de tal manera que fuera lo más parecido a la interfaz de Nextcloud,  los elementos donde se pude hacer click son los siguientes:

1. Abre un menú para crear un nuevo elemento
2. Abre contenido del archivo
3. Abre barra de detalles
4. Opcion para eliminar archivo
5. Selecciona uno o más archivo para accion grupal
6. Selecciona todos los elementos disponibles
7. Cerrar sesión

[![](https://cloud.pcmsolinfo.com/apps/files_sharing/publicpreview/y2fCaXA4Wbn8spb?file=/tuto1.jpg&fileId=1292227&x=1366&y=768&a=true)](https://cloud.pcmsolinfo.com/apps/files_sharing/publicpreview/y2fCaXA4Wbn8spb?file=/tuto1.jpg&fileId=1292227&x=1366&y=768&a=true)

------------

### Barra de detalles
En la barra de detalles encontraran opciones para generar enlaces y poder compartir la información. Lo único que hace es mostrar un cuadro de dialogo que simula la generación de un enlace para compartir información. A continuación se detalla las diferentes funcionalidades

1. Boton para cerrar la sección de detalles
2. Navegacion entre secciones
3. Generar enlace publico
4. Compartir con personas del mismo dominio de forma privada.

[![](https://cloud.pcmsolinfo.com/apps/files_sharing/publicpreview/y2fCaXA4Wbn8spb?file=/asideDetails.jpg&fileId=1292434&x=1366&y=768&a=true)](https://cloud.pcmsolinfo.com/apps/files_sharing/publicpreview/y2fCaXA4Wbn8spb?file=/asideDetails.jpg&fileId=1292434&x=1366&y=768&a=true)

------------

# Conclusiones

Fue un trabajo interesante, creo que al poner en practica lo aprendido se domina el conocimiento adquirido y al mismo tiempo se encuentra con retos lo cual genera que uno investigue y aprenda otras cosas que son curiosas y que apoyan en buena medida el aprendizaje y dominio de html, css y js.

Aprendí mucho de JS, validaciones, eventos, captura de eventos, navegación por las diferentes propiedades de los eventos, usar console.log y console.dir para validar funciones.

Aprendí mucho con este proyecto, mucho más de lo que tenia en mente al inicio.

Aprendí la importancia de los selectores en js y las clases en html.

mejore mi capacidad de maquetación en html y css, sobre todo al construir formularios funcionales y tablas.

Nota: Si tienen comentario les agradezco me los hagan saber, pueden hacer un pull request.