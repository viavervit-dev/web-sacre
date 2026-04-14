# components/

Componentes React reutilizables sin logica de dominio.

## Reglas

- Named export siempre — prohibido `export default`.
- Cada componente vive en su propia carpeta con el mismo nombre en PascalCase.
- Dentro de la carpeta: el archivo `.tsx` y su `style.css` — siempre se llama `style.css`, sin excepcion.
- Props tipadas con `interface`, nunca `any`.
- Sin llamadas a API ni acceso directo al store — reciben datos por props.
- Sin estilos inline — todo en `style.css`.
- Cada componente tiene su `__tests__/` propio dentro de su carpeta.
- Si los componentes se agrupan en subcarpetas tematicas, esas carpetas van en **minuscula** (son agrupadores, no componentes).

## Estructura interna

```
components/
├── Hero/                        ← PascalCase: es un componente
│   ├── Hero.tsx
│   ├── style.css
│   └── __tests__/
│       └── Hero.test.tsx
└── cards/                       ← minuscula: es un agrupador, no un componente
    ├── ProductCard/
    │   ├── ProductCard.tsx
    │   ├── style.css
    │   └── __tests__/
    │       └── ProductCard.test.tsx
    └── CategoryCard/
        ├── CategoryCard.tsx
        ├── style.css
        └── __tests__/
            └── CategoryCard.test.tsx
```

> Skill completa: `Skills/react-component/SKILL.md`
