
# Tesla Clone TPO


![App Screenshot](https://i.imgur.com/qEXui1M.jpg)

## Integrantes

- [@Marcos-Oter](https://github.com/Marcos-Oter)      (Marcos Otermin)
- [@MarianoGigena](https://github.com/MarianoGigena) (Mariano Gigena)
- [@LucasOtermin](https://github.com/LucasOtermin) (Lucas Otermin)
- [@macagnone](https://github.com/macagnone) (Lautaro Macagnone)


## TPO


## Sitio
[TESLA CLONE](https://marianogigena.github.io/tesla.github.io/)

### Planificación:

Al empezar a plantear el proyecto se tenía una clara idea de que trataría de centrarse en algo tecnológico y llamativo. 
Surgió la idea de crear un sitio que esté destinado a los vehículos eléctricos, por lo que se optó re imaginar una página de la famosa empresa de la tecnología de innovación energética y vehículos eléctricos Tesla.
Por otra parte, se optó por realizar una experiencia minimalista, sencilla y simple para el usuario. Por lo que se usó eso como base para la elaboración del diseño, la disposición de los elementos y la información que contiene el sitio.

### Organización:
- Mariano: Semántica y Funciones JavaScript
- Lucas: Diseño y animaciones.
- Marcos: Responsive y adaptativo - API
- Lautaro: Maquetación y funciones CSS

La comunicación para la elaboración del proyecto se lleva a cabo a través de un grupo de WhatsApp y se realizan llamadas vía Discord cada semana para plantear ideas, organizar las tareas y sus responsables con el fin de tener una interacción lo más contundente posible para la elaboración del sitio web.
El proyecto inicia desde la base de un diseño conceptual que definiría el aspecto general de todo el sitio. En este caso, el encargado darle el diseño correría a cargo de Lucas Otermin, de ahí se sentó las bases para la elaboración de la totalidad del proyecto:
- [Diseño Completo](https://imgur.com/a/7WcnwYI)
![App Screenshot](https://imgur.com/K9j7vcI.jpg)

Lautaro fue el encargado de elaborar la maquetación del sitio web, el HTML o index principal que sería el esqueleto del sitio.

Mariano realizó las etiquetas semánticas y algunas funciones JavaScript, como por ejemplo, para la realización de un formulario. Hizo una sección para poder llevar a cabo un contacto del usuario a la páginas con el fin de poder realizar consultas.

Marcos realizó una gran porción del apartado de CSS en cada página que compone el sitio, realizando modificaciones proporcionadas por los demás tanto en CSS como en JavaScript y encargándose de las responsividad del sitio con FlexBox.

Lucas realizó animaciones en CSS para diferentes partes del sitio web, por ejemplo, las animaciones del logo del index, la aparición de los botones de la sección principal, la animación de la separación de las secciones en forma de triángulos entre otros.

### Objetivos:
- Dar a conocer las últimas versiones de vehículos Tesla.
- Obtener una experiencia fácil y digerible.
- Diseño con esencia y elegancia.
- Crear un sitio que proporcione una experiencia fluida y optimizada en teléfonos móviles.
- Crear sensación de seguridad a través de interacción real de usuarios.

### Descripción del proyecto.

#### Publicación y GIT:
El proyecto está alojado en un repositorio en GitHub:
- [Repositorio](https://github.com/MarianoGigena/tesla.github.io)

Se hizo un Deploy usando Github:
- [Tesla github.io](https://marianogigena.github.io/tesla.github.io/)

La página tiene como premisa la presentación de varios modelos de vehículos eléctricos y poner a disposición información a destacar de este tipo de vehículos. La página es una versión libre de la ya existente página de vehiculos Tesla: [Electric Cars, Solar & Clean Energy | Tesla.](https://www.tesla.com/)
En la misma aplicamos los conocimientos en HTML con etiquetas semánticas y formularios de consulta, CSS con animaciones y JavaScript para la interacciones y consumo de API.

#### Diseño:
Se simplifica la información para que sea lo más digerible posible, si el usuario desea obtener información más específica podrá hacerlo navegando en partes más profundas de la página, pero el enfoque principal es crear una experiencia lo más simplificada posible en principio para no saturar a un usuario como primera mala impresión.

El aspecto general de la página está enfocado en el minimalismo, elegancia y jugando con fuertes contrastes .Los colores seleccionados para la página, se optó por los colores blanco/gris/negro para mantener colores sobrios para mantener la elegancia, ya que estamos hablando de un producto que se resalta por la innovación y la tecnología es conveniente resaltarlo como tal. Por otra parte, el color rojo se ha elegido por el color representativo de Tesla para conservar la esencia de la marca.

#### Estructura:
El index proporciona la información más reducida para evitar saturar a primera vista al usuario, pero deja en claro que se trata de una página de vehículos eléctricos Tesla.
Cuenta con una serie de botones que te envía a diferentes secciones del index principal.

Cuenta con diferentes páginas se puede acceder presionando “Más información” en la sección de “información” que, sin ampliarse en especificaciones técnicas específicas, detallan brevemente de qué se trata estos vehículos y su forma de carga para quien quiera obtener información un tanto más específica.
Esta sección incluye enlaces que se dirigen a dos páginas en concreto:

![App Screenshot](https://imgur.com/ltgXaDX.jpg)

#### Vehículos eléctricos:
Da la descripción general de la experiencia de optar por un vehículo eléctrico y sus diferentes características:
- Un IFRAME que presentaría un video demostrando brevemente diferentes compradores de la marca Tesla.
![App Screenshot](https://imgur.com/moDVzv2.jpg)
- Dejando constancia de los diferentes modelos de vehículos (S,3,X e Y) y un calificativo para cada uno.
- Descripción sobre el piloto automático.
- Software.
- Impacto ambiental.

#### SuperCharging:

Describe la forma de carga de los vehículos eléctricos:
- Incluye un IFRAME hablando del SuperCharger.
![App Screenshot](https://imgur.com/DaXaE9U.jpg)
- Ubicaciones de las estaciones que cuentan con un SuperCharger.
- Experiencia.

#### API:
También se incluyó en forma de formulario, una sección para contactar a la página para cualquier inquietud del usuario mediante el uso de una API que está ubicada en el footer del sitio. Cuenta con la confirmación de que el formulario fue enviado con éxito.
Utilizamos la API de [Google Sheets Rest API](https://sheetdb.io/.) Implementado para enviar los datos del formulario de consultas a una hoja de cálculo: 


![App Screenshot](https://imgur.com/N1e0KZx.jpg)

- [Tabla de consultas](https://docs.google.com/spreadsheets/d/1JfKvQJ0Bkfx4Y256A2DlnmylvlifdWHdyzfs98m86Yk/edit?usp=sharing)

Por otra parte, el foco principal de esta página está en el Carrousel que irá mostrando los diferentes modelos de vehículos Tesla, que servirán como enlace a otras páginas destinadas a cada uno de ellos. Cada enlace mostrará fotos y una descripción de cada uno de los modelos para el cual fue destinado y una descripción técnica de cada uno breve, su plan de precio etc. 
![App Screenshot](https://i.imgur.com/pz4FuP7.jpg)

#### Consumo de API:
Se optó por realizar un consumo de API para las páginas de cada uno de los modelos para dejar reseñas u opiniones sobre ellos, dejando así una interacción entre los consumidores y la página.
Utilizamos la API de [Google Sheets Rest API](https://sheetdb.io/.) Para envíar las reseñas a una hoja de calculo.
En esta sección se ven plasmadas las reseñas realizadas por los usuarios.

- [Tabla de reseñas](https://docs.google.com/spreadsheets/d/1-tBHeSc0UwDtkElexep6c-XHiABdzaXC1kF3XenPVOg/edit#gid=0)

![App Screenshot](https://imgur.com/RC2kwdn.jpg)
![App Screenshot](https://imgur.com/kKLu2dH.jpg)
## Paleta de color

| Colores             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Bordes y textos | ![#ddd](https://via.placeholder.com/10/ddd?text=+) #ddd |
| Fondos 1 | ![#222](https://via.placeholder.com/10/222?text=+) #222 |
| Fondos 2 | ![#151515](https://via.placeholder.com/10/151515?text=+) #151515 |
| Fondos 3 | ![#111](https://via.placeholder.com/10/111?text=+) #111 |
| Botones y subtítulos | ![#FF0040;](https://via.placeholder.com/10/FF0040;?text=+) #FF0040; |



## Optimización

- Implementamos modularización de código JS y estilos en CSS para segmentar el proyecto.

- Logramos una conversión de las imágenes a formato .webp reduciendo el tamaños de los archivos, logrando que las imágenes y logos proyecto sea más ligero.

- Comprimimos el video del index a una calidad de 240p. Logrando así una carga más.

## Documentación
En el siguiente enlace se encuentra más extendida la documentación y descripción del proyecto.
- [TPO - Grupo 13](https://docs.google.com/document/d/1FfHflyKhT2MYTMedj5JKf0uOO9SM0pX2TVHLPWatrIQ/edit?usp=sharing)

