export default function ActivityCategory(props) {
    console.log("PROPS", props)
    return (
        <tr>
            <td>
                {props.category}
            </td>
        </tr>
    )
}