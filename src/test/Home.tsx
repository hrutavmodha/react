import Heading from '../components/Heading'
import Division from '../components/Division'
import Paragraph from '../components/Paragraph'
export default function Home() {
    return (
        <Division id='myDiv'>
            <Heading level={1}>Hello World</Heading>
            <Paragraph>This is a paragraph</Paragraph>
        </Division>
    )
}