# router/

Configuracion del enrutador. Solo vive aqui la definicion de rutas.

## Reglas

- Usar `createBrowserRouter` — nunca `<BrowserRouter>` ni `<HashRouter>`.
- Cada ruta nueva requiere su pagina en `src/pages/` primero.
- Sin logica de negocio, guards complejos ni fetching en este archivo.
- El `RouterProvider` lo monta `App.tsx`, no este archivo.

## Estructura interna

```
router/
└── index.tsx   ← exporta `router` como named export
```

> Skill completa: `Skills/react-component/SKILL.md`
