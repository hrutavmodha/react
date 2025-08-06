import root from '../index'
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
    const path = window.location.pathname
    const view = routes[path]
    root.innerHTML = ''
    root.appendChild(view())
}
window.addEventListener('popstate', () => {
    renderRoute()
})