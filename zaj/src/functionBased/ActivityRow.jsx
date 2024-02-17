export default function ActivityRow({ activity }) {
    return (
        <tr>
            <td>{activity.name}</td>
            <td> {activity.duration} h</td>
            <td> {activity.done ? 'Done': 'Not started'} </td>
            <td>
                <button>Show Details</button>
            </td>
        </tr>
    )
}