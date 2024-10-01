# Primer Parcial II-2024 Arquitectura Orientada a Servicios

## Descripción

Servicio de API REST del primer parcial de la asignatura Arquitectura orientada a servicios (SOA), desarrollado con Node.js , Express y Postgresql.

Esta API permite obtener y almacenar información de productos varios, siempre y cuando el usuario este autenticado, registrando en una base de datos de posgrest. La API cuenta con las siguientes funciones:

- Autorización basica mediante Auth
- Paginación
- Validación de parametros de entrada
- Manejo de errores
  
## Autores

- [@sebasruedasm](https://github.com/sebasruedasm)
- [@CarlosMolina07](https://github.com/CarlosMolina07)


## Instalación

#### Clonar el Repositorio

```
  git clone https://github.com/sebasruedasm/primer-parcial-arquitectura
```

#### Ir al directorio del proyecto

```
  cd primer-parcial-arquitectura
```

#### Instalar dependencias

```
  npm install
```

#### Crear el archivo .env en la capeta primer-parcial-arquitectura

Introducir el siguiente codigo:

```
    PORT=8000

    JWT_HASH=password2024-250A

    DB_URL=postgres://postgres:(contraseña)@localhost:5432/postgres
```

Nota: En la (contraseña) se coloca la de PostgresSQL del PC a utilizar.
## Tabla de contenido

- [Caracteristicas](#Caracteristicas)
- [Comandos](#Comandos)
- [Estructura del Proyecto](#Estructura-del-Proyecto)
- [API Endpoints](#API-Endpoints)

## Caracteristicas

- Node.js
- NPM

## Comandos

- Run Local
```
  npm run dev
```

- Run producción

```
  npm run start
```

## Estructura del Proyecto

```
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--middlewares\    # Middleware Personalizados
 |--models\         # Postgrest models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validators\     # Esquemas de validación
 |--index.js        # Express app
```

## API Endpoints

`GET /auth`

- **query**
  - **username:** requerido
  - **password:** requerido

`GET /api/libros`

- **Request**
  - **query**
    - page
    - limit

- **Response**
  - **success:** boolean
  - **msg:** String
  - **data:** arrray

`GET /api/libros:id`

- **Request**
  - **params**
    - **id:** requerido

- **Response**
  - **success:** boolean
  - **msg:** String
  - **data:** json

`POST /api/libros`

- **Request**
  - **body**
    - titulo
    - autor
    - anyo
    - ciudad
    - editorial

- **Response**
  - **success:** boolean
  - **msg:** String
  - **data:** json

`PUT /api/libros/:id`

- **Request**
  - **body**
    - titulo
    - autor
    - anyo
    - ciudad
    - editorial

- **Response**
  - **success:** boolean
  - **msg:** String
  - **data:** json

`DELETE /api/libros/:id`

- **Request**
  - **params**
    - **id:** requerido

- **Response**
  - **success:** boolean
  - **msg:** String
  - **data:** json
