# Aplicación de Sorteo de Amigo Secreto

Esta aplicación web permite organizar un sorteo de "Amigo Secreto" de manera sencilla e interactiva. Los usuarios pueden agregar nombres de amigos a una lista y, posteriormente, realizar un sorteo aleatorio para determinar quién será el amigo secreto de cada participante.

## Challenge-Amigo-Secreto

Es un challenge de Alura Latam para tener un conocimiento mas amplio sobre el mundo de la programación

### Funcionalidades

- **Agregar nombres:** Los usuarios pueden ingresar el nombre de un amigo en un campo de texto y añadirlo a una lista visible haciendo clic en el botón "Añadir".

- **Validar entrada:** Si el campo de texto está vacío o contiene solo espacios en blanco, el sistema mostrará una alerta solicitando un nombre válido. Además, se verifica que el nombre no esté duplicado en la lista.

- **Visualizar la lista:** Los nombres ingresados se muestran en una lista debajo del campo de entrada, actualizándose dinámicamente con cada nuevo amigo añadido.

- **Sorteo aleatorio:** Al hacer clic en el botón "Sortear Amigo", se selecciona aleatoriamente un nombre de la lista y se muestra en la página. Cada nombre se sortea una única vez hasta que todos hayan sido seleccionados.

### Cómo utilizar la aplicación

1. Agregar un amigo:
    - Escribe el nombre de tu amigo en el campo de texto ubicado en la sección principal de la página.
    - Haz clic en el botón "Añadir".
    - El nombre aparecerá en la lista de amigos debajo del campo de entrada.

2. Realizar el sorteo:

    - Una vez que hayas añadido todos los nombres deseados, haz clic en el botón "Sortear Amigo".
    - El nombre seleccionado aleatoriamente se mostrará en la sección de resultados.
    - Repite este paso para cada nuevo sorteo. Cada nombre será seleccionado solo una vez hasta que todos hayan sido sorteados.

### Estructura del proyecto

El proyecto consta de los siguientes archivos:

- **`index.html`:** Contiene la estructura HTML de la aplicación.
- **`style.css`:** Archivo CSS que define los estilos y la apariencia visual de la aplicación.
- **`app.js`:** Archivo JavaScript que implementa la lógica de la aplicación, incluyendo la gestión de la lista de amigos, validaciones y el sorteo aleatorio.

### Tecnologías utilizadas

- **HTML5:** Para la estructura y el contenido de la página web.
- **CSS3:** Para el diseño y la presentación visual de la aplicación.
- **JavaScript:** Para la funcionalidad interactiva, manejo de eventos y lógica del sorteo.

### Requisitos previos

Para ejecutar la aplicación, necesitas:

- Un navegador web moderno (como Chrome, Firefox, Safari o Edge) que soporte HTML5, CSS3 y JavaScript.

### Instrucciones de instalación y ejecución

1. Clonar el repositorio:
    - Abre una terminal o consola de comandos.

    - Ejecuta el siguiente comando para clonar el repositorio:

        ~~~ bash
        git clone https://github.com/tu-usuario/amigo-secreto.git
        ~~~

    - Reemplaza `tu-usuario` con tu nombre de usuario de GitHub.

2. Abrir la aplicación:

    - Navega al directorio del proyecto clonado:

        ~~~ bash
        cd amigo-secreto
        ~~~

    - Abre el archivo `index.html` en tu navegador web preferido. Puedes hacerlo arrastrando el archivo directamente al navegador o utilizando la opción "Abrir archivo" en el menú del navegador.

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.

2. Crea una nueva rama para tu funcionalidad o corrección de errores:

    ~~~ bash
    git checkout -b nombre-de-tu-rama
    ~~~

3. Realiza tus cambios y haz commit de los mismos:

    ~~~ bash
    git commit -m "Descripción de tus cambios"
    ~~~

4. Sube tus cambios a tu repositorio fork:

    ~~~ bash
    git push origin nombre-de-tu-rama
    ~~~

5. Abre una Pull Request en el repositorio original describiendo tus cambios y su propósito.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
