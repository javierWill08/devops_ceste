# devops_ceste

Aplicación Node.js sencilla para practicar desarrollo y pruebas automatizadas
en el curso de DevOps del máster de IA. Actualmente proporciona operaciones
básicas de suma y resta.

## Requisitos

- Node.js 18 o una versión posterior.

## Instalación

Clona el repositorio y entra en su directorio:

```bash
git clone https://github.com/javierWill08/devops_ceste.git
cd devops_ceste
```

No se necesitan dependencias externas para ejecutar la aplicación o las
pruebas.

## Operaciones disponibles

Las funciones se exportan desde [`src/index.js`](src/index.js):

```js
const { sumar, restar } = require('./src');

sumar(2, 3);  // 5
restar(7, 3); // 4
```

- `sumar(a, b)`: devuelve la suma de dos números.
- `restar(a, b)`: devuelve la diferencia entre dos números.

## Pruebas

Las pruebas se encuentran en [`test/index.test.js`](test/index.test.js) y
[`test/server.test.js`](test/server.test.js) y utilizan Jest:

```bash
npm test
```

Para ejecutar las pruebas y generar el resumen de cobertura en la terminal:

```bash
npm run test:coverage
```

Jest también genera el informe HTML en `coverage/lcov-report/index.html`.
La cobertura de líneas debe ser como mínimo del 80 %. Se genera además el
informe JUnit en `reports/junit.xml`. Ambos directorios son artefactos locales
ignorados por Git. Las pruebas cubren las operaciones y las rutas HTTP de la
aplicación.

En GitHub Actions, el job de pruebas publica el resultado JUnit en el resumen
de la ejecución y guarda `reports/junit.xml` junto con `coverage/lcov-report/`
en el artefacto `test-and-coverage-reports`, incluso si las pruebas fallan. El
artefacto se descarga desde la sección **Artifacts** de la ejecución del
workflow.

## Ejecución con Docker

Construye la imagen desde la raíz del proyecto:

```bash
docker build -t devops-ceste .
```

Ejecuta el contenedor para instalar las dependencias y lanzar las pruebas:

```bash
docker run --rm devops-ceste
```

## Especificación guiada por diseño (SDD)

La especificación inicial del front se encuentra en [`docs/sdd/`](docs/sdd/):

- [Especificación funcional](docs/sdd/01-especificacion-funcional.md)
- [Criterios de aceptación](docs/sdd/02-criterios-aceptacion.md)
- [Decisiones de arquitectura](docs/sdd/03-arquitectura.md)
- [Estrategia de pruebas](docs/sdd/04-estrategia-pruebas.md)

Estos documentos deben revisarse y aprobarse antes de implementar la primera
versión del front.

Las credenciales de Docker Hub se almacenan como variables de Jenkins y no
deben añadirse al repositorio ni al README.
