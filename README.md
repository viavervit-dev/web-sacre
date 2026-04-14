# Sacre — Tienda de Artículos Religiosos

Frontend de la tienda online **Sacre**, especializada en la venta de artículos de devoción y regalo: medallitas, rosarios, crucifijos, estampas y más.

## Stack

- **React** — librería de UI
- **React Router DOM** — navegación SPA
- **Vite** — bundler y dev server
- **TypeScript** — tipado estático
- **pnpm** — gestor de paquetes

## Requisitos

- Node.js >= 18
- pnpm >= 8

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Preview del build

```bash
pnpm preview
```

## Convención de commits

El proyecto usa [commitlint](https://commitlint.js.org/) con las siguientes reglas:

| Tipo       | Uso                                         |
| ---------- | ------------------------------------------- |
| `add`      | Nueva funcionalidad o archivo               |
| `wip`      | Trabajo en progreso                         |
| `perf`     | Mejoras de performance                      |
| `ci`       | Cambios en integración continua             |
| `docs`     | Documentación                               |
| `refactor` | Refactorización sin cambio de funcionalidad |
| `style`    | Estilos, formato, sin cambio de lógica      |
| `test`     | Tests                                       |
| `chore`    | Tareas de mantenimiento                     |
| `build`    | Sistema de build o dependencias             |
| `revert`   | Revertir un commit anterior                 |

Formato: `tipo: descripción en minúsculas`

## Estructura del proyecto

```
sacre/
├── src/
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── vite.config.ts
└── package.json
```
