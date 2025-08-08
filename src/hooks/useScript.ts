export default function useScript({
    src,
    ...props
}: {
    src: string
    [key: string]: any
}): HTMLScriptElement {
    const js = document.createElement('script')
    js.src = src
    for (let key in props) {
        js.setAttribute(key, props[key])
    }
    return js
}