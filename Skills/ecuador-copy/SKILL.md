---
name: ecuador-copy
description: "Regla de copy para Ecuador en Sacré Web: español neutro, sin modismos y sin términos que choquen con la doctrina católica, con investigación previa. Usar siempre que se escriba, cambie o revise texto visible."
license: Apache-2.0
metadata:
  author: ignadev
  version: '1.0.1'
  scope:
    - root
  auto_invoke:
    - 'escribir copy'
    - 'cambiar textos'
    - 'revisar copy'
    - 'texto visible'
    - 'mensaje de error'
    - 'término religioso'
    - 'modismos'
    - 'copy para ecuador'
  owner: ignadev
  skill_type: encoded_preference
  risk_level: medium
  allowed_tools:
    - read
    - write
    - edit
    - glob
    - grep
    - bash
    - web_search
    - web_fetch
---

# ecuador-copy

## Activation Contract

Usar siempre que se escriba, cambie o revise texto que lee una persona: textos en componentes y páginas, datos del catálogo (`products.ts`), mensajes de error, placeholders, `aria-label`, `alt` y títulos.

No usar para identificadores, comentarios ni commits.

## Hard Rules

1. **El lector está en Ecuador**: un término normal en Argentina no queda habilitado por eso. "Santería" es el caso de origen.
2. **Sin modismos de ningún país**: ni argentinos ni ecuatorianos. Si la palabra cambia según el país, usar la general.
3. **Tuteo, sin voseo**: "Revisa", "puedes". Nunca "Revisá", "podés".
4. **La doctrina católica manda**: un objeto no tiene poder propio, no da suerte y no se adora. Se aplica `references/glosario-ecuador.md`.
5. **Investigar antes de escribir**: un término religioso, devocional o regional que no está en el glosario se verifica con fuentes. Sin fuente leída, no se usa.
6. **No inventar doctrina**: citar solo lo leído en la fuente, con URL. Lo no verificado se marca como tal.
7. **Los nombres propios oficiales se respetan**: "Medalla Milagrosa" es correcto; "medalla que hace milagros", no.
8. **El contenido que llega de la API se reporta, no se cambia**.

## Decision Gates

| Situación | Acción |
| --- | --- |
| Término en el glosario | usar el reemplazo |
| Término religioso o regional fuera del glosario | investigar y agregarlo con fuente y fecha |
| Fuentes contradictorias o ausentes | no usarlo, elegir la opción neutra y preguntar |
| Pantalla que todavía tiene voseo | escribir lo nuevo en forma impersonal para no mezclar y reportar el resto |
| El cambio altera el significado o un dato | preguntar antes |

## Execution Steps

1. Leer la sección "Contexto de Sacré" de `AGENTS.md` y `references/glosario-ecuador.md`.
2. Listar los textos visibles que el cambio agrega o modifica, incluidos los accesibles.
3. Marcar los términos religiosos, devocionales o regionales.
4. Investigar los que no estén en el glosario, en este orden: acepción marcada `Ec` en el Diccionario de americanismos, texto oficial en vatican.va o de la Conferencia Episcopal Ecuatoriana, y uso real en medios o comercios de Ecuador.
5. Escribir el texto y agregar al glosario cada término nuevo con su fuente.
6. Correr los barridos del glosario sobre los archivos tocados y revisar cada coincidencia en su contexto.
7. Actualizar los tests que citan el texto y correr `pnpm lint` y `pnpm test --run`.

## Output Contract

Reportar: textos antes y después, términos investigados con su URL, entradas agregadas al glosario, dudas abiertas y textos reportados sin cambiar.

## References

- `AGENTS.md` — contexto de Sacré: nombre, propósito y límites.
- `references/glosario-ecuador.md` — términos, reemplazos, fuentes y barridos. Es el mismo archivo en `admin-panel-sacre`: un cambio se replica en los dos repos.
- `Skills/react-component/SKILL.md` — estructura de los componentes que muestran el texto.
