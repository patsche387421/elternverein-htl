---
name: modular-ui-system
description: Build modular, event-driven React UI components decoupled from scene logic. Provides SceneAdapter interfaces for external assets (Spline 3D), SignalBus for cross-component communication, and patterns for zero-polling, pure event-based reactivity.
---

# Modular UI System Skill

## Core Principles

1. **Event-Driven Only** – No `setInterval`, no `requestAnimationFrame` polling. All state changes are triggered by DOM events, React synthetic events, or custom `EventTarget` signals.
2. **Scene Decoupling** – UI logic never imports scene-specific code directly. A `SceneAdapter` interface normalizes all external scene outputs (Spline, Three.js, R3F) into plain JS events.
3. **Signal Bus** – A lightweight pub/sub bus (`SignalBus`) allows nodes to communicate without prop-drilling or global state bloat.
4. **Composable Nodes** – Every UI component is a "node" with defined **inputs** (props/events) and **outputs** (callbacks/dispatched signals).

---

## Component Architecture

```
[Input/Control Layer]
  ├── UserInputNode      – Sliders, color pickers, buttons
  ├── SceneEventNode     – Listens to Spline/3D scene events
  └── DataSourceNode     – API calls, JSON data feeds

[Logic/Computation Layer]
  ├── SignalBus          – Central event dispatcher
  ├── TransformNode      – Data transformations (hex→HSL, etc.)
  └── FilterNode         – Conditional routing (switch-based, no if-chains)

[Output/Visual Layer]
  ├── CSSVariableNode    – Writes to document.documentElement CSS vars
  ├── SplineSceneNode    – Controls Spline scene via SplineApp ref
  └── AnimationNode      – Triggers CSS animations on signal receipt
```

---

## SignalBus

A singleton EventTarget used across all nodes:

```typescript
// src/lib/SignalBus.ts
export const SignalBus = new EventTarget();

export function emit<T>(eventName: string, detail: T) {
  SignalBus.dispatchEvent(new CustomEvent(eventName, { detail }));
}

export function on<T>(
  eventName: string,
  handler: (detail: T) => void,
  ref: AbortSignal
) {
  SignalBus.addEventListener(
    eventName,
    (e) => handler((e as CustomEvent<T>).detail),
    { signal: ref }
  );
}
```

### Usage in a component:
```typescript
import { emit, on } from '@/lib/SignalBus';

// Emitting a signal (Output Node)
emit('theme:primaryColor', { hex: '#2563eb', hsl: '217 91% 60%' });

// Listening to a signal (Input Node)
useEffect(() => {
  const controller = new AbortController();
  on<{ hex: string }>('theme:primaryColor', ({ hex }) => {
    console.log('New color:', hex);
  }, controller.signal);
  return () => controller.abort(); // auto-cleanup
}, []);
```

---

## SceneAdapter Interface

Normalizes events from any external 3D scene into plain JS CustomEvents.

```typescript
// src/lib/SceneAdapter.ts

export interface SceneEvent {
  type: 'click' | 'hover' | 'load' | 'error';
  objectName: string;
  data?: Record<string, unknown>;
}

export interface SceneAdapter {
  /** Called once the scene is fully loaded */
  onLoad: () => void;
  /** Called on user interaction with a named scene object */
  onInteract: (event: SceneEvent) => void;
  /** Called when the scene needs fresh external data */
  onDataRequest: (key: string) => Promise<unknown>;
}

/**
 * Default adapter that emits to SignalBus.
 * Use this to connect a Spline scene to the rest of the UI.
 */
export function createSignalBusAdapter(): SceneAdapter {
  return {
    onLoad: () => emit('scene:loaded', {}),
    onInteract: (event) => emit(`scene:interact:${event.objectName}`, event),
    onDataRequest: async (key) => {
      emit('scene:dataRequest', { key });
      return undefined;
    },
  };
}
```

---

## FilterNode Pattern (switch-based routing)

Replace all `if/else if` chains for routing logic with switch statements:

```typescript
// ❌ Anti-pattern: if-chain
function getNodeStyle(status: string) {
  if (status === 'active') return 'bg-green-500';
  else if (status === 'pending') return 'bg-yellow-500';
  else if (status === 'error') return 'bg-red-500';
  else return 'bg-gray-300';
}

// ✅ Correct: switch-based FilterNode
function getNodeStyle(status: 'active' | 'pending' | 'error' | 'idle') {
  switch (status) {
    case 'active':  return 'bg-success text-success-foreground';
    case 'pending': return 'bg-warning text-warning-foreground';
    case 'error':   return 'bg-destructive text-destructive-foreground';
    default:        return 'bg-border text-foreground/50';
  }
}
```

---

## Anti-Patterns to Avoid

| ❌ Anti-Pattern | ✅ Event-Driven Alternative |
|---|---|
| `setInterval(() => syncUI(), 100)` | `input` / `change` event listeners |
| `useEffect` without cleanup | `AbortController` signal for cleanup |
| Prop-drilling 4+ levels deep | `SignalBus.emit()` + `SignalBus.on()` |
| Direct 3D lib imports in UI components | `SceneAdapter` interface |
| Multiple nested `if/else` for routing | `switch` statement or lookup map |
| `document.querySelector` in React | `useRef` + `ref.current` |

---

## Example Files

- `examples/spline-integration.tsx` – Full Spline scene integration with SceneAdapter
- `examples/signal-bus-demo.tsx` – Cross-component communication without prop-drilling
- `examples/theme-node.tsx` – CSSVariableNode for live theming

---

## Implementation Checklist

When adding a new UI node:

- [ ] Define its **inputs** (props or signal subscriptions)
- [ ] Define its **outputs** (callbacks or emitted signals)
- [ ] Use `useCallback` for all event handlers
- [ ] Use `AbortController` for all `addEventListener` cleanup
- [ ] No `setInterval` or polling
- [ ] Use switch-statements for status/type routing
- [ ] If interfacing with a scene: use `SceneAdapter`, never import scene libs directly
