# stores/

Stores de Zustand. Un archivo por dominio de negocio.

## Reglas

- Named export siempre — `export const use[Dominio]Store`.
- Las acciones del store llaman a funciones de `src/api/` — nunca hacen `fetch` directamente.
- Los componentes consumen el store con selectores, no el objeto entero.
- Tests en `__tests__/` dentro de esta misma carpeta.

## Estructura interna

```
stores/
├── useProductStore.ts
└── __tests__/
    └── useProductStore.test.ts
```

> Skill completa: `Skills/zustand-store/SKILL.md`
