# pages/

Una pagina por archivo. Cada archivo de esta carpeta corresponde a exactamente una ruta del router.

## Reglas

- Named export siempre — prohibido `export default`.
- La pagina orquesta: consume stores y compone componentes, no define UI propia compleja.
- Sin logica de negocio inline — si algo se repite o es complejo, va a un componente o un store.
- Tests en `__tests__/` dentro de esta misma carpeta.

## Estructura interna

```
pages/
├── HomePage.tsx
├── NotFoundPage.tsx
└── __tests__/
    └── NotFoundPage.test.tsx
```

> Skill completa: `Skills/react-component/SKILL.md`
