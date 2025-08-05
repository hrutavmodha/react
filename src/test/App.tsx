import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
export default function App() {
    return (
        <div class='testClass'>
            <Heading level={1} id='myHeading'>Hello World</Heading>
            <Paragraph class='awesome'>This is test paragraph</Paragraph>
            <Paragraph>Try editing App.tsx inside src/test folder to view changes</Paragraph>
        </div>
    )
}