---
name: react-component
description: >
  Convenciones para crear y modificar componentes React en Sacre.
  Trigger: al crear un componente nuevo, modificar uno existente o revisar estructura de un archivo .tsx.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.0.0"
  scope:
    - root
  auto_invoke:
    - "crear componente"
    - "nuevo componente"
    - "modificar componente"
    - "componente react"
    - "pagina nueva"
  owner: ignadev
  skill_type: encoded_preference
  risk_level: low
  allowed_tools:
    - read
    - write
    - edit
    - glob
    - grep
---

# react-component

## Cuando usar

- Crear un componente nuevo en `src/components/` o una pagina en `src/pages/`.
- Revisar si un componente existente sigue las convenciones del proyecto.
- Decidir como dividir responsabilidades entre componentes.

## Cuando NO usar

- Crear o modificar stores de Zustand — usar `Skills/zustand-store/SKILL.md`.
- Crear o modificar tests — usar `Skills/testing/SKILL.md`.

## Reglas criticas

1. **Named export obligatorio** — nunca `export default`. Razon: los default exports pierden el nombre en el bundle y dificultan refactors y mocks en tests.

   ```tsx
   // correcto
   export function ProductCard() { ... }

   // prohibido
   export default function ProductCard() { ... }
   ```

2. **Un componente por archivo** — el nombre del archivo debe coincidir exactamente con el nombre del componente (`ProductCard.tsx` exporta `ProductCard`).

3. **Props tipadas con interface**, nunca `type` inline ni `any`.

   ```tsx
   interface Props {
     name: string
     price: number
     imageUrl?: string
   }

   export function ProductCard({ name, price, imageUrl }: Props) { ... }
   ```

4. **Sin logica de negocio en componentes presentacionales** — si el componente necesita llamar a una API, leer un store o calcular derivados complejos, ese codigo va en el padre (pagina) o en un custom hook.

5. **Sin estilos inline** — usar clases CSS. Los tokens globales viven en `src/index.css`.

## Estructura de carpetas

```
src/
├── components/      ← componentes reutilizables (sin logica de dominio)
│   └── ProductCard/
│       ├── ProductCard.tsx
│       └── __tests__/
│           └── ProductCard.test.tsx
├── pages/           ← una pagina = una ruta del router
│   └── HomePage.tsx
└── router/
    └── index.tsx
```

## Camino simple, no facil

No crear un componente "por si acaso lo uso despues". Un componente nace cuando hay dos lugares que necesitan el mismo JSX. Antes de eso, el codigo vive en la pagina directamente.

## Checklist rapido

- [ ] Named export (no default).
- [ ] Archivo nombrado igual que el componente.
- [ ] Props tipadas con interface.
- [ ] Sin logica de negocio si es presentacional.
- [ ] Sin estilos inline.
- [ ] Tiene test en `__tests__/`.
