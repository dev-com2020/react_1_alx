import { useState } from "react"

export default function ActivityRow({ activity }) {
    const [showDetails, toogleShowDetails] = useState(false)
    return (
        <tr>
            <td>{activity.name}</td>
            {
                showDetails ?
                    <>
                        <td> {activity.duration} h</td>
                        <td> {activity.done ? 'Done' : 'Not started'} </td>
                    </> :
                    <>
                        <td>?</td>
                        <td>?</td>
                    </>
            }
            <td>
                <button onClick={() => toogleShowDetails(!showDetails)}>
                    {showDetails ? 'Hide': 'Show'}
                    </button>
            </td>
        </tr>
    )
}