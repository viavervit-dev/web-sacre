# AGENTS.md — Sacré

Reglas operativas para agentes que trabajen en este repo. Sin ruido: solo lo no obvio.

## Contexto de Sacré

Vale para toda tarea en este repo.

1. **Nombre**: "Sacré" viene del francés, significa "sagrado" y está relacionado con el Sagrado Corazón de Jesús. Lleva siempre tilde en la "é". Los identificadores técnicos (repos, paquetes, clases CSS, claves de almacenamiento) quedan como están.
2. **Qué es**: un apostolado autosostenible. Lo más importante es el propósito del apostolado, no tanto el modelo de negocio (tienda virtual).
3. **Doctrina**: Sacré está alineado en su totalidad con la doctrina de la Iglesia católica.
4. **Dedicación**: toda actividad de Sacré se dedica y se consagra al Sagrado Corazón de Jesús.
5. **Productos**: cada producto está alineado con el propósito de Sacré.
6. **Lenguaje**: el contexto del lenguaje es Ecuador. Ver `Skills/ecuador-copy/SKILL.md`.
7. **Límite**: no se usa ninguna información que vaya en contra del alineamiento de Sacré.

## Stack

- React 19 + TypeScript
- Vite (bundler y dev server)
- React Router DOM 7 — `createBrowserRouter`, no `<BrowserRouter>`
- Zustand 5 (estado global)
- Vitest + Testing Library (tests)
- pnpm (gestor de paquetes)

## Filosofia

Caminos simples, no faciles. Cada decision tiene un "por que" tecnico.
Prohibido cargo-cultear patrones sin entender el problema que resuelven.
El codigo que parece magico es deuda tecnica esperando explotar.

## Fuente de verdad (precedencia)

1. Solicitud explicita del usuario.
2. Este `AGENTS.md`.
3. `README.md`.
4. `Skills/*/SKILL.md`.

Si dos fuentes se contradicen, gana la de mayor precedencia.

## Convenciones obligatorias

1. **Named exports siempre** — prohibido `export default` en componentes, stores y utilities.
2. **Estructura de carpetas fija**: `src/pages/`, `src/components/`, `src/router/`, `src/stores/`.
3. **Un componente por archivo** — si necesita helpers internos, van en el mismo archivo o en `utils/`.
4. **Tests en `__tests__/`** dentro de la carpeta del modulo que testean.
5. **Commits sin scope**, todo en minusculas, tipo valido segun `commitlint.config.cjs`.
6. **Prohibido `style` como tipo de commit** — en Conventional Commits refiere al estilo/formato del codigo, no al CSS. Para cambios visuales usar `refactor` si ajusta implementacion existente o `add` si incorpora una pieza nueva.
7. **Copy para Ecuador** — todo texto visible se escribe en español neutro para Ecuador, sin modismos y sin terminos que choquen con la doctrina catolica. Ver `Skills/ecuador-copy/SKILL.md`.

## Reglas de agentes

1. No inventar ni renombrar carpetas — respetar la estructura existente.
2. No agregar dependencias sin justificacion tecnica explicita y aprobacion del usuario.
3. Verificar `pnpm lint` y `pnpm test --run` antes de proponer un commit.
4. Cada componente nuevo tiene al menos un test antes de cerrar la tarea.
5. Ante la duda entre dos soluciones: elegir la que menos magic tenga, no la mas corta.

## Skills activas

| Skill                              | Cuando activar                              |
| ---------------------------------- | ------------------------------------------- |
| `Skills/react-component/SKILL.md`  | Crear o modificar componentes React         |
| `Skills/testing/SKILL.md`          | Escribir o modificar tests                  |
| `Skills/zustand-store/SKILL.md`    | Crear o modificar stores de Zustand         |
| `Skills/commits/SKILL.md`          | Escribir o revisar mensajes de commit       |
| `Skills/pull-request/SKILL.md`     | Abrir o revisar un Pull Request en GitHub   |
| `Skills/ecuador-copy/SKILL.md`     | Escribir, cambiar o revisar cualquier texto visible |
| `Skills/skill-creator/SKILL.md`    | Crear una skill nueva para el proyecto      |
| `Skills/skill-sync/SKILL.md`       | Auditar y sincronizar skills con AGENTS.md  |
