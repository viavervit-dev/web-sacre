---
name: pull-request
description: >
  Convenciones para abrir y revisar Pull Requests en Sacré (GitHub).
  Trigger: al abrir un PR, revisar uno existente o decidir cuando una rama esta lista para integrar.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.0.1"
  scope:
    - root
  auto_invoke:
    - "abrir pr"
    - "pull request"
    - "abrir pull request"
    - "la rama esta lista"
    - "revisar pr"
    - "crear pr"
  owner: ignadev
  skill_type: encoded_preference
  risk_level: medium
  allowed_tools:
    - bash
    - read
---

# pull-request

## Cuando usar

- Antes de abrir un PR hacia cualquier rama base en GitHub.
- Al revisar un PR de otra persona.
- Para decidir si una rama tiene lo necesario para integrarse.

## Cuando NO usar

- Para escribir mensajes de commits — usar `Skills/commits/SKILL.md`.

## Nombrado de ramas

```
tipo/descripcion-en-kebab-case
```

El `tipo` es el mismo que en commits. Ejemplos reales:

```
add/product-card
refactor/home-page
test/cart-store
docs/readme-stack
```

## Titulo del PR

El titulo del PR **no usa formato de commit convencional**.
No agregar prefijos como `add:`, `refactor:`, `chore:` ni scopes.

Tiene que ser una descripcion humana, corta y clara del proposito completo de la rama, no del ultimo commit.
La metadata convencional, labels o clasificacion se agregan donde corresponda, no en el titulo.

```
Primera version de la home
Listado de productos con filtros
Separacion de logica de api del store de productos
```

## Descripcion del PR

Sin plantilla rigida, pero siempre responder estas tres preguntas:

1. **Que hace este PR?** — una o dos oraciones, sin tecnicismos innecesarios.
2. **Por que se hace?** — contexto: bug, feature pedida, deuda tecnica.
3. **Como probarlo?** — pasos minimos para verificar que funciona.

Si hay cambios visuales, incluir screenshot o video corto.

## Reglas criticas

1. **Un PR = una responsabilidad** — no mezclar un refactor con una feature nueva. Si el reviewer tiene que entender dos cosas distintas al mismo tiempo, el PR es demasiado grande.

2. **Sin `wip` en el historial antes de mergear** — todos los commits de tipo `wip` deben ser squasheados o reemplazados por commits con tipo definitivo antes de abrir el PR.

3. **El PR no se abre si los checks fallan** — `pnpm lint` y `pnpm test --run` tienen que pasar en la rama antes de pedir review. No es el reviewer quien tiene que encontrar los errores de lint.

4. **PRs pequenos son mejores** — un PR de 200 lineas se revisa en 10 minutos. Un PR de 2000 lineas se aprueba sin leer. El tamano optimo es el mas chico que tiene sentido logico completo.

5. **No pushear directamente a `main`** — toda integracion pasa por un PR, sin excepciones. El flujo es: rama → PR → review → merge.

## Flujo de integracion

```
rama feature
    └─→ PR hacia dev
            └─→ merge a dev
                    └─→ PR dev → main (solo cuando el usuario lo pide explicitamente)
```

Nunca abrir PR directo a `main` desde una rama de feature.

## Camino simple, no facil

Es mas facil meter todo en un PR grande "para terminar rapido". El camino simple es abrir PRs chicos y frecuentes — cada uno cuenta una historia clara y se puede revertir sin drama si algo sale mal.

## Checklist rapido

- [ ] La rama sigue el formato `tipo/descripcion-en-kebab-case`.
- [ ] El titulo del PR es una descripcion humana, sin prefijo convencional de commit.
- [ ] La descripcion responde que, por que y como probar.
- [ ] Sin commits `wip` en el historial.
- [ ] `pnpm lint` pasa en verde en la rama.
- [ ] `pnpm test --run` pasa en verde en la rama.
- [ ] El PR tiene una sola responsabilidad.
- [ ] No va directo a `main` — va a `dev` primero.
