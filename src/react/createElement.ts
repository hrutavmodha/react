import { type VNode } from '../types/vnode';

export function createElement(
    type: string | Function,
    props: {
        [key: string]: any,
        children: Array<VNode | string | number>
    }
): VNode {
    if (typeof type === 'function') {
        return type(props);
    }

    const children = Array.isArray(props.children)
        ? props.children
        : [props.children];
    const processedChildren = children
        .flat()
        .map((child: any) => {
            if (
                typeof child === 'string' ||
                typeof child === 'number'
            ) {
                return String(child);
            }
            return child;
        });
    const vdom: VNode = {
        type,
        props: {
            ...props,
            children: processedChildren
        },
        key: props && 'key' in props ? (props as any).key : undefined,
    };
    return vdom;
}
