import handleChildren from './handleChildren'
export default function handleProps(
    type: HTMLElement,
    props: Array<any>
) {
    const tag = document.createElement(String(type))
    for (let key in props) {
        if (key !== 'children')
            tag.setAttribute(key, props[key])
        else
            handleChildren(props[key], tag)
    }
    return tag
}