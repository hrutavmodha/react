export default function Script({
    children
}: {
    children: Function
}): HTMLScriptElement {
    const js = document.createElement('script')
    js.textContent = `(${children.toString()})();`
    return js
}