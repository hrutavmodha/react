export default function List({
    ordered,
    children,
    ...props
}: {
    ordered: boolean
    children: Array<HTMLLIElement>
    [key: string]: any
}): HTMLUListElement |
    HTMLOListElement {
    let list: HTMLUListElement | HTMLOListElement | null = null
    if (ordered === true) {
        list = document.createElement('ol')
    }
    else {
        list = document.createElement('ul')
    }
    for (let child of children) {
        list.appendChild(child)
    }
    for (let key in props) {
        if (key.startsWith('on')) {
            list.addEventListener(key, props[key])
        }
        else {
            list.setAttribute(key, props[key])
        }
    }
    list.style += 'margin: 30px;'
    return list
}