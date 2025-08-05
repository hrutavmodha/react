export default function render(
    element: HTMLElement,
    parent?: HTMLElement
): void {
    console.log('Received element:', element)
    if (parent)
        parent.appendChild(element)
    else
        document.body.appendChild(element)
}