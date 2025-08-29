import type { VNode } from "src/types/vnode";
import { dispatcher } from "./dispatcher";
export function createRoot(
    rootComponent: () => VNode,
    root: HTMLElement
): void {
    dispatcher.setCurrentApp(rootComponent, root);
}