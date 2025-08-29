import { type VNode } from '../types/vnode';

export function createDom(vnode: VNode | string): HTMLElement | Text {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }

    const element = document.createElement(vnode.type as string);

    for (const key in vnode.props) {
        if (key === 'children') {
            vnode.props.children?.forEach(child => {
                const childDom = createDom(child);
                if (typeof child !== 'string') {
                    (child as VNode).dom = childDom;
                }
                element.appendChild(childDom);
            });
        } else if (key === 'className') {
            element.setAttribute('class', vnode.props[key]);
        } else if (key === 'style' && typeof vnode.props[key] === 'object') {
            Object.assign(element.style, vnode.props[key]);
        } else if (key.startsWith('on') && typeof vnode.props[key] === 'function') {
            const eventName = key.toLowerCase().substring(2);
            element.addEventListener(eventName, vnode.props[key]);
        } else {
            element.setAttribute(key, vnode.props[key]);
        }
    }

    vnode.dom = element;
    return element;
}
