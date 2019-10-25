# Enunciado

- Api con un único método Solve: este método se llamará sin ningún argumento y debe partir del plano que se comentó en la entrevista y resolver las distancias mínimas según las explicaciones de la entrevista (“sin goma”). La respuesta del método debe ser el plano solucionado.
- Desarrollar un web con un botón que invoque a la api anterior y muestre el resultado.
- Docker para cada una de las apps anteriores y Docker compose para ejecutar el sistema completo
- Python como lenguaje principal pero se puede utilizar cualquier framework que se crea oportuno (Flask, Django, …)
- No debería tardarse más de una hora.

## front

- Microservicio Angular

## back

- Microservicio node.js + express

## env

- Variables de entorno.

## Architecture

- Aquí encontraremos las imagenes de los micros, archivos de configuración, docker-compose.yml y script de ejecución.

- Entrar en Architecture y ejecutar:

bash ./deploy.sh development back front

- Navegar a `http://localhost/`. Puerto 80.


## Notas:

- Método parametrizado con opción de pasarle otro tipo de matriz.
- Se ha generado documentación del servicio de back con swagger