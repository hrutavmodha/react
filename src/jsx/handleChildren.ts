export default function handleChildren(
    children: any,
    parent: any
): void {
    if (!Array.isArray(children))
        children = [children]
    for (let child of children)
        parent.appendChild(child)
}