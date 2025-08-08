import Heading from '../components/Heading'
import Division from '../components/Division'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { navigate } from '../router/routing'
export default function App() {
    return (
        <Division id='testDiv'>
            <Heading level={1}>Hello World</Heading>
            <Paragraph>Click below button to land anywhere</Paragraph>
            <Button onclick={() => navigate('/home')}>Go Home</Button>
            <Button onclick={() => navigate('/about')}>Go About</Button>
            <Paragraph>Below is basic state example. Click the button below to change the 0's value</Paragraph>
            <Button onclick={() => alert('Hello World')}>Change value</Button>
        </Division>
    )
}