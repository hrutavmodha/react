import App from './test/App'
import render from './utils/render'
const root = document.getElementById('root') as HTMLDivElement
console.log(App())
render(App(), root)