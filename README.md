# React Hooks Practice

React Hooks are functions that let function components use React features such as state, context, refs, and effects. Hook names begin with `use`.

## Ten React Hooks

1. **`useState`** — Adds local state to a component and provides a setter to update it.
2. **`useEffect`** — Synchronizes a component with external systems, such as APIs, subscriptions, or the browser DOM.
3. **`useContext`** — Reads a value from a context provider without passing props through every level.
4. **`useRef`** — Keeps a mutable value between renders or provides a reference to a DOM element.
5. **`useReducer`** — Manages state with a reducer function, useful when updates involve more complex logic.
6. **`useCallback`** — Caches a function between renders until its dependencies change.
7. **`useMemo`** — Caches a calculated value between renders until its dependencies change.
8. **`useLayoutEffect`** — Runs an effect after DOM updates but before the browser paints; use it when an update must happen before paint.
9. **`useImperativeHandle`** — Customizes the values a component exposes through a ref.
10. **`useDebugValue`** — Adds a label for a custom Hook in React DevTools.

## Rules of Hooks

- Call Hooks at the top level of a function component or custom Hook, not inside loops, conditions, or nested functions.
- Call Hooks only from React function components or custom Hooks.
