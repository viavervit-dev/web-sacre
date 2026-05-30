---
name: zustand-store
description: >
  Convenciones para crear y modificar stores de Zustand en Sacré.
  Trigger: al crear un store nuevo, modificar uno existente o decidir si un estado debe ser global o local.
license: Apache-2.0
metadata:
  author: ignadev
  version: "1.1.0"
  scope:
    - root
  auto_invoke:
    - "crear store"
    - "nuevo store"
    - "estado global"
    - "zustand"
    - "store de"
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

# zustand-store

## Cuando usar

- Crear un store de Zustand para estado compartido entre multiples componentes o paginas.
- Modificar un store existente.
- Decidir si un estado debe ser global (Zustand) o local (`useState`).

## Cuando NO usar

- Estado que solo vive en un componente — usar `useState`.
- Estado derivado de otro estado — usar una variable calculada dentro del componente, no el store.
- Formularios — usar estado local o una libreria de forms, no Zustand.

## Reglas criticas

1. **Un store por dominio** — cada store maneja una sola area de responsabilidad. Ejemplo: `useCartStore`, `useProductStore`, `useAuthStore`. No hay un `useGlobalStore` que lo tiene todo.

2. **Named export obligatorio** — igual que los componentes.

   ```ts
   // correcto
   export const useCartStore = create<CartState>()(...)

   // prohibido
   export default create<CartState>()(...)
   ```

3. **TypeScript interface para el estado + acciones juntos** — el tipo define exactamente que tiene el store.

   ```ts
   interface CartState {
     items: CartItem[]
     addItem: (item: CartItem) => void
     removeItem: (id: string) => void
     clearCart: () => void
   }
   ```

4. **Acciones dentro del store, no afuera** — las funciones que modifican el estado viven en el mismo objeto `create`. No hay funciones sueltas que llamen a `setState`.

   ```ts
   export const useCartStore = create<CartState>()((set) => ({
     items: [],
     addItem: (item) => set((state) => ({ items: [...state.items, item] })),
     removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
     clearCart: () => set({ items: [] }),
   }))
   ```

5. **Selectores para leer estado** — los componentes deben suscribirse solo a lo que usan, no al store entero.

   ```tsx
   // correcto: re-renderiza solo cuando items cambia
   const items = useCartStore((state) => state.items)

   // evitar: re-renderiza ante cualquier cambio del store
   const store = useCartStore()
   ```

6. **Las llamadas a API nunca van en componentes** — un componente no sabe de donde vienen los datos, solo los usa. Las peticiones HTTP viven en `src/api/`, y las acciones del store las invocan. El componente llama a la accion del store, punto.

   ```ts
   // src/api/products.api.ts
   export async function fetchProducts(): Promise<Product[]> {
     const res = await fetch('/api/products')
     return res.json()
   }
   ```

   ```ts
   // src/stores/useProductStore.ts
   import { fetchProducts } from '../api/products.api'

   interface ProductState {
     products: Product[]
     isLoading: boolean
     load: () => Promise<void>
   }

   export const useProductStore = create<ProductState>()((set) => ({
     products: [],
     isLoading: false,
     load: async () => {
       set({ isLoading: true })
       const products = await fetchProducts()
       set({ products, isLoading: false })
     },
   }))
   ```

   ```tsx
   // src/components/ProductList/ProductList.tsx
   export function ProductList() {
     const products = useProductStore((state) => state.products)
     const load = useProductStore((state) => state.load)
     // el componente no sabe nada de fetch ni de URLs
   }
   ```

## Estructura de archivos

```
src/
├── api/
│   └── products.api.ts          ← peticiones HTTP, sin estado
└── stores/
    ├── useProductStore.ts        ← consume api/, maneja estado
    └── __tests__/
        └── useProductStore.test.ts
```

## Camino simple, no facil

Antes de crear un store, preguntarse: ¿dos componentes diferentes necesitan leer este estado al mismo tiempo? Si la respuesta es no, el estado va en `useState` local. Zustand no es gratis — agrega una fuente de verdad externa que hay que mantener sincronizada.

## Checklist rapido

- [ ] El store maneja un solo dominio.
- [ ] Named export (no default).
- [ ] Interface TypeScript con estado y acciones.
- [ ] Acciones dentro del `create`, no afuera.
- [ ] Los componentes usan selectores, no el store entero.
- [ ] Archivo en `src/stores/` con nombre `use[Dominio]Store.ts`.
- [ ] Las llamadas HTTP estan en `src/api/`, no en el store ni en componentes.
- [ ] Tiene test en `src/stores/__tests__/`.
