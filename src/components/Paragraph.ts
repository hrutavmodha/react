export default function Paragraph({
    children,
    ...props
}: {
    children: string | number
    [key: string]: any
}) {
    const paragraph = document.createElement('p')
    paragraph.textContent = String(children)
    for (let key in props) {
        if (key.startsWith('on'))
            paragraph.addEventListener(key.substring(2), props[key])
        else
            paragraph.setAttribute(key, props[key])
    }
    return paragraph
}