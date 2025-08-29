import { useState } from "@react/hooks";
export default function Rubber() { 
    const [rubber, setRubber] = useState('Hrutav Modha')
    return (
        <div>
            <p>{rubber}</p>
            <button onClick={() => setRubber('')}>Rub above phrase</button>
        </div>
    )
}