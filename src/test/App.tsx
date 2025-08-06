import Heading from '../components/Heading'
import Division from '../components/Division'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { navigate } from '../router/routing'
export default function App() {
    return (
        <Division id='testDiv'>
            <Heading level={1}>Hello World</Heading>
            <Paragraph>Click below button to land home</Paragraph>
            <Button onclick={() => navigate('/home')}>Click me</Button>
        </Division>
    )
}