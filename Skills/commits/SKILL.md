---
name: commits
description: >
  Convenciones para escribir commits en Sacré siguiendo el formato de commitlint.
  Trigger: al crear un commit, revisar el historial o decidir como dividir cambios en commits.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.0.0"
  scope:
    - root
  auto_invoke:
    - "crear commit"
    - "mensaje de commit"
    - "como commitear"
    - "dividir commits"
    - "git commit"
  owner: ignadev
  skill_type: encoded_preference
  risk_level: low
  allowed_tools:
    - bash
---

# commits

## Cuando usar

- Escribir el mensaje de un commit nuevo.
- Decidir como dividir un conjunto de cambios en commits separados.
- Revisar si un mensaje de commit sigue las convenciones del proyecto.

## Cuando NO usar

- Abrir un merge request — usar `Skills/merge-request/SKILL.md`.

## Formato obligatorio

```
tipo: descripcion en minusculas
```

Sin scope. Sin punto final. Sin mayusculas. Maximo 100 caracteres en la primera linea.
La configuracion vive en `commitlint.config.cjs` en la raiz del proyecto.

## Tipos validos y cuando usarlos

| Tipo       | Cuando usarlo                                                        |
| ---------- | -------------------------------------------------------------------- |
| `add`      | Se agrega algo nuevo: componente, pagina, store, skill, dependencia  |
| `wip`      | Trabajo en progreso que no cierra nada — nunca llega a `main`        |
| `perf`     | Mejora de performance medible sin cambio de comportamiento visible   |
| `ci`       | Cambios en GitHub Actions o cualquier workflow de automatizacion     |
| `docs`     | README, AGENTS.md, Skills/, comentarios en codigo                   |
| `refactor` | Reorganizar o reescribir sin cambiar el comportamiento externo       |
| `test`     | Agregar o corregir tests, sin tocar codigo de produccion             |
| `chore`    | Actualizacion de dependencias, configuracion, archivos de tooling    |
| `build`    | Cambios en vite.config.ts, tsconfig, scripts de build               |
| `revert`   | Revertir exactamente un commit anterior                              |

## Reglas criticas

1. **Un commit = un cambio logico** — si el `git diff` mezcla dos cosas distintas, son dos commits. No importa que sea "rapido separarlo despues": el historial es para humanos, no para la maquina.

2. **Sin scope** — el formato es `tipo: descripcion`, nunca `tipo(scope): descripcion`. El commitlint lo rechaza.

3. **Descripcion en minusculas** — la primera letra va en minuscula. El commitlint lo rechaza si no.

4. **El cuerpo del commit es opcional pero valioso** — cuando el "por que" no es obvio desde el codigo, agregar cuerpo separado por linea en blanco. Max 200 caracteres por linea.

   ```
   refactor: mover logica de fetch a products.api.ts

   el componente ProductList estaba mezclando presentacion con peticiones http.
   ahora el componente solo consume el store y el store consume el api.
   ```

5. **`wip` nunca llega a `main`** — es un tipo de escape para guardar progreso en ramas de trabajo. Antes de abrir un MR, todos los `wip` deben ser reemplazados o squasheados.

6. **Prohibido `style` como tipo de commit** — en Conventional Commits significa cambios de estilo/formato del codigo que no afectan comportamiento, no cambios de CSS o diseño visual. Para ajustes visuales usar `refactor` si modifica una pieza existente o `add` si introduce una pieza nueva.

## Camino simple, no facil

Es mas facil hacer un commit gigante con todo junto. El camino simple es escribir el minimo cambio cohesivo que tenga sentido por si solo — asi el `git log` es documentacion, no ruido.

## Verificar antes de commitear

```bash
pnpm lint        # tiene que pasar sin errores
pnpm test --run  # tiene que pasar en verde
```

## Checklist rapido

- [ ] Tipo valido segun la tabla.
- [ ] Sin scope en el mensaje.
- [ ] Descripcion en minusculas.
- [ ] Maximo 100 caracteres en la primera linea.
- [ ] Un solo cambio logico por commit.
- [ ] Si es `wip`, no va a `main`.
- [ ] No usa `style` como tipo de commit.
- [ ] `pnpm lint` y `pnpm test --run` en verde.
