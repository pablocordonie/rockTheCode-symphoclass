Proyecto 10: Sistema de Gestión de Eventos

- Descripción

  - Este proyecto es un sistema de gestión de eventos que permite a los usuarios registrarse, crear eventos, confirmar asistencia a eventos, y gestionar sus datos personales. La aplicación está desarrollada en Node.js utilizando MongoDB como base de datos y Mongoose como ODM (Object Data Modeling).

- Estructura del Proyecto

  - Modelos

    - Attendee.js

      - Este modelo representa a los asistentes de los eventos. Incluye los campos username, email, y una lista de eventos a los que el asistente ha asistido.

    - Event.js

      - Este modelo representa los eventos. Incluye los campos title, address, center, confirmed (campo relativo a la asistencia al evento), date, event_organizer, img y una lista de asistentes al evento.

    - User.js

      - Este modelo representa a los usuarios del sistema. Incluye los campos username, fullname, email, img, password, role, una lista de eventos organizados por el usuario y una lista de eventos asistidos también por el usuario.

  - Controladores

    - attendee.js

      - Este controlador maneja las operaciones relacionadas con los asistentes, como obtener la lista de asistentes, obtener un asistente por ID, confirmar asistencia a un evento, y eliminar asistencia a un evento.

    - auth.js

      - Este controlador maneja el registro y el inicio de sesión de los usuarios.

    - event.js

      - Este controlador maneja las operaciones relacionadas con los eventos, como obtener la lista de eventos, obtener un evento por ID, crear un evento, actualizar un evento, y eliminar un evento.

    - user.js

      - Este controlador maneja las operaciones relacionadas con los usuarios, como obtener la lista de usuarios, obtener un usuario por ID, actualizar un usuario, y eliminar un usuario.

  - Middlewares

    - authentication.js

      - Este middleware verifica si un usuario está autenticado y si un usuario es administrador.

    - errorsManager.js

      - Este middleware maneja los errores en la aplicación.

    - uploadFile.js

      - Este middleware maneja la subida de archivos a Cloudinary.

    - validateAuth.js

      - Este middleware contiene esquemas de validación utilizando Joi para validar el inicio de sesión y el registro del usuario.

    - validateEvent.js

      - Este middleware contiene esquemas de validación utilizando Joi para validar un nuevo evento publicado.

    - validateUpdatedEvent.js

      - Este middleware contiene esquemas de validación utilizando Joi para validar la actualización de un evento.

    - validateUpdatedUser.js

      - Este middleware contiene esquemas de validación utilizando Joi para validar la actualización de los datos de perfil de un usuario.

  - Utilidades

    - customBirthdateValidation.js

      - Esta utilidad valida la fecha de nacimiento del usuario de forma personalizada.

    - customEventDateTimeValidation.js

      - Esta utilidad valida la fecha de la celebración del evento publicado de forma personalizada.

    - deleteFile.js

      - Esta utilidad maneja la eliminación de archivos en Cloudinary.

    - hashPassword.js

      - Esta herramienta se encarga de codificar una contraseña usando bcrypt.

    - user.seed.js

      - Este script se encarga de borrar e insertar nuevos usuarios predefinidos a través de su respectivo comando alojado en el package.json.

    - verifyJwt.js y verifyToken.js

      - Ambos archivos contienen funciones para generar y verificar tokens JWT.

- Instalación y Configuración

  - Clonar el repositorio:

    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>

  - Instalar dependencias:

    npm install

  - Configurar variables de entorno:

    - Crear un archivo .env en la raíz del proyecto con las siguientes variables:

      API_KEY=<API_KEY_DE_TU_CUENTA_DE_CLOUDINARY>
      API_SECRET=<API_SECRET_DE_TU_CUENTA_DE_CLOUDINARY>
      CLOUD_NAME=<URL_DE_TU_CUENTA_DE_CLOUDINARY>
      DB_URL=<URL_DE_TU_BASE_DE_DATOS_MONGODB>
      USER_PASSWORD=<TU_CONTRASEÑA>

  - Iniciar la aplicación:

    npm run start

- Uso

  - La aplicación proporciona una serie de endpoints para gestionar usuarios, eventos y asistentes.

  - Autenticación

    - Registrar un nuevo usuario

      POST /api/v1/auth/register

    - Iniciar sesión

      POST /api/v1/auth/login

  - Usuarios

    - Obtener todos los usuarios

      GET /api/v1/users

    - Obtener un usuario por ID

      GET /api/v1/users/:id

    - Actualizar un usuario

      PUT /api/v1/users/:id/update

    - Eliminar un usuario

      DELETE /api/v1/users/:id/delete

  - Eventos

    - Obtener todos los eventos

      GET /api/v1/events

    - Obtener un evento por ID

      GET /api/v1/events/:eventId

    - Crear un nuevo evento

      POST /api/v1/users/:id/events

    - Actualizar un evento

      PUT /api/v1/users/:id/events/:eventId/update

    - Eliminar un evento

      DELETE /api/v1/users/:id/events/:eventId/delete

  - Asistentes

    - Obtener todos los asistentes

      GET /api/v1/attendees

    - Obtener un asistente por ID

      GET /api/v1/attendees/:id

    - Confirmar asistencia a un evento

      POST /api/v1/users/:id/events/:eventId/attendance

    - Eliminar asistencia a un evento

      DELETE /api/v1/users/:id/events/:eventId/attendance/delete

- Contribución

  - Si desea contribuir a este proyecto, por favor siga estos pasos:

    - Haga un fork del repositorio.

    - Cree una nueva rama (git checkout -b feature/mi-feature).

    - Realice sus cambios y haga commit (git commit -am 'Agrega nueva característica').

    - Haga push a la rama (git push origin feature/mi-feature).

    - Cree un nuevo Pull Request.

- Licencia

  - Este proyecto está licenciado bajo la MIT License.

Este README proporciona una visión general de la estructura y funcionalidad del proyecto. Para más detalles, revise los archivos del repositorio.
