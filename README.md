
# Proyecto de Desarrollo Web

Este proyecto tiene como objetivo el desarrollo de una aplicación web utilizando Angular para el frontend y Spring para el backend. La aplicación está diseñada para dos tipos de usuarios:

## Usuario Administrador del Sistema:
- Crear, editar y eliminar géneros musicales y sus canciones.
- Realizar operaciones administrativas en la plataforma.

## Usuario Votante:
- Crear y activar cuentas en la plataforma.
- Generar listas de canciones ordenadas por votos.
- Buscar canciones y verificar listas por género musical.
- Votar por sus canciones favoritas y eliminar sus votos.

## Tecnologías Utilizadas
- **JWT (JSON Web Tokens):** Para la autenticación segura de usuarios.
- **JPA (Java Persistence API):** Para la interacción con la base de datos MySQL.
- **Axios:** Para la comunicación entre el frontend y el backend.
- **Jmeter:** Herramienta para realizar pruebas de carga y evaluar el rendimiento.
- **SonarQube:** Utilizado para analizar y mejorar la calidad del código.

## Estructura del Proyecto
- **frontend/ :** Contiene el código fuente de la aplicación Angular.
- **backend/ :** Contiene el código fuente de la aplicación Spring.

## Instrucciones de Ejecución

### Frontend:
1. Navegue a la carpeta `frontend/`.
2. Ejecute `ng serve` para iniciar el servidor de desarrollo de Angular.
3. Abra [http://localhost:4200/](http://localhost:4200/) en su navegador para acceder al frontend.

### Backend:
1. Navegue a la carpeta `backend/`.
2. Ejecute la aplicación Spring Boot.
3. Asegúrese de configurar la base de datos MySQL y ajustar las configuraciones de conexión.

## Pruebas y Análisis

- Utilice Jmeter para realizar pruebas de carga y evaluar el rendimiento del sistema.
- Ejecute análisis de calidad de código con SonarQube para mejorar la mantenibilidad y seguridad.

Este proyecto tiene como objetivo cumplir con los requisitos establecidos y proporcionar una experiencia eficiente y segura para los usuarios administradores y votantes.

