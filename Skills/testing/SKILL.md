---
name: testing
description: >
  Convenciones para escribir tests con Vitest y Testing Library en Sacré.
  Trigger: al crear un test nuevo, modificar uno existente o agregar cobertura a un componente.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.0.0"
  scope:
    - root
  auto_invoke:
    - "crear test"
    - "escribir test"
    - "agregar tests"
    - "test de componente"
    - "cobertura"
  owner: ignadev
  skill_type: encoded_preference
  risk_level: low
  allowed_tools:
    - read
    - write
    - edit
    - glob
    - grep
    - bash
---

# testing

## Cuando usar

- Escribir o modificar tests de componentes, paginas o stores.
- Decidir como estructurar los tests de un modulo nuevo.
- Revisar si un test existente sigue las convenciones del proyecto.

## Cuando NO usar

- Configurar el entorno de Vitest (eso esta en `vite.config.ts` y `src/setupTests.ts`).

## Reglas criticas

1. **`getByRole` sobre todo** — siempre preferir queries semanticas. El orden correcto es:
   `getByRole` > `getByLabelText` > `getByPlaceholderText` > `getByText` > `getByTestId`.
   Si necesitas `getByTestId`, es una señal de que el HTML no es accesible.

   ```tsx
   // correcto
   screen.getByRole('heading', { name: 'Sacré' })
   screen.getByRole('link', { name: /volver al inicio/i })

   // evitar
   screen.getByText('Sacré')
   screen.getByTestId('heading-sacre')
   ```

2. **Proveer el contexto que el componente necesita** — un componente con `Link` o `useNavigate` necesita `MemoryRouter`. Un componente que lee un store de Zustand necesita el store inicializado.

   ```tsx
   // componente con Link: siempre MemoryRouter en tests
   render(
     <MemoryRouter>
       <NotFoundPage />
     </MemoryRouter>,
   )
   ```

3. **Testear comportamiento, no implementacion** — los tests no deben saber como esta hecho el componente por dentro, solo que hace desde afuera.

   ```tsx
   // correcto: testea lo que el usuario ve/hace
   expect(screen.getByRole('link', { name: /volver/i })).toHaveAttribute('href', '/')

   // prohibido: testea implementacion
   expect(component.state.isVisible).toBe(true)
   ```

4. **Un `describe` por componente, un `it` por comportamiento** — el nombre del `it` debe completar la frase "deberia...".

   ```tsx
   describe('ProductCard', () => {
     it('muestra el nombre del producto', () => { ... })
     it('muestra el precio formateado', () => { ... })
     it('llama a onAddToCart al hacer click en el boton', () => { ... })
   })
   ```

5. **Sin `beforeEach` con setup complejo** — si el setup es largo, extraerlo a una funcion `renderProductCard()` local que devuelva lo que el test necesita. Hace los tests mas legibles y el failure mas obvio.

## Estructura de archivos

```
src/
├── components/
│   └── ProductCard/
│       ├── ProductCard.tsx
│       └── __tests__/
│           └── ProductCard.test.tsx   ← tests del componente
├── pages/
│   └── __tests__/
│       └── HomePage.test.tsx          ← tests de la pagina
└── stores/
    └── __tests__/
        └── useCartStore.test.ts       ← tests del store (sin JSX)
```

## Comandos

```bash
pnpm test           # modo watch (desarrollo)
pnpm test --run     # una sola pasada (CI o pre-commit manual)
```

## Camino simple, no facil

Un test facil verifica que el componente renderiza. Un test simple verifica que el usuario puede hacer lo que necesita hacer. La diferencia importa: el primero no atrapa bugs reales.

## Checklist rapido

- [ ] Usa `getByRole` como primera opcion.
- [ ] Provee el contexto necesario (MemoryRouter, store, etc.).
- [ ] Testea comportamiento visible para el usuario.
- [ ] Un `it` por comportamiento con nombre descriptivo.
- [ ] `pnpm test --run` pasa en verde antes del commit.
