# components/

Componentes React reutilizables sin logica de dominio.

## Reglas

- Named export siempre — prohibido `export default`.
- Un componente por archivo. El nombre del archivo = nombre del componente.
- Props tipadas con `interface`, nunca `any`.
- Sin llamadas a API ni acceso directo al store — reciben datos por props.
- Cada componente tiene su `__tests__/` propio dentro de su carpeta.

## Estructura interna

```
components/
└── ProductCard/
    ├── ProductCard.tsx
    └── __tests__/
        └── ProductCard.test.tsx
```

> Skill completa: `Skills/react-component/SKILL.md`
