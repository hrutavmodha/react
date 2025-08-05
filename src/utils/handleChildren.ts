export default function handleChildren(
    children: Array<HTMLElement>,
    parent: any
): void {
    for (let child of children)
        parent.appendChild(child)
}