import ActivityCategory from "./ActivityCategory";
import ActivityRow from "./ActivityRow";

export default function ActivityTable(){

    const activity = {
        name: "Swimming",
        duration:5,
        done: false
    }
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Duration</th>
                <th>Available</th>
            </thead>
        <tbody>
            <ActivityCategory category='Art'/>
            <ActivityRow activity={activity}/>

            <ActivityCategory category='Sport'/>
            <ActivityRow activity={activity}/>
            <ActivityRow activity={activity}/>
        </tbody>
        </table>
    )
}