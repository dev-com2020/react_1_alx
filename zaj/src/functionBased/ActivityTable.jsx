import ActivityCategory from "./ActivityCategory";
import ActivityRow from "./ActivityRow";

export default function ActivityTable(){
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Duration</th>
                <th>Available</th>
            </thead>
        <tbody>
            <ActivityCategory/>
            <ActivityRow/>
        </tbody>
        </table>
    )
}