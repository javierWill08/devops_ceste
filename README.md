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
utilizan el módulo de pruebas integrado de Node.js:

```bash
npm test
```

Las pruebas cubren valores positivos, cero y números negativos.

## Especificación guiada por diseño (SDD)

La especificación inicial del front se encuentra en [`docs/sdd/`](docs/sdd/):

- [Especificación funcional](docs/sdd/01-especificacion-funcional.md)
- [Criterios de aceptación](docs/sdd/02-criterios-aceptacion.md)
- [Decisiones de arquitectura](docs/sdd/03-arquitectura.md)
- [Estrategia de pruebas](docs/sdd/04-estrategia-pruebas.md)

Estos documentos deben revisarse y aprobarse antes de implementar la primera
versión del front.
