---
name: skill-creator
description: >
  Crea skills nuevas en formato moderno para Sacre. Usar cuando se pida
  crear una skill, adaptar una existente o estandarizar estructura
  Skills/<nombre>/SKILL.md con metadata valida y enfoque anti-ruido.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.0.0"
  scope:
    - root
  auto_invoke:
    - "crear skill"
    - "nueva skill"
    - "agregar skill"
    - "skill nueva"
  owner: ignadev
  skill_type: encoded_preference
  risk_level: medium
  allowed_tools:
    - read
    - write
    - edit
    - glob
    - grep
---

# skill-creator

## Cuando usar

- Crear una skill reutilizable para el proyecto Sacre.
- Adaptar una skill existente al formato moderno con frontmatter.
- Estandarizar estructura y metadata para auto-activacion.

## Cuando NO usar

- Tareas one-off o triviales que no se van a repetir.
- Casos donde ya existe una skill equivalente activa.

## Contrato de salida obligatorio

1. Carpeta `Skills/<skill-name>/`.
2. Archivo `Skills/<skill-name>/SKILL.md` con frontmatter completo.
3. Recursos opcionales (`assets/`, `references/`, `scripts/`) solo si aportan valor real.
4. Actualizacion de la tabla de skills en `AGENTS.md`.
5. Explicacion de que resuelve la skill y por que su tipo (`skill_type`) importa.

## Frontmatter minimo obligatorio

```yaml
---
name: <skill-name>
description: >
  Que hace + contexto concreto de activacion.
  Trigger: cuando debe activarse automaticamente.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.0.0"
  scope:
    - root
  auto_invoke:
    - "<frase o contexto trigger>"
  owner: ignadev
  skill_type: capability_uplift # capability_uplift | encoded_preference
  review_by: "YYYY-MM-DD"       # obligatorio en capability_uplift
  sunset_at: null               # recomendado en capability_uplift
  risk_level: low               # low | medium | high
  allowed_tools: []
---
```

## Tipos de skill (obligatorio definir)

| Tipo | Cuando aplica | Caduca |
|---|---|---|
| `capability_uplift` | Agrega capacidad tecnica que el modelo no tiene nativamente | Si — cuando el modelo mejore |
| `encoded_preference` | Fija la forma de trabajar de este equipo/proyecto | No — solo cambia si cambia la decision de negocio |

**Regla dura:**
- `capability_uplift` → `review_by` obligatorio, `sunset_at` recomendado.
- `encoded_preference` → `review_by` opcional, solo si cambia la preferencia del proyecto.

## Estructura de una skill moderna

```
Skills/
└── <nombre>/
    ├── SKILL.md       ← obligatorio: frontmatter YAML + body Markdown
    ├── assets/        ← opcional: templates, ejemplos
    └── scripts/       ← opcional: scripts de validacion propios
```

## Secciones del body (orden sugerido)

1. `## Cuando usar` — casos concretos de activacion.
2. `## Cuando NO usar` — limites del alcance.
3. `## Reglas criticas` — maximo 6, accionables y verificables.
4. `## Checklist rapido` — checkboxes para antes de cerrar la tarea.
5. Secciones opcionales: `## Estructura de archivos`, `## Comandos`, `## Camino simple, no facil`.

## Principio anti-ruido

Menos contexto bien elegido supera a mas contexto por las dudas.
Prohibido: narrativa larga sin reglas, copy-paste de docs externas, secciones vacias.
Cada linea debe responder: ¿que hace el agente diferente por leer esto?

## Checklist rapido

- [ ] No existe una skill equivalente activa en `Skills/`.
- [ ] Nombre en kebab-case.
- [ ] Frontmatter completo y valido.
- [ ] `skill_type` definido y justificado.
- [ ] Si es `capability_uplift`, tiene `review_by`.
- [ ] Hay criterios claros de uso y no uso.
- [ ] Tabla de skills en `AGENTS.md` actualizada.
- [ ] La skill no contradice ninguna convencion de `AGENTS.md`.
