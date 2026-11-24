# Sacré — Tienda de Artículos Religiosos

Frontend de la tienda online **Sacré**, especializada en la venta de artículos de devoción y regalo: medallitas, rosarios, crucifijos, estampas y más.

## Stack

- **React 19** — librería de UI
- **React Router DOM 7** — navegación SPA con `createBrowserRouter`
- **Zustand 5** — estado global
- **Vite** — bundler y dev server
- **TypeScript** — tipado estático
- **Vitest + Testing Library** — tests
- **pnpm** — gestor de paquetes

## Requisitos

- Node.js >= 18
- pnpm >= 8

## Instalación

```bash
pnpm install
```

## Comandos

```bash
pnpm dev          # servidor de desarrollo
pnpm build        # build de producción
pnpm preview      # preview del build
pnpm lint         # eslint
pnpm test         # vitest en modo watch
pnpm test --run   # vitest una sola pasada (CI)
```

## Estructura del proyecto

```
sacre/
├── src/
│   ├── api/                  # funciones HTTP — sin estado, sin side effects
│   │   └── AGENTS.md
│   ├── assets/               # imágenes, íconos y recursos estáticos
│   ├── components/           # componentes React reutilizables
│   │   └── AGENTS.md
│   ├── pages/                # una página = una ruta del router
│   │   └── AGENTS.md
│   ├── router/               # configuración de rutas con createBrowserRouter
│   │   └── AGENTS.md
│   ├── stores/               # stores de Zustand, uno por dominio
│   │   └── AGENTS.md
│   ├── App.tsx               # monta el RouterProvider
│   ├── index.css             # tokens globales de estilos
│   ├── main.tsx              # entry point
│   └── setupTests.ts         # setup de Vitest y jest-dom
├── Skills/                   # guías operativas para agentes IA
│   ├── commits/
│   ├── pull-request/
│   ├── react-component/
│   ├── skill-creator/
│   ├── skill-sync/
│   ├── testing/
│   └── zustand-store/
├── AGENTS.md                 # reglas operativas del proyecto para agentes
├── commitlint.config.cjs     # reglas de formato de commits
├── vite.config.ts
└── package.json
```

## Capas de la aplicación

El proyecto sigue una separación estricta de responsabilidades en tres capas:

```
[ Componente / Página ]
        │
        │  lee estado con selectores
        ▼
  [ Zustand Store ]
        │
        │  llama funciones de
        ▼
     [ src/api/ ]
        │
        │  fetch a
        ▼
    [ API externa ]
```

- **Los componentes** no saben de dónde vienen los datos. Solo leen el store y llaman acciones.
- **Los stores** coordinan el estado. Sus acciones llaman a `src/api/`, nunca hacen `fetch` directamente.
- **`src/api/`** es la única capa que habla con el servidor. Funciones puras que reciben parámetros y devuelven tipos TypeScript.

## Convención de commits

El proyecto usa [commitlint](https://commitlint.js.org/) con husky. Formato: `tipo: descripción en minúsculas` (sin scope).

| Tipo       | Uso                                           |
| ---------- | --------------------------------------------- |
| `add`      | Nueva funcionalidad o archivo                 |
| `wip`      | Trabajo en progreso (nunca llega a `main`)    |
| `perf`     | Mejoras de performance                        |
| `ci`       | Cambios en integración continua               |
| `docs`     | Documentación                                 |
| `refactor` | Refactorización sin cambio de comportamiento  |
| `style`    | Estilos, formato, sin cambio de lógica        |
| `test`     | Tests                                         |
| `chore`    | Mantenimiento, dependencias, tooling          |
| `build`    | Cambios en vite, tsconfig o scripts de build  |
| `revert`   | Revertir un commit anterior                   |

## Agentes y Skills

El proyecto incluye un sistema de guías operativas para agentes IA en `Skills/`. Cada skill define cuándo activarse, reglas críticas y un checklist de cierre.

| Skill                    | Propósito                                      |
| ------------------------ | ---------------------------------------------- |
| `react-component`        | Crear y estructurar componentes React          |
| `testing`                | Escribir tests con Vitest y Testing Library    |
| `zustand-store`          | Crear stores y separar la capa de API          |
| `commits`                | Escribir mensajes de commit correctos          |
| `pull-request`           | Abrir y revisar Pull Requests en GitHub        |
| `skill-creator`          | Crear nuevas skills para el proyecto           |
| `skill-sync`             | Auditar coherencia entre Skills y AGENTS.md    |

Las reglas operativas globales del proyecto viven en `AGENTS.md` en la raíz.
Cada carpeta principal de `src/` tiene su propio `AGENTS.md` con las reglas específicas de esa capa.
