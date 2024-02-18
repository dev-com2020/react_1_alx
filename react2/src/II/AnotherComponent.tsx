import { useEffect, useState } from "react";

// export function AnotherComponent() {
//     function handleClick() {
//         useEffect(() => {
//             console.log("Jakiś efekt")
//         })
//     }
//     return <button onClick={handleClick}>Efekt</button>
// }


export function AnotherComponent() {
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (clicked) {
            console.log("Jakiś efekt")
        }
    }, [clicked])

    function handleClick() {
        setClicked(true)
    }
    return <button onClick={handleClick}>Efekt</button>
}