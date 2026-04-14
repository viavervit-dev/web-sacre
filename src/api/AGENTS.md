# api/

Funciones de acceso a datos. Solo logica HTTP, sin estado.

## Reglas

- Sin estado, sin side effects mas alla del fetch.
- Naming: `[dominio].api.ts` — ejemplo: `products.api.ts`, `auth.api.ts`.
- Cada funcion retorna un tipo TypeScript explicito, nunca `any`.
- Los stores consumen estas funciones — los componentes nunca las importan directamente.
- Tests en `__tests__/` dentro de esta misma carpeta.

## Estructura interna

```
api/
├── products.api.ts
└── __tests__/
    └── products.api.test.ts
```

> Skill completa: `Skills/zustand-store/SKILL.md`
