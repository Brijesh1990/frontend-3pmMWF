# What is Hooks in React JS

## Introduction

Hooks are functions that let you "hook into" React state and lifecycle features from functional components. Introduced in React 16.8, hooks enable you to use state and other React features without writing class components. They provide a more direct API to manage component state and side effects.

### Key Benefits of Hooks:
- Use state and React features in functional components
- Better code organization and reusability
- Easier to share logic between components
- Simpler and cleaner code compared to class components
- Better support for TypeScript or javascript

---

## Types of React Hooks

React hooks are divided into three main categories:

### 1. **State Hooks**
Hooks that manage component state and state updates.

#### a) `useState`
Used to add state variables to functional components.

```javascript
const [count, setCount] = useState(0);

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### b) `useReducer`
Alternative to useState for complex state logic. Takes a reducer function and initial state.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);

function Counter() {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
```

---

### 2. **Effect Hooks**
Hooks that handle side effects and lifecycle operations.

#### a) `useEffect`
Used to perform side effects in functional components (data fetching, subscriptions, logging, etc.).

```javascript
useEffect(() => {
  // Side effect code here
  console.log('Component mounted or dependencies changed');

  return () => {
    // Cleanup code (optional)
    console.log('Cleanup');
  };
}, [dependencies]); // Dependency array
```

**Example:**
```javascript
function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []); // Runs once on mount

  return <div>{data && <p>{data.title}</p>}</div>;
}
```

#### b) `useLayoutEffect`
Similar to useEffect but fires synchronously after DOM mutations. Use for DOM measurements and adjustments.

```javascript
useLayoutEffect(() => {
  const rect = elementRef.current.getBoundingClientRect();
  console.log('Width:', rect.width);
}, []);
```

---

### 3. **Context Hooks**
Hooks for working with React Context.

#### a) `useContext`
Access context values without wrapping in Context.Consumer.

```javascript
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <MyComponent />
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const context = useContext(ThemeContext);
  return <div>Theme: {context.theme}</div>;
}
```

---

### 4. **Ref Hooks**
Hooks for accessing DOM elements and persistent values.

#### a) `useRef`
Create a mutable reference that persists across renders without causing re-renders.

```javascript
const inputRef = useRef(null);

function TextInput() {
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
```

#### b) `useImperativeHandle`
Customize the instance value exposed by a ref when using forwardRef.

```javascript
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return <input ref={inputRef} />;
});
```

---

### 5. **Performance Optimization Hooks**
Hooks for optimizing performance.

#### a) `useMemo`
Memoize expensive computations and only recalculate when dependencies change.

```javascript
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]); // Only recalculates when a or b changes
```

**Example:**
```javascript
function MyComponent({ count, theme }) {
  const complexValue = useMemo(() => {
    return Array(1000000).fill(0).map(() => Math.random());
  }, []);

  return <div>{complexValue.length}</div>;
}
```

#### b) `useCallback`
Memoize a callback function and return the same function reference if dependencies haven't changed. Useful for optimizing child components that depend on callback equality.

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Example:**
```javascript
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <Child onClick={handleClick} />;
}
```

#### c) `useTransition` (Experimental)
Manage transitions for updates that don't need urgent rendering.

```javascript
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setData(newValue); // Low priority update
});
```

#### d) `useDeferredValue` (Experimental)
Defer updating a value to allow higher priority updates to finish first.

```javascript
const deferredValue = useDeferredValue(value);
```

---

### 6. **Other Important Hooks**

#### a) `useId`
Generate unique IDs for accessibility and form elements.

```javascript
const id = useId();

function Form() {
  const emailId = useId();
  return (
    <div>
      <label htmlFor={emailId}>Email:</label>
      <input id={emailId} type="email" />
    </div>
  );
}
```

#### b) `useDebugValue`
Add custom labels to hooks in React DevTools for debugging.

```javascript
function useCustomHook(value) {
  useDebugValue(value ? `Active: ${value}` : 'Not active');
  return value;
}
```

---

## Custom Hooks

Create your own hooks by extracting component logic into reusable functions. Custom hooks are JavaScript functions whose names start with "use" and may call other hooks.

```javascript
// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
function App() {
  const { data, loading, error } = useFetch('https://api.example.com/data');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return <div>{data.title}</div>;
}
```

---

## Summary Table

| Hook | Purpose |
|------|---------|
| `useState` | Manage state in functional components |
| `useReducer` | Manage complex state logic |
| `useEffect` | Handle side effects |
| `useLayoutEffect` | Synchronous side effects after DOM |
| `useContext` | Access context values |
| `useRef` | Create mutable references |
| `useImperativeHandle` | Customize ref behavior |
| `useMemo` | Memoize expensive computations |
| `useCallback` | Memoize callback functions |
| `useId` | Generate unique IDs |
| `useDebugValue` | Add debug info to DevTools |
| `useTransition` | Manage non-urgent updates |
| `useDeferredValue` | Defer value updates |

---

## Rules of Hooks

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call hooks from functional components or custom hooks, not regular JavaScript functions
3. **Use the ESLint plugin** - Install and use eslint-plugin-react-hooks to enforce these rules

