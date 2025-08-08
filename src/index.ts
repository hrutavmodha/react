import { setRoutes } from './router/routing'
import About from './test/About'
import App from './test/App'
import Home from './test/Home'
import render from './utils/render'
const root = document.getElementById('root') as HTMLDivElement
render(App(), root)
setRoutes({
    '/': App,
    '/home': Home,
    '/about': About
})