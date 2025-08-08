let routes: { [key: string]: () => HTMLElement } = {}
export function setRoutes(
    newRoutes: typeof routes
): void {
    routes = newRoutes
}
export function navigate(
    path: string
): void {
    window.history.pushState({}, '', path)
    renderRoute()
}
function renderRoute(
): void {
    console.log('RenderRoute called')
    let root = document.getElementById('root') as HTMLDivElement
    const path = window.location.pathname
    const view = routes[path]
    console.log('Function to be parsed: ', view)
    root.innerHTML = ''
    root.appendChild(view())
}
window.addEventListener('popstate', () => {
    renderRoute()
})