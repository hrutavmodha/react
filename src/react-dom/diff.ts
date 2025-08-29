import { type VNode } from "../types/vnode";

export function diff(parentDom: HTMLElement, newVNode?: VNode | string, oldVNode?: VNode | string, index: number = 0) {
    const oldDom = parentDom.childNodes[index];

    if (typeof newVNode === 'string' && typeof oldVNode === 'string') {
        if (newVNode !== oldVNode) {
            (oldDom as Text).data = newVNode;
        }
        return;
    }

    if(newVNode === undefined || oldVNode === undefined) {
        return;
    }

    if ((newVNode as VNode).type) {
        const newLength = (newVNode as VNode).props.children?.length || 0;
        const oldLength = (oldVNode as VNode).props.children?.length || 0;
        for (let i = 0; i < newLength || i < oldLength; i++) {
            diff(
                oldDom as HTMLElement,
                ((newVNode as VNode).props.children as (VNode | string)[])?.[i],
                ((oldVNode as VNode).props.children as (VNode | string)[])?.[i],
                i
            );
        }
    }
}
