# pages/

Una pagina por carpeta. Cada carpeta corresponde a exactamente una ruta del router.

## Reglas

- Named export siempre — prohibido `export default`.
- Cada page vive en su propia carpeta PascalCase con el mismo nombre del concepto (ej: `Home/`, `NotFound/`).
- Dentro de la carpeta: el archivo `[Nombre]Page.tsx` y su `style.css` obligatorio.
- La page orquesta: consume stores y compone componentes, no define UI propia compleja.
- Sin logica de negocio inline — si algo se repite o es complejo, va a un componente o un store.
- Tests en `__tests__/` dentro de la carpeta de cada page.

## Estructura interna

```
pages/
├── Home/
│   ├── HomePage.tsx
│   ├── style.css
│   └── __tests__/
│       └── HomePage.test.tsx
└── NotFound/
    ├── NotFoundPage.tsx
    ├── style.css
    └── __tests__/
        └── NotFoundPage.test.tsx
```

> Skill completa: `Skills/react-component/SKILL.md`
