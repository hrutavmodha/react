import { type VNode } from "../types/vnode";
import { render } from "../react-dom/render";

let componentStates: any[][] = [];
let currentStateIndex: number = 0;
let currentApp: (() => VNode) | null = null;
let currentContainer: HTMLElement | null = null;

export const dispatcher = {
    use<T>(hook: (stateIndex: number, componentStates: any[][]) => T): T {
        const stateIndex = currentStateIndex;
        const result = hook(stateIndex, componentStates);
        currentStateIndex++;
        return result;
    },
    setCurrentApp(app: () => VNode, container: HTMLElement) {
        currentApp = app;
        currentContainer = container;
        currentStateIndex = 0;
    },
    scheduleUpdate() {
        currentStateIndex = 0;
        if (currentApp && currentContainer) {
            const newVNode = currentApp();
            render(newVNode, currentContainer, true);
        }
    },
    getComponentState(index: number) {
        return componentStates[index];
    },
    setComponentState(index: number, value: any) {
        componentStates[index] = value;
    },
};


