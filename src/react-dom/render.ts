import { type VNode } from '../types/vnode';
import { createDom } from './createDom';
import { diff } from './diff';

let oldVNode: VNode | null = null;

export function render(
    vnode: VNode,
    container: HTMLElement | null = null,
    clear: boolean = false
): void {
    if (clear && container) {
        if (oldVNode) {
            diff(container, vnode, oldVNode);
        }
        oldVNode = vnode;
        return;
    }

    const dom = createDom(vnode);

    if (container) {
        container.appendChild(dom);
    }
    oldVNode = vnode;
}
