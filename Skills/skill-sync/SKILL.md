---
name: skill-sync
description: >
  Audita y sincroniza la metadata de skills para mantener coherencia entre
  Skills/*/SKILL.md y AGENTS.md. Usar despues de crear o modificar skills,
  o cuando se sospeche que la tabla de AGENTS.md esta desactualizada.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.0.0"
  scope:
    - root
  auto_invoke:
    - "sincronizar skills"
    - "validar skills"
    - "auditar skills"
    - "actualizar agents skills"
    - "skills desactualizadas"
  owner: ignadev
  skill_type: encoded_preference
  risk_level: low
  allowed_tools:
    - read
    - glob
    - grep
    - edit
---

# skill-sync

## Cuando usar

- Despues de crear o modificar cualquier skill.
- Cuando `AGENTS.md` y `Skills/` esten desincronizados.
- Al revisar si todas las skills siguen el formato moderno.

## Cuando NO usar

- Para crear skills nuevas — usar `Skills/skill-creator/SKILL.md`.

## Validaciones obligatorias

Verificar en orden:

1. **Estructura**: cada skill activa esta en `Skills/<nombre>/SKILL.md` (no en `Skills/<nombre>.md` suelto).
2. **Frontmatter completo**: `name`, `description`, `license`, `metadata.version`, `metadata.scope`, `metadata.auto_invoke`, `metadata.owner`, `metadata.skill_type`, `metadata.risk_level`.
3. **Taxonomia valida**: `skill_type` es exactamente `capability_uplift` o `encoded_preference`.
4. **Ciclo de vida**: si `skill_type=capability_uplift`, `review_by` es obligatorio y `sunset_at` recomendado.
5. **Casing correcto**: la carpeta se llama `Skills/` con S mayuscula.
6. **Referencias vivas**: la tabla en `AGENTS.md` apunta a skills que realmente existen.
7. **Sin skills huerfanas**: toda skill en `Skills/` esta referenciada en `AGENTS.md`.

## Proceso de sincronizacion

```
1. Leer AGENTS.md — extraer tabla de skills activas.
2. Listar Skills/*/SKILL.md — obtener skills reales en disco.
3. Comparar: detectar skills en AGENTS sin archivo y archivos sin referencia en AGENTS.
4. Validar frontmatter de cada SKILL.md encontrado.
5. Reportar discrepancias antes de aplicar cualquier cambio.
6. Aplicar correcciones minimas — no reescribir contenido funcional.
7. Confirmar que pasa el checklist rapido.
```

## Reglas criticas

1. Reportar antes de corregir — nunca modificar sin mostrar primero que esta mal.
2. Cambios minimos y auditables — solo tocar lo que esta desincronizado.
3. No inventar skills — si hay una referencia en `AGENTS.md` sin archivo, es un error a reportar, no a resolver inventando el archivo.
4. No borrar skills sin aprobacion explicita del usuario.

## Checklist rapido

- [ ] Todas las skills activas estan en `Skills/<nombre>/SKILL.md`.
- [ ] Toda skill en `Skills/` esta en la tabla de `AGENTS.md`.
- [ ] Toda skill en `AGENTS.md` tiene su archivo en `Skills/`.
- [ ] Frontmatter valido en cada `SKILL.md`.
- [ ] Las `capability_uplift` tienen `review_by`.
- [ ] Casing `Skills/` con mayuscula en todas las rutas.
