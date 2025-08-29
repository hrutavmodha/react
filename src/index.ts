import { render } from '@react-dom/render';
import App from './example/App';
import { createRoot } from '@react/createRoot';
const appRoot = document.getElementById('root') as HTMLDivElement;
createRoot(App, appRoot);
render(App(), appRoot);