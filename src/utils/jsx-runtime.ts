import handleProps from './handleProps'
export function jsx(
    type: any,
    props: any
): HTMLElement {
    if (typeof type === 'function')
        return type({ ...props })
    return handleProps(type, props)
}
export const jsxs = jsx
export function Fragment(props: any) {
    return props.children
}