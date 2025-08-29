# Custom React Implementation

This project is a custom implementation of a React-like library, built from scratch using TypeScript and Vite. It aims to replicate core React functionalities such as component-based UI, virtual DOM, and basic hooks (`useState`, `useEffect`).

## Features

-   **Component-Based Architecture**: Build UIs using reusable components.
-   **Virtual DOM**: Efficiently updates the actual DOM by diffing virtual DOM trees.
-   **Basic Hooks**: Includes implementations of `useState` for managing component state and `useEffect` for side effects.
-   **JSX Support**: Write UI using JSX syntax, which is transpiled by Vite.
-   **Modular Structure**: Core functionalities are separated into `@react` and `@react-dom` modules.

## Project Structure

```
.
├───.gitignore
├───index.html                # Main HTML file
├───package.json              # Project metadata and scripts
├───tsconfig.json             # TypeScript configuration
├───vite.config.ts            # Vite build configuration
├───src/
│   ├───index.ts              # Main entry point of the application
│   ├───vite-env.d.ts
│   ├───example/              # Example components demonstrating library usage
│   │   ├───App.tsx           # Root example component
│   │   ├───Counter.tsx       # Example component using useState
│   │   ├───Home.tsx
│   │   └───Rubber.tsx        # Example component using useEffect
│   ├───react/                # Core React-like functionalities
│   │   ├───createElement.ts  # Function to create VNodes from JSX
│   │   ├───createRoot.ts     # Function to create a root for rendering
│   │   ├───dispatcher.ts     # Manages hook dispatching
│   │   ├───hooks.ts          # Exports hooks (useState, useEffect)
│   │   ├───jsx-runtime.ts    # JSX runtime for transpilation
│   │   └───hooks/
│   │       ├───useEffect.ts  # useEffect hook implementation
│   │       └───useState.ts   # useState hook implementation
│   ├───react-dom/            # DOM rendering functionalities
│   │   ├───createDom.ts      # Creates actual DOM elements from VNodes
│   │   ├───diff.ts           # Diffs VNodes and updates DOM
│   │   └───render.ts         # Renders VNodes to the DOM
│   └───types/
│       ├───jsx.d.ts          # TypeScript type definitions for JSX
│       └───vnode.ts          # TypeScript type definitions for Virtual Nodes
└───node_modules/             # Project dependencies
```

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hrutavmodha/react.git
    cd react
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server with Vite:

```bash
npm run dev
# or
yarn dev
```

This will typically start the server at `http://localhost:5173` (or another available port). Open your browser to this address to see the example application running.

### Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

This will compile the project into the `dist` directory, ready for deployment.

## How it Works (Brief Overview)

This project implements a simplified version of React's core principles:

-   **`createElement`**: When you write JSX, Vite transpiles it into calls to `createElement` (defined in `src/react/createElement.ts`). This function returns a "Virtual Node" (VNode) object, which is a plain JavaScript object describing the UI element.
-   **`render`**: The `render` function (in `src/react-dom/render.ts`) takes a VNode and a DOM container. It then uses `createDom` to recursively build actual DOM elements from the VNode tree and appends them to the container.
-   **`diff`**: When state or props change, a new VNode tree is generated. The `diff` function (in `src/react-dom/diff.ts`) compares the new VNode tree with the previous one. It identifies the minimal changes required to update the real DOM, optimizing performance.
-   **Hooks (`useState`, `useEffect`)**: These functions (implemented in `src/react/hooks/`) provide a way to add state and side effects to functional components. They leverage a "dispatcher" mechanism to manage their state and effects across renders.
